import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, invert = false, action }: SectionHeadingProps) {
  return (
    <header className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className={`font-small-heading mb-4 text-xs uppercase tracking-[0.22em] ${invert ? "text-chrome/80" : "text-wolfram"}`}>
            {eyebrow}
          </p>
        ) : null}
        <h2 className={`font-display text-4xl leading-[0.94] sm:text-5xl md:text-7xl ${invert ? "text-titanium" : "text-carbon"}`}>
          {title}
        </h2>
        {description ? (
          <p className={`mt-5 max-w-2xl text-base sm:text-lg md:text-2xl md:leading-[1.35] ${invert ? "text-chrome" : "text-wolfram"}`}>{description}</p>
        ) : null}
      </div>
      {action}
    </header>
  );
}
