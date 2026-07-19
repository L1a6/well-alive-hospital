"use client";

import { useEffect, useRef } from "react";

/**
 * Continuously scrolls a horizontally-scrollable strip at a constant speed,
 * wrapping seamlessly. Expects the strip's children to be a duplicated
 * (2x) list so the loop point is invisible. Only ever touches the
 * container's own scrollLeft, never the page/document scroll.
 */
export function useMarquee<T extends HTMLElement>(enabled: boolean, speed = 0.6) {
  const ref = useRef<T | null>(null);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);
  const resumeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    let frame: number;
    const step = () => {
      const container = ref.current;
      if (container && !pausedRef.current && visibleRef.current) {
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          container.scrollLeft += speed;
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += halfWidth;
          }
        }
      }
      frame = window.requestAnimationFrame(step);
    };
    frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [enabled, speed]);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, 2500);
  };

  return { ref, pause };
}
