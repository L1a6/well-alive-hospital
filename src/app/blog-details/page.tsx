import { SiteShell } from "../../components/site-shell";

export default function BlogDetailsPage() {
  return (
    <SiteShell
      title="Blog Details"
      subtitle="Clinical insights and practical guidance for healthier living"
    >
      <section className="py-[120px]">
        <div className="page-container grid gap-8 lg:grid-cols-[2fr_1fr]">
          <article className="overflow-hidden bg-white">
            <img src="/assets/img/blog/single_blog_1.png" alt="post" className="h-80 w-full object-cover" />
            <div className="px-2 py-8 md:px-8">
              <h2 className="text-[36px] font-[500] text-[#0D210B]">Your daily meal plan and healthy routine</h2>
              <p className="mt-4 text-[16px] font-[300] text-[#234821]">
                A healthy routine starts with measurable goals: balanced meals,
                hydration, movement, stress management, and regular checkups.
                Our nutrition and internal medicine teams recommend practical
                habits that patients can sustain long-term.
              </p>
              <p className="mt-3 text-[16px] font-[300] text-[#234821]">
                If you have hypertension, diabetes, or cardiac risk factors,
                personalized plans are even more important. At Well Alive Hospital,
                specialists review your labs and lifestyle to create a safe,
                realistic path toward better health.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-[#fbf9ff] p-8">
              <h3 className="text-[20px] font-[500]">Categories</h3>
              <ul className="mt-4 space-y-3 text-[14px] text-[#888888]">
                <li>Preventive Care</li>
                <li>Heart Health</li>
                <li>Nutrition</li>
                <li>Mental Wellness</li>
              </ul>
            </div>
            <div className="bg-[#fbf9ff] p-8">
              <h3 className="text-[20px] font-[500]">Newsletter</h3>
              <input
                type="email"
                placeholder="Your email"
                className="mt-4 h-[50px] w-full border border-[#f0e9ff] px-5 text-[13px]"
              />
              <button className="mt-4 w-full bg-[#5AAC4E] px-5 py-3 text-white">Subscribe</button>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
