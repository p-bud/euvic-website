import { differentiators } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DifferentiatorsSection() {
  return (
    <section className="surface-dark section-pad relative overflow-hidden">
      <span className="modular-frame left-[14%] top-0 h-full w-0" />
      <div className="section-shell relative z-10">
        <SectionHeading
          eyebrow="What Sets Us Apart"
          title="Execution Discipline with Product Thinking"
          description="Local market fluency, global engineering depth, and a cadence built for accountability."
          invert
        />
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <article className="rounded-panel border border-chrome/20 bg-carbon/35 p-8">
                <p className="text-2xl leading-[1.3] text-titanium">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
