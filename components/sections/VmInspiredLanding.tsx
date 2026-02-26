"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { GridLinesBg } from "@/components/ui/GridLinesBg";

const proofs = [
  { value: "6000+", label: "Engineers" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "20+", label: "Years in Delivery" }
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

export function VmInspiredLanding() {
  return (
    <main className="surface-dark">
      <section className="relative overflow-hidden border-b border-chrome/10">
        <GridLinesBg strength={40} />
        <span className="hero-e-outline right-0 top-[16%] hidden h-[56vh] w-[34vw] lg:block" />

        <div className="section-shell relative z-10 pb-20 pt-8 md:pb-24">
          <nav className="grid grid-cols-[1fr_auto_1fr] items-center text-chrome">
            <div className="hidden items-center gap-9 md:flex">
              <a href="#company" className="font-small-heading text-sm hover:text-titanium">Company</a>
              <a href="#services" className="font-small-heading text-sm hover:text-titanium">Expertise</a>
              <a href="#work" className="font-small-heading text-sm hover:text-titanium">Work</a>
            </div>
            <a className="mx-auto inline-flex items-center" href="#top" aria-label="Euvic home">
              <Image src="/euvic-logo.svg" alt="Euvic" width={178} height={32} className="h-auto w-[110px] md:w-[148px]" />
            </a>
            <div className="ml-auto">
              <a href="#contact" className="font-small-heading hidden text-sm hover:text-titanium md:inline-flex">Start a project ↗</a>
            </div>
          </nav>

          <div className="grid gap-14 pt-16 lg:grid-cols-12 lg:gap-14 lg:pt-24">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[2.8rem] font-medium leading-[0.92] tracking-[-0.02em] text-titanium sm:text-[3.7rem] md:text-[5rem] xl:text-[6rem]">
                <span className="block">Building the Next Wave</span>
                <span className="block text-chrome/30">of Trusted AI Products</span>
              </h1>
              <p className="mt-10 max-w-[30ch] text-xl leading-[1.24] text-chrome md:text-[1.9rem]">
                Euvic helps ambitious companies launch, modernize, and scale digital products with measurable business impact.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="#contact" size="lg" icon={<span aria-hidden>↗</span>}>Work with Euvic</Button>
                <Button href="#services" variant="secondary" size="lg" icon={<span aria-hidden>→</span>}>Explore expertise</Button>
              </div>
            </div>

            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="absolute right-0 top-0 h-[34rem] w-[30rem] rounded-[2rem] border border-chrome/22" />
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="section-pad border-b border-carbon/10 bg-titanium text-carbon">
        <div className="section-shell grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-cobalt/85">Built for Complexity</p>
            <h2 className="font-display mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.015em] md:text-7xl">
              Deep engineering craft with product-level accountability.
            </h2>
            <p className="mt-7 max-w-[30ch] text-xl leading-[1.3] text-wolfram">
              We partner with leaders who need real technical depth, faster iterations, and delivery confidence in AI-heavy roadmaps.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-panel overflow-hidden border border-carbon/18 bg-polished">
              <Image
                src="/hero-team.png"
                alt="Euvic team collaboration"
                width={1240}
                height={820}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="section-pad border-b border-chrome/10">
        <div className="section-shell">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {proofs.map((item) => (
              <article key={item.label} className="rounded-panel border border-cobalt/25 bg-carbon/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/55">
                <p className="font-display text-5xl font-medium leading-none text-titanium md:text-6xl">{item.value}</p>
                <p className="font-small-heading mt-4 text-xs uppercase tracking-[0.16em] text-chrome/80">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-pad border-b border-carbon/10 bg-titanium text-carbon">
        <div className="section-shell">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-cobalt/85">Capabilities</p>
              <h2 className="font-display mt-4 text-5xl font-medium leading-[0.96] tracking-[-0.015em] md:text-7xl">What Sets Euvic Apart</h2>
            </div>
            <p className="max-w-xl text-lg text-wolfram">A sharp mix of enterprise rigor and startup-level velocity, built for AI-era competition.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {offerings.map((item) => (
              <article key={item.title} className="rounded-panel border border-carbon/18 bg-titanium p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/50 hover:bg-polished/35">
                <h3 className="font-display text-4xl font-medium leading-[0.95] tracking-[-0.01em] text-carbon">{item.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-wolfram">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-pad border-b border-chrome/10">
        <div className="section-shell grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-cobalt/85">Industries</p>
            <h2 className="font-display mt-4 text-5xl leading-[0.95] text-titanium md:text-6xl">Delivered across mission-critical sectors.</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <div key={industry} className="rounded-panel border border-chrome/18 bg-carbon/45 p-5">
                  <p className="text-xl text-titanium">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="section-shell">
          <div className="cta-gradient rounded-panel p-[1px]">
            <div className="rounded-panel bg-carbon px-8 py-12 text-titanium md:px-12 md:py-16">
              <p className="font-small-heading text-xs uppercase tracking-[0.2em] text-chrome/85">Let&apos;s Build</p>
              <h2 className="font-display mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.015em] md:text-7xl">
                Looking for a trusted technology partner for your AI roadmap?
              </h2>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="mailto:hello@euvic.com" size="lg" icon={<span aria-hidden>↗</span>}>Start a project</Button>
                <Button href="#top" variant="secondary" size="lg" icon={<span aria-hidden>↑</span>}>Back to top</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
