"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Stethoscope } from "lucide-react";

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
  {
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&q=80&w=1200",
    name: "Dr. Mfon Uwah",
    role: "Consultant Gastroenterologist",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=1200",
    name: "Nurse Imaobong Etim",
    role: "Women's Health Nurse",
  },
];

const AUTO_SCROLL_SPEED = 0.75;
const MANUAL_SCROLL_OFFSET = 305;

export default function Team({ members }: TeamProps) {
  const teamMembers = members && members.length > 0 ? members : fallbackMembers;
  const doubledMembers = [...teamMembers, ...teamMembers];
  const railRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const recenterRail = useCallback(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const halfWidth = rail.scrollWidth / 2;
    if (halfWidth <= 0) {
      return;
    }

    if (rail.scrollLeft >= halfWidth) {
      rail.scrollLeft -= halfWidth;
    } else if (rail.scrollLeft <= 0) {
      rail.scrollLeft += halfWidth;
    }
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    rail.scrollLeft = 1;
  }, [teamMembers.length]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || isPaused || teamMembers.length === 0) {
      return;
    }

    let frame = 0;

    const animate = () => {
      rail.scrollLeft += AUTO_SCROLL_SPEED;
      recenterRail();

      const cardWidth = rail.scrollWidth / Math.max(doubledMembers.length, 1);
      const nextIndex = Math.floor((rail.scrollLeft + cardWidth * 0.5) / cardWidth) % teamMembers.length;
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [doubledMembers.length, isPaused, recenterRail, teamMembers.length]);

  const scrollCards = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction === "left" ? -MANUAL_SCROLL_OFFSET : MANUAL_SCROLL_OFFSET,
      behavior: "smooth",
    });

    window.setTimeout(recenterRail, 360);
  };

  return (
    <section
      id="doctors"
      className="relative w-full overflow-hidden bg-white py-12 md:py-24"
    >
      <div>
        <svg
          className="absolute bottom-0 right-0 text-neutral-200"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_494_1104)">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </g>
          <defs>
            <clipPath id="clip0_494_1104">
              <rect fill="white" height="154" width="460" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="mx-auto mb-12 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0"
          data-reveal
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/35 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-800 shadow-[0_10px_24px_rgba(31,120,84,0.14)] backdrop-blur-xl">
            <Stethoscope className="h-4 w-4" />
            Clinical Team
          </div>

          <h2 className="relative mb-4 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Our Clinical Specialists
            <svg
              className="absolute -right-8 -top-2 -z-10 w-24 text-neutral-200"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>
          <p className="max-w-2xl text-neutral-600">
            A coordinated team of specialists delivering precise, compassionate care across every stage
            of your recovery journey.
          </p>
        </div>

        <div className="mb-6 flex justify-end px-6 lg:px-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCards("left")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-[0_10px_24px_rgba(24,94,63,0.14)] transition hover:-translate-y-0.5 hover:bg-white"
              aria-label="Scroll care team left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCards("right")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-[0_10px_24px_rgba(24,94,63,0.14)] transition hover:-translate-y-0.5 hover:bg-white"
              aria-label="Scroll care team right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative w-full" data-reveal>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div
            ref={railRef}
            className="team-scrollbar flex gap-5 overflow-x-auto pb-3 pt-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {doubledMembers.map((member, index) => {
              const role = member.specialty || member.role || "Clinical Specialist";
              const isActiveCard = index % teamMembers.length === activeIndex;

              return (
                <article
                  className="group flex w-48 shrink-0 flex-col sm:w-52 md:w-64"
                  key={`${member.name}-${index}`}
                  data-doctor-card
                  data-cursor="grow"
                >
                  <div
                    className={`relative h-[16rem] overflow-hidden rounded-2xl border bg-neutral-900 shadow-[0_24px_44px_rgba(8,36,24,0.2)] transition-all duration-500 sm:h-[17rem] md:h-[19rem] ${
                      isActiveCard
                        ? "border-emerald-300/80 ring-2 ring-emerald-200/70"
                        : "border-emerald-100/70"
                    }`}
                  >
                    <img
                      alt={member.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      src={member.image}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />

                    <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                      <h3 className="text-base font-bold text-white drop-shadow-xl shadow-black z-10 relative">{member.name}</h3>
                      <p className="text-[11px] font-semibold text-[#d6f1ce] drop-shadow-lg shadow-black z-10 relative mt-0.5">
                        {role}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/80">
          Team Spotlight {activeIndex + 1} of {teamMembers.length}
        </p>
      </div>

      <style jsx>{`
        .team-scrollbar {
          scrollbar-width: none;
        }

        .team-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
