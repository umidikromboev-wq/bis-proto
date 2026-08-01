import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/design/footer";
import { SiteHeader } from "@/components/design/menu";
import { LeadPopupProvider } from "@/components/design/lead-popup";
import { OrganizationJsonLd } from "@/components/seo/json-ld";

import "../globals.css";
import "@/components/design/site.css";
import "@/components/design/lead-popup.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const baseUrl = "https://www.bis-pro.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  title: {
    default:
      "SAP Business One в Узбекистане — Внедрение ERP и Автоматизация Бизнеса",
    template: "%s | BIS",
  },

  description:
    "Внедрение SAP Business One в Ташкенте с 2019 года. Единая ERP система вместо Excel и 1С: контроль склада, финансов и производства. Узнайте стоимость проекта!",

  keywords: [
    "SAP Business One в Узбекистане",
    "внедрение SAP Ташкент",
    "ERP система для производства",
    "автоматизация бизнеса Узбекистан",
    "SAP Business One цена",
    "внедрение ERP системы",
    "официальный партнёр SAP",
    "автоматизация склада и учета",
    "замена 1С на SAP",
  ],

  alternates: {
    canonical: "https://www.bis-pro.com/",
    languages: {
      "ru-RU": "https://www.bis-pro.com/",
      "uz-UZ": "https://www.bis-pro.com/uz",
    },
  },

  robots: {
    index: true, // Agar tayyor jonli sayt bo'lsa true qiling (agar testivoy bo'lsa false saqlang)
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "SAP Business One в Узбекистане — Внедрение ERP и Автоматизация Бизнеса",
    description:
      "Внедрение SAP Business One в Ташкенте с 2019 года. Единая ERP система вместо Excel и 1С: контроль склада, финансов и производства. Узнайте стоимость проекта!",
    url: "https://www.bis-pro.com/",
    siteName: "BIS",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image-ru.png",
        width: 1200,
        height: 630,
        alt: "SAP Business One в Узбекистане",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SAP Business One в Узбекистане — Внедрение ERP и Автоматизация Бизнеса",
    description:
      "Внедрение SAP Business One в Ташкенте с 2019 года. Единая ERP система вместо Excel и 1С: контроль склада, финансов и производства. Узнайте стоимость проекта!",
    images: ["/og-image-ru.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`h-full antialiased ${manrope.variable}`}>
      <body className={`d ${manrope.className} flex min-h-full flex-col`}>
        <OrganizationJsonLd locale="ru" />
        <LeadPopupProvider locale="ru">
          <SiteHeader locale="ru" />
          <main className="flex-1">{children}</main>
          <SiteFooter locale="ru" />
        </LeadPopupProvider>
      </body>
    </html>
  );
}
