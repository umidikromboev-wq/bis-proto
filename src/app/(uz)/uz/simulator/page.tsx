import type { Metadata } from "next";
import { WorkingCapitalCalculator } from "@/components/design/calculator/working-capital";
import "@/components/design/page-hero.css";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "Aylanma Kapital Kalkulyatori — Muzlagan Pullarni Hisoblash | BIS-PRO",
  description:
    "Biznesingizda qancha pul aylanmada harakatsiz turganini 3 daqiqada hisoblang. Distribyutsiya, chakana savdo va ishlab chiqarish uchun onlayn kalkulyator!",
  keywords: [
    "aylanma kapital kalkulyatori",
    "muzlagan pulni hisoblash",
    "omborda harakatsiz pul",
    "biznes kalkulyatori onlayn",
    "distribyutsiya aylanma kapital",
    "ishlab chiqarish kapitali",
    "BIS PRO simulyator",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/simulator",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title:
      "Aylanma Kapital Kalkulyatori — Muzlagan Pullarni Hisoblash | BIS-PRO",
    description:
      "Biznesingizda qancha pul aylanmada harakatsiz turganini 3 daqiqada hisoblang. Distribyutsiya, chakana savdo va ishlab chiqarish uchun onlayn kalkulyator!",
    url: "/simulator",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Aylanma Kapital Kalkulyatori — Muzlagan Pullarni Hisoblash | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title:
      "Aylanma Kapital Kalkulyatori — Muzlagan Pullarni Hisoblash | BIS-PRO",
    description:
      "Biznesingizda qancha pul aylanmada harakatsiz turganini 3 daqiqada hisoblang. Onlayn kalkulyator!",
    images: ["/og/bis-uz.png"],
  },

  // Indeksatsiya va Botlar sozlamasi
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return (
    <div
      className="d-wrap"
      style={{ paddingBlock: "calc(var(--nav-h) + 2rem) var(--section-y)" }}
    >
      <WorkingCapitalCalculator locale="uz" />
    </div>
  );
}
