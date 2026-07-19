"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, HeartPulse, ShieldCheck } from "lucide-react";

import { Button } from "./button";
import { DimmedHeadline } from "./dimmed-headline";

const stats = [
  { value: "15+", label: "Years of clinical service" },
  { value: "40+", label: "Resident specialists" },
  { value: "20K+", label: "Patients treated" },
];

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              About Well Alive
            </p>
            <DimmedHeadline
              as="h2"
              words={["Clinical", "Clarity.", "Human", "Comfort."]}
              dim={[2]}
              surface="light"
              className="text-[28px] leading-[1.05] sm:text-[35px] lg:text-[44px]"
            />
          </div>
          <div className="flex flex-col justify-between gap-6">
            <p className="text-sm leading-relaxed text-black/60 sm:text-base" style={{ letterSpacing: "-0.03em" }}>
              Well Alive brings emergency medicine, diagnostics, surgery, and recovery teams into one
              coordinated pathway so care decisions are faster, safer, and easier for families.
            </p>
            <div className="flex gap-6 border-t border-black/10 pt-5 sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl text-black sm:text-3xl" style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.05em" }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 max-w-[10ch] text-xs text-black/50" style={{ letterSpacing: "-0.03em" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:mt-10 md:flex-row">
          <div className="md:flex-[1.1]">
            <div className="relative h-[220px] overflow-hidden rounded-3xl md:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1200"
                alt="Well Alive intensive care unit"
                className="h-full w-full object-cover object-center"
                width={800}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">Critical Care</p>
                <h3 className="mt-1.5 text-2xl text-white">24/7 Emergency Command</h3>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-4 md:flex-1 md:h-[420px]">
            <article className="relative flex min-h-[200px] flex-1 flex-col justify-center overflow-hidden rounded-3xl bg-emerald-950 p-6 text-white transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-800">
                <ShieldCheck className="h-4 w-4" />
              </div>

              <h3 className="text-lg text-white">Clinical Systems</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60" style={{ letterSpacing: "-0.03em" }}>
                Protocol-driven handoffs reduce errors and protect outcomes.
              </p>

              <Button asChild size="sm" className="mt-5 w-max gap-1.5 rounded-full bg-white text-black hover:bg-white/90">
                <Link href="/contact">
                  Book Consultation
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </Button>
            </article>

            <article className="relative flex min-h-[170px] flex-1 overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1 md:min-h-[200px]">
              <Image
                src="/about.jpg"
                alt="Diagnostic imaging"
                className="h-full w-full object-cover object-center"
                width={600}
                height={300}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-800">
                    <HeartPulse className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">Intensive</span>
                </div>
                <h3 className="text-lg text-white">Rapid Diagnostics</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
