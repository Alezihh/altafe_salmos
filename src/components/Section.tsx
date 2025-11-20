import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted";
}

export function Section({ 
  children, 
  className = "", 
  id,
  variant = "default" 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-12 md:py-20 px-4 sm:px-6 lg:px-8",
        variant === "muted" && "bg-muted/30",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
