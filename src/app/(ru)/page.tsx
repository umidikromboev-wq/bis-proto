import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
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

// Заголовок и описание — из справочника src/content/seo.ts:
// у главной они перенесены с прежнего сайта, по ним набраны позиции.
export const metadata: Metadata = pageMetadata("ru", "/");

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
