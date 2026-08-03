import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/design/footer";
import { SiteHeader } from "@/components/design/menu";
import { LeadPopupProvider } from "@/components/design/lead-popup";
import { Analytics } from "@/components/seo/analytics";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo";
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
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

/**
 * Запасные метаданные каркаса. Каждая страница задаёт свои через
 * pageMetadata() и перекрывает эти значения — здесь только то, что нужно,
 * если страница почему-то своих не задала.
 *
 * Шаблон вида «%s | BIS» намеренно НЕ ставим: заголовки в seo.ts перенесены
 * с прежнего сайта дословно, и общий суффикс изменил бы каждый
 * проиндексированный title.
 *
 * Индексация не прибита к коду: она включается сама, когда сайт живёт на
 * своём домене (IS_INDEXABLE в lib/seo). На демо-домене остаётся закрытой,
 * чтобы витрина не конкурировала в выдаче с рабочим сайтом.
 */
export const metadata: Metadata = pageMetadata("ru", "/");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`h-full antialiased ${manrope.variable}`}>
      <body className={`d ${manrope.className} flex min-h-full flex-col`}>
        {/* Провайдер обёрнут вокруг всего каркаса: кнопку «оставить заявку»
            открывают и шапка, и подвал, и любая секция страницы. */}
        <OrganizationJsonLd locale="ru" />
        <LeadPopupProvider locale="ru">
          <SiteHeader locale="ru" />
          <main className="flex-1">{children}</main>
          <SiteFooter locale="ru" />
          <Analytics />

        </LeadPopupProvider>
      </body>
    </html>
  );
}
