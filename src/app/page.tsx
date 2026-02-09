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
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";

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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-white/20">
                <span className="text-sm font-semibold text-black tracking-tight">Backed by</span>
                <div className="w-6 h-6 bg-[#ff6600] flex items-center justify-center font-bold text-white text-xs">Y</div>
                <span className="text-sm font-semibold text-black tracking-tight">Combinator</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Anti-Virus <span className="text-primary italic">for OpenClaw</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Protect your systems from vulnerable and malicious open-source dependencies. Scan, detect, and remediate threats before they reach production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <a href="https://www.npmjs.com/package/@contextfort-ai/openclaw-secure" target="_blank" rel="noopener noreferrer">
                    <Package className="w-4 h-4 mr-2" />
                    Download npm package
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 rounded-none px-8 text-foreground"
                  asChild
                >
                  <a href="https://github.com/ContextFort-AI/clawdbot-runtime-controls" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub repo
                  </a>
                </Button>
              </div>

              {/* npm install snippet */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 max-w-md mx-auto"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 font-mono text-sm text-left">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Terminal className="w-4 h-4" />
                    <span>Quick install</span>
                  </div>
                  <code className="text-primary">npm install -g @contextfort-ai/openclaw-secure</code>
                </div>
              </motion.div>
            </motion.div>
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
