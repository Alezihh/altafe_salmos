import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero";
}

export function CTAButton({ 
  href = "#SALMOS", 
  children, 
  className = "",
  variant = "default"
}: CTAButtonProps) {
  const isExternal = href.startsWith('http');
  
  const buttonClasses = variant === "hero" 
    ? "bg-[hsl(85,70%,45%)] hover:bg-[hsl(85,70%,40%)] text-white text-base md:text-lg font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    : "bg-[hsl(85,70%,45%)] hover:bg-[hsl(85,70%,40%)] text-white font-semibold";

  if (isExternal) {
    return (
      <Button 
        asChild 
        size="lg"
        className={`${buttonClasses} ${className}`}
      >
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button 
      asChild 
      size="lg"
      className={`${buttonClasses} ${className}`}
    >
      <a href={href}>
        {children}
      </a>
    </Button>
  );
}
