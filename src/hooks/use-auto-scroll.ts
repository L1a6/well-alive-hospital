"use client";

import { useEffect, useRef } from "react";

/**
 * Advances a horizontally-scrollable strip one child at a time.
 * Uses container.scrollTo (never scrollIntoView) so it can only ever move
 * the strip itself, never the page/document scroll position.
 */
export function useAutoScroll<T extends HTMLElement>(itemCount: number, intervalMs = 3500) {
  const ref = useRef<T | null>(null);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);
  const resumeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el || itemCount <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    const timer = window.setInterval(() => {
      const container = ref.current;
      if (!container || !visibleRef.current || pausedRef.current) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      const children = Array.from(container.children) as HTMLElement[];
      if (children.length === 0) return;

      let currentIndex = 0;
      let minDist = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - container.scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          currentIndex = i;
        }
      });

      const nextIndex = (currentIndex + 1) % children.length;
      const targetLeft = Math.min(children[nextIndex].offsetLeft, maxScroll);
      container.scrollTo({ left: targetLeft, behavior: "smooth" });
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [itemCount, intervalMs]);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, 4500);
  };

  return { ref, pause };
}
