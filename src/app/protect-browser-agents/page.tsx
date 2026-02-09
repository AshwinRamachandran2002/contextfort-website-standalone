"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Zap, 
  Terminal, 
  Lock, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Activity,
  User,
  Bot,
  Layers,
  Cpu,
  Globe,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const LOG_ENTRIES = [
  { id: 1, type: "HUMAN", action: "Mouse Move", timestamp: "10:24:01", confidence: 99.8 },
  { id: 2, type: "AGENT", action: "DOM Interaction", timestamp: "10:24:05", confidence: 98.2 },
  { id: 3, type: "AGENT", action: "Fast Form Fill", timestamp: "10:24:08", confidence: 99.5 },
  { id: 4, type: "HUMAN", action: "Scroll", timestamp: "10:24:12", confidence: 97.4 },
  { id: 5, type: "AGENT", action: "API Call Hook", timestamp: "10:24:15", confidence: 100 },
];

export default function ProtectBrowserAgentsPage() {
  const [activeLogs, setActiveLogs] = useState(LOG_ENTRIES.slice(0, 3));
  const [email, setEmail] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogs(prev => {
        const next = [...prev];
        const last = LOG_ENTRIES[Math.floor(Math.random() * LOG_ENTRIES.length)];
        return [ { ...last, id: Date.now() }, ...next.slice(0, 4)];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, size: '40px 40px' }} />
      
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
              <a href="#how-it-works">How it works</a>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary transition-colors">
              <a href="/protect-browser-agents">Protect browser agents</a>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary transition-colors">
              <a href="/blog">Blog</a>
            </Button>
            <Button asChild className="bg-primary text-background hover:bg-primary/90 rounded-none transition-colors">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt" target="_blank" rel="noopener noreferrer">
                Book a demo
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 rounded-none transition-colors">
              <a href="https://github.com/ContextFort-AI/ContextFort" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-white/20">
                <span className="text-sm font-semibold text-black tracking-tight">Backed by</span>
                <div className="w-6 h-6 bg-[#ff6600] flex items-center justify-center font-bold text-white text-xs">Y</div>
                <span className="text-sm font-semibold text-black tracking-tight">Combinator</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                <span className="md:whitespace-nowrap">Visibility & Controls</span> <span className="text-primary italic md:whitespace-nowrap">for Browser Agents</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
                Through a simple and powerful browser extension
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="text-sm text-muted-foreground font-medium">Purpose built for:</span>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default">
                  <img src="https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai" className="w-5 h-5 rounded-sm" alt="Comet" />
                  <span className="text-sm font-semibold">Comet</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default">
                  <img src="https://www.google.com/s2/favicons?sz=64&domain=openai.com" className="w-5 h-5 rounded-sm" alt="Atlas" />
                  <span className="text-sm font-semibold">Atlas</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default">
                  <img src="https://www.google.com/s2/favicons?sz=64&domain=claude.ai" className="w-5 h-5 rounded-sm" alt="Claude" />
                  <span className="text-sm font-semibold">Claude</span>
                </div>
              </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary text-background hover:bg-primary/90 rounded-none px-8"
                    asChild
                  >
                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt" target="_blank" rel="noopener noreferrer">
                      Book a demo
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 rounded-none px-8 text-foreground"
                    asChild
                  >
                    <a href="https://chromewebstore.google.com/detail/contextfort/jkocglijncodiiljpdnoiegfcgeadllg" target="_blank" rel="noopener noreferrer">
                      Try chrome extension
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 rounded-none px-8 text-foreground"
                    asChild
                  >
                    <a href="https://github.com/ContextFort-AI/ContextFort" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View github repo
                    </a>
                  </Button>
                </div>
              

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/1YtEGVZKMeo?autoplay=1&mute=0&loop=1&playlist=1YtEGVZKMeo&controls=1&modestbranding=1&rel=0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How it works</h2>
          </div>

          {/* Visibility Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center">ContextFort provides security teams with Visibility into agent sessions</h2>
            <ul className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>When control is handed over</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Which pages the agent visits during a session</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>What it does on each page (what was clicked and where text was input)</span>
              </li>
            </ul>
            <div className="max-w-4xl mx-auto">
              <img src="/visibility-demo.gif" alt="Visibility Demo" className="w-full rounded-lg border border-white/10" />
            </div>
          </div>

          {/* Controls Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">ContextFort also offers Controls for security teams to act on based on what the visibility layer captures</h2>
            <ul className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Block specific actions on specific pages (e.g., prevent the agent from clicking "Submit" on email)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Block risky cross-site flows in a single session (e.g., block navigation to Atlassian after interacting with StackOverflow), or apply a stricter policy and block bringing any external context to Atlassian entirely</span>
              </li>
            </ul>
            <div className="grid md:grid-cols-2 gap-8">
              <img src="/first.gif" alt="Controls Demo 1" className="w-full rounded-lg border border-white/10" />
              <img src="/second.gif" alt="Controls Demo 2" className="w-full rounded-lg border border-white/10" />
            </div>
          </div>
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
