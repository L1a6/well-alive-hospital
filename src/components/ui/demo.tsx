"use client";

import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Image from "next/image";

import { AtSign, Clock3, Plus, ShieldCheck, Stethoscope } from "lucide-react";

const items = [
  {
    id: "1",
    icon: Clock3,
    title: "How quickly can I get an appointment?",
    content:
      "Most consultations are scheduled same-day or within 24 hours. Emergency cases are prioritized immediately by our triage team.",
  },
  {
    id: "2",
    icon: Stethoscope,
    title: "Do you provide specialist and emergency care in one place?",
    content:
      "Yes. Well Alive combines emergency response, diagnostics, surgery, and follow-up clinics in a coordinated care pathway.",
  },
  {
    id: "3",
    icon: ShieldCheck,
    title: "Do you accept insurance and HMO plans?",
    content:
      "Our patient desk supports major plans and can confirm coverage before your visit. Bring your card or details for quick verification.",
  },
  {
    id: "4",
    icon: AtSign,
    title: "How can I reach support after office hours?",
    content:
      "Use our emergency phone line for urgent needs. For non-urgent requests, send an email and our team follows up promptly.",
  },
];

function Component() {
  return (
    <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Frequently Asked Questions
        </p>
        <h2 className="text-2xl font-semibold leading-snug text-neutral-900 md:text-3xl">
          Everything You Need Before Your Visit.
        </h2>
        <p className="max-w-lg text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
          Quick answers on appointments, emergency response, insurance, and support so you can make
          care decisions with confidence.
        </p>

        <div className="relative h-[250px] overflow-hidden rounded-[1.5rem] border border-emerald-200/70 sm:h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1400"
            alt="Well Alive support desk"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,95,58,0.12),rgba(10,44,27,0.7))]" />
          <div className="absolute bottom-0 w-full p-5 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100">
              Need Fast Guidance?
            </p>
            <a
              href="tel:+2349131193359"
              className="mt-1 inline-block text-base font-semibold text-white transition hover:text-emerald-100"
            >
              Call +234 913 119 3359
            </a>
          </div>
        </div>
      </div>

      <div className="px-1 sm:px-2">
        <Accordion type="single" collapsible className="w-full" defaultValue="2">
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-2">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 text-neutral-900 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  <span className="flex items-center gap-3">
                    <item.icon
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 text-emerald-700/80"
                      aria-hidden="true"
                    />
                    <span>{item.title}</span>
                  </span>
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-neutral-500 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 ps-7 text-neutral-600">{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export { Component };
