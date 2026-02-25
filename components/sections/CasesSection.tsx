import { cases } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CasesSection() {
  return (
    <section id="work" className="section-pad bg-titanium">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected Stories"
          title="Insights, Case Studies, and Signals"
          description="A compact stream of real delivery stories and domain perspectives."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {cases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="rounded-panel border border-carbon/10 bg-titanium p-7 shadow-soft">
                <p className="font-small-heading text-xs uppercase tracking-[0.16em] text-cobalt">{item.tag}</p>
                <h3 className="mt-5 font-display text-4xl leading-[0.95] text-carbon">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-wolfram">{item.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
