import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://c4sec.com"),
  title: {
    default: "C4Sec — Consulting4Sec | Global GRC Advisory",
    template: "%s | C4Sec",
  },
  description:
    "C4Sec is an international GRC advisory firm helping organisations meet the world's most demanding information security, resilience and data-protection standards.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "C4Sec — Consulting4Sec | Global GRC Advisory",
    description: "Governance, Risk & Compliance advisory across the UK, Türkiye, Azerbaijan, UAE, Germany and Ireland.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..600&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
