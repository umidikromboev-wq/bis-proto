import type { Metadata } from "next";
import { AcademyView } from "@/components/design/extra-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title:
    "SAP Akademiyasi — Xodimlarni Rollar Bo‘yicha O‘qitish Kurslari | BIS-PRO",
  description:
    "SAP Akademiyasida xodimlaringizni rollar bo‘yicha o‘qiting. Tizimni o‘zlashtirish vaqtini 30% ga qisqartiring va sabotaj xavfini yo‘qoting. Kurslarga yoziling!",
  keywords: [
    "SAP akademiyasi Toshkent",
    "SAP kurslari Uzbekistan",
    "xodimlarni SAPga o'qitish",
    "SAP Business One o'rganish",
    "SAP konsul'tant kursi",
    "korxona xodimlarini o'qitish",
    "BIS PRO akademiyasi",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/courses",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title:
      "SAP Akademiyasi — Xodimlarni Rollar Bo‘yicha O‘qitish Kurslari | BIS-PRO",
    description:
      "SAP Akademiyasida xodimlaringizni rollar bo‘yicha o‘qiting. Tizimni o‘zlashtirish vaqtini 30% ga qisqartiring va sabotaj xavfini yo‘qoting. Kurslarga yoziling!",
    url: "/courses",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP Akademiyasi — Xodimlarni Rollar Bo‘yicha O‘qitish Kurslari | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title:
      "SAP Akademiyasi — Xodimlarni Rollar Bo‘yicha O‘qitish Kurslari | BIS-PRO",
    description:
      "SAP Akademiyasida xodimlaringizni rollar bo‘yicha o‘qiting. Tizimni o‘zlashtirish vaqtini 30% ga qisqartiring. Kurslarga yoziling!",
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
  return <AcademyView locale="uz" />;
}
