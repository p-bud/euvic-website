import { painPoints } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function PainPointsSection() {
  return (
    <section id="company" className="surface-dark section-pad relative overflow-hidden">
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cobalt/80">Positioning</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.9] tracking-[-0.03em] text-titanium sm:text-6xl md:text-7xl lg:text-[6.2rem]">
              Drawing on decades of expertise.
            </h2>
            <p className="mt-7 max-w-[19ch] text-[1.65rem] leading-[1.04] tracking-[-0.02em] text-chrome sm:text-[1.85rem] md:mt-10 md:text-[2.35rem]">
              We build robust digital products with practical, high-accountability delivery partners.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-24">
          <div className="grid gap-4 md:grid-cols-2">
            {painPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-panel border border-chrome/28 bg-gradient-to-b from-carbon/70 to-carbon/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/55 hover:from-carbon/88 hover:to-carbon/62 md:p-7">
                  <h3 className="text-xl font-medium tracking-[-0.01em] text-titanium md:text-[1.65rem]">{item.title}</h3>
                  <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-chrome/92 md:text-base">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
