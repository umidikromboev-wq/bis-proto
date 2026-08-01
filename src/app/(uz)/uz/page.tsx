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
  title: "SAP Business One Uzbekistan — Biznes Avtomatlashtirish va ERP Tizimi",
  description:
    "2019-yildan beri O‘zbekistonda SAP joriy etish. Excel va 1C o‘rniga bitta ERP tizim: ombor, moliya va ishlab chiqarish nazorati. Loihangiz narxini 1 kunda hisoblang!",
};

export default function DesignHome() {
  const faq = content("uz").blocks.faq;
  return (
    <>
      <FaqJsonLd items={faq.items} />
      <DesignHero locale="uz" />
      <LogoStrip locale="uz" />
      <Pain locale="uz" />
      <Cost locale="uz" />
      <Solution locale="uz" />
      <Products locale="uz" />
      <UnifiedBase locale="uz" />
      <Effect locale="uz" />
      <Industries locale="uz" />
      <Roles locale="uz" />
      <Trust locale="uz" />
      <Cases locale="uz" />
      <AllCasesLink locale="uz" />
      <PinnedRoadmap locale="uz" />
      <Readiness locale="uz" />
      <Why locale="uz" />
      <Team locale="uz" />
      <LeadMagnet locale="uz" />
      <Pricing locale="uz" />
      <Faq locale="uz" />
      <FinalCta locale="uz" />
    </>
  );
}
