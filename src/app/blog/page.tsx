import Link from "next/link";
import { SiteShell } from "../../components/site-shell";
import { FocusRail, type FocusRailItem } from "../../components/ui/focus-rail";

const BLOG_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Understanding Preventive Screening",
    description: "Learn which annual tests matter most in your 20s, 40s, and beyond, and when specialist referrals become important.",
    meta: "Wellness • Guide",
    imageSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 2,
    title: "Future of Pediatric Surgery",
    description: "Discover the latest innovations in minimally invasive procedures making recovery faster for children.",
    meta: "Pediatrics • Innovation",
    imageSrc: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 3,
    title: "Heart Disease Prevention",
    description: "Cardiologists share vital lifestyle changes that can significantly lower your risk of cardiovascular problems.",
    meta: "Cardiology • Health",
    imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 4,
    title: "Mental Wellness in 2024",
    description: "Breaking the stigma: Why modern hospitals are integrating psychiatric support into primary care.",
    meta: "Psychiatry • Wellness",
    imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 5,
    title: "Nutrition for Fast Recovery",
    description: "How targeted dietetics and proper nourishment improve healing times post-operation.",
    meta: "Dietetics • Recovery",
    imageSrc: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
];

export default function BlogPage() {
  return (
    <SiteShell
      title="Blog & Insights"
      subtitle="Health education and patient guidance from Well Alive Hospital"
    >
      <section className="bg-neutral-950 pb-20 pt-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Medical Stories</h2>
          <p className="text-neutral-400">Navigate the rail to explore our latest medical insights and health tips.</p>
        </div>

        <FocusRail 
          items={BLOG_ITEMS} 
          autoPlay={false} 
          loop={true} 
          className="rounded-xl mx-auto max-w-[1400px]"
        />
      </section>

      <section className="pb-[120px] pt-[80px]">
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
