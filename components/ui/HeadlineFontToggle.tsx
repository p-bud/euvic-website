"use client";

import { useEffect, useMemo, useState } from "react";
import { HEADLINE_FONTS } from "@/content/headlineFonts";

const STORAGE_KEYS = {
  title: "euvic-font-title",
  body: "euvic-font-body",
  smallHeading: "euvic-font-small-heading"
} as const;

const DEFAULTS = {
  title: "host",
  body: "host",
  smallHeading: "host"
} as const;
const MAX_RESULTS = 120;

function getOptionByValue(value: string | null) {
  if (!value) return undefined;
  return HEADLINE_FONTS.find((option) => option.value === value);
}

function applyCssVariable(variable: string, value: string) {
  const option = getOptionByValue(value);
  if (!option) return;
  document.documentElement.style.setProperty(variable, `"${option.family}"`);
}

function FilteredFontSelect({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (nextValue: string) => void;
}) {
  const [query, setQuery] = useState("");

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const selected = getOptionByValue(value);
    const base = normalizedQuery
      ? HEADLINE_FONTS.filter((option) => option.label.toLowerCase().includes(normalizedQuery))
      : HEADLINE_FONTS;
    const sliced = base.slice(0, MAX_RESULTS);

    if (selected && !sliced.some((option) => option.value === selected.value)) {
      return [selected, ...sliced];
    }
    return sliced;
  }, [query, value]);

  return (
    <label className="text-[11px] text-chrome/85">
      {label}
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search fonts..."
        className="mt-1 block min-w-56 rounded-lg border border-chrome/35 bg-carbon px-3 py-2 text-sm text-titanium placeholder:text-chrome/60 outline-none"
      />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block min-w-56 rounded-lg border border-chrome/35 bg-steel px-3 py-2 text-sm text-titanium outline-none"
      >
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="mt-1 text-[10px] text-chrome/65">
        {query ? `Showing ${filteredOptions.length} of ${HEADLINE_FONTS.length}` : `${HEADLINE_FONTS.length} total fonts`}
      </p>
    </label>
  );
}

export function HeadlineFontToggle() {
  const [titleFont, setTitleFont] = useState<string>(DEFAULTS.title);
  const [bodyFont, setBodyFont] = useState<string>(DEFAULTS.body);
  const [smallHeadingFont, setSmallHeadingFont] = useState<string>(DEFAULTS.smallHeading);
  const [open, setOpen] = useState(false);

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
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="rounded-full border border-chrome/35 bg-carbon/85 px-3 py-2 text-xs text-chrome backdrop-blur hover:text-titanium"
      >
        Fonts {open ? "×" : "⚙"}
      </button>

      <div
        className={`mt-2 w-[min(24rem,92vw)] rounded-xl border border-chrome/30 bg-carbon/85 p-3 backdrop-blur ${
          open ? "block" : "hidden"
        }`}
      >
        <p className="block text-[11px] uppercase tracking-[0.12em] text-chrome">Typography</p>
        <div className="mt-2 grid max-h-[60vh] gap-2 overflow-y-auto pr-1">
          <FilteredFontSelect label="Title" value={titleFont} onChange={onTitleChange} />
          <FilteredFontSelect label="Body / Subtext" value={bodyFont} onChange={onBodyChange} />
          <FilteredFontSelect label="Small Heading" value={smallHeadingFont} onChange={onSmallHeadingChange} />
        </div>
      </div>
    </div>
  );
}
