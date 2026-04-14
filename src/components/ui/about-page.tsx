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
          <h2 className="text-2xl font-semibold leading-snug text-neutral-900 md:text-3xl">
            Clinical Clarity. Human Comfort.
          </h2>
          <p className="text-xs leading-6 text-neutral-600 md:text-sm">
            Well Alive brings emergency medicine, diagnostics, surgery, and recovery teams into one
            coordinated pathway so care decisions are faster, safer, and easier for families.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="md:flex-[1.1]">
            <div className="relative h-[260px] overflow-hidden rounded-3xl md:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1200"
                alt="Well Alive intensive care unit"
                className="h-full w-full object-cover"
                width={800}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#074D36]/95 via-[#0B6E4F]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/80">Critical Care</p>
                <h3 className="mt-1.5 text-xl font-semibold">24/7 Emergency Command</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-1">
            <motion.article
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-3xl bg-[#0f1f1a] p-5 text-white shadow-xl"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B6E4F]/30 text-[#7df1c5]">
                <ShieldCheck className="h-4 w-4" />
              </div>

              <h3 className="text-lg font-semibold">Clinical Systems</h3>
              <p className="mt-1.5 text-xs leading-5 text-white/80">
                Protocol-driven handoffs reduce errors and protect outcomes.
              </p>

              <Button
                asChild
                size="sm"
                className="mt-4 gap-1.5 bg-[#0B6E4F] text-white hover:bg-[#074D36]"
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
              className="relative overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                alt="Diagnostic imaging"
                className="h-[180px] w-full object-cover"
                width={600}
                height={300}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="mb-2 flex gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em]">
                    <HeartPulse className="h-3 w-3" /> Intensive
                  </span>
                </div>
                <h3 className="text-lg font-semibold">Rapid Diagnostics</h3>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
