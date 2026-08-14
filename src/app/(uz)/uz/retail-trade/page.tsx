import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "Chakana Savdo va Do‘konlar Uchun SAP Tizimi | BIS-PRO",
  description:
    "Chakana savdo tarmog‘ini SAP bilan avtomatlashtiring. Kassa, ombor qoldig‘i, savdo va xaridlarni bitta tizimda birlashtiring. Konsultatsiya oling!",
  keywords: [
    "chakana savdo uchun SAP",
    "do'konlarni avtomatlashtirish",
    "kassa va ombor hisobi dasturi",
    "SAP Business One roznitsa",
    "roznichnaya torgovlya ERP",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/retail-trade",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Chakana Savdo va Do‘konlar Uchun SAP Tizimi | BIS-PRO",
    description:
      "Chakana savdo tarmog‘ini SAP bilan avtomatlashtiring. Kassa, ombor qoldig‘i, savdo va xaridlarni bitta tizimda birlashtiring. Konsultatsiya oling!",
    url: "/retail-trade",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Chakana Savdo va Do‘konlar Uchun SAP Tizimi | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Chakana Savdo va Do‘konlar Uchun SAP Tizimi | BIS-PRO",
    description:
      "Chakana savdo tarmog‘ini SAP bilan avtomatlashtiring. Kassa, ombor qoldig‘i, savdo va xaridlarni bitta tizimda birlashtiring.",
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

/** Отраслевая страница. Адрес /retail-trade сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="retail-trade" locale="uz" />;
}
