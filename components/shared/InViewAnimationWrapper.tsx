"use client";

import React, { useEffect, useRef, useState } from "react";

interface InViewAnimationWrapperProps {
  children: React.ReactNode;
  animation?:
    | "fadeIn"
    | "slideInUp"
    | "slideInLeft"
    | "slideInRight"
    | "scaleIn"
    | "slideInDown";
  duration?: number; // in milliseconds
  delay?: number; // in milliseconds
  className?: string;
}


export default function InViewAnimationWrapper({
  children,
  animation = "fadeIn",
  duration = 600,
  delay = 0,
  className = "",
}: InViewAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    // Listen for changes in preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only once when element enters viewport
        if (entry.isIntersecting) {
          setIsInView(true);
          // Unobserve to prevent repeated animations
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Build animation style
  const getAnimationStyle = (): React.CSSProperties => {
    if (prefersReducedMotion) {
      // Respect accessibility preference - no animation
      return { opacity: 1 };
    }

    if (!isInView) {
      // Before entering viewport - set initial state based on animation type
      switch (animation) {
        case "fadeIn":
          return { opacity: 0 };
        case "slideInUp":
          return { opacity: 0, transform: "translateY(30px)" };
        case "slideInDown":
          return { opacity: 0, transform: "translateY(-20px)" };
        case "slideInLeft":
          return { opacity: 0, transform: "translateX(-30px)" };
        case "slideInRight":
          return { opacity: 0, transform: "translateX(30px)" };
        case "scaleIn":
          return { opacity: 0, transform: "scale(0.95)" };
        default:
          return { opacity: 0 };
      }
    }

    // When in view - animate to final state
    const animationDuration = `${duration}ms`;
    const animationDelay = `${delay}ms`;
    const easing = "cubic-bezier(0.4, 0, 0.2, 1)"; // Material Design easing

    return {
      animation: `${animation} ${animationDuration} ${easing} ${animationDelay} forwards`,
    };
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyle()}>
      {children}
    </div>
  );
}
