import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      id="top"
      style={{
        ["--font-host-grotesk" as string]: '"Host Grotesk", "Avenir Next", "Segoe UI", sans-serif'
      }}
    >
      <body>{children}</body>
    </html>
  );
}
