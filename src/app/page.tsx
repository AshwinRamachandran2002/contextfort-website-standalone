"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  Terminal,
  Github,
  Twitter,
  Linkedin,
  Download,
  Package,
  User,
  Tag,
  Plus,
  Wrench,
  Eye,
  Lock,
  ShieldCheck,
  FileSearch,
  KeyRound,
  ScanSearch
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/hooks/use-user";

const FEATURES = [
  {
    id: "bash",
    label: "Bash Guard",
    icon: Terminal,
    dotColor: "bg-green-500",
    title: "Bash Guard",
    subtitle: "Static analysis engine that inspects every shell command before execution.",
    description: "Powered by the Tirith rule engine, the Bash Guard intercepts every child_process call (spawn, exec, execFile) and runs static analysis checks before the command executes. It catches dangerous patterns like recursive deletes, privilege escalation, data exfiltration via curl/wget, and obfuscated payloads. Commands are blocked before they ever run — the LLM never sees the output.",
    highlights: [
      "Blocks rm -rf /, chmod 777, and other destructive commands",
      "Detects data exfiltration via curl, wget, nc, and DNS tunneling",
      "Catches obfuscated commands using base64, hex encoding, and Unicode confusables",
      "Hostname and transport layer analysis for suspicious network activity",
    ],
  },
  {
    id: "skill",
    label: "Skill Scanner",
    icon: FileSearch,
    dotColor: "bg-green-500",
    title: "Skill Scanner",
    subtitle: "AI-powered scanning of all installed skills and plugins for prompt injection.",
    description: "Skills and plugins extend what OpenClaw can do — but they can also be weaponized. The Skill Scanner monitors ~/.openclaw/skills/, ~/.claude/skills/, and all plugin directories in real time. Every skill is sent to our cloud Haiku engine for deep analysis. If a skill contains prompt injection patterns, social engineering, or hidden exfiltration instructions, all agent actions are blocked until the skill is removed.",
    highlights: [
      "Real-time fs.watch monitoring with debounce — new/modified skills scanned instantly",
      "Cloud Haiku AI analysis detects sophisticated prompt injection that regex can't catch",
      "Binary file detection — legitimate skills should only contain text files",
      "Persistent scan cache so repeated scans are instant across sessions",
    ],
  },
  {
    id: "pi",
    label: "Prompt Injection",
    icon: Eye,
    dotColor: "bg-green-500",
    title: "Prompt Injection Guard",
    subtitle: "Scans command output for hidden instructions that could hijack the AI agent.",
    description: "After a command runs, its output is fed back to the LLM. An attacker can embed hidden instructions in any data source — a Notion page, API response, or git commit message — that tells the agent to exfiltrate secrets, run destructive commands, or mislead the user. The Prompt Injection Guard scans every suspicious command output using local Haiku before the LLM processes it. If injection is detected, all future commands are blocked.",
    highlights: [
      "PostToolUse hook — scans output after execution but before the LLM sees it",
      "Server-fetched scan patterns keep detection rules up to date",
      "Targets high-risk commands: curl, wget, git show/log/diff, cat, grep, python, node -e",
      "Fail-open design — API errors never block your workflow",
    ],
  },
  {
    id: "secrets",
    label: "Secrets Guard",
    icon: KeyRound,
    dotColor: "bg-green-500",
    title: "Secrets Guard",
    subtitle: "Prevents secret leakage through env vars, command output, and hardcoded credentials.",
    description: "The Secrets Guard has three layers of protection. First, it blocks commands that would expose environment variable values to stdout (echo $API_KEY, printenv, env dumps). Second, it scans all command output with 25+ regex patterns and redacts any secrets (API keys, tokens, private keys) before the LLM ever sees them. Third, the TruffleHog-powered scan command finds hardcoded secrets across your entire codebase.",
    highlights: [
      "Env var leak prevention — blocks echo $SECRET, printenv, env dumps, and language-specific env access",
      "Output redaction for 25+ secret formats: Anthropic, OpenAI, AWS, GitHub, Stripe, Slack, Twilio, and more",
      "TruffleHog integration — openclaw-secure scan finds live hardcoded secrets",
      "Solve mode — interactive TUI to replace live secrets with invalidated dummy values",
    ],
  },
  {
    id: "dashboard",
    label: "Security Dashboard",
    icon: ShieldCheck,
    dotColor: "bg-green-500",
    title: "Local Security Dashboard",
    subtitle: "Full visibility into every security decision — what was blocked, allowed, and sent to servers.",
    description: "Run openclaw-secure dashboard to open a localhost web UI that shows everything the guard is doing. Every command intercepted is logged locally with the full guard chain and decision. A separate transparency log shows exactly what data is sent to our servers. Nothing is hidden — you can see every block, every redaction, and every external API call.",
    highlights: [
      "Per-guard event pages with filterable event tables",
      "Server transparency toggle — see exactly what data leaves your machine",
      "Local-only audit logs in ~/.contextfort/local_only_logs/ — never sent to any server",
      "Auto-refresh with real-time stats: total commands, blocks, allow rate, active since",
    ],
  },
];

