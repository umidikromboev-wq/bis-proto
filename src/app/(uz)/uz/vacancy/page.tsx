import type { Metadata } from "next";
import { CareersView } from "@/components/design/extra-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "SAP Vakansiyalar Toshkent — BIS-PRO Jamoasiga Qo‘shiling",
  description:
    "Toshkentda SAP Business One konsultanti va ERP loyiha menejerlari uchun vakansiyalar. Natija uchun ishlaydigan mutaxassislar jamoasiga qo‘shiling va rezyume yuboring!",
  keywords: [
    "SAP vakansiyalar Toshkent",
    "SAP Business One konsultant ish",
    "ERP loyiha menejeri vakansiya",
    "SAP konsalting Toshkent ish",
    "BIS PRO vakansiya",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/vacancy",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "SAP Vakansiyalar Toshkent — BIS-PRO Jamoasiga Qo‘shiling",
    description:
      "Toshkentda SAP Business One konsultanti va ERP loyiha menejerlari uchun vakansiyalar. Natija uchun ishlaydigan mutaxassislar jamoasiga qo‘shiling va rezyume yuboring!",
    url: "/vacancy",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP Vakansiyalar Toshkent — BIS-PRO Jamoasiga Qo‘shiling",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "SAP Vakansiyalar Toshkent — BIS-PRO Jamoasiga Qo‘shiling",
    description:
      "Toshkentda SAP Business One konsultanti va ERP loyiha menejerlari uchun vakansiyalar. Jamoamizga qo‘shiling va rezyume yuboring!",
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
  return <CareersView locale="uz" />;
}
