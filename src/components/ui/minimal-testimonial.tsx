"use client";

import Image from "next/image";

import { DimmedHeadline } from "./dimmed-headline";

const testimonial = {
  words: [
    "“From",
    "admission",
    "to",
    "discharge,",
    "the",
    "nurses",
    "and",
    "doctors",
    "explained",
    "every",
    "step",
    "clearly.",
    "I",
    "felt",
    "safe,",
    "respected,",
    "and",
    "genuinely",
    "cared",
    "for.”",
  ],
  dim: [] as number[],
  name: "Mfor-Abasi Udoh",
  role: "Maternity Patient",
  image: "/mfor-abasi.jpg",
};

export function TestimonialsMinimal() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-8 md:py-8">
      <DimmedHeadline
        as="p"
        words={testimonial.words}
        dim={testimonial.dim}
        surface="light"
        className="text-center text-2xl leading-snug md:text-4xl md:leading-snug"
      />

      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image src={testimonial.image} alt={testimonial.name} fill sizes="56px" className="object-cover" />
        </div>
        <div className="text-center">
          <span className="block text-base font-semibold text-black">{testimonial.name}</span>
          <span className="block text-sm text-black/50">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}
