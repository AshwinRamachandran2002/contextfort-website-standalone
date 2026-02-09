import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { generateApiKey } from "@/lib/api-keys";

export async function POST() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check subscription status
    const { data: profile } = await supabase
      .from("profiles")
      .select("subscription_status")
      .eq("id", user.id)
      .single();

    if (profile?.subscription_status !== "active") {
      return NextResponse.json(
        { error: "Active subscription required" },
        { status: 403 }
      );
    }

    // Deactivate existing active keys
    await supabase
      .from("api_keys")
      .update({ is_active: false, revoked_at: new Date().toISOString() })
      .eq("user_id", user.id)
      .eq("is_active", true);

    // Generate new key
    const { raw, hash, prefix } = generateApiKey();

    const { error: insertError } = await supabase.from("api_keys").insert({
      user_id: user.id,
      key_hash: hash,
      key_prefix: prefix,
      name: "Default",
      is_active: true,
    });

    if (insertError) {
      console.error("Insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to create API key" },
        { status: 500 }
      );
    }

    return NextResponse.json({ key: raw, prefix });
  } catch (error) {
    console.error("Generate key error:", error);
    return NextResponse.json(
      { error: "Failed to generate API key" },
      { status: 500 }
    );
  }
}
