import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/design/footer";
import { SiteHeader } from "@/components/design/menu";
import { LeadPopupProvider } from "@/components/design/lead-popup";
import { Analytics } from "@/components/seo/analytics";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import "../globals.css";
import "@/components/design/site.css";
import "@/components/design/lead-popup.css";

/**
 * Manrope — геометрический гротеск без засечек с характером: узкие апертуры
 * и высокая x-height. Кириллица закрывает RU, латиница — UZ.
 * Набор держится на лёгких начертаниях (300 Light как основное для крупного
 * текста): тонкий штрих на большом кегле — это и есть премиальность,
 * жирный гротеск читается как дешёвый шаблон.
 */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "BIS — внедрение SAP в Узбекистане",
  description:
    "Внедряем SAP Business One и S/4HANA в Узбекистане с 2019 года: финансы, склад, закупки, производство и себестоимость в одной системе.",
  // Домен-витрина для согласования с заказчиком закрыт от индексации,
  // чтобы не конкурировать в поиске с рабочим сайтом bis-pro.com.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className={`d ${manrope.className}`}>
        {/* Провайдер обёрнут вокруг всего каркаса: кнопку «оставить заявку»
            открывают и шапка, и подвал, и любая секция страницы. */}
        <OrganizationJsonLd locale="ru" />
        <LeadPopupProvider locale="ru">
          <SiteHeader locale="ru" />
          <main>{children}</main>
          <SiteFooter locale="ru" />
          <Analytics />

        </LeadPopupProvider>
      </body>
    </html>
  );
}
