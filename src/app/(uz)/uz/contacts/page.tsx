import type { Metadata } from "next";
import { ContactsView } from "@/components/design/inner-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "Kontaktlar — BIS-PRO | Toshkentda SAP va ERP Konsalting Offisi",
  description:
    "Toshkentdagi BIS-PRO ofisiga keling yoki bepul onlayn tahlildan boshlang! O‘zbekiston bo‘ylab SAP joriy etish va avtomatlashtirish uchun bog‘laning.",
  keywords: [
    "BIS PRO kontaktlar",
    "SAP Toshkent manzili",
    "SAP Business One Uzbekistan aloqa",
    "ERP joriy etish Toshkent",
    "BIS PRO ofis manzili",
    "SAP konsalting telefon",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/contacts",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Kontaktlar — BIS-PRO | Toshkentda SAP va ERP Konsalting Offisi",
    description:
      "Toshkentdagi BIS-PRO ofisiga keling yoki bepul onlayn tahlildan boshlang! O‘zbekiston bo‘ylab SAP joriy etish va avtomatlashtirish uchun bog‘laning.",
    url: "/contacts",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Kontaktlar — BIS-PRO | Toshkentda SAP va ERP Konsalting Offisi",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Kontaktlar — BIS-PRO | Toshkentda SAP va ERP Konsalting Offisi",
    description:
      "Toshkentdagi BIS-PRO ofisiga keling yoki bepul onlayn tahlildan boshlang! SAP joriy etish uchun bog‘laning.",
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
  return <ContactsView locale="uz" />;
}
