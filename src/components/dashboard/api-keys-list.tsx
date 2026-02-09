"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, Copy, Check, Trash2, RefreshCw, Loader2, AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ApiKey {
  id: string;
  key_prefix: string;
  name: string;
  is_active: boolean;
  created_at: string;
  revoked_at: string | null;
  last_used_at: string | null;
}

interface ApiKeysListProps {
  keys: ApiKey[];
  subscriptionActive: boolean;
  onKeysChanged: () => void;
}

export function ApiKeysList({ keys, subscriptionActive, onKeysChanged }: ApiKeysListProps) {
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [revoking, setRevoking] = useState<string | null>(null);

  const activeKey = keys.find((k) => k.is_active);

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/keys/generate", { method: "POST" });
      const data = await res.json();
      if (data.key) {
        setGeneratedKey(data.key);
        onKeysChanged();
      }
    } finally {
      setGenerating(false);
    }
  };

  const handleRevoke = async (keyId: string) => {
    setRevoking(keyId);
    try {
      await fetch("/api/keys/revoke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyId }),
      });
      setGeneratedKey(null);
      onKeysChanged();
    } finally {
      setRevoking(null);
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!subscriptionActive) {
    return (
      <Card className="border-white/10 bg-white/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="w-5 h-5" />
            API Keys
          </CardTitle>
          <CardDescription>
            Subscribe to generate your API key.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5" />
              API Keys
            </CardTitle>
            <CardDescription className="mt-1">
              Use your API key to authenticate requests with the npm package.
            </CardDescription>
          </div>
          {activeKey ? (
            <Button
              variant="outline"
              onClick={handleGenerate}
              disabled={generating}
              className="rounded-none border-white/20"
            >
              {generating ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={handleGenerate}
              disabled={generating}
              className="bg-primary text-background hover:bg-primary/90 rounded-none"
            >
              {generating ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Generate API Key"
              )}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Show newly generated key (one-time display) */}
        {generatedKey && (
          <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-md space-y-3">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              Copy your API key now. It won&apos;t be shown again.
            </div>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-black/30 px-3 py-2 rounded text-sm font-mono break-all">
                {generatedKey}
              </code>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(generatedKey)}
                className="shrink-0"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        )}

        {/* List of keys */}
        {keys.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No API keys yet. Generate one to get started.
          </p>
        ) : (
          <div className="space-y-2">
            {keys.map((key) => (
              <div
                key={key.id}
                className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-md"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-mono">
                      {key.key_prefix}{"••••••••••••••••"}
                    </code>
                    {key.is_active ? (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                        Revoked
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Created {new Date(key.created_at).toLocaleDateString()}
                  </p>
                </div>
                {key.is_active && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        disabled={revoking === key.id}
                      >
                        {revoking === key.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-background border-white/10">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Revoke API Key</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will immediately invalidate this API key. Any requests using it will fail.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-none">Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleRevoke(key.id)}
                          className="bg-red-500 hover:bg-red-600 rounded-none"
                        >
                          Revoke Key
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Usage example */}
        {activeKey && (
          <div className="mt-6 bg-white/5 border border-white/10 p-4 rounded-md">
            <p className="text-sm font-medium mb-2">Quick Start</p>
            <pre className="text-xs text-muted-foreground font-mono overflow-x-auto">
{`npm install -g @contextfort-ai/openclaw-secure
openclaw-secure set-key ${activeKey.key_prefix}••••••••
openclaw-secure enable`}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
