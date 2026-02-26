import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./sm-fonts.css";
import "./imported-fonts.css";
import { HeadlineFontToggle } from "@/components/ui/HeadlineFontToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.euvic.com"),
  title: "Euvic | Engineering Peace of Mind",
  description: "Modern digital delivery partner with global capability and local understanding.",
  openGraph: {
    title: "Euvic | Engineering Peace of Mind",
    description: "Scalable software engineering, data, AI, and cloud delivery.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }]
  }
};

export const viewport: Viewport = {
  themeColor: "#3548FE"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      id="top"
      data-headline-font="sincerity"
      style={{
        ["--font-host-grotesk" as string]: '"Host Grotesk", "Avenir Next", "Segoe UI", sans-serif'
      }}
    >
      <body>
        {children}
        <HeadlineFontToggle />
      </body>
    </html>
  );
}
