"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  eventName?: string;
  eventMeta?: Record<string, string>;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-cobalt text-titanium hover:bg-cobalt/90",
  secondary: "bg-steel text-titanium hover:bg-steel/90",
  ghost: "bg-transparent text-carbon border border-carbon/25 hover:bg-carbon/5"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base"
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  eventName,
  eventMeta
}: ButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 170, damping: 16, mass: 0.2 });
  const smoothY = useSpring(y, { stiffness: 170, damping: 16, mass: 0.2 });
  const iconShift = useTransform(smoothX, [-12, 12], [-2, 4]);

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.22);
    y.set(offsetY * 0.22);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classNames = `inline-flex items-center gap-2 rounded-pill font-medium transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const onClick = () => {
    if (eventName) trackEvent(eventName, eventMeta);
  };

  const content = (
    <>
      <span>{children}</span>
      {icon ? <motion.span style={{ x: iconShift }}>{icon}</motion.span> : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classNames}
        style={{ x: smoothX, y: smoothY }}
        onMouseMove={onMouseMove}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={classNames}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}
