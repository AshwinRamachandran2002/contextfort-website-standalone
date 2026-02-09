import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { keyId } = await request.json();

    if (!keyId) {
      return NextResponse.json(
        { error: "Key ID required" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("api_keys")
      .update({ is_active: false, revoked_at: new Date().toISOString() })
      .eq("id", keyId)
      .eq("user_id", user.id);

    if (error) {
      return NextResponse.json(
        { error: "Failed to revoke key" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Revoke key error:", error);
    return NextResponse.json(
      { error: "Failed to revoke key" },
      { status: 500 }
    );
  }
}
