"use client";

import Link from "next/link";
import { ArrowUpRight, HeartPulse, ShieldPlus, Stethoscope } from "lucide-react";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/ui/footer-section";
import { DimmedHeadline } from "../components/ui/dimmed-headline";
import AboutPage from "../components/ui/about-page";
import { Component as FaqSection } from "../components/ui/demo";
import ServicesGrid from "../components/ui/services-grid";
import Team, { type TeamMember } from "../components/ui/team";
import { BlogGrid, type BlogPost } from "../components/ui/blog-grid";
import { TestimonialsMinimal } from "../components/ui/minimal-testimonial";
import { useInView } from "../hooks/use-in-view";

const heroImage =
  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=2200";

const heroSubtitle =
  "Walk-in and scheduled care from consultation to recovery. Open 24 hours, every day of the year.";

type TeamProfile = {
  name: string;
  role: string;
  image: string;
};

const careTeam: TeamProfile[] = [
  { name: "Dr. Israel Ben", role: "Consultant General Surgeon", image: "/israelben.jpg" },
  {
    name: "Nurse Mfon-Abasi Edet",
    role: "Senior Theatre Nurse",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Nseabasi Udo",
    role: "Emergency Medicine Specialist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Nurse Eno Bassey",
    role: "Maternity and Neonatal Nurse",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Mfon Uwah",
    role: "Consultant Gastroenterologist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Nurse Imaobong Etim",
    role: "Women's Health Nurse",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Iniobong Essien",
    role: "Breast and Women's Health Consultant",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1000",
  },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Stroke First Aid: What to Do in the First 10 Minutes",
    excerpt: "A practical FAST-based response guide from our emergency and neurology team.",
    meta: "Emergency",
    imageSrc: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Blood Pressure Myths That Delay Early Treatment",
    excerpt: "Understand common misconceptions and when to seek medical review.",
    meta: "Cardiology",
    imageSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Childhood Fever: Home Monitoring vs Hospital Visit",
    excerpt: "Clear pediatric advice on warning signs that should never be ignored.",
    meta: "Pediatrics",
    imageSrc: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800",
  },
];

const stripHighlights = [
  { icon: Stethoscope, accent: "bg-emerald-900", label: "General Medicine" },
  { icon: HeartPulse, accent: "bg-emerald-700", label: "Cardiac Care" },
  { icon: ShieldPlus, accent: "bg-amber-700", label: "Emergency Response" },
];

