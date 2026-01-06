"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Download, 
  Copy, 
  Check, 
  ArrowLeft,
  Type,
  Palette,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const COLORS = [
  { name: "Primary Neon", value: "oklch(0.7 0.2 150)", hex: "#4ADE80", desc: "Main brand color for actions and highlights." },
  { name: "Background", value: "oklch(0.05 0 0)", hex: "#0D0D0D", desc: "Primary background for dark mode experience." },
  { name: "Card Surface", value: "oklch(0.1 0 0)", hex: "#1A1A1A", desc: "Surface color for cards and elevated components." },
  { name: "Muted", value: "oklch(0.6 0 0)", hex: "#999999", desc: "Secondary text and less emphasized elements." },
];

export default function DesignKitPage() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-20">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">ContextFort</span>
          </a>
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary">
            <a href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </Button>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 border-b border-white/5">
        <div className="container mx-auto px-6">
          <Badge className="bg-primary text-background mb-4">RESOURCES</Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Design Kit</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Everything you need to build with and represent the ContextFort brand. Assets, colors, and guidelines for partners and developers.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-24">
        
        {/* Logos Section */}
        <section id="logos">
          <div className="flex items-center gap-3 mb-12">
            <ImageIcon className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Logos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 p-12 flex flex-col items-center justify-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-24 h-24 bg-primary flex items-center justify-center mb-8 shadow-[0_0_50px_-12px_rgba(74,222,128,0.5)]">
                <Shield className="w-12 h-12 text-background" />
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest">Primary Mark</p>
              <Button size="sm" variant="outline" className="rounded-none border-white/10 hover:bg-white/10" asChild>
                <a href="/logo.svg" download="contextfort-logo.svg">
                  <Download className="w-4 h-4 mr-2" /> Download SVG
                </a>
              </Button>
            </Card>
              <Card className="bg-white/5 border-white/10 p-12 flex flex-col items-center justify-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-8 scale-125">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center">
                    <Shield className="w-6 h-6 text-background" />
                  </div>
                  <span className="text-3xl font-bold tracking-tighter uppercase">ContextFort</span>
                </div>
                <p className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest">Full Logotype</p>
                <Button size="sm" variant="outline" className="rounded-none border-white/10 hover:bg-white/10" asChild>
                  <a href="/logo.svg" download="contextfort-logotype.svg">
                    <Download className="w-4 h-4 mr-2" /> Download SVG
                  </a>
                </Button>
              </Card>
          </div>
        </section>

        {/* Colors Section */}
        <section id="colors">
          <div className="flex items-center gap-3 mb-12">
            <Palette className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Color Palette</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLORS.map((color) => (
              <Card 
                key={color.name} 
                className="bg-white/5 border-white/10 overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => copyToClipboard(color.hex)}
              >
                <div 
                  className="h-32 w-full transition-transform group-hover:scale-105 duration-500" 
                  style={{ backgroundColor: color.value }}
                />
                <div className="p-6">
                  <h3 className="font-bold mb-1">{color.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{color.desc}</p>
                  <div className="flex items-center justify-between font-mono text-xs bg-black/40 p-2 rounded">
                    <span className="text-primary">{color.hex}</span>
                    <div className="hover:text-primary transition-colors">
                      {copied === color.hex ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography">
          <div className="flex items-center gap-3 mb-12">
            <Type className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Typography</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              className="bg-white/5 border-white/10 p-8 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => copyToClipboard("Space Grotesk")}
            >
              <Badge variant="outline" className="mb-6 border-primary/20 text-primary">Heading / Sans</Badge>
              <h3 className="text-4xl font-bold mb-4 font-sans flex items-center justify-between">
                Space Grotesk
                {copied === "Space Grotesk" && <Check className="w-5 h-5 text-primary" />}
              </h3>
              <p className="text-muted-foreground mb-8 text-sm">A geometric sans-serif that reflects our technical yet human-centric approach.</p>
              <div className="space-y-4 font-sans">
                <p className="text-2xl font-bold tracking-tight">The quick brown fox jumps over the lazy dog.</p>
                <p className="text-xl font-medium">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-lg">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-lg">0123456789!@#$%^&*()</p>
              </div>
            </Card>
            <Card 
              className="bg-white/5 border-white/10 p-8 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => copyToClipboard("JetBrains Mono")}
            >
              <Badge variant="outline" className="mb-6 border-primary/20 text-primary">UI / Mono</Badge>
              <h3 className="text-4xl font-bold mb-4 font-mono flex items-center justify-between">
                JetBrains Mono
                {copied === "JetBrains Mono" && <Check className="w-5 h-5 text-primary" />}
              </h3>
              <p className="text-muted-foreground mb-8 text-sm">Optimized for reading code and technical data in our detection feeds.</p>
              <div className="space-y-4 font-mono">
                <p className="text-xl font-bold">const detect = (agent) =&gt; true;</p>
                <p className="text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-lg">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-lg">0123456789!@#$%^&*()</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Download All */}
        <section className="pt-12">
          <Card className="bg-primary p-12 text-background text-center flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4">Ready to start building?</h2>
            <p className="text-lg font-medium mb-8 opacity-80 max-w-xl">
              Download the complete brand kit including high-resolution assets, guidelines, and presentation templates.
            </p>
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 rounded-none px-12 font-bold h-14 text-lg" asChild>
                <a href="/contextfort-brand-kit.zip" download>
                  <Download className="w-5 h-5 mr-3" />
                  Download Full Brand Kit (.ZIP)
                </a>
              </Button>
              <p className="mt-6 text-sm font-bold opacity-60">Version 1.0.1 • 1 KB</p>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Context Fort, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
