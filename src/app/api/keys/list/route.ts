import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: keys, error } = await supabase
      .from("api_keys")
      .select("id, key_prefix, name, is_active, created_at, revoked_at, last_used_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch keys" },
        { status: 500 }
      );
    }

    return NextResponse.json({ keys: keys ?? [] });
  } catch (error) {
    console.error("List keys error:", error);
    return NextResponse.json(
      { error: "Failed to list keys" },
      { status: 500 }
    );
  }
}
