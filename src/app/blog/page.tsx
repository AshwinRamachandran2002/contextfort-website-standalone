"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Calendar, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Coming Soon",
    date: "2026-01-18",
    excerpt: "Blog posts coming soon...",
    slug: "#",
    tags: ["Product Updates"]
  }
];

export default function BlogPage() {
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
              <a href="/#how-it-works">How it works</a>
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

      {/* Blog Header */}
      <section className="relative pt-32 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Updates, insights, and news from the ContextFort team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer h-full flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </Card>
              </motion.div>
            ))}
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
