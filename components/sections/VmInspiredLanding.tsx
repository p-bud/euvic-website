"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GridLinesBg } from "@/components/ui/GridLinesBg";

const proofs = [
  { value: "6000+", label: "Engineers", note: "Global delivery capacity", detail: "Dedicated AI and data talent pods ready in weeks." },
  { value: "1000+", label: "Projects Delivered", note: "Across regulated industries", detail: "Execution playbooks tuned for enterprise risk and speed." },
  { value: "100+", label: "Enterprise Clients", note: "From scaleups to Fortune 500", detail: "Long-running partnerships with measurable roadmap outcomes." },
  { value: "20+", label: "Years in Delivery", note: "Proven execution model", detail: "Operational maturity for mission-critical software programs." }
];

const offerings = [
  {
    title: "AI-Native Product Teams",
    text: "Ship secure, outcome-focused AI features with squads that blend product, data, and engineering."
  },
  {
    title: "Modernization at Speed",
    text: "Move legacy systems to scalable cloud architecture while protecting business continuity."
  },
  {
    title: "Enterprise Delivery Assurance",
    text: "Transparent governance, measurable milestones, and predictable execution from day one."
  },
  {
    title: "Global Scale, Local Leadership",
    text: "US-facing leadership with deep global engineering capacity across regulated industries."
  }
];

const industries = ["Fintech", "Healthcare", "Logistics", "Retail", "Manufacturing", "Public Sector"];

const rotatingTerms = ["AI Products", "AI Platforms", "AI Operations", "AI Ecosystems"];

const liveSignalSeed = [
  { label: "Deploys / week", base: 42, suffix: "", precision: 0 },
  { label: "Model eval pass", base: 98.4, suffix: "%", precision: 1 },
  { label: "Incident MTTR", base: 22, suffix: " min", precision: 0 },
  { label: "On-time sprints", base: 96.1, suffix: "%", precision: 1 }
];

const spotlightCards = [
  {
    title: "Faster MVP Launches",
    text: "Deployed AI copilots and workflow assistants in under 12 weeks with clear business KPIs.",
    cta: "View approach"
  },
  {
    title: "Modern Core Platforms",
    text: "Re-architected legacy systems into resilient cloud-native services without service disruption.",
    cta: "See architecture"
  },
  {
    title: "Trusted Delivery Governance",
    text: "Executive-level reporting, risk controls, and measurable sprint outcomes from day one.",
    cta: "Explore model"
  },
  {
    title: "AI Readiness Programs",
    text: "From data foundations to model operations, we operationalize AI for regulated teams.",
    cta: "Open playbook"
  }
];

function fadeUp(delay = 0, distance = 56) {
  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-8%" },
    transition: { duration: 0.9, delay, ease: [0.2, 0.9, 0.2, 1] }
  };
}

function staggerBlock(delay = 0) {
  return {
    initial: {},
    whileInView: {},
    viewport: { once: true, margin: "-8%" },
    transition: { staggerChildren: 0.1, delayChildren: delay }
  };
}

