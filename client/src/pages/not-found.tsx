import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-card p-10 rounded-3xl border border-border shadow-2xl">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Plane className="w-10 h-10 transform -rotate-45" />
        </div>
        
        <h1 className="text-6xl font-bold font-display text-foreground">404</h1>
        
        <h2 className="text-2xl font-bold text-foreground">Lost your way?</h2>
        
        <p className="text-muted-foreground">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-bold">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
