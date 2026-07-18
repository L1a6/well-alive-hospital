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
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import { useInView } from "../../hooks/use-in-view";

type Service = {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  description: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    id: "general-medical-services",
    label: "General Medicine",
    icon: Stethoscope,
    accent: "bg-emerald-700",
    description: "Consultation, diagnosis, and coordinated follow-up for everyday health needs.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "expert-surgeries",
    label: "Expert Surgeries",
    icon: Activity,
    accent: "bg-emerald-900",
    description: "Consultant-led procedures with theatre safety protocols and recovery monitoring.",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "breast-diseases",
    label: "Breast Health",
    icon: HeartPulse,
    accent: "bg-cyan-800",
    description: "Early screening and personalized treatment planning.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "cancer-care-centre",
    label: "Cancer Care",
    icon: ShieldPlus,
    accent: "bg-amber-700",
    description: "Oncology pathways for diagnosis and coordinated treatment.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "gastroenterology",
    label: "Gastroenterology",
    icon: ScanLine,
    accent: "bg-emerald-700",
    description: "Digestive health reviews and long-term GI care.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "maternity-services",
    label: "Maternity",
    icon: Baby,
    accent: "bg-emerald-900",
    description: "Antenatal, delivery, and postnatal support.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "laboratory-services",
    label: "Laboratory",
    icon: Microscope,
    accent: "bg-cyan-800",
    description: "Reliable testing with rapid, accurate reporting.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "ultrasound-scan-services",
    label: "Ultrasound",
    icon: FlaskConical,
    accent: "bg-amber-700",
    description: "Soft-tissue and obstetric imaging, clinician reviewed.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
  },
];

function CardBody({ service, featured }: { service: Service; featured?: boolean }) {
  const Icon = service.icon;
  return (
    <>
      <img
        src={service.image}
        alt={service.label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />

      <div className="relative flex h-full flex-col justify-between p-5">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white ${service.accent}`}>
          <Icon size={17} strokeWidth={1.5} />
        </span>

        <div>
          <h3 className={featured ? "text-xl text-white sm:text-2xl" : "text-base text-white"}>
            {service.label}
          </h3>
          <p
            className={`mt-1.5 max-w-[24ch] text-xs leading-relaxed text-white/75 transition-all duration-300 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:group-hover:mt-2 sm:group-hover:max-h-20 sm:group-hover:opacity-100 ${
              featured ? "sm:max-h-20 sm:opacity-100" : ""
            }`}
          >
            {service.description}
          </p>
          <span
            className={`mt-2 inline-flex items-center gap-1 text-xs font-medium text-white underline underline-offset-4 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 ${
              featured ? "sm:opacity-100" : ""
            }`}
          >
            Learn more
            <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </>
  );
}

export function ServicesGrid() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className="page-container">
      <div className="flex gap-4 overflow-x-auto px-4 pb-2 -mx-4 snap-x snap-mandatory scrollbar-hide sm:hidden">
        {SERVICES.map((service, index) => (
          <Link
            key={service.id}
            href="/services"
            className={`group relative h-52 w-[70vw] shrink-0 snap-center overflow-hidden rounded-3xl ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${Math.min(index, 6) * 0.06}s` }}
          >
            <CardBody service={service} featured />
          </Link>
        ))}
      </div>

      <div className="hidden [grid-auto-flow:dense] sm:grid sm:grid-cols-3 sm:auto-rows-[190px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[210px]">
        {SERVICES.map((service, index) => {
          const featured = index === 0;
          return (
            <Link
              key={service.id}
              href="/services"
              className={`group relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1 ${
                featured ? "sm:col-span-2 sm:row-span-2" : ""
              } ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${Math.min(index, 6) * 0.08}s` }}
            >
              <CardBody service={service} featured={featured} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesGrid;
