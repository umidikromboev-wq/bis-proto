import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { DesignHero } from "@/components/design/hero";

/** Manrope — геометричный гротеск с полной кириллицей (критично для RU/UZ). */
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
