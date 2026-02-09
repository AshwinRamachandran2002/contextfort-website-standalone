"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Shield, LogOut, Loader2, Home, Activity, ChevronDown, ShieldCheck, ShieldAlert, Terminal, Eye, RefreshCw, ArrowRight } from "lucide-react";
import { SubscriptionCard } from "@/components/dashboard/subscription-card";
import { ApiKeysList } from "@/components/dashboard/api-keys-list";
import { SkillScannerView, BashGuardView, PromptInjectionView } from "@/components/dashboard/security-status";
import type { User } from "@supabase/supabase-js";

interface Profile {
  subscription_status: string;
  stripe_customer_id: string | null;
}

interface ApiKey {
  id: string;
  key_prefix: string;
  name: string;
  is_active: boolean;
  created_at: string;
  revoked_at: string | null;
  last_used_at: string | null;
}

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

type Tab = "home" | "skills" | "bash" | "prompt-injection";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [scanEvents, setScanEvents] = useState<ScanEvent[]>([]);
  const [bashEvents, setBashEvents] = useState<PostHogEvent[]>([]);
  const [piEvents, setPiEvents] = useState<PostHogEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [scansOpen, setScansOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  const fetchData = useCallback(async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    setUser(user);

    const { data: profileData } = await supabase
      .from("profiles")
      .select("subscription_status, stripe_customer_id")
      .eq("id", user.id)
      .single();

    setProfile(profileData);

    const res = await fetch("/api/keys/list");
    const keysData = await res.json();
    setKeys(keysData.keys ?? []);

    const eventsRes = await fetch("/api/scan-events");
    const eventsData = await eventsRes.json();
    setScanEvents(eventsData.events ?? []);

    const [bashRes, piRes] = await Promise.all([
      fetch("/api/posthog-events?type=bash"),
      fetch("/api/posthog-events?type=prompt_injection"),
    ]);
    const bashData = await bashRes.json();
    const piData = await piRes.json();
    setBashEvents(bashData.events ?? []);
    setPiEvents(piData.events ?? []);

    setLoading(false);
  }, [router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">ContextFort</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="w-56 border-r border-white/10 bg-white/[0.02] px-3 py-6 shrink-0">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("home")}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                activeTab === "home"
                  ? "bg-white/10 text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </button>

            {/* Scan Status dropdown */}
            <div>
              <button
                onClick={() => setScansOpen(!scansOpen)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                  ["skills", "bash", "prompt-injection"].includes(activeTab)
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Activity className="w-4 h-4" />
                  Scan Status
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform ${scansOpen ? "rotate-180" : ""}`} />
              </button>
              {scansOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                  <button
                    onClick={() => setActiveTab("skills")}
                    className={`w-full flex items-center gap-3 px-3 py-1.5 text-xs rounded-md transition-colors ${
                      activeTab === "skills"
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Skill Scanner
                  </button>
                  <button
                    onClick={() => setActiveTab("bash")}
                    className={`w-full flex items-center gap-3 px-3 py-1.5 text-xs rounded-md transition-colors ${
                      activeTab === "bash"
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    Bash Guard
                  </button>
                  <button
                    onClick={() => setActiveTab("prompt-injection")}
                    className={`w-full flex items-center gap-3 px-3 py-1.5 text-xs rounded-md transition-colors ${
                      activeTab === "prompt-injection"
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Prompt Injection
                  </button>
                </div>
              )}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 py-10 space-y-6">
          {activeTab === "home" && (
            <>
              <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                  Manage your subscription and API keys.
                </p>
              </div>

              {success && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-md text-sm">
                  Subscription activated successfully! You can now generate your API key.
                </div>
              )}
              {canceled && (
                <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-3 rounded-md text-sm">
                  Checkout was canceled. You can try again when you&apos;re ready.
                </div>
              )}

              {/* Latest Security Events */}
              {(() => {
                const latestSkill = scanEvents[0] || null;
                const latestBash = bashEvents[0] || null;
                const latestPI = piEvents[0] || null;

                const events: { label: string; tab: Tab; time: string; suspicious: boolean; detail: string }[] = [];

                if (latestSkill) {
                  events.push({
                    label: "Skill Scanner",
                    tab: "skills",
                    time: new Date(latestSkill.scanned_at).toLocaleString(),
                    suspicious: latestSkill.result_suspicious,
                    detail: latestSkill.result_suspicious
                      ? `${latestSkill.skill_name} flagged as malicious`
                      : `${latestSkill.skill_name} scanned clean`,
                  });
                }
                if (latestBash) {
                  events.push({
                    label: "Bash Guard",
                    tab: "bash",
                    time: new Date(latestBash.timestamp).toLocaleString(),
                    suspicious: true,
                    detail: "Command blocked",
                  });
                }
                if (latestPI) {
                  const isSus = latestPI.type === "command_blocked" || !!latestPI.suspicious;
                  events.push({
                    label: "Prompt Injection",
                    tab: "prompt-injection",
                    time: new Date(latestPI.timestamp).toLocaleString(),
                    suspicious: isSus,
                    detail: latestPI.type === "command_blocked"
                      ? "Command blocked"
                      : isSus
                        ? "Suspicious output detected"
                        : "Output scanned clean",
                  });
                }

                if (events.length === 0) return null;

                return (
                  <div className="border border-white/10 rounded-md overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                      <span className="text-base font-medium">Latest Security Events</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => { setScansOpen(true); setActiveTab("skills"); }}
                      >
                        See full scan status
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                    <div className="divide-y divide-white/5">
                      {events.map((ev) => (
                        <button
                          key={ev.tab}
                          className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors text-left"
                          onClick={() => { setScansOpen(true); setActiveTab(ev.tab); }}
                        >
                          <div className="flex items-center gap-3">
                            {ev.suspicious ? (
                              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                            ) : (
                              <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                            )}
                            <div>
                              <span className="text-sm font-medium">{ev.label}</span>
                              <p className="text-sm text-muted-foreground">{ev.detail}</p>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">{ev.time}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}

              <SubscriptionCard
                status={profile?.subscription_status ?? "inactive"}
                loading={loading}
              />

              <ApiKeysList
                keys={keys}
                subscriptionActive={profile?.subscription_status === "active"}
                onKeysChanged={fetchData}
              />
            </>
          )}

          {activeTab === "skills" && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Skill Scanner</h1>
                  <p className="text-muted-foreground mt-1">
                    Skills cross-indexed and scanned for common attack patterns.
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleRefresh} disabled={refreshing}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
              </div>

              <SkillScannerView events={scanEvents} />
            </>
          )}

          {activeTab === "bash" && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Bash Guard</h1>
                  <p className="text-muted-foreground mt-1">
                    Commands blocked by static analysis rules.
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleRefresh} disabled={refreshing}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
              </div>

              <BashGuardView events={bashEvents} />
            </>
          )}

          {activeTab === "prompt-injection" && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Prompt Injection Guard</h1>
                  <p className="text-muted-foreground mt-1">
                    Command outputs scanned for prompt injection attempts.
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleRefresh} disabled={refreshing}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
              </div>

              <PromptInjectionView events={piEvents} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
