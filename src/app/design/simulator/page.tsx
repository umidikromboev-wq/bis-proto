import type { Metadata } from "next";
import { PageHero } from "@/components/design/page-hero";
import { BeforeAfter } from "@/components/design/schemes/before-after";
import { Reveal } from "@/components/design/reveal";
import { Btn, Section, SectionHead, TextLink } from "@/components/design/ui";
import "@/components/design/sections/sections.css";
import "@/components/design/schemes/schemes.css";

export const metadata: Metadata = {
  title: "Сколько теряет бизнес без единой системы · BIS",
  description:
    "Посчитайте порядок годовых потерь без единой системы учёта и увидите, какая часть возвращается после внедрения SAP.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Главная", href: "/design" }, { label: "Симулятор потерь" }]}
        h1="Ваш бизнес до и после"
        accent="единой системы"
        lead="Выберите тип бизнеса и выручку — увидите, во что обходится текущая схема учёта и какая часть этих денег возвращается после внедрения."
      />

      <Section>
        <Reveal>
          <BeforeAfter />
        </Reveal>
      </Section>

      <Section tone="ink">
        <Reveal className="d-final-inner">
          <SectionHead h2="Хотите ту же картину, но на своих цифрах?" />
          <p className="d-lead">
            На бесплатном аудите консультант считает по вашим остаткам, номенклатуре и сроку закрытия периода.
            Письменное заключение остаётся у вас в любом случае.
          </p>
          <div className="dh-cta-row">
            <Btn href="#form" variant="light">Записаться на аудит</Btn>
            <TextLink href="/design#cases">Посмотреть кейсы</TextLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
