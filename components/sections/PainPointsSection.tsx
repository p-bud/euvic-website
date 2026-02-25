import { painPoints } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function PainPointsSection() {
  return (
    <section id="company" className="surface-dark section-pad relative overflow-hidden">
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.94] text-titanium sm:text-5xl md:text-7xl">
              Drawing on decades of expertise.
            </h2>
            <p className="mt-6 max-w-[20ch] text-lg leading-[1.35] text-chrome sm:text-xl md:mt-8 md:text-[2rem]">
              We build robust digital products with practical, high-accountability delivery partners.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-16">
          <div className="grid gap-3 md:grid-cols-2">
            {painPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-panel border border-chrome/16 bg-carbon/45 p-5">
                  <h3 className="text-xl text-titanium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-chrome">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
