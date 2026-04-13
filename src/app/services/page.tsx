import Link from "next/link";

import { SiteShell } from "../../components/site-shell";

export default function ServicesPage() {
  return (
    <SiteShell
      title="Services"
      subtitle="Comprehensive clinical services tailored to every patient"
    >
      <section className="pb-[100px] pt-[120px]">
        <div className="page-container grid gap-6 md:grid-cols-3">
          {[
            {
              icon: 1,
              title: "Primary and Family Medicine",
              desc: "Routine consultations, chronic disease management, and preventive screenings for every age group.",
            },
            {
              icon: 2,
              title: "Emergency and Trauma Care",
              desc: "Round-the-clock emergency services with rapid diagnostics, stabilization, and specialist referrals.",
            },
            {
              icon: 3,
              title: "Laboratory and Imaging",
              desc: "Accurate testing and modern imaging systems that support faster diagnosis and treatment planning.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-bl-[50px] bg-[#5AAC4E] px-[22px] py-[41px] text-center text-white">
              <img src={`/assets/img/icon/services${item.icon}.svg`} alt="service" className="h-14 w-14" />
              <h3 className="mt-[31px] text-[20px] font-[500] text-white">{item.title}</h3>
              <p className="mb-[36px] mt-5 text-[16px] font-[300] leading-[30px] text-white">
                {item.desc}
              </p>
              <Link href="/contact" className="inline-flex h-[41px] w-[41px] items-center justify-center rounded-full border-2 border-white text-lg text-white transition hover:bg-white hover:text-[#5AAC4E]">
                +
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cover bg-center pb-[140px] pt-[120px]" style={{ backgroundImage: "url('/assets/img/gallery/section_bg01.png')" }}>
        <div className="page-container md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-[50px] font-[300] leading-[1.2] text-[#0D210B]">
              Compassionate medicine,
              <br />
              measurable outcomes
            </h2>
            <p className="mt-3 text-[26px] font-[300] text-[#234821]">Book a service and get guidance from the right specialist team.</p>
          </div>
          <Link href="/contact" className="primary-btn mt-8 md:mt-0">
            Take a Service
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
