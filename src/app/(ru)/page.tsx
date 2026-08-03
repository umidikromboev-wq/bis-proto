import type { Metadata } from "next";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { content } from "@/content";
import { DesignHero } from "@/components/design/hero";
import {
  LeadMagnet,
  Faq,
  FinalCta,
  Pricing,
} from "@/components/design/sections/close";
import { Cost, Pain } from "@/components/design/sections/problem";
import {
  AllCasesLink,
  Cases,
  Readiness,
  Team,
  Trust,
  Why,
} from "@/components/design/sections/proof";
import { PinnedRoadmap } from "@/components/design/schemes/roadmap";
import { Products, Solution } from "@/components/design/sections/solution";
import {
  Effect,
  Industries,
  LogoStrip,
  Roles,
  UnifiedBase,
} from "@/components/design/sections/value";

import "@/components/design/sections/sections.css";
import "@/components/design/schemes/schemes.css";

export const metadata: Metadata = {
  title:
    "SAP Business One в Узбекистане — Внедрение ERP и Автоматизация Бизнеса",
  description:
    "Внедрение SAP Business One в Ташкенте с 2019 года. Единая ERP система вместо Excel и 1С: контроль склада, финансов и производства. Узнайте стоимость проекта!",
};

export default function DesignHome() {
  const faq = content("ru").blocks.faq;
  return (
    <>
      <FaqJsonLd items={faq.items} />
      <DesignHero />
      <LogoStrip />
      <Pain />
      <Cost />
      <Solution />
      <Products />
      <UnifiedBase />
      <Effect />
      <Industries />
      <Roles />
      <Trust />
      <Cases />
      <AllCasesLink />
      <PinnedRoadmap />
      <Readiness />
      <Why />
      <Team />
      <LeadMagnet />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
