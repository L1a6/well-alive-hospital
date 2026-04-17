import { notFound } from "next/navigation";
import { SiteShell } from "../../components/site-shell";

const BLOG_DETAILS_PUBLISHED = false;

export default function BlogDetailsPage() {
  if (!BLOG_DETAILS_PUBLISHED) {
    notFound();
  }

  return (
    <SiteShell
      title="Clinical Insight"
      subtitle="Structured guidance from our care teams"
    >
      <section className="py-[96px] md:py-[120px]">
        <div className="page-container grid gap-8 lg:grid-cols-[2fr_1fr]">
          <article className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_20px_44px_rgba(10,40,28,0.08)]">
            <img src="/about.jpg" alt="Clinical team discussion" className="h-72 w-full object-cover md:h-80" />
            <div className="px-5 py-8 md:px-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0D210B] md:text-4xl">
                Building a Daily Health Routine That Lasts
              </h2>
              <p className="mt-4 text-base leading-7 text-[#234821]">
                Strong health outcomes begin with repeatable habits: balanced meals, hydration,
                movement, sleep discipline, and scheduled preventive checks.
              </p>
              <p className="mt-3 text-base leading-7 text-[#234821]">
                For patients with hypertension, diabetes, cardiac risk, or chronic digestive
                conditions, personalized plans are essential. Our specialists align diagnostics,
                treatment, and follow-up into one practical care pathway.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-emerald-100 bg-[#f5fbf6] p-7">
              <h3 className="text-xl font-semibold text-[#133727]">Categories</h3>
              <ul className="mt-4 space-y-3 text-sm text-[#3d6350]">
                <li>Preventive Care</li>
                <li>Heart Health</li>
                <li>Nutrition</li>
                <li>Mental Wellness</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-[#f5fbf6] p-7">
              <h3 className="text-xl font-semibold text-[#133727]">Newsletter</h3>
              <input
                type="email"
                placeholder="Your email"
                className="mt-4 h-[50px] w-full rounded-xl border border-emerald-200 px-5 text-[13px]"
              />
              <button className="mt-4 w-full rounded-full bg-[#5AAC4E] px-5 py-3 text-white transition hover:bg-[#2D7C37]">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
