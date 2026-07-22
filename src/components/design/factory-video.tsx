"use client";

import { useEffect, useRef } from "react";

/**
 * Живой изо-завод.
 *
 * Фон у видео убрать нельзя — модель белая на белом, ключом её не отделить.
 * Поэтому прозрачность даёт CSS-маска: альфа снята с первого кадра этого же
 * видео, а камера в клипе зафиксирована (центр масс гуляет меньше пикселя),
 * так что статичная маска совпадает со всеми кадрами.
 *
 * Постер — тот же первый кадр с уже вшитой альфой, поэтому до старта
 * воспроизведения и при prefers-reduced-motion картинка та же, без подмены.
 */
export function FactoryVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.removeAttribute("autoplay");
      v.pause();
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="dh-factory"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/design/factory.webp"
      width={2000}
      height={1562}
      aria-label="Производство, объединённое в одну систему SAP: склад, цех, конвейер и аналитика"
    >
      <source src="/design/factory.webm" type="video/webm" />
      <source src="/design/factory.mp4" type="video/mp4" />
    </video>
  );
}
