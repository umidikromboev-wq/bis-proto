import type { Metadata } from "next";
import { BlogList } from "@/components/design/inner-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "ERP va SAP Blogi — Biznesni Tizimlashtirish va Xolis Yo‘riqnomalar",
  description:
    "ERP tizimlarini tanlash, joriy etish va biznes jarayonlarini avtomatlashtirish bo‘yicha reklamasiz, amaliy yo‘riqnomalar. Real xatolar va tahlillarni o‘qing!",
  keywords: [
    "ERP tizimini tanlash",
    "SAP va ERP blogi",
    "biznes jarayonlarini avtomatlashtirish",
    "ERP joriy etish xatolari",
    "biznesni tizimlashtirish yo'riqnomasi",
    "SAP Business One blog",
    "Odoo va SAP farqi",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/blog",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "ERP va SAP Blogi — Biznesni Tizimlashtirish va Xolis Yo‘riqnomalar",
    description:
      "ERP tizimlarini tanlash, joriy etish va biznes jarayonlarini avtomatlashtirish bo‘yicha reklamasiz, amaliy yo‘riqnomalar. Real xatolar va tahlillarni o‘qing!",
    url: "/blog",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "ERP va SAP Blogi — Biznesni Tizimlashtirish va Xolis Yo‘riqnomalar",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "ERP va SAP Blogi — Biznesni Tizimlashtirish va Xolis Yo‘riqnomalar",
    description:
      "ERP tizimlarini tanlash va biznes jarayonlarini avtomatlashtirish bo‘yicha reklamasiz, amaliy yo‘riqnomalar va real xatolar tahlili.",
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
  return <BlogList locale="uz" />;
}
