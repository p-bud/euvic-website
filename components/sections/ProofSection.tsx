import { metrics } from "@/content/site";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProofSection() {
  return (
    <section id="proof" className="surface-dark section-pad relative overflow-hidden">
      <span className="modular-frame right-[11%] top-[14%] h-[72%] w-0" />
      <div className="section-shell relative z-10">
        <SectionHeading
          eyebrow="Proof"
          title="Euvic at a Glance"
          description="Track record, scale, and consistency across long-term client partnerships."
          invert
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item, index) => (
            <MetricCard
              key={item.label}
              value={item.value}
              label={item.label}
              detail={item.detail}
              accent={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