const CHANGELOGS = [
  {
    version: "0.1.8",
    date: "Feb 10, 2026",
    summary: "Local security dashboard, audit logging, and output secret redaction.",
    latest: true,
    features: [
      { text: <><code className="text-foreground text-xs bg-white/5 px-1.5 py-0.5 rounded">openclaw-secure dashboard</code> — localhost web UI showing all security events, guard status, and what data is sent to servers</> },
      { text: <>Local audit logging — every command intercepted is logged to <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">~/.contextfort/local_only_logs/</code> (never sent to any server)</> },
      { text: <>Server transparency logs — mirror of everything sent to PostHog/Supabase stored in <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">~/.contextfort/server_send_logs/</code></> },
      { text: "Output secret redaction — 25+ regex patterns (Anthropic, OpenAI, AWS, GitHub, Stripe, Slack, Twilio, etc.) scan command output and redact secrets before the LLM sees them" },
    ],
    improvements: [
      "Secret redaction covers both sync and async child_process hooks (spawn, exec, execFile)",
      "Dashboard sidebar with per-guard event pages and server-sent-events toggle",
      "Cleaned up npm package — excluded test files and cache artifacts",
    ],
  },
  {
    version: "0.1.7",
    date: "Feb 8, 2026",
    summary: "Authentication, secrets scanning with TruffleHog, and solve mode.",
    features: [
      { text: <><code className="text-foreground text-xs bg-white/5 px-1.5 py-0.5 rounded">openclaw-secure set-key</code> — API key authentication via <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">~/.contextfort/config</code></> },
      { text: <><code className="text-foreground text-xs bg-white/5 px-1.5 py-0.5 rounded">openclaw-secure scan</code> — TruffleHog-powered secret scanning across all OpenClaw-accessible directories</> },
      { text: <><code className="text-foreground text-xs bg-white/5 px-1.5 py-0.5 rounded">openclaw-secure solve</code> — interactive TUI to select and replace live hardcoded secrets with dummy values</> },
      { text: "Env var leak prevention — blocks commands that would expose secret env var values to stdout" },
      { text: "Server-fetched scan patterns for prompt injection guard" },
    ],
    improvements: [
      <>API key required before <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">enable</code> — hard-blocks all hooks when no key present</>,
      <>PostHog analytics with opt-out via <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">CONTEXTFORT_NO_ANALYTICS=1</code></>,
      <><code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">--no-skill-deliver</code> flag to disable cloud skill scanning</>,
    ],
  },
  {
    version: "0.1.6",
    date: "Feb 5, 2026",
    summary: "Prompt injection guard and skill scanner with cloud Haiku scanning.",
    features: [
      { text: "Prompt injection guard — PostToolUse hook scans command output via local Haiku for hidden injection attempts" },
      { text: <>Skill scanner — monitors <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">~/.openclaw/skills/</code> and <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">~/.claude/skills/</code> with cloud Haiku scanning via Supabase</> },
      { text: "Binary file detection — skills containing binary files are immediately flagged" },
      { text: "Persistent scan cache across sessions" },
      { text: "fs.watch with debounce for real-time skill directory monitoring" },
    ],
    improvements: [
      "Fail-open design — API errors never block the user's workflow",
      "Async scan, sync block pattern for both guards",
      "Hooks simplified — fs/http/fetch pass-through, security enforced only at child_process level",
    ],
  },
];

function FeaturesPanel() {
  const [activeFeature, setActiveFeature] = React.useState("bash");
  const feature = FEATURES.find(f => f.id === activeFeature) || FEATURES[0];
  const Icon = feature.icon;

  return (
    <div className="max-w-5xl mx-auto border border-white/10 rounded-lg overflow-hidden bg-white/[0.02]">
      <div className="flex flex-col md:flex-row min-h-[480px]">
        {/* Sidebar */}
        <div className="md:w-52 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02] p-3 shrink-0">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 pt-2 pb-3">Protection Layers</div>
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
            {FEATURES.map(f => {
              const FIcon = f.icon;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFeature(f.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-md transition-colors whitespace-nowrap w-full text-left ${
                    activeFeature === f.id
                      ? "bg-white/10 text-white"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  <FIcon className="w-4 h-4 shrink-0" />
                  <span className="flex-1">{f.label}</span>
                  <span className={`w-2 h-2 rounded-full shrink-0 ${f.dotColor} shadow-[0_0_6px_rgba(34,197,94,0.4)]`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <span className={`w-2.5 h-2.5 rounded-full ${feature.dotColor} shadow-[0_0_6px_rgba(34,197,94,0.4)]`} />
          </div>
          <p className="text-sm text-muted-foreground mb-6">{feature.subtitle}</p>
          <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8">{feature.description}</p>
          <div className="space-y-2.5">
            {feature.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChangelogPanel() {
  const [activeVersion, setActiveVersion] = React.useState("0.1.8");
  const changelog = CHANGELOGS.find(c => c.version === activeVersion) || CHANGELOGS[0];

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
      {/* Version sidebar */}
      <div className="flex md:flex-col h-auto gap-1 md:min-w-[140px] shrink-0">
        {CHANGELOGS.map(c => (
          <button
            key={c.version}
            onClick={() => setActiveVersion(c.version)}
            className={`flex items-center justify-start gap-2 px-4 py-2.5 text-sm rounded-md transition-colors ${
              activeVersion === c.version
                ? "bg-white/10 text-white"
                : "text-muted-foreground hover:text-white hover:bg-white/5"
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            v{c.version}
            {c.latest && <Badge variant="default" className="ml-auto text-[10px] px-1.5 py-0">Latest</Badge>}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold">v{changelog.version}</h3>
            <span className="text-xs text-muted-foreground">{changelog.date}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">{changelog.summary}</p>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-green-400 mb-2">
                <Plus className="w-3.5 h-3.5" /> New Features
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground ml-5">
                {changelog.features.map((f, i) => <li key={i}>{f.text}</li>)}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 mb-2">
                <Wrench className="w-3.5 h-3.5" /> Improvements
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground ml-5">
                {changelog.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const { user, loading } = useUser();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">ContextFort</span>
          </a>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary transition-colors">
              <a href="/protect-browser-agents">Protect browser agents</a>
            </Button>
            <Button asChild className="bg-primary text-background hover:bg-primary/90 rounded-none transition-colors">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt" target="_blank" rel="noopener noreferrer">
                Book a demo
              </a>
            </Button>
              {!loading && (
                user ? (
                  <Button asChild className="bg-primary text-background hover:bg-primary/90 rounded-none transition-colors">
                    <a href="/dashboard">
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </a>
                  </Button>
                ) : (
                  <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 rounded-none transition-colors">
                    <a href="/login">Login</a>
                  </Button>
                )
              )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-white/20">
                <span className="text-sm font-semibold text-black tracking-tight">Backed by</span>
                <div className="w-6 h-6 bg-[#ff6600] flex items-center justify-center font-bold text-white text-xs">Y</div>
                <span className="text-sm font-semibold text-black tracking-tight">Combinator</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Anti-Virus <span className="text-primary italic">for Autonomous Agents</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Runtime security that intercepts every command your AI agent runs. Block dangerous actions, redact leaked secrets, and detect prompt injection — before damage is done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-background hover:bg-primary/90 rounded-none px-8"
                  asChild
                >
                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt" target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Book a demo
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 rounded-none px-8 text-foreground"
                  asChild
                >
                  <a href="https://github.com/ContextFort-AI/" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </a>
                </Button>
              </div>

              {/* Supported agents */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 max-w-lg space-y-3 text-left"
              >
                {/* OpenClaw */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-4">
                  <div className="flex items-center gap-2.5 shrink-0 min-w-[140px]">
                    <svg className="w-8 h-8" viewBox="0 0 120 120" fill="none">
                      <defs><linearGradient id="oc-g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ff4d4d"/><stop offset="100%" stopColor="#991b1b"/></linearGradient></defs>
                      <path d="M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z" fill="url(#oc-g)"/>
                      <path d="M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z" fill="url(#oc-g)"/>
                      <path d="M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z" fill="url(#oc-g)"/>
                      <path d="M45 15 Q35 5 30 8" stroke="#ff4d4d" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M75 15 Q85 5 90 8" stroke="#ff4d4d" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="45" cy="35" r="6" fill="#050810"/><circle cx="75" cy="35" r="6" fill="#050810"/>
                      <circle cx="46" cy="34" r="2.5" fill="#00e5cc"/><circle cx="76" cy="34" r="2.5" fill="#00e5cc"/>
                    </svg>
                    <span className="font-semibold text-sm">OpenClaw</span>
                  </div>
                  <div className="flex-1 font-mono text-xs bg-black/30 rounded px-3 py-2 text-muted-foreground overflow-x-auto">
                    <code className="text-primary whitespace-nowrap">npm i -g @contextfort-ai/openclaw-secure</code>
                  </div>
                </div>

                {/* Claude Code */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-4">
                  <div className="flex items-center gap-2.5 shrink-0 min-w-[140px]">
                    <div className="w-8 h-8 rounded-md bg-[#D97706] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 16 16" fill="currentColor"><path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/></svg>
                    </div>
                    <span className="font-semibold text-sm">Claude Code</span>
                  </div>
                  <Badge variant="outline" className="text-xs text-yellow-400 border-yellow-400/30 bg-yellow-400/10 rounded-none">
                    In Progress
                  </Badge>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 w-full lg:max-w-[50%]"
            >
              <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
                <video
                  src="/demo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Changelog Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tabs defaultValue="features" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="bg-white/5 border border-white/10 rounded-none p-1">
                  <TabsTrigger value="features" className="rounded-none px-6 py-2 data-[state=active]:bg-white/10">
                    <Shield className="w-4 h-4 mr-2" />
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="changelog" className="rounded-none px-6 py-2 data-[state=active]:bg-white/10">
                    <Tag className="w-4 h-4 mr-2" />
                    Changelog
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* ── Features Tab ── */}
              <TabsContent value="features" className="m-0">
                <FeaturesPanel />
              </TabsContent>

              {/* ── Changelog Tab ── */}
              <TabsContent value="changelog" className="m-0">
                <ChangelogPanel />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section id="enterprise" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              If you need cloud/self-hosted management for an enterprise deployment, contact us.
            </p>
            <Button
              size="lg"
              className="bg-primary text-background hover:bg-primary/90 h-12 rounded-none px-8 font-bold"
              asChild
            >
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt" target="_blank" rel="noopener noreferrer">
                Book Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary flex items-center justify-center">
                <Shield className="w-4 h-4 text-background" />
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">ContextFort</span>
            </div>
<div className="flex gap-6 text-muted-foreground">
                <a href="https://x.com/ContextFort" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/contextfort/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Context Fort, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
