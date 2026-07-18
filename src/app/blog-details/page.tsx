import { notFound } from "next/navigation";
import { SiteShell } from "../../components/site-shell";

const BLOG_DETAILS_PUBLISHED = false;

export default function BlogDetailsPage() {
  if (!BLOG_DETAILS_PUBLISHED) {
    notFound();
  }

  return (
    <SiteShell title="Clinical Insight" titleDim={[1]} subtitle="Structured guidance from our care teams">
      <section className="bg-[#FEFDF9] py-20 lg:py-28">
        <div className="page-container grid gap-8 lg:grid-cols-[2fr_1fr]">
          <article className="overflow-hidden rounded-2xl bg-white">
            <img src="/about.jpg" alt="Clinical team discussion" className="h-72 w-full object-cover md:h-80" />
            <div className="px-5 py-8 md:px-8">
              <h2 className="text-3xl md:text-4xl">
                Building a Daily Health Routine That Lasts
              </h2>
              <p className="mt-4 text-base leading-7 text-black/60" style={{ letterSpacing: "-0.03em" }}>
                Strong health outcomes begin with repeatable habits: balanced meals, hydration,
                movement, sleep discipline, and scheduled preventive checks.
              </p>
              <p className="mt-3 text-base leading-7 text-black/60" style={{ letterSpacing: "-0.03em" }}>
                For patients with hypertension, diabetes, cardiac risk, or chronic digestive
                conditions, personalized plans are essential. Our specialists align diagnostics,
                treatment, and follow-up into one practical care pathway.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-[#ECEDEC] p-7">
              <h3 className="text-xl">Categories</h3>
              <ul className="mt-4 space-y-3 text-sm text-black/60" style={{ letterSpacing: "-0.03em" }}>
                <li>Preventive Care</li>
                <li>Heart Health</li>
                <li>Nutrition</li>
                <li>Mental Wellness</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#ECEDEC] p-7">
              <h3 className="text-xl">Newsletter</h3>
              <input
                type="email"
                placeholder="Your email"
                className="mt-4 h-[50px] w-full rounded-lg border border-black/10 bg-[#FEFDF9] px-5 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <button className="cta-btn mt-4 w-full">Subscribe</button>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
