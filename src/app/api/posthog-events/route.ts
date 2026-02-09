import { NextResponse } from "next/server";
import { createClient, createServiceClient } from "@/lib/supabase/server";

const POSTHOG_API_KEY = process.env.POSTHOG_PERSONAL_API_KEY!;
const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID!;

async function queryPostHog(hogql: string) {
  const res = await fetch(
    `https://us.posthog.com/api/projects/${POSTHOG_PROJECT_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${POSTHOG_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: { kind: "HogQLQuery", query: hogql },
      }),
    }
  );

  if (!res.ok) {
    console.error("PostHog query error:", await res.text());
    return [];
  }

  const data = await res.json();
  return data.results || [];
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type"); // 'bash' or 'prompt_injection'

    if (!type || !["bash", "prompt_injection"].includes(type)) {
      return NextResponse.json({ error: "Invalid type param" }, { status: 400 });
    }

    // Auth check
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's install_ids from scan_events
    const serviceClient = await createServiceClient();
    const { data: installRows } = await serviceClient
      .from("scan_events")
      .select("install_id")
      .eq("user_id", user.id)
      .not("install_id", "is", null);

    if (!installRows || installRows.length === 0) {
      return NextResponse.json({ events: [] });
    }

    const installIds = [...new Set(installRows.map((r) => r.install_id))];
    const idList = installIds.map((id) => `'${id}'`).join(", ");

    if (type === "bash") {
      // Bash guard: command_blocked where blocker = 'tirith'
      const rows = await queryPostHog(`
        SELECT timestamp, properties.blocker as blocker, properties.reason as reason
        FROM events
        WHERE event = 'command_blocked'
        AND properties.blocker = 'tirith'
        AND distinct_id IN (${idList})
        ORDER BY timestamp DESC
        LIMIT 50
      `);

      const events = rows.map((row: string[]) => ({
        timestamp: row[0],
        type: "command_blocked",
        reason: row[2] || null,
      }));

      return NextResponse.json({ events });
    }

    if (type === "prompt_injection") {
      // Prompt injection: output_scan_result events + command_blocked where blocker = 'prompt_injection'
      const [scanRows, blockRows] = await Promise.all([
        queryPostHog(`
          SELECT timestamp, properties.scan_id as scan_id, properties.suspicious as suspicious, properties.matched_pattern as matched_pattern
          FROM events
          WHERE event = 'output_scan_result'
          AND distinct_id IN (${idList})
          ORDER BY timestamp DESC
          LIMIT 50
        `),
        queryPostHog(`
          SELECT timestamp, properties.blocker as blocker
          FROM events
          WHERE event = 'command_blocked'
          AND properties.blocker = 'prompt_injection'
          AND distinct_id IN (${idList})
          ORDER BY timestamp DESC
          LIMIT 50
        `),
      ]);

      const events = [
        ...scanRows.map((row: string[]) => ({
          timestamp: row[0],
          type: "output_scan",
          scan_id: row[1],
          suspicious: row[2],
          matched_pattern: row[3] || null,
        })),
        ...blockRows.map((row: string[]) => ({
          timestamp: row[0],
          type: "command_blocked",
        })),
      ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

      return NextResponse.json({ events });
    }

    return NextResponse.json({ events: [] });
  } catch (error) {
    console.error("PostHog events error:", error);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}
