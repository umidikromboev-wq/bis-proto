import type { Metadata } from "next";
import { ServicesView } from "@/components/design/company-views";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { content } from "@/content";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "SAP Xizmatlari — Joriy Etish, Audit va Texnik Qo‘llab-quvvatlash",
  description:
    "SAP Business One va S/4HANA xizmatlari: 3 oydan boshlab noldan joriy etish, tizim auditi hamda shaxsiy konsultant bilan texnik qo‘llab-quvvatlash. Smetani oling!",
  keywords: [
    "SAP xizmatlari Toshkent",
    "SAP joriy etish bosqichlari",
    "SAP tizim auditi",
    "SAP texnik qo'llab-quvvatlash",
    "SAP Activate metodologiyasi",
    "SAP Business One sozlash",
    "ERP konsalting Uzbekistan",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/services",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title:
      "SAP Xizmatlari — Joriy Etish, Audit va Texnik Qo‘llab-quvvatlash | BIS-PRO",
    description:
      "SAP Business One va S/4HANA xizmatlari: 3 oydan boshlab noldan joriy etish, tizim auditi hamda shaxsiy konsultant bilan texnik qo‘llab-quvvatlash. Smetani oling!",
    url: "/services",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP Xizmatlari — Joriy Etish, Audit va Texnik Qo‘llab-quvvatlash | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title:
      "SAP Xizmatlari — Joriy Etish, Audit va Texnik Qo‘llab-quvvatlash | BIS-PRO",
    description:
      "SAP Business One va S/4HANA xizmatlari: 3 oydan boshlab noldan joriy etish, tizim auditi hamda shaxsiy konsultant bilan support. Smetani oling!",
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

/** Адрес /services сохранён с прежнего сайта — страница была в индексе. */
export default function Page() {
  const p = content("uz").servicesPage;
  return (
    <>
      <ServiceJsonLd
        locale="uz"
        name={p.h1}
        description={p.lead}
        path="/services"
      />
      <ServicesView locale="uz" />
    </>
  );
}
