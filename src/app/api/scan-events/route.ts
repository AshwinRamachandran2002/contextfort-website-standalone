import { NextResponse } from "next/server";
import { createClient, createServiceClient } from "@/lib/supabase/server";

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

    // Use service client to bypass RLS on scan_events
    const serviceClient = await createServiceClient();
    const { data: events, error } = await serviceClient
      .from("scan_events")
      .select("id, skill_name, skill_path, file_count, result_suspicious, haiku_reason, skill_files, event_type, scanned_at")
      .eq("user_id", user.id)
      .neq("skill_name", "__session_start__")
      .order("scanned_at", { ascending: false })
      .limit(50);

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch scan events" },
        { status: 500 }
      );
    }

    return NextResponse.json({ events: events ?? [] });
  } catch (error) {
    console.error("Scan events error:", error);
    return NextResponse.json(
      { error: "Failed to fetch scan events" },
      { status: 500 }
    );
  }
}
