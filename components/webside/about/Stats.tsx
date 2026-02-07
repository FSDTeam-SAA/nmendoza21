"use client";

import type { Stat } from "@/data/about";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="container mx-auto bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <InViewAnimationWrapper
              key={index}
              animation="scaleIn"
              duration={600}
              delay={index * 100}
            >
              <div className="text-center transition-transform duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedStatValue value={stat.value} />
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            </InViewAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStatValue({
  value,
  duration = 1800,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numberString = match?.[2] ?? "";
  const suffix = match?.[3] ?? value;
  const parsed = numberString ? Number.parseFloat(numberString) : Number.NaN;
  const decimals = numberString.includes(".")
    ? (numberString.split(".")[1]?.length ?? 0)
    : 0;
  const hasNumber = Number.isFinite(parsed);
  const number = hasNumber ? parsed : 0;

  const [displayValue, setDisplayValue] = useState(hasNumber ? 0 : value);
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(spanRef, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!hasNumber) return;
    if (!isInView) return;

    let start: number | null = null;
    let rafId = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutCubic(progress);
      const current = number * eased;
      setDisplayValue(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplayValue(number);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [duration, hasNumber, isInView, number]);

  const formatted = hasNumber
    ? new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(typeof displayValue === "number" ? displayValue : 0)
    : value;

  return (
    <span ref={spanRef} aria-live="polite">
      {hasNumber ? `${prefix}${formatted}${suffix}` : value}
    </span>
  );
}
