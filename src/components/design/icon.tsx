import Image from "next/image";

/**
 * Иконка-стекло из сгенерированного набора.
 * Размер задаётся стилями секции, а не пропсом: набор один на весь сайт, и
 * разнобой размеров сразу читался бы как «иконки прикрутили потом».
 */
export type IconName =
  | "warehouse" | "finance" | "production" | "procurement"
  | "partnership" | "analytics" | "time" | "report"
  | "people" | "integration" | "shield" | "support"
  | "cloud" | "checklist" | "settings" | "growth";

export function GlassIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <Image
      className={`d-icon ${className}`.trim()}
      src={`/design/icons/${name}.png`}
      alt=""
      aria-hidden
      width={512}
      height={512}
      loading="lazy"
    />
  );
}
