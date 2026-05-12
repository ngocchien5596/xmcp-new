'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountUp({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(prefix + (0).toFixed(decimals) + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = progress * end;
        setDisplayValue(prefix + currentCount.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        }) + suffix);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration, decimals, prefix, suffix]);

  return <span ref={ref}>{displayValue}</span>;
}
