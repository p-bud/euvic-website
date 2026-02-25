"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type MetricCardProps = {
  value: string;
  label: string;
  detail: string;
  accent?: boolean;
};

function parseNumber(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  const suffix = value.replace(/[\d]/g, "");
  return { number: Number(digits || 0), suffix };
}

export function MetricCard({ value, label, detail, accent = false }: MetricCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [{ number, suffix }] = useState(() => parseNumber(value));
  const [display, setDisplay] = useState(reduceMotion || number === 0 ? value : `0${suffix}`);

  useEffect(() => {
    if (!inView || reduceMotion || number === 0) {
      if (inView) setDisplay(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(number * eased);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, number, suffix, reduceMotion, value]);

  return (
    <motion.article
      ref={ref}
      className={`rounded-panel border p-6 shadow-panel ${accent ? "border-cobalt/40 bg-cobalt text-titanium" : "border-cobalt/20 bg-carbon/70 text-titanium"}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <p className="text-xs uppercase tracking-[0.18em] text-chrome/75">{label}</p>
      <p className="mt-3 font-display text-5xl leading-none">{display}</p>
      <p className={`mt-4 text-sm ${accent ? "text-titanium/90" : "text-chrome"}`}>{detail}</p>
    </motion.article>
  );
}
