"use client";

import { useEffect, useState } from "react";

type HeadlineFont = "sincerity" | "ortica" | "sneaky" | "basteleur";

const STORAGE_KEY = "euvic-headline-font";

const OPTIONS: Array<{ value: HeadlineFont; label: string }> = [
  { value: "sincerity", label: "Sincerity" },
  { value: "ortica", label: "Ortica" },
  { value: "sneaky", label: "Sneaky Times" },
  { value: "basteleur", label: "Basteleur" }
];

function isHeadlineFont(value: string | null): value is HeadlineFont {
  return value === "sincerity" || value === "ortica" || value === "sneaky" || value === "basteleur";
}

function applyHeadlineFont(value: HeadlineFont) {
  document.documentElement.setAttribute("data-headline-font", value);
}

export function HeadlineFontToggle() {
  const [font, setFont] = useState<HeadlineFont>("sincerity");

  useEffect(() => {
    const queryValue = new URLSearchParams(window.location.search).get("headlineFont");
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = isHeadlineFont(queryValue) ? queryValue : isHeadlineFont(stored) ? stored : "sincerity";
    setFont(initial);
    applyHeadlineFont(initial);
    localStorage.setItem(STORAGE_KEY, initial);
  }, []);

  const onChange = (nextValue: HeadlineFont) => {
    setFont(nextValue);
    applyHeadlineFont(nextValue);
    localStorage.setItem(STORAGE_KEY, nextValue);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-xl border border-chrome/30 bg-carbon/85 p-3 backdrop-blur">
      <label htmlFor="headline-font" className="block text-[11px] uppercase tracking-[0.12em] text-chrome">
        Headline Font
      </label>
      <select
        id="headline-font"
        value={font}
        onChange={(event) => onChange(event.target.value as HeadlineFont)}
        className="mt-2 min-w-40 rounded-lg border border-chrome/35 bg-steel px-3 py-2 text-sm text-titanium outline-none"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
