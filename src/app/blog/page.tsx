import Link from "next/link";

import { SiteShell } from "../../components/site-shell";

export default function BlogPage() {
  return (
    <SiteShell
      title="Blog"
      subtitle="Health education and patient guidance from Well Alive Hospital"
    >
      <section className="pb-[200px] pt-[100px]">
        <div className="page-container grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="group overflow-hidden bg-white">
              <img src={`/assets/img/gallery/blog${item}.png`} alt="blog" className="h-[260px] w-full rounded-[50px] object-cover" />
              <div className="pt-5">
                <h3 className="text-[24px] font-[400]">
                  <Link href="/blog-details" className="hover:text-primary">
                    Understanding preventive screening by age group
                  </Link>
                </h3>
                <p className="mt-3 text-[17px] font-[300] text-[#234821]">
                  Learn which annual tests matter most in your 20s, 40s, and beyond,
                  and when specialist referrals become important.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-[120px]">
        <div className="page-container">
          <div className="legacy-about-cap about-cap-wrapper">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="relative z-[2] px-6 pb-[30px] pt-[20px] text-white md:px-[90px] md:pt-[18px]">
                <h2 className="text-[50px] font-[300] leading-[1.2] text-white">
                  100% satisfaction
                  <br />
                  Guaranteed.
                </h2>
                <p className="mb-[43px] mt-6 max-w-xl text-[26px] font-[300] leading-[1.6] text-white">
                  Almost before we knew it, we
                  <br />
                  had left the ground
                </p>
                <Link href="/contact" className="border-btn">
                  Make an Appointment
                </Link>
              </div>

              <div className="about-font-img relative z-[2]">
                <img src="/assets/img/gallery/about2.png" alt="Medical care team" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
