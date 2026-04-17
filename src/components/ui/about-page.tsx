"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ChevronRight, HeartPulse, ShieldCheck } from "lucide-react";

import { Button } from "./button";

export default function AboutPage() {
  return (
    <section className="py-2 md:py-6">
      <div className="mx-auto max-w-5xl space-y-6 px-4 sm:px-6">
        <div className="grid gap-4 text-center md:grid-cols-2 md:gap-8 md:text-left">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-emerald-200/80 bg-white/35 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-800 shadow-[0_10px_24px_rgba(31,120,84,0.15)] backdrop-blur-xl">
              About Well Alive
            </p>
            <h2 className="text-2xl font-semibold leading-snug text-neutral-900 md:text-3xl">
              Clinical Clarity. Human Comfort.
            </h2>
          </div>
          <p className="text-xs leading-6 text-neutral-600 md:text-sm">
            Well Alive brings emergency medicine, diagnostics, surgery, and recovery teams into one
            coordinated pathway so care decisions are faster, safer, and easier for families.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
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
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#e2f5d9] font-semibold drop-shadow-lg shadow-black">Critical Care</p>
                <h3 className="mt-1.5 text-2xl font-bold text-white drop-shadow-xl shadow-black">24/7 Emergency Command</h3>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-4 md:flex-1 md:h-[420px]">
            <motion.article
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-3xl bg-[#2d7c37] p-6 text-white shadow-xl flex flex-col justify-center min-h-[200px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 h-24 w-24 rounded-full bg-[#5AAC4E]/45 blur-xl" />
              
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white relative z-10 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4" />
              </div>

              <h3 className="text-lg font-semibold text-white relative z-10">Clinical Systems</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#e9f7e1] relative z-10">
                Protocol-driven handoffs reduce errors and protect outcomes.
              </p>

              <Button
                asChild
                size="sm"
                className="mt-5 w-max gap-1.5 bg-white text-[#2d7c37] hover:bg-neutral-100 shadow-md relative z-10 font-semibold"
              >
                <Link href="#contact">
                  Book Consultation
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </Button>
            </motion.article>

            <motion.article
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative flex min-h-[170px] flex-1 overflow-hidden rounded-3xl shadow-lg md:min-h-[200px]"
            >
              <Image
                src="/about.jpg"
                alt="Diagnostic imaging"
                className="h-full w-full object-cover object-center"
                width={600}
                height={300}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="mb-2 flex gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md text-white font-semibold">
                    <HeartPulse className="h-3 w-3" /> Intensive
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white drop-shadow-xl shadow-black">Rapid Diagnostics</h3>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
