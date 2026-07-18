import { SiteShell } from "../../components/site-shell";
import { DimmedHeadline } from "../../components/ui/dimmed-headline";

const teamCards = [
  {
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000",
    title: "Experienced Consultants",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1000",
    title: "Skilled Nursing Teams",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
    title: "Dedicated Patient Support",
  },
];

export default function AboutPage() {
  return (
    <SiteShell
      title="About Well Alive"
      titleDim={[1]}
      subtitle="Meet the team and mission behind Well Alive Hospital"
    >
      <section className="bg-[#FEFDF9] py-20 lg:py-28">
        <div className="page-container grid gap-6 md:grid-cols-3">
          {teamCards.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60" style={{ letterSpacing: "-0.03em" }}>
                  Our professionals collaborate across departments to provide coordinated,
                  safe, and patient-first care from diagnosis through recovery.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#ECEDEC] py-20 lg:py-28">
        <div className="page-container grid gap-10 md:grid-cols-2 md:items-center">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1200"
            alt="Well Alive Hospital care team"
            className="w-full rounded-2xl object-cover"
          />
          <div>
            <DimmedHeadline
              as="h2"
              words={["A", "Trusted", "Hospital", "Partner", "For", "Your", "Health", "Journey"]}
              dim={[0, 4]}
              surface="light"
              className="text-[32px] leading-[1.05] sm:text-[44px]"
            />
            <p className="mb-8 mt-6 text-lg text-black/70" style={{ letterSpacing: "-0.03em" }}>
              We focus on quality outcomes, transparent communication, and respectful care.
            </p>
            <p className="text-sm leading-relaxed text-black/60" style={{ letterSpacing: "-0.03em" }}>
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
