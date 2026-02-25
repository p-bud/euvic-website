import { processSteps } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="section-pad bg-titanium">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="A Delivery Rhythm You Can Trust"
          description="Clear decisions, measured execution, and momentum from discovery to scale."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.07}>
              <article className="rounded-panel border border-cobalt/30 bg-titanium p-7">
                <p className="font-small-heading text-sm font-semibold tracking-[0.12em] text-cobalt">{step.step}</p>
                <h3 className="mt-4 text-2xl font-semibold text-carbon">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-wolfram">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
