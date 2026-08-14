import type { Metadata } from "next";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { ProductPageView } from "@/components/design/product-page";
import { productS4 } from "@/content/uz/product-s4";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title: "SAP S/4HANA Uzbekistan — Holdinglar va Zavodlar Uchun ERP Tizimi",
  description:
    "Holdinglar va yirik korxonalarni avtomatlashtirish uchun SAP S/4HANA. Bir nechta yuridik shaxs, ishlab chiqarish va moliya nazoratini bitta platformaga biriktiring. Demo so‘rang!",
  keywords: [
    "SAP S/4HANA Uzbekistan",
    "holdinglar uchun ERP",
    "zavod avtomatlashtirish dasturi",
    "yirik korxonalar uchun SAP",
    "moliya konsolidatsiyasi",
    "SAP S/4HANA joriy etish",
    "enterprise resource planning Uzbekistan",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/sap-s-4hana",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "SAP S/4HANA Uzbekistan — Holdinglar va Zavodlar Uchun ERP Tizimi",
    description:
      "Holdinglar va yirik korxonalarni avtomatlashtirish uchun SAP S/4HANA. Bir nechta yuridik shaxs, ishlab chiqarish va moliya nazoratini bitta platformaga biriktiring. Demo so‘rang!",
    url: "/sap-s-4hana",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP S/4HANA Uzbekistan — Holdinglar va Zavodlar Uchun ERP Tizimi",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "SAP S/4HANA Uzbekistan — Holdinglar va Zavodlar Uchun ERP Tizimi",
    description:
      "Holdinglar va yirik korxonalarni avtomatlashtirish uchun SAP S/4HANA. Bir nechta yuridik shaxs va moliya nazoratini bitta platformaga biriktiring.",
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
  const seoTitle =
    "SAP S/4HANA Uzbekistan — Holdinglar va Zavodlar Uchun ERP Tizimi";
  const seoDescription =
    "Holdinglar va yirik korxonalarni avtomatlashtirish uchun SAP S/4HANA. Bir nechta yuridik shaxs, ishlab chiqarish va moliya nazoratini bitta platformaga biriktiring. Demo so‘rang!";

  return (
    <>
      {/* Search Engine (Schema.org / JSON-LD) Botlari uchun structured data */}
      <ServiceJsonLd
        locale="uz"
        name={seoTitle}
        description={seoDescription}
        path="/sap-s-4hana"
      />
      <FaqJsonLd items={productS4.faq} />

      {/* Sahifaning asosiy vizual komponenti */}
      <ProductPageView data={productS4} locale="uz" />
    </>
  );
}
