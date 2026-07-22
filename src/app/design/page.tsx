import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { DesignHero } from "@/components/design/hero";

/**
 * Manrope — геометрический гротеск без засечек с характером: узкие апертуры,
 * высокая x-height и настоящий ExtraBold для крупных заголовков. Кириллица
 * закрывает RU и UZ. Взят вместо Onest, который читался нейтрально-дефолтным.
 */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIS — дизайн-версия · первый экран",
  description: "Дизайн-направление сайта BIS: premium corporate-tech, брендовая сине-циановая палитра.",
  robots: { index: false, follow: false },
};

export default function DesignPage() {
  return (
    <div className={manrope.className}>
      <DesignHero />
    </div>
  );
}
