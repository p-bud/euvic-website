import { services } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-titanium">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Flexible Models. End-to-End Capability."
          description="Choose targeted support or fully integrated teams, aligned to your business outcomes."
        />
        <div className="grid gap-5 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal key={service.category} delay={index * 0.05} className={index < 2 ? "lg:col-span-6" : "lg:col-span-6"}>
              <article className="h-full rounded-panel border border-carbon/15 bg-titanium p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-display text-4xl leading-[0.95] text-carbon">{service.category}</h3>
                <ul className="mt-6 space-y-3">
                  {service.offerings.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-lg text-wolfram">
                      <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
