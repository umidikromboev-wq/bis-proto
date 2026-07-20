import { SiteShell } from "@/components/shell";
import { Hero, Bridge, Pain, Cost, Solution, Products } from "@/components/sections-top";
import {
  Cases, Faq, FinalCta, Industries, Pricing,
  Process, Readiness, Team, Why,
} from "@/components/sections-bottom";
import {
  Effect, LeadMagnet, LogoStrip, Roles, Trust, UnifiedBase,
} from "@/components/sections-playbook";

/**
 * Порядок блоков — по «BIS-PRO · Playbook конверсионных фишек», раздел «02 · Сборка».
 * Слева от блока в комментарии — номер блока playbook и ID закрываемых приёмов.
 */
export default function Page() {
  return (
    <SiteShell>
      <Hero />         {/* 02 · HR-01 HR-04 HR-05 CV-01 */}
      <LogoStrip />    {/* 02 · TR-01 */}
      <Bridge />
      <Pain />         {/* 03 · AU-01 */}
      <Cost />
      <Solution />
      <Products />     {/* 04 · MD-01 MD-03 · 06 · MD-05 */}
      <UnifiedBase />  {/* 04 · MD-04 ★ */}
      <Effect />       {/* 07 · VL-01 VL-02 VL-03 */}
      <Industries />   {/* 08 · IN-01 */}
      <Roles />        {/* 09 · AU-02 */}
      <Trust />        {/* 10 · TR-03 ★ */}
      <Cases />        {/* 11 · TR-04 */}
      <Process />      {/* 12 · OB-03 CV-09 */}
      <Readiness />
      <Why />          {/* 13 · OB-01 */}
      <Team />
      <LeadMagnet />   {/* 14 · CV-04 ★ CV-05 CV-03 */}
      <Pricing />
      <Faq />
      <FinalCta />     {/* 15 · CV-06 */}
    </SiteShell>
  );
}
