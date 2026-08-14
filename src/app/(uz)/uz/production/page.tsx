import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "Ishlab Chiqarish Uchun SAP Tizimi — Haqiqiy Tannarx Hisobi | BIS-PRO",
  description:
    "Ishlab chiqarishni SAP bilan avtomatlashtiring. Har bir buyurtma bo‘yicha aniq tannarx, xomashyo sarfi va braklar hisobi kunlik rejimda. Smetani hisoblang!",
  keywords: [
    "ishlab chiqarish uchun SAP",
    "ishlab chiqarishni avtomatlashtirish",
    "tannarxni hisoblash dasturi",
    "SAP Business One ishlab chiqarish",
    "xomashyo va ombor hisobi",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/production",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title:
      "Ishlab Chiqarish Uchun SAP Tizimi — Haqiqiy Tannarx Hisobi | BIS-PRO",
    description:
      "Ishlab chiqarishni SAP bilan avtomatlashtiring. Har bir buyurtma bo‘yicha aniq tannarx, xomashyo sarfi va braklar hisobi kunlik rejimda. Smetani hisoblang!",
    url: "/production",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Ishlab Chiqarish Uchun SAP Tizimi — Haqiqiy Tannarx Hisobi | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title:
      "Ishlab Chiqarish Uchun SAP Tizimi — Haqiqiy Tannarx Hisobi | BIS-PRO",
    description:
      "Ishlab chiqarishni SAP bilan avtomatlashtiring. Aniq tannarx, xomashyo sarfi va braklar hisobi kunlik rejimda. Smetani hisoblang!",
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

/** Отраслевая страница. Адрес /production сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="production" locale="uz" />;
}
