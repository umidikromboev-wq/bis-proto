import { DesignHero } from "@/components/design/hero";
import { LeadMagnet, Faq, FinalCta, Pricing } from "@/components/design/sections/close";
import { Cost, Pain } from "@/components/design/sections/problem";
import { AllCasesLink, Cases, Process, Readiness, Team, Trust, Why } from "@/components/design/sections/proof";
import { Products, Solution } from "@/components/design/sections/solution";
import { Effect, Industries, LogoStrip, Roles, UnifiedBase } from "@/components/design/sections/value";
import "@/components/design/sections/sections.css";

/**
 * Главная дизайн-версии.
 * Порядок секций взят из прототипа — он согласован по смыслу. Выпал только
 * блок-«мостик»: он объяснял, почему прототип монохромный, и в дизайне
 * потерял предмет.
 */
export default function DesignHome() {
  return (
    <>
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
      <Process />
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
