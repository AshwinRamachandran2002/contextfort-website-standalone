"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ShieldAlert, FileText, X } from "lucide-react";

interface ScanEvent {
  id: string;
  skill_name: string;
  skill_path: string | null;
  file_count: number;
  result_suspicious: boolean;
  haiku_reason: string | null;
  skill_files?: { relative_path: string; content: string }[] | null;
  event_type?: string | null;
  scanned_at: string;
}

interface PostHogEvent {
  timestamp: string;
  type: string;
  scan_id?: string;
  suspicious?: boolean;
  reason?: string | null;
  matched_pattern?: string | null;
}

// ─── Skill Scanner Tab ───
export function SkillScannerView({ events }: { events: ScanEvent[] }) {
  const [viewingFiles, setViewingFiles] = useState<ScanEvent | null>(null);

  // Dedupe: latest scan per skill_name
  const latestBySkill = new Map<string, ScanEvent>();
  for (const e of events) {
    if (!latestBySkill.has(e.skill_name)) {
      latestBySkill.set(e.skill_name, e);
    }
  }
  const skills = Array.from(latestBySkill.values());

  return (
    <>
      {/* File viewer modal */}
      {viewingFiles && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6">
          <div className="bg-background border border-white/10 rounded-md w-full max-w-3xl max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="text-base font-medium">
                Files in {viewingFiles.skill_name}
              </span>
              <Button variant="ghost" size="sm" onClick={() => setViewingFiles(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="overflow-auto p-4 space-y-4">
              {viewingFiles.skill_files && viewingFiles.skill_files.length > 0 ? (
                viewingFiles.skill_files.map((f, i) => (
                  <div key={i} className="border border-white/10 rounded-md overflow-hidden">
                    <div className="bg-white/5 px-3 py-1.5 text-sm font-mono text-muted-foreground border-b border-white/10">
                      {f.relative_path}
                    </div>
                    <pre className="px-3 py-2 text-sm font-mono overflow-x-auto max-h-64 overflow-y-auto whitespace-pre-wrap">
                      {f.content}
                    </pre>
                  </div>
                ))
              ) : (
                <p className="text-base text-muted-foreground text-center py-6">
                  File contents not available for this scan (pre-update event).
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills table */}
      {skills.length === 0 ? (
        <p className="text-base text-muted-foreground text-center py-6">
          No skills scanned yet.
        </p>
      ) : (
        <div className="border border-white/10 rounded-md overflow-hidden">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Skill</th>
                <th className="text-left px-4 py-2.5 text-muted-foreground font-medium w-[180px]">Path</th>
                <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Event</th>
                <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Status</th>
                <th className="text-left px-4 py-2.5 text-muted-foreground font-medium w-[30%]">Reason</th>
                <th className="text-center px-4 py-2.5 text-muted-foreground font-medium">Files</th>
                <th className="text-right px-4 py-2.5 text-muted-foreground font-medium">Last Scanned</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr key={skill.id} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-mono text-sm">{skill.skill_name}</td>
                  <td className="px-4 py-3 font-mono text-sm text-muted-foreground break-all">{skill.skill_path || "\u2014"}</td>
                  <td className="px-4 py-3">
                    {skill.event_type === "removed" ? (
                      <span className="inline-flex items-center gap-1 text-sm bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">Removed</span>
                    ) : skill.event_type === "modified" ? (
                      <span className="inline-flex items-center gap-1 text-sm bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">Modified</span>
                    ) : skill.event_type === "created" ? (
                      <span className="inline-flex items-center gap-1 text-sm bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">Created</span>
                    ) : (
                      <span className="text-sm text-muted-foreground">{"\u2014"}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {skill.event_type === "removed" ? (
                      <span className="text-sm text-muted-foreground">{"\u2014"}</span>
                    ) : skill.result_suspicious ? (
                      <span className="inline-flex items-center gap-1 text-sm bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        Malicious
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Clean
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {skill.haiku_reason && skill.haiku_reason !== "REMOVED" ? skill.haiku_reason : "\u2014"}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setViewingFiles(skill)}
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      {skill.file_count}
                    </Button>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground text-right whitespace-nowrap">
                    {new Date(skill.scanned_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* History log */}
      <div className="border border-white/10 rounded-md overflow-hidden">
        <div className="px-4 py-3 border-b border-white/10 bg-white/5 text-base font-medium">Scan History</div>
        {events.length === 0 ? (
          <p className="text-base text-muted-foreground text-center py-6">No scan history.</p>
        ) : (
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full text-base">
              <thead className="sticky top-0 bg-background">
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Skill</th>
                  <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Event</th>
                  <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Result</th>
                  <th className="text-right px-4 py-2.5 text-muted-foreground font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-2.5 font-mono text-sm">{event.skill_name}</td>
                    <td className="px-4 py-2.5">
                      {event.event_type === "removed" ? (
                        <span className="text-sm text-orange-400">Removed</span>
                      ) : event.event_type === "modified" ? (
                        <span className="text-sm text-blue-400">Modified</span>
                      ) : event.event_type === "created" ? (
                        <span className="text-sm text-purple-400">Created</span>
                      ) : (
                        <span className="text-sm text-muted-foreground">{"\u2014"}</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5">
                      {event.event_type === "removed" ? (
                        <span className="text-sm text-muted-foreground">{"\u2014"}</span>
                      ) : event.result_suspicious ? (
                        <span className="text-sm text-red-400">Suspicious</span>
                      ) : (
                        <span className="text-sm text-green-400">Clean</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-sm text-muted-foreground text-right whitespace-nowrap">
                      {new Date(event.scanned_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Bash Guard Tab ───
export function BashGuardView({ events }: { events: PostHogEvent[] }) {
  return (
    <>
      {events.length === 0 ? (
        <p className="text-base text-muted-foreground text-center py-6">
          No blocked commands yet. The bash guard is monitoring for dangerous commands.
        </p>
      ) : (
        <div className="border border-white/10 rounded-md overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 bg-white/5 text-base font-medium">Block History</div>
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full text-base">
              <thead className="sticky top-0 bg-background">
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Status</th>
                  <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Rule Violated</th>
                  <th className="text-right px-4 py-2.5 text-muted-foreground font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, i) => {
                  let ruleId = "";
                  let ruleDesc = "";
                  if (event.reason) {
                    const tirithMatch = event.reason.match(/^TIRITH:\s*(.+)/m);
                    const ruleMatch = event.reason.match(/^Rule:\s*(.+)/m);
                    if (tirithMatch) ruleDesc = tirithMatch[1].trim();
                    if (ruleMatch) ruleId = ruleMatch[1].trim();
                  }
                  return (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-2.5">
                        <span className="inline-flex items-center gap-1 text-sm bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          Blocked
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-sm">
                        {ruleId ? (
                          <div>
                            <span className="font-mono text-orange-400">{ruleId}</span>
                            {ruleDesc && (
                              <p className="text-muted-foreground mt-0.5">{ruleDesc}</p>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">{"\u2014"}</span>
                        )}
                      </td>
                      <td className="px-4 py-2.5 text-sm text-muted-foreground text-right whitespace-nowrap">
                        {new Date(event.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Prompt Injection Guard Tab ───
export function PromptInjectionView({ events }: { events: PostHogEvent[] }) {
  return (
    <>
      {events.length === 0 ? (
        <p className="text-base text-muted-foreground text-center py-6">
          No prompt injection events yet. Outputs are scanned when matching commands run.
        </p>
      ) : (
        <div className="border border-white/10 rounded-md overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 bg-white/5 text-base font-medium">Scan History</div>
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full text-base">
              <thead className="sticky top-0 bg-background">
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Event</th>
                  <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Matched Pattern</th>
                  <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Status</th>
                  <th className="text-right px-4 py-2.5 text-muted-foreground font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-2.5 text-sm font-mono">
                      {event.type === "output_scan" ? "Output Scanned" : "Command Blocked"}
                    </td>
                    <td className="px-4 py-2.5 text-sm font-mono text-muted-foreground">
                      {event.matched_pattern || "\u2014"}
                    </td>
                    <td className="px-4 py-2.5">
                      {event.type === "command_blocked" ? (
                        <span className="inline-flex items-center gap-1 text-sm bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          Blocked
                        </span>
                      ) : event.suspicious ? (
                        <span className="inline-flex items-center gap-1 text-sm bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          Suspicious
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-sm bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Clean
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-sm text-muted-foreground text-right whitespace-nowrap">
                      {new Date(event.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
