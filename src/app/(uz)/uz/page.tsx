import { DesignHero } from "@/components/design/hero";
import { LeadMagnet, Faq, FinalCta, Pricing } from "@/components/design/sections/close";
import { Cost, Pain } from "@/components/design/sections/problem";
import { AllCasesLink, Cases, Readiness, Team, Trust, Why } from "@/components/design/sections/proof";
import { PinnedRoadmap } from "@/components/design/schemes/roadmap";
import { Products, Solution } from "@/components/design/sections/solution";
import { Effect, Industries, LogoStrip, Roles, UnifiedBase } from "@/components/design/sections/value";
import "@/components/design/sections/sections.css";
import "@/components/design/schemes/schemes.css";

/**
 * Главная дизайн-версии.
 * Порядок секций взят из прототипа — он согласован по смыслу. Выпал только
 * блок-«мостик»: он объяснял, почему прототип монохромный, и в дизайне
 * потерял предмет.
 */
export default function DesignHome() {
  return (
    <>
      <DesignHero  locale="uz" />
      <LogoStrip  locale="uz" />
      <Pain  locale="uz" />
      <Cost  locale="uz" />
      <Solution  locale="uz" />
      <Products  locale="uz" />
      <UnifiedBase  locale="uz" />
      <Effect  locale="uz" />
      <Industries  locale="uz" />
      <Roles  locale="uz" />
      <Trust  locale="uz" />
      <Cases  locale="uz" />
      <AllCasesLink  locale="uz" />
      <PinnedRoadmap  locale="uz" />
      <Readiness  locale="uz" />
      <Why  locale="uz" />
      <Team  locale="uz" />
      <LeadMagnet  locale="uz" />
      <Pricing  locale="uz" />
      <Faq  locale="uz" />
      <FinalCta  locale="uz" />
    </>
  );
}
