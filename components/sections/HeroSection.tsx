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
      <span className="hero-e-outline right-0 top-[14%] hidden h-[58vh] w-[31vw] lg:block" />

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

        <div className="grid gap-8 pt-10 md:pt-12 lg:min-h-[78vh] lg:grid-cols-12 lg:gap-10 lg:pt-20">
          <motion.div
            className="min-w-0 lg:col-span-6 lg:pl-10 lg:pt-8 xl:pl-16 xl:pt-10"
            initial={reduceMotion ? undefined : { opacity: 0, y: 36 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-[-0.01em] text-titanium sm:text-[3rem] md:text-[4.1rem] lg:text-[4.8rem] xl:text-[5.8rem]">
              <span className="block whitespace-nowrap">Engineering Today&apos;s</span>
              <span className="mt-2 block whitespace-nowrap text-titanium md:mt-3">Peace of Mind</span>
            </h1>

            <p className="mt-10 max-w-[700px] text-base leading-relaxed text-chrome sm:text-lg md:mt-12 md:text-[1.95rem] md:leading-[1.3]">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-12">
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
              <Button
                href="#services"
                variant="secondary"
                size="lg"
                icon={<span aria-hidden>→</span>}
                eventName="cta_secondary_click"
                eventMeta={{ section: "hero" }}
                className="px-8"
              >
                Explore services
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:col-span-6 lg:block"
            initial={reduceMotion ? undefined : { opacity: 0, x: 44 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </section>
  );
}
