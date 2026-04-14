"use client";

import { Stethoscope } from "lucide-react";

import { Marquee } from "./marquee";

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
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200",
    name: "Dr. Adaeze Mbata",
    role: "Cardiology Consultant",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200",
    name: "Dr. Tunde Ajayi",
    role: "Emergency Medicine",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1200",
    name: "Dr. Mariam Bako",
    role: "Obstetrics & Gynecology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=1200",
    name: "Dr. Seyi Nwosu",
    role: "General Surgery",
  },
  {
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200",
    name: "Dr. Bassey Udo",
    role: "Pediatrics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=1200",
    name: "Dr. Chinwe Okafor",
    role: "Internal Medicine",
  },
];

export default function Team({ members }: TeamProps) {
  const teamMembers = members && members.length > 0 ? members : fallbackMembers;
  const featuredMember = teamMembers[0];

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
          className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0"
          data-reveal
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#26a97a] text-white">
            <Stethoscope className="h-5 w-5" />
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

        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <Marquee className="[--gap:1.4rem] sm:[--gap:2rem]" pauseOnHover>
            {teamMembers.map((member) => (
              <article
                className="group flex w-52 shrink-0 flex-col sm:w-60 md:w-64"
                key={member.name}
                data-doctor-card
                data-cursor="grow"
              >
                <div className="relative h-[17.5rem] w-full overflow-hidden rounded-2xl bg-neutral-100 sm:h-[20rem] md:h-[23rem]">
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    src={member.image}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e3227]/80 via-[#26a97a]/25 to-transparent opacity-65 transition-opacity duration-300 group-hover:opacity-95" />
                  <div className="absolute bottom-0 w-full rounded-lg bg-white/82 p-2 backdrop-blur-sm">
                    <h3 className="font-semibold text-neutral-900">{member.name}</h3>
                    <p className="text-sm text-neutral-600">{member.specialty || member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </Marquee>
        </div>

        {featuredMember ? (
          <div className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-0" data-reveal>
            <p className="mb-8 text-lg font-medium leading-relaxed text-neutral-900 md:text-xl">
              Skilled hands, clear communication, and compassionate care.
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#26a97a]/30">
                <img
                  alt={featuredMember.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  src={featuredMember.image}
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-neutral-900">{featuredMember.name}</p>
                <p className="text-sm text-neutral-600">{featuredMember.role}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
