"use client";

import React from "react";
import { Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-start p-20 gap-20">
      {/* 1. Logo + ContextFort */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary flex items-center justify-center">
          <Shield className="w-5 h-5 text-background" />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase">ContextFort</span>
      </div>

      {/* 2. Logo + Ashwin Ram */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary flex items-center justify-center">
          <Shield className="w-5 h-5 text-background" />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase">Ashwin Ram</span>
      </div>

      {/* 3. Co-Founder & CEO (Green, transparent) */}
      <div className="bg-transparent">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">
          Co-Founder & CEO
        </span>
      </div>
    </div>
  );
}
