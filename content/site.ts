export type HeroContent = {
  kicker: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: string;
};

export type PainPointItem = {
  title: string;
  body: string;
};

export type ServiceItem = {
  category: string;
  offerings: string[];
};

export type MetricItem = {
  label: string;
  value: string;
  detail: string;
};

export type CaseItem = {
  title: string;
  tag: string;
  summary: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export type CtaBlock = {
  title: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
};

export const hero: HeroContent = {
  kicker: "Global Capability. Local Understanding.",
  title: "Engineering Peace of Mind",
  subtitle:
    "From intelligent platforms to flexible team augmentation, we deliver robust digital solutions that evolve alongside your business.",
  primaryCta: "Book a Strategy Call",
  secondaryCta: "Explore Services",
  imageAlt: "Euvic engineering team collaborating around a laptop"
};

export const painPoints: PainPointItem[] = [
  { title: "Need to Accelerate", body: "Ship roadmap-critical outcomes faster without sacrificing quality." },
  { title: "Capacity Gaps", body: "Scale delivery talent in weeks, not quarters, with integrated squads." },
  { title: "High Cost Drag", body: "Reduce total cost by aligning investment to measurable business outcomes." },
  { title: "Legacy Friction", body: "Modernize architecture while maintaining business continuity and compliance." },
  { title: "Focus Dilution", body: "Free core teams to work on strategic bets while we execute the backlog." },
  { title: "Execution Risk", body: "De-risk multi-market delivery with strong governance and transparent reporting." }
];

export const differentiators = [
  "Cross-functional teams that plug into your delivery model",
  "US-local leadership paired with global engineering depth",
  "Outcome-based engagement and transparent execution cadence",
  "Long-term partnerships with high retention and continuity"
];

export const services: ServiceItem[] = [
  { category: "Software Engineering", offerings: ["Platform Development", "Product Engineering", "Quality Engineering"] },
  { category: "Data and AI", offerings: ["AI Readiness", "Applied AI Solutions", "Data Platforms"] },
  { category: "Cloud and DevOps", offerings: ["Cloud Migration", "SRE and Reliability", "Security Hardening"] },
  { category: "Advisory", offerings: ["Digital Strategy", "Architecture Reviews", "Delivery Transformation"] }
];

export const metrics: MetricItem[] = [
  { label: "Company Formation", value: "2005", detail: "Established legacy in software delivery" },
  { label: "Delivered Projects", value: "1000+", detail: "Across enterprise and scale-up programs" },
  { label: "Satisfied Clients", value: "100+", detail: "Long-term relationships across industries" },
  { label: "Software Engineers", value: "6000+", detail: "Highly skilled specialists and domain experts" }
];

export const cases: CaseItem[] = [
  {
    title: "Modernizing Legal Expert Access",
    tag: "Case Study",
    summary: "Connected legal users with domain specialists through a secure digital platform redesign."
  },
  {
    title: "SOAR-Driven Security Operations",
    tag: "Podcast",
    summary: "How SIEM, EDR, and SOAR transformed incident response velocity and confidence."
  },
  {
    title: "Smart Logistics Automation",
    tag: "Article",
    summary: "RPA rollout that reduced manual operations and increased logistics throughput."
  }
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discover", body: "Align on outcomes, constraints, timeline, and success metrics." },
  { step: "02", title: "Architect", body: "Shape the technical and delivery blueprint with decision clarity." },
  { step: "03", title: "Execute", body: "Deliver in measurable increments with active risk management." },
  { step: "04", title: "Scale", body: "Expand capabilities and optimize for long-term operational impact." }
];

export const finalCta: CtaBlock = {
  title: "Build Your Next Advantage with Euvic",
  body: "Tell us what you are solving, and we will propose a practical delivery path within days.",
  primaryCta: "Start the Conversation",
  secondaryCta: "Download Capabilities"
};
