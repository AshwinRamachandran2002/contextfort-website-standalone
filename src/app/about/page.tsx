"use client";

import React from "react";
import { Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-start p-20 gap-20">
      {/* 1. Logo + ContextFort */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-background" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">ContextFort</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a href="/logo.svg" download="logo.svg">
              <Download className="w-4 h-4" />
              Download Logo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a href="/name.svg" download="name.svg">
              <Download className="w-4 h-4" />
              Download Name
            </a>
          </Button>
        </div>
      </div>

      {/* 2. Logo + Ashwin Ram */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-background" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Ashwin Ram</span>
        </div>
      </div>

        {/* 3. Ashwin, Co-Founder (Green, transparent) */}
        <div className="flex flex-col gap-4">
          <div className="bg-transparent">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Ashwin, Co-Founder
            </span>
          </div>
          <Button variant="outline" size="sm" asChild className="gap-2 max-w-fit">
            <a href="/title.svg" download="ashwin-co-founder.svg">
              <Download className="w-4 h-4" />
              Download Ashwin, Co-Founder
            </a>
          </Button>
        </div>
    </div>
  );
}
