import { PopupProvider } from "@/components/popup-context";
import { Popups } from "@/components/popups";
import { Header, Hero, Bridge, Pain, Cost, Solution, Products } from "@/components/sections-top";
import {
  Cases, Faq, FinalCta, Footer, Industries, Pricing,
  Process, Readiness, StickyMobile, Team, Why,
} from "@/components/sections-bottom";

export default function Page() {
  return (
    <PopupProvider>
      <Header />
      <main>
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
      </main>
      <Footer />
      <StickyMobile />
      <Popups />
    </PopupProvider>
  );
}
