"use client";

import Link from "next/link";
import {
  Activity,
  Baby,
  FlaskConical,
  HeartPulse,
  Microscope,
  ScanLine,
  Stethoscope,
  ShieldPlus,
  type LucideIcon,
} from "lucide-react";

import { useInView } from "../../hooks/use-in-view";

type Service = {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    id: "general-medical-services",
    label: "General Medical Services",
    icon: Stethoscope,
    accent: "bg-emerald-800",
    description: "Consultation, diagnosis, and coordinated follow-up for everyday health needs.",
  },
  {
    id: "expert-surgeries",
    label: "Expert Surgeries",
    icon: Activity,
    accent: "bg-emerald-900",
    description: "Consultant-led procedures with theatre safety protocols and recovery monitoring.",
  },
  {
    id: "breast-diseases",
    label: "Breast Diseases",
    icon: HeartPulse,
    accent: "bg-cyan-800",
    description: "Early screening, breast health evaluation, and personalized treatment planning.",
  },
  {
    id: "cancer-care-centre",
    label: "Cancer Care Centre",
    icon: ShieldPlus,
    accent: "bg-amber-700",
    description: "Oncology support pathways for diagnosis guidance and treatment coordination.",
  },
  {
    id: "gastroenterology",
    label: "Gastroenterology",
    icon: ScanLine,
    accent: "bg-emerald-800",
    description: "Digestive health reviews, procedure referrals, and long-term GI care.",
  },
  {
    id: "maternity-services",
    label: "Maternity Services",
    icon: Baby,
    accent: "bg-emerald-900",
    description: "Antenatal, delivery, and postnatal support for safe motherhood.",
  },
  {
    id: "laboratory-services",
    label: "Laboratory Services",
    icon: Microscope,
    accent: "bg-cyan-800",
    description: "Reliable sample testing and rapid reporting for confident decisions.",
  },
  {
    id: "ultrasound-scan-services",
    label: "Ultrasound Scans",
    icon: FlaskConical,
    accent: "bg-amber-700",
    description: "Soft-tissue and obstetric imaging with clinician-reviewed interpretation.",
  },
];

export function ServicesGrid() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className="page-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((service, index) => {
        const Icon = service.icon;
        return (
          <article
            key={service.id}
            className={`flex flex-col rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1 ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${Math.min(index, 6) * 0.08}s` }}
          >
            <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-white ${service.accent}`}>
              <Icon size={18} strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 text-lg">{service.label}</h3>
            <p className="mb-6 mt-2 flex-1 text-sm leading-relaxed text-black/60" style={{ letterSpacing: "-0.03em" }}>
              {service.description}
            </p>
            <Link
              href="/services"
              className="inline-block text-sm font-medium text-emerald-800 underline underline-offset-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              Learn more
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default ServicesGrid;
