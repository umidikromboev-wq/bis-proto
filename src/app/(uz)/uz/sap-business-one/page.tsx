import type { Metadata } from "next";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { ProductPageView } from "@/components/design/product-page";
import { productB1 } from "@/content/uz/product-b1";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA
export const metadata: Metadata = {
  title: "SAP Business One Joriy Etish va Konsalting — BIS-PRO Xizmatlari",
  description:
    "Buyurtma, ombor, xarid va ishlab chiqarishni bitta tizimga biriktiring. SAP Business One modullarini joriy etish, sozlash va texnik qo‘llab-quvvatlash xizmati.",
  keywords: [
    "SAP Business One joriy etish",
    "SAP konsalting Toshkent",
    "ombor va xarid avtomatlashtirish",
    "SAP Business One modullari",
    "SAP texnik qo'llab-quvvatlash",
    "ishlab chiqarishni avtomatlashtirish dasturi",
    "BIS-PRO",
    "ERP avtomatlashtirish",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni yozing
  alternates: {
    canonical: "/sap-business-one",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "SAP Business One Joriy Etish va Konsalting — BIS-PRO Xizmatlari",
    description:
      "Buyurtma, ombor, xarid va ishlab chiqarishni bitta tizimga biriktiring. SAP Business One modullarini joriy etish, sozlash va texnik qo‘llab-quvvatlash xizmati.",
    url: "/sap-business-one",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP Business One Joriy Etish va Konsalting — BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "SAP Business One Joriy Etish va Konsalting — BIS-PRO Xizmatlari",
    description:
      "Buyurtma, ombor, xarid va ishlab chiqarishni bitta tizimga biriktiring. SAP Business One modullarini joriy etish va sozlash xizmati.",
    images: ["/og/bis-uz.png"], // Banner rasmingiz yo'li
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
  const seoTitle =
    "SAP Business One Joriy Etish va Konsalting — BIS-PRO Xizmatlari";
  const seoDescription =
    "Buyurtma, ombor, xarid va ishlab chiqarishni bitta tizimga biriktiring. SAP Business One modullarini joriy etish, sozlash va texnik qo‘llab-quvvatlash xizmati.";

  return (
    <>
      {/* Search Engine (Schema.org / JSON-LD) Botlari uchun structured data */}
      <ServiceJsonLd
        locale="uz"
        name={seoTitle}
        description={seoDescription}
        path="/sap-business-one"
      />
      <FaqJsonLd items={productB1.faq} />

      {/* Sahifaning asosiy vizual komponenti */}
      <ProductPageView data={productB1} locale="uz" />
    </>
  );
}
