"use client";

import { Stethoscope } from "lucide-react";

import { DimmedHeadline } from "./dimmed-headline";
import { useInView } from "../../hooks/use-in-view";

export type TeamMember = {
  image: string;
  name: string;
  role?: string;
  specialty?: string;
};

type TeamProps = {
  members?: TeamMember[];
};

const fallbackMembers: TeamMember[] = [
  {
    image: "/israelben.jpg",
    name: "Dr. Israel Ben",
    role: "Consultant General Surgeon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
    name: "Nurse Adaobi Etim",
    role: "Senior Theatre Nurse",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1200",
    name: "Dr. Nseabasi Udo",
    role: "Emergency Medicine Specialist",
  },
  {
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1200",
    name: "Nurse Eno Bassey",
    role: "Maternity and Neonatal Nurse",
  },
];

export default function Team({ members }: TeamProps) {
  const teamMembers = (members && members.length > 0 ? members : fallbackMembers).slice(0, 8);
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="doctors" className="relative w-full bg-[#FEFDF9] py-16 lg:py-24">
      <div className="page-container">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              <Stethoscope className="h-4 w-4" />
              Clinical Team
            </div>
            <DimmedHeadline
              as="h2"
              words={["The", "People", "Behind", "The", "Care"]}
              dim={[2, 3]}
              surface="light"
              className="text-[28px] leading-[1.05] sm:text-[35px] lg:text-[48px]"
            />
          </div>
          <p className="max-w-sm text-sm text-black/60 sm:text-base" style={{ letterSpacing: "-0.03em" }}>
            A coordinated team of specialists delivering precise, compassionate care at every stage
            of your recovery.
          </p>
        </div>

        <div
          ref={ref}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => {
            const role = member.specialty || member.role || "Clinical Specialist";
            return (
              <article
                key={`${member.name}-${index}`}
                className={`group w-[62%] shrink-0 snap-center sm:w-auto ${inView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${Math.min(index, 6) * 0.08}s` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    src={member.image}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-base text-white sm:text-lg">{member.name}</h3>
                    <p className="mt-0.5 text-xs text-white/70 sm:text-sm">{role}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-[#ECEDEC] px-6 py-8 text-center sm:mt-14 sm:flex-row sm:gap-6 sm:px-10 sm:text-left">
          <img
            src="/israelben.jpg"
            alt="Dr. Israel Ben"
            className="h-16 w-16 shrink-0 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-base font-medium leading-relaxed text-black/80">
              &ldquo;Surgery is precision with compassion, from first consultation to full recovery.&rdquo;
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.04em] text-black/50">
              Dr. Israel Ben, Chief Consultant General Surgery, Well Alive Hospital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
