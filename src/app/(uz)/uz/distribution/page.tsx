import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "SAP Business One Bilan Distribyutsiyani Avtomatlashtirish | BIS-PRO",
  description:
    "Distribyutsiya biznesini SAP Business One bilan avtomatlashtiring. Xarid, ombor, tovar jo‘natish va hamkorlar hisobini bitta konturda boshqaring!",
  keywords: [
    "distribyutsiyani avtomatlashtirish",
    "SAP Business One distribyutsiya",
    "distribyutorlik uchun ERP",
    "ombor va xaridlar hisobi",
    "distribyutsiya dasturi Toshkent",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/distribution",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title:
      "SAP Business One Bilan Distribyutsiyani Avtomatlashtirish | BIS-PRO",
    description:
      "Distribyutsiya biznesini SAP Business One bilan avtomatlashtiring. Xarid, ombor, tovar jo‘natish va hamkorlar hisobini bitta konturda boshqaring!",
    url: "/distribution",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP Business One Bilan Distribyutsiyani Avtomatlashtirish | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title:
      "SAP Business One Bilan Distribyutsiyani Avtomatlashtirish | BIS-PRO",
    description:
      "Distribyutsiya biznesini SAP Business One bilan avtomatlashtiring. Xarid, ombor va hamkorlar hisobini bitta konturda boshqaring!",
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

/** Отраслевая страница. Адрес /distribution сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="distribution" locale="uz" />;
}
