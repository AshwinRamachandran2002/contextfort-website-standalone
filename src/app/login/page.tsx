"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowLeft, Mail, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">ContextFort</span>
          </a>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          {sent ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mb-3">Check your email</h1>
              <p className="text-muted-foreground mb-6">
                We sent a magic link to <span className="text-foreground font-medium">{email}</span>
              </p>
              <Button
                variant="ghost"
                onClick={() => setSent(false)}
                className="text-muted-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Try a different email
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Sign in to ContextFort</h1>
                <p className="text-muted-foreground">
                  Enter your email to receive a magic link
                </p>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 rounded-none border-white/20 bg-white/5"
                />
                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-primary text-background hover:bg-primary/90 rounded-none font-bold"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Send Magic Link"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
