"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, ExternalLink, Loader2 } from "lucide-react";

interface SubscriptionCardProps {
  status: string;
  loading: boolean;
}

export function SubscriptionCard({ status, loading }: SubscriptionCardProps) {
  const isActive = status === "active";

  const handleSubscribe = async () => {
    const res = await fetch("/api/stripe/create-checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  const handleManage = async () => {
    const res = await fetch("/api/stripe/portal", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  if (loading) {
    return (
      <Card className="border-white/10 bg-white/5">
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Subscription
        </CardTitle>
        <CardDescription>
          {isActive
            ? "Your subscription is active. You have full API access."
            : "Subscribe to get your API key and start using ContextFort."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="font-medium">
              {isActive ? (
                <span className="text-green-400">Active</span>
              ) : status === "canceled" ? (
                <span className="text-yellow-400">Canceled</span>
              ) : (
                <span className="text-muted-foreground">Inactive</span>
              )}
            </p>
          </div>
          {isActive ? (
            <Button
              variant="outline"
              onClick={handleManage}
              className="rounded-none border-white/20"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Manage Billing
            </Button>
          ) : (
            <Button
              onClick={handleSubscribe}
              className="bg-primary text-background hover:bg-primary/90 rounded-none"
            >
              Subscribe — $2/mo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
