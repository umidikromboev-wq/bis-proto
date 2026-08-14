import type { Metadata } from "next";
import { CasesList } from "@/components/design/inner-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "SAP Joriy Etish Keyslari va Loyihalarimiz — BIS-PRO Portfolio",
  description:
    "SAP Business One joriy etilgan O‘zbekiston kompaniyalari natijalari va keyslari. Ishlab chiqarish, ombor va moliya ko‘rsatkichlaridagi real o‘sish raqamlari bilan tanishing!",
  keywords: [
    "SAP joriy etish keyslari",
    "BIS PRO portfolio",
    "SAP Business One natijalari",
    "SAP Uzbekistan mijozlar",
    "biznesni avtomatlashtirish keyslari",
    "SAP joriy etish tajribasi",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/portfolio",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "SAP Joriy Etish Keyslari va Loyihalarimiz — BIS-PRO Portfolio",
    description:
      "SAP Business One joriy etilgan O‘zbekiston kompaniyalari natijalari va keyslari. Ishlab chiqarish, ombor va moliya ko‘rsatkichlaridagi real o‘sish raqamlari bilan tanishing!",
    url: "/portfolio",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP Joriy Etish Keyslari va Loyihalarimiz — BIS-PRO Portfolio",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "SAP Joriy Etish Keyslari va Loyihalarimiz — BIS-PRO Portfolio",
    description:
      "SAP Business One joriy etilgan O‘zbekiston kompaniyalari natijalari va keyslari. Real o‘sish raqamlari bilan tanishing!",
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
  return <CasesList locale="uz" />;
}
