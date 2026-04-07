"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimationType =
  | "fade-in-up"
  | "fade-in-left"
  | "fade-in-right"
  | "scale-in";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const animationClassMap: Record<AnimationType, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "scale-in": "animate-scale-in",
};

export function AnimateOnScroll({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply animation after configured delay
          setTimeout(() => {
            el.classList.add(animationClassMap[animation]);
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay, threshold]);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
}
