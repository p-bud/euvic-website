"use client";

import { useEffect, useState } from "react";
import { HEADLINE_FONTS } from "@/content/headlineFonts";

const STORAGE_KEYS = {
  title: "euvic-font-title",
  body: "euvic-font-body",
  smallHeading: "euvic-font-small-heading"
} as const;

const DEFAULTS = {
  title: "sincerity",
  body: "host",
  smallHeading: "host"
} as const;

function getOptionByValue(value: string | null) {
  if (!value) return undefined;
  return HEADLINE_FONTS.find((option) => option.value === value);
}

function applyCssVariable(variable: string, value: string) {
  const option = getOptionByValue(value);
  if (!option) return;
  document.documentElement.style.setProperty(variable, `"${option.family}"`);
}

export function HeadlineFontToggle() {
  const [titleFont, setTitleFont] = useState<string>(DEFAULTS.title);
  const [bodyFont, setBodyFont] = useState<string>(DEFAULTS.body);
  const [smallHeadingFont, setSmallHeadingFont] = useState<string>(DEFAULTS.smallHeading);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const title = getOptionByValue(search.get("titleFont"))?.value ??
      getOptionByValue(localStorage.getItem(STORAGE_KEYS.title))?.value ??
      DEFAULTS.title;
    const body = getOptionByValue(search.get("bodyFont"))?.value ??
      getOptionByValue(localStorage.getItem(STORAGE_KEYS.body))?.value ??
      DEFAULTS.body;
    const smallHeading = getOptionByValue(search.get("smallHeadingFont"))?.value ??
      getOptionByValue(localStorage.getItem(STORAGE_KEYS.smallHeading))?.value ??
      DEFAULTS.smallHeading;

    setTitleFont(title);
    setBodyFont(body);
    setSmallHeadingFont(smallHeading);
    applyCssVariable("--font-display-family", title);
    applyCssVariable("--font-body-family", body);
    applyCssVariable("--font-small-heading-family", smallHeading);
    localStorage.setItem(STORAGE_KEYS.title, title);
    localStorage.setItem(STORAGE_KEYS.body, body);
    localStorage.setItem(STORAGE_KEYS.smallHeading, smallHeading);
  }, []);

  const onTitleChange = (nextValue: string) => {
    setTitleFont(nextValue);
    applyCssVariable("--font-display-family", nextValue);
    localStorage.setItem(STORAGE_KEYS.title, nextValue);
  };

  const onBodyChange = (nextValue: string) => {
    setBodyFont(nextValue);
    applyCssVariable("--font-body-family", nextValue);
    localStorage.setItem(STORAGE_KEYS.body, nextValue);
  };

  const onSmallHeadingChange = (nextValue: string) => {
    setSmallHeadingFont(nextValue);
    applyCssVariable("--font-small-heading-family", nextValue);
    localStorage.setItem(STORAGE_KEYS.smallHeading, nextValue);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-xl border border-chrome/30 bg-carbon/85 p-3 backdrop-blur">
      <p className="block text-[11px] uppercase tracking-[0.12em] text-chrome">Typography</p>
      <div className="mt-2 grid gap-2">
        <label className="text-[11px] text-chrome/85">
          Title
          <select
            value={titleFont}
            onChange={(event) => onTitleChange(event.target.value)}
            className="mt-1 block min-w-56 rounded-lg border border-chrome/35 bg-steel px-3 py-2 text-sm text-titanium outline-none"
          >
            {HEADLINE_FONTS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-[11px] text-chrome/85">
          Body / Subtext
          <select
            value={bodyFont}
            onChange={(event) => onBodyChange(event.target.value)}
            className="mt-1 block min-w-56 rounded-lg border border-chrome/35 bg-steel px-3 py-2 text-sm text-titanium outline-none"
          >
            {HEADLINE_FONTS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-[11px] text-chrome/85">
          Small Heading
          <select
            value={smallHeadingFont}
            onChange={(event) => onSmallHeadingChange(event.target.value)}
            className="mt-1 block min-w-56 rounded-lg border border-chrome/35 bg-steel px-3 py-2 text-sm text-titanium outline-none"
          >
            {HEADLINE_FONTS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
