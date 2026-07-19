"use client";

import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Image from "next/image";

import { Plus } from "lucide-react";

import { DimmedHeadline } from "@/components/ui/dimmed-headline";

const items = [
  {
    id: "1",
    number: "01",
    title: "How quickly can I get an appointment?",
    content:
      "Most consultations are scheduled same-day or within 24 hours. Emergency cases are prioritized immediately by our triage team.",
  },
  {
    id: "2",
    number: "02",
    title: "Do you provide specialist and emergency care in one place?",
    content:
      "Yes. Well Alive combines emergency response, diagnostics, surgery, and follow-up clinics in a coordinated care pathway.",
  },
  {
    id: "3",
    number: "03",
    title: "Do you accept insurance and HMO plans?",
    content:
      "Our patient desk supports major plans and can confirm coverage before your visit. Bring your card or details for quick verification.",
  },
  {
    id: "4",
    number: "04",
    title: "Where is Well Alive Hospital located?",
    content:
      "You can find us at Shelter Afrique, Plot 2 Prof. Nse Essien Street, Uyo. For fast guidance before arrival, call our front desk and emergency team.",
  },
];

function Component() {
  return (
    <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
          Frequently Asked Questions
        </p>
        <DimmedHeadline
          as="h2"
          words={["Everything", "You", "Need", "Before", "Your", "Visit."]}
          dim={[1, 3, 4]}
          surface="light"
          className="text-[26px] leading-[1.08] sm:text-[32px] lg:text-[40px]"
        />
        <p className="max-w-lg text-sm leading-6 text-black/60 md:text-base md:leading-7" style={{ letterSpacing: "-0.03em" }}>
          Quick answers on appointments, emergency response, insurance, and support so you can make
          care decisions with confidence.
        </p>

        <div className="relative hidden h-[260px] overflow-hidden rounded-[1.5rem] sm:block">
          <Image
            src="/faq.jpg"
            alt="Well Alive patient care and support"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-0 w-full p-5 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Need Fast Guidance?
            </p>
            <a
              href="tel:+2349131193359"
              className="mt-1 inline-block text-base font-semibold text-white transition hover:text-white/80"
            >
              Call +234 913 119 3359
            </a>
          </div>
        </div>
      </div>

      <div>
        <Accordion type="single" collapsible className="flex w-full flex-col gap-3" defaultValue="2">
          {items.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="overflow-hidden rounded-2xl border-none bg-white px-5 sm:px-6"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="group flex flex-1 items-center gap-4 py-5 text-left [&>span.toggle>svg]:transition-transform [&>span.toggle>svg]:duration-200 [&[data-state=open]>span.toggle>svg]:rotate-45">
                  <span
                    className="shrink-0 text-xs text-black/30"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.03em" }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="flex-1 text-[17px] leading-snug text-black transition-colors group-hover:text-emerald-800 sm:text-[19px]"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.05em" }}
                  >
                    {item.title}
                  </span>
                  <span className="toggle flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-black/50">
                    <Plus size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-5 pl-9 pr-9 pt-0 text-black/60">{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export { Component };
