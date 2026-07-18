import Link from "next/link";
import { Activity, FlaskConical, Stethoscope } from "lucide-react";

import { SiteShell } from "../../components/site-shell";
import { DimmedHeadline } from "../../components/ui/dimmed-headline";

const services = [
  {
    icon: Stethoscope,
    accent: "bg-emerald-900",
    title: "Primary and Family Medicine",
    desc: "Routine consultations, chronic disease management, and preventive screenings for every age group.",
  },
  {
    icon: Activity,
    accent: "bg-emerald-800",
    title: "Emergency and Trauma Care",
    desc: "Round-the-clock emergency services with rapid diagnostics, stabilization, and specialist referrals.",
  },
  {
    icon: FlaskConical,
    accent: "bg-cyan-800",
    title: "Laboratory and Imaging",
    desc: "Accurate testing and modern imaging systems that support faster diagnosis and treatment planning.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell
      title="Clinical Services"
      titleDim={[0]}
      subtitle="Comprehensive clinical services tailored to every patient"
    >
      <section className="bg-[#FEFDF9] py-20 lg:py-28">
        <div className="page-container grid gap-6 md:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-white ${item.accent}`}>
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-xl">{item.title}</h3>
                <p className="mb-8 mt-3 flex-1 text-sm leading-relaxed text-black/60" style={{ letterSpacing: "-0.03em" }}>
                  {item.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-sm font-medium text-black underline underline-offset-4"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Take this service
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-emerald-950 py-20 lg:py-28">
        <div className="page-container flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <DimmedHeadline
              as="h2"
              words={["Compassionate", "Medicine,", "Measurable", "Outcomes"]}
              dim={[1]}
              surface="dark"
              className="text-[36px] leading-[1.1] sm:text-[50px]"
            />
            <p className="mt-4 max-w-lg text-lg text-white/60" style={{ letterSpacing: "-0.03em" }}>
              Book a service and get guidance from the right specialist team.
            </p>
          </div>
          <Link href="/contact" className="cta-btn !bg-white !text-black shrink-0">
            Take a Service
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
