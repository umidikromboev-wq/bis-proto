"use client";

import { useEffect, useRef } from "react";

/**
 * Живой изо-завод. Уважает prefers-reduced-motion: при reduce видео не
 * проигрывается — остаётся статичный постер (первый кадр рендера).
 */
export function FactoryVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.removeAttribute("autoplay");
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      poster="/design/factory-poster.png"
      aria-label="Живая 3D-модель завода с показателями системы"
    >
      <source src="/design/factory.webm" type="video/webm" />
      <source src="/design/factory-opt.mp4" type="video/mp4" />
    </video>
  );
}