export function VmInspiredLanding() {
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [termIndex, setTermIndex] = useState(0);
  const [signalStep, setSignalStep] = useState(0);
  const [glowPoint, setGlowPoint] = useState({ x: 72, y: 18 });
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setTermIndex((current) => (current + 1) % rotatingTerms.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setSignalStep((current) => current + 1);
    }, 1750);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const prevSlide = () => setActiveSlide((current) => (current - 1 + spotlightCards.length) % spotlightCards.length);
  const nextSlide = () => setActiveSlide((current) => (current + 1) % spotlightCards.length);

  const signals = liveSignalSeed.map((signal, index) => {
    const delta = Math.sin((signalStep + index * 1.7) * 0.72) * (signal.precision ? 0.5 : 2);
    const value = signal.base + delta;
    return {
      ...signal,
      value: signal.precision ? value.toFixed(signal.precision) : Math.round(value).toString()
    };
  });

  const handleHeroMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGlowPoint({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setGlowPoint({ x: 72, y: 18 });
  };

  return (
    <main className="surface-dark" id="top">
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-chrome/10"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <GridLinesBg strength={34} />
        {!reduceMotion ? (
          <div
            className="hero-cursor-glow"
            style={{
              background: `radial-gradient(circle at ${glowPoint.x}% ${glowPoint.y}%, rgba(53, 72, 254, 0.42), rgba(53, 72, 254, 0.14) 28%, transparent 62%)`
            }}
            aria-hidden
          />
        ) : null}

        <div className="section-shell relative z-10 pb-24 pt-8 md:pb-28">
          <nav className="grid grid-cols-[1fr_auto_1fr] items-center text-chrome">
            <div className="hidden items-center gap-9 md:flex">
              <a href="#company" className="font-small-heading text-sm transition-colors hover:text-titanium">Company</a>
              <a href="#services" className="font-small-heading text-sm transition-colors hover:text-titanium">Expertise</a>
              <a href="#work" className="font-small-heading text-sm transition-colors hover:text-titanium">Work</a>
            </div>
            <a className="mx-auto inline-flex items-center" href="#top" aria-label="Euvic home">
              <Image src="/euvic-logo.svg" alt="Euvic" width={178} height={32} className="h-auto w-[110px] md:w-[148px]" />
            </a>
            <div className="ml-auto">
              <a href="#contact" className="font-small-heading hidden text-sm transition-colors hover:text-titanium md:inline-flex">Start a project ↗</a>
            </div>
          </nav>

          <div className="grid gap-14 pt-16 lg:pt-24">
            <motion.div className="max-w-[64rem] lg:pl-10 xl:pl-16" {...fadeUp(0.04)}>
              <h1 className="font-display max-w-[12ch] text-[3.1rem] font-medium leading-[0.92] tracking-[-0.022em] text-titanium sm:text-[4.2rem] lg:text-[5.3rem] 2xl:text-[5.8rem]">
                <span className="block">Building the Next Wave</span>
                <span className="block text-chrome/30">of Trusted</span>
                <span className="block text-chrome/30">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingTerms[termIndex]}
                      initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -18, filter: "blur(6px)" }}
                      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block min-w-[10ch] text-cobalt"
                    >
                      {rotatingTerms[termIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <p className="mt-10 max-w-[23ch] text-[1.82rem] leading-[1.14] text-chrome sm:text-[1.94rem]">
                Euvic helps ambitious companies launch, modernize, and scale digital products with measurable business impact.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="#contact" size="lg" icon={<span aria-hidden>↗</span>}>Start AI Roadmap</Button>
                <Button href="#services" variant="secondary" size="lg" icon={<span aria-hidden>→</span>}>See Delivery Model</Button>
              </div>
            </motion.div>

          </div>

          <motion.div className="mt-16 md:mt-20" {...fadeUp(0.12)}>
            <div className="signal-strip">
              <p className="font-small-heading mb-3 text-[0.68rem] uppercase tracking-[0.2em] text-chrome/75">Live Delivery Signals</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {signals.map((signal) => (
                  <div key={signal.label} className="signal-card vm-hover-card">
                    <div className="mb-2 flex items-center gap-2">
                      <span className={`signal-dot ${reduceMotion ? "" : "signal-dot-live"}`} />
                      <span className="text-[0.75rem] uppercase tracking-[0.14em] text-chrome/72">{signal.label}</span>
                    </div>
                    <p className="font-display text-[1.9rem] leading-none text-titanium sm:text-[2.25rem]">
                      {signal.value}
                      <span className="text-chrome/80">{signal.suffix}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="company" className="section-pad border-b border-carbon/10 bg-titanium text-carbon">
        <div className="section-shell grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div className="lg:col-span-6" {...fadeUp()}>
            <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-cobalt/85">Built for Complexity</p>
            <h2 className="font-display mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.015em] md:text-7xl">
              Deep engineering craft with product-level accountability.
            </h2>
            <p className="mt-7 max-w-[30ch] text-xl leading-[1.3] text-wolfram">
              We partner with leaders who need real technical depth, faster iterations, and delivery confidence in AI-heavy roadmaps.
            </p>
          </motion.div>
          <motion.div className="lg:col-span-6" {...fadeUp(0.08)}>
            <div className="rounded-panel ai-system-visual border border-carbon/18">
              <div className="ai-system-grid" />
              <div className={`ai-system-orb ${reduceMotion ? "" : "ai-system-orb-animate"}`} />
              <div className="ai-system-node ai-system-node-a" />
              <div className="ai-system-node ai-system-node-b" />
              <div className="ai-system-node ai-system-node-c" />
              <div className="ai-system-node ai-system-node-d" />
              <div className="ai-system-link ai-system-link-1" />
              <div className="ai-system-link ai-system-link-2" />
              <div className="ai-system-metric">
                <p className="font-small-heading text-[0.68rem] uppercase tracking-[0.16em] text-chrome/72">Model Runtime</p>
                <p className="font-display mt-2 text-[1.8rem] leading-none text-titanium">99.97%</p>
                <p className="mt-1 text-sm text-chrome/78">SLA stability across production regions</p>
              </div>
              <div className="ai-system-chip">AI Delivery Mesh</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="transition-band" aria-hidden>
        <div className="section-shell">
          <div className="transition-line" />
        </div>
      </section>

      <section id="proof" className="section-pad border-b border-chrome/10">
        <div className="section-shell">
          <motion.h2 className="font-display mb-10 text-[2.25rem] leading-[0.94] text-titanium sm:text-[3.1rem]" {...fadeUp()}>
            Proof we deliver, by the numbers.
          </motion.h2>
          <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" {...staggerBlock(0.05)}>
            {proofs.map((item, index) => (
              <motion.article
                key={item.label}
                className="glow-tile proof-card vm-hover-card rounded-panel border border-cobalt/28 p-6"
                {...fadeUp(0, 64)}
                whileHover={reduceMotion ? undefined : { y: -4, borderColor: "rgba(0,114,221,0.55)" }}
              >
                <p className="font-display text-5xl font-medium leading-none text-titanium md:text-6xl">{item.value}</p>
                <p className="font-small-heading mt-4 text-xs uppercase tracking-[0.16em] text-chrome/88">{item.label}</p>
                <p className="mt-3 text-sm text-chrome/80">{item.note}</p>
                <p className="proof-card-detail mt-3 text-sm text-titanium/88">{item.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="section-pad border-b border-carbon/10 bg-titanium text-carbon">
        <div className="section-shell">
          <motion.div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between" {...fadeUp()}>
            <div>
              <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-cobalt/85">Capabilities</p>
              <h2 className="font-display mt-4 text-5xl font-medium leading-[0.96] tracking-[-0.015em] md:text-7xl">What Sets Euvic Apart</h2>
            </div>
            <p className="max-w-xl text-lg text-wolfram">A sharp mix of enterprise rigor and startup-level velocity, built for AI-era competition.</p>
          </motion.div>

          <motion.div className="grid gap-4 md:grid-cols-2" {...staggerBlock(0.06)}>
            {offerings.map((item, index) => (
              <motion.article
                key={item.title}
                className="vm-hover-card rounded-panel border border-carbon/18 bg-titanium p-7"
                {...fadeUp(0, 52)}
                whileHover={reduceMotion ? undefined : { y: -4, borderColor: "rgba(0,114,221,0.42)", backgroundColor: "rgba(215,221,228,0.24)" }}
              >
                <h3 className="font-display text-4xl font-medium leading-[0.95] tracking-[-0.01em] text-carbon">{item.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-wolfram">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="transition-band" aria-hidden>
        <div className="section-shell">
          <div className="transition-line" />
        </div>
      </section>

      <section id="work" className="section-pad border-b border-chrome/10">
        <div className="section-shell grid gap-8 lg:grid-cols-12">
          <motion.div className="lg:col-span-4" {...fadeUp()}>
            <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-cobalt/85">Industries</p>
            <h2 className="font-display mt-4 text-5xl leading-[0.95] text-titanium md:text-6xl">Delivered across mission-critical sectors.</h2>
          </motion.div>
          <motion.div className="lg:col-span-8" {...fadeUp(0.08)}>
            <motion.div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" {...staggerBlock(0.04)}>
              {industries.map((industry) => (
                <motion.div key={industry} className="vm-hover-card rounded-panel border border-chrome/18 bg-carbon/45 p-5 transition-colors duration-300 hover:border-cobalt/45" {...fadeUp(0, 40)}>
                  <p className="text-xl text-titanium">{industry}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad border-b border-chrome/10">
        <div className="section-shell">
          <motion.div className="mb-8 flex items-end justify-between" {...fadeUp()}>
            <h2 className="font-display text-[2.25rem] leading-[0.94] text-titanium sm:text-[3.1rem]">Recent wins and momentum.</h2>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={prevSlide}
                className="h-11 w-11 rounded-full border border-chrome/40 text-chrome transition-colors hover:border-titanium hover:text-titanium"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="h-11 w-11 rounded-full border border-chrome/40 text-chrome transition-colors hover:border-titanium hover:text-titanium"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={reduceMotion ? undefined : { x: `-${activeSlide * 100}%` }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              {spotlightCards.map((card) => (
                <article key={card.title} className="vm-hover-card mr-4 min-w-full rounded-panel border border-chrome/18 bg-carbon/45 p-8 md:p-10">
                  <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-cobalt/85">Case Signal</p>
                  <h3 className="font-display mt-4 max-w-[16ch] text-4xl leading-[0.95] text-titanium md:text-5xl">{card.title}</h3>
                  <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-chrome">{card.text}</p>
                  <a href="#contact" className="mt-7 inline-flex text-base text-titanium underline underline-offset-4 hover:text-cobalt">{card.cta} ↗</a>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="mt-5 flex gap-2 sm:hidden">
            <button
              type="button"
              onClick={prevSlide}
              className="h-11 w-11 rounded-full border border-chrome/40 text-chrome"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="h-11 w-11 rounded-full border border-chrome/40 text-chrome"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="anchor-target pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="section-shell">
          <motion.div className="cta-gradient rounded-panel p-[1px]" {...fadeUp()}>
            <div className="rounded-panel bg-carbon px-8 py-12 text-titanium md:px-12 md:py-16">
              <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-chrome/85">Let&apos;s Build</p>
              <h2 className="font-display mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.015em] md:text-7xl">
                Looking for a trusted technology partner for your AI roadmap?
              </h2>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="mailto:hello@euvic.com" size="lg" icon={<span aria-hidden>↗</span>}>Start AI Roadmap</Button>
                <Button href="#top" variant="secondary" size="lg" icon={<span aria-hidden>↑</span>}>Back to top</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
