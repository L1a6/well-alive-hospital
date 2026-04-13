import { SiteShell } from "../../components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell
      title="About"
      subtitle="Meet the team and mission behind Well Alive Hospital"
    >
      <section className="pb-10 pt-[120px]">
        <div className="page-container grid gap-6 md:grid-cols-3">
          {[
            { image: "team1", title: "Experienced Consultants" },
            { image: "team2", title: "Skilled Nursing Teams" },
            { image: "team3", title: "Dedicated Patient Support" },
          ].map((item) => (
            <article key={item.title} className="bg-white p-2 text-center">
              <img src={`/assets/img/gallery/${item.image}.png`} alt={item.title} className="mx-auto w-full object-cover" />
              <h3 className="mt-6 text-[24px] font-[400]">{item.title}</h3>
              <p className="mt-3 text-[17px] font-[300] text-[#234821]">
                Our professionals collaborate across departments to provide coordinated,
                safe, and patient-first care from diagnosis through recovery.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-[100px] pt-10">
        <div className="page-container grid gap-10 md:grid-cols-2 md:items-center">
          <img src="/assets/img/gallery/about.png" alt="about" className="w-full" />
          <div className="md:pl-[50px]">
            <h2 className="section-title">A trusted hospital partner for your health journey</h2>
            <p className="mb-10 mt-8 text-[26px] font-[300] text-[#234821]">We focus on quality outcomes, transparent communication, and respectful care.</p>
            <p className="mt-3 text-[16px] font-[300] text-[#234821]">
              Well Alive Hospital combines modern clinical systems with highly trained
              teams and internationally aligned care pathways, helping patients and
              families make informed decisions with confidence.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
