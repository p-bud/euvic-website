"use client";

import { useEffect, useState } from "react";
import { HEADLINE_FONTS } from "@/content/headlineFonts";

const STORAGE_KEY = "euvic-headline-font";
const DEFAULT_FONT = "sincerity";

function getOptionByValue(value: string | null) {
  if (!value) return undefined;
  return HEADLINE_FONTS.find((option) => option.value === value);
}

function applyHeadlineFont(value: string) {
  const option = getOptionByValue(value);
  if (!option) return;
  document.documentElement.setAttribute("data-headline-font", option.value);
  document.documentElement.style.setProperty("--font-display-family", `"${option.family}"`);
}

export function HeadlineFontToggle() {
  const [font, setFont] = useState<string>(DEFAULT_FONT);

  useEffect(() => {
    const queryValue = new URLSearchParams(window.location.search).get("headlineFont");
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = getOptionByValue(queryValue)?.value ?? getOptionByValue(stored)?.value ?? DEFAULT_FONT;
    setFont(initial);
    applyHeadlineFont(initial);
    localStorage.setItem(STORAGE_KEY, initial);
  }, []);

  const onChange = (nextValue: string) => {
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
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-w-56 rounded-lg border border-chrome/35 bg-steel px-3 py-2 text-sm text-titanium outline-none"
      >
        {HEADLINE_FONTS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
