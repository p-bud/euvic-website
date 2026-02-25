import { finalCta } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function FinalCtaSection() {
  return (
    <section id="contact" className="section-pad bg-titanium">
      <div className="section-shell">
        <div className="cta-gradient rounded-panel p-[1px]">
          <div className="rounded-panel bg-carbon px-7 py-10 text-titanium md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.2fr_auto] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-chrome">Final CTA</p>
                <h2 className="font-display mt-4 text-5xl leading-[0.95] md:text-6xl">{finalCta.title}</h2>
                <p className="mt-5 max-w-2xl text-lg text-chrome">{finalCta.body}</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button
                  href="mailto:hello@euvic.com"
                  icon={<span aria-hidden>→</span>}
                  eventName="cta_primary_click"
                  eventMeta={{ section: "final" }}
                >
                  {finalCta.primaryCta}
                </Button>
                <Button
                  href="#proof"
                  variant="secondary"
                  icon={<span aria-hidden>→</span>}
                  eventName="cta_secondary_click"
                  eventMeta={{ section: "final" }}
                >
                  {finalCta.secondaryCta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