function ThreePanelStrip() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]">
      <div className={`bg-[#ECEDEC] p-8 sm:p-10 lg:p-12 ${inView ? "animate-fade-up delay-900" : "opacity-0"}`}>
        <h3 className="text-[28px] leading-[1.1] sm:text-[35px]">
          Every department, one coordinated care team.
        </h3>
        <Link
          href="/services"
          className="mt-6 inline-block text-sm font-medium text-emerald-800 underline underline-offset-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          See all clinical services
        </Link>
      </div>

      <div className={`flex flex-col justify-center gap-4 bg-[#FEFDF9] p-8 sm:p-10 ${inView ? "animate-fade-up delay-1000" : "opacity-0"}`}>
        {stripHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-3">
              <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${item.accent}`}>
                <Icon size={16} strokeWidth={1.5} />
              </span>
              <p className="text-sm font-medium text-black" style={{ letterSpacing: "-0.03em" }}>
                {item.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className={`relative flex flex-col justify-between overflow-hidden bg-emerald-950 p-8 text-white sm:p-10 lg:p-12 ${inView ? "animate-fade-up delay-1100" : "opacity-0"}`}>
        <img
          src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=1000"
          alt="Well Alive Hospital clinical team"
          className="h-32 w-full rounded-xl object-cover"
        />
        <div className="mt-6">
          <p className="text-[35px] leading-none">24/7</p>
          <p className="mt-2 text-sm text-white/60" style={{ letterSpacing: "-0.03em" }}>
            Emergency and critical care response, every day of the year.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const doctorTeam: TeamMember[] = careTeam.map((member) => ({
    image: member.image,
    name: member.name,
    role: member.role,
  }));

  return (
    <div>
      <Navbar />

      <section className="relative flex min-h-[460px] items-end overflow-hidden bg-emerald-950 sm:min-h-[560px] lg:min-h-[640px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4,26,20,0.6) 0%, rgba(4,26,20,0.35) 40%, rgba(4,26,20,0.75) 100%)",
          }}
        />

        <div className="page-container relative pb-10 pt-20 sm:pb-14 sm:pt-16">
          <p className="animate-fade-up delay-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Well Alive Hospital, Uyo
          </p>

          <DimmedHeadline
            as="h1"
            words={["Trusted", "Medical", "Care", "For", "Every", "Family", "In", "Uyo"]}
            dim={[3, 4, 6]}
            surface="dark"
            trigger="mount"
            baseDelay={3}
            className="mt-3 max-w-2xl text-[32px] leading-[1.08] sm:text-[42px] md:text-[52px] lg:text-[58px]"
          />

          <p
            className="animate-fade-in delay-500 mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
            style={{ letterSpacing: "-0.03em" }}
          >
            {heroSubtitle}
          </p>

          <div className="animate-fade-up delay-700 mt-6 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="cta-btn !h-12 px-6 text-sm sm:!h-14">
              Book an Appointment
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/85 underline underline-offset-4 transition-colors hover:text-white"
              style={{ letterSpacing: "-0.03em" }}
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <ThreePanelStrip />

      <section className="bg-[#FEFDF9] py-20 lg:py-28">
        <AboutPage />
      </section>

      <section id="services" className="bg-[#FEFDF9] py-20 lg:py-28">
        <div className="page-container mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Clinical Services</p>
          <h2 className="mt-3 max-w-xl text-[35px] leading-[1.05] sm:text-[48px]">Advanced care units.</h2>
        </div>
        <ServicesGrid />
      </section>

      <Team members={doctorTeam} />

      <section id="blogs" className="bg-[#FEFDF9] px-4 py-20 lg:py-28">
        <div className="page-container mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Blog Highlights</p>
            <h2 className="mt-3 text-[35px] leading-[1.05] sm:text-[48px]">Featured medical stories.</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-emerald-800 underline underline-offset-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            View all articles
          </Link>
        </div>
        <BlogGrid posts={blogPosts} />
      </section>

      <section className="bg-[#FEFDF9] px-4 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Testimonials</p>
            <h2 className="mt-3 text-[35px] sm:text-[48px]">Stories from Well Alive patients.</h2>
          </div>
          <TestimonialsMinimal />
        </div>
      </section>

      <section className="bg-[#FEFDF9] px-4 pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-800/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-emerald-700/20 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Premium Care Access
                </p>
                <DimmedHeadline
                  as="h3"
                  words={["Ready", "When", "You", "Are."]}
                  dim={[1, 2]}
                  surface="dark"
                  className="mt-4 max-w-lg text-[36px] leading-[1.08] sm:text-[52px]"
                />
                <p className="mt-4 max-w-md text-sm text-white/70 sm:text-base" style={{ letterSpacing: "-0.03em" }}>
                  Priority scheduling and a coordinated care plan from the Well Alive clinical team.
                </p>
                <Link href="/contact" className="cta-btn mt-8 !bg-white !text-black">
                  Book an Appointment
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="w-full shrink-0 border-t border-white/10 pt-8 lg:w-auto lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Call the front desk</p>
                <a
                  href="tel:+2349131193359"
                  className="mt-2 block text-[32px] text-white transition-colors hover:text-emerald-300 sm:text-[40px]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.05em" }}
                >
                  +234 913 119 3359
                </a>
                <p className="mt-2 text-sm text-white/50" style={{ letterSpacing: "-0.03em" }}>
                  Open 24 hours, every day of the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECEDEC] px-4 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1400px]">
          <FaqSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}
