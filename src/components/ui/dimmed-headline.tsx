"use client";

import { useInView } from "../../hooks/use-in-view";

type DimmedHeadlineProps = {
  words: string[];
  dim: number[];
  as?: "h1" | "h2" | "h3" | "p";
  surface?: "dark" | "light";
  trigger?: "mount" | "inView";
  baseDelay?: number;
  className?: string;
};

const DELAY_CLASSES = [
  "delay-0",
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-400",
  "delay-500",
  "delay-600",
  "delay-700",
  "delay-800",
  "delay-900",
  "delay-1000",
  "delay-1100",
];

function delayFor(step: number) {
  if (step < DELAY_CLASSES.length) {
    return { className: DELAY_CLASSES[step], style: undefined };
  }
  return { className: "", style: { animationDelay: `${step * 0.1}s` } };
}

export function DimmedHeadline({
  words,
  dim,
  as = "h2",
  surface = "light",
  trigger = "inView",
  baseDelay = 0,
  className = "",
}: DimmedHeadlineProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>();
  const shouldAnimate = trigger === "mount" || inView;

  const fullColor = surface === "dark" ? "text-white" : "text-black";
  const dimColor = surface === "dark" ? "text-white/45" : "text-black/45";

  const Tag = as;
  const dimSet = new Set(dim);

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, index) => {
        const { className: delayClass, style } = delayFor(baseDelay + index);
        return (
          <span
            key={`${word}-${index}`}
            className="mr-[0.25em] inline-block overflow-hidden align-bottom last:mr-0"
          >
            {shouldAnimate ? (
              <span
                className={`word-reveal-span ${delayClass} ${dimSet.has(index) ? dimColor : fullColor}`}
                style={style}
              >
                {word}
              </span>
            ) : (
              <span className={`inline-block opacity-0 ${dimSet.has(index) ? dimColor : fullColor}`}>
                {word}
              </span>
            )}
          </span>
        );
      })}
    </Tag>
  );
}
