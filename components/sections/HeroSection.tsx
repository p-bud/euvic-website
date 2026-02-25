"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { GridLinesBg } from "@/components/ui/GridLinesBg";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="surface-dark relative overflow-hidden">
      <GridLinesBg strength={55} />
      <span className="hero-e-outline right-0 top-[clamp(5.5rem,10vh,9.5rem)] hidden h-[clamp(22rem,54vh,38rem)] w-[clamp(18rem,28vw,34rem)] lg:block" />

      <div className="section-shell relative z-10 flex flex-col pb-14 pt-8 md:pb-16">
        <nav className="grid grid-cols-[1fr_auto_1fr] items-center text-chrome">
          <div className="hidden items-center gap-10 md:flex">
            <a href="#company" className="text-sm hover:text-titanium">Our Company</a>
            <a href="#services" className="text-sm hover:text-titanium">Our Expertise</a>
            <a href="#work" className="text-sm hover:text-titanium">Our Work</a>
          </div>

          <a className="mx-auto inline-flex items-center" href="#top" aria-label="Euvic home">
            <Image src="/euvic-logo.svg" alt="Euvic" width={178} height={32} className="h-auto w-[110px] md:w-[140px]" />
          </a>

          <div className="ml-auto flex items-center gap-5">
            <a href="#contact" className="hidden text-sm hover:text-titanium md:inline-flex">Start a project ↗</a>
          </div>
        </nav>

        <div className="grid gap-8 pt-10 md:pt-12 lg:min-h-[84vh] lg:grid-cols-12 lg:gap-10 lg:pt-[clamp(2.75rem,7vh,6.75rem)]">
          <motion.div
            className="min-w-0 lg:col-span-7 lg:pl-[clamp(2.25rem,6vw,7rem)] lg:pt-[clamp(0rem,1vh,0.6rem)]"
            initial={reduceMotion ? undefined : { opacity: 0, y: 36 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[clamp(2.8rem,6vw,6.7rem)] font-medium leading-[0.9] tracking-[-0.03em] text-titanium">
              <span className="block md:whitespace-nowrap">
                Engineering <span className="text-chrome/34">Today&apos;s</span>
              </span>
              <span className="mt-1 block md:whitespace-nowrap md:mt-2">Peace of Mind</span>
            </h1>

            <div className="mt-10 h-px w-16 bg-cobalt/55 md:mt-12 md:w-20" />
            <p className="mt-6 max-w-[clamp(22ch,45vw,29ch)] text-[clamp(1.25rem,2.2vw,2.05rem)] leading-[1.17] text-chrome/95">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 md:mt-12">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<span aria-hidden>↗</span>}
                eventName="cta_primary_click"
                eventMeta={{ section: "hero" }}
                className="px-8"
              >
                Work with us
              </Button>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.01em] text-titanium/82 underline decoration-chrome/45 underline-offset-[5px] transition-all duration-300 hover:text-titanium hover:decoration-cobalt md:text-base"
              >
                Explore services
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:col-span-5 lg:block"
            initial={reduceMotion ? undefined : { opacity: 0, x: 44 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </section>
  );
}
