import { DesignHero } from "@/components/design/hero";
import { Cost, Pain } from "@/components/design/sections/problem";
import { Products, Solution } from "@/components/design/sections/solution";
import "@/components/design/sections/sections.css";

export default function DesignHome() {
  return (
    <>
      <DesignHero />
      <Pain />
      <Cost />
      <Solution />
      <Products />
    </>
  );
}
