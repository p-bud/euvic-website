"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type GridLinesBgProps = {
  strength?: number;
};

export function GridLinesBg({ strength = 50 }: GridLinesBgProps) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, strength]);

  if (reduceMotion) {
    return <div className="grid-lines" aria-hidden />;
  }

  return <motion.div className="grid-lines" style={{ y }} aria-hidden />;
}
