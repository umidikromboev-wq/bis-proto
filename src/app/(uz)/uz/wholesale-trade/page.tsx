import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "Ulgurji Savdo va Distribyutsiya Uchun SAP Tizimi | BIS-PRO",
  description:
    "Ulgurji savdo va distribyutsiyani SAP bilan avtomatlashtiring. Ombordagi nelikvid tovarlar, debitorlik qarzi va savdo marjasini kunlik nazorat qiling!",
  keywords: [
    "ulgurji savdo uchun SAP",
    "distribyutsiyani avtomatlashtirish",
    "debitorlik qarzi nazorati",
    "ombor va nelikvidlar hisobi",
    "SAP Business One distribyutsiya",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/wholesale-trade",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Ulgurji Savdo va Distribyutsiya Uchun SAP Tizimi | BIS-PRO",
    description:
      "Ulgurji savdo va distribyutsiyani SAP bilan avtomatlashtiring. Ombordagi nelikvid tovarlar, debitorlik qarzi va savdo marjasini kunlik nazorat qiling!",
    url: "/wholesale-trade",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Ulgurji Savdo va Distribyutsiya Uchun SAP Tizimi | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Ulgurji Savdo va Distribyutsiya Uchun SAP Tizimi | BIS-PRO",
    description:
      "Ulgurji savdo va distribyutsiyani SAP bilan avtomatlashtiring. Ombordagi nelikvid tovarlar va debitorlik qarzini nazorat qiling!",
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

/** Отраслевая страница. Адрес /wholesale-trade сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="wholesale-trade" locale="uz" />;
}
