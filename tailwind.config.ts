import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        carbon: "var(--carbon-graphite)",
        cobalt: "var(--electric-cobalt)",
        steel: "var(--tempered-steel)",
        wolfram: "var(--solid-wolfram)",
        aluminum: "var(--brushed-aluminum)",
        chrome: "var(--polished-chrome)",
        titanium: "var(--titanium-white)",
        coral: "var(--coral)",
        yellow: "var(--yellow)",
        fuchsia: "var(--fuchsia)",
        cyan: "var(--cyan)"
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(0, 114, 221, 0.24), 0 40px 70px rgba(8, 11, 15, 0.42)",
        soft: "0 20px 40px rgba(11, 17, 26, 0.16)"
      },
      borderRadius: {
        e: "var(--radius-e)",
        panel: "var(--radius-panel)",
        pill: "999px"
      },
      spacing: {
        section: "var(--section-space)",
        gutter: "var(--site-gutter)"
      }
    }
  },
  plugins: []
};

export default config;
