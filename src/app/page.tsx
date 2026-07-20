import { SiteShell } from "@/components/shell";
import { Hero, Bridge, Pain, Cost, Solution, Products } from "@/components/sections-top";
import {
  Cases, Faq, FinalCta, Industries, Pricing,
  Process, Readiness, Team, Why,
} from "@/components/sections-bottom";

export default function Page() {
  return (
    <SiteShell>
      <Hero />
      <Bridge />
      <Pain />
      <Cost />
      <Solution />
      <Products />
      <Industries />
      <Cases />
      <Process />
      <Readiness />
      <Why />
      <Team />
      <Pricing />
      <Faq />
      <FinalCta />
    </SiteShell>
  );
}
