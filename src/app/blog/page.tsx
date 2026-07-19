import Link from "next/link";
import { SiteShell } from "../../components/site-shell";
import { DimmedHeadline } from "../../components/ui/dimmed-headline";
import { BlogGrid, type BlogPost } from "../../components/ui/blog-grid";

const BLOG_ITEMS: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Preventive Screening",
    excerpt: "Learn which annual tests matter most in your 20s, 40s, and beyond, and when specialist referrals become important.",
    meta: "Wellness",
    imageSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 2,
    title: "Future of Pediatric Surgery",
    excerpt: "Discover the latest innovations in minimally invasive procedures making recovery faster for children.",
    meta: "Pediatrics",
    imageSrc: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 3,
    title: "Heart Disease Prevention",
    excerpt: "Cardiologists share vital lifestyle changes that can significantly lower your risk of cardiovascular problems.",
    meta: "Cardiology",
    imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 4,
    title: "Mental Wellness in 2024",
    excerpt: "Breaking the stigma: why modern hospitals are integrating psychiatric support into primary care.",
    meta: "Psychiatry",
    imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 5,
    title: "Nutrition for Fast Recovery",
    excerpt: "How targeted dietetics and proper nourishment improve healing times post-operation.",
    meta: "Dietetics",
    imageSrc: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
];

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q?.trim().toLowerCase() ?? "";
  const posts = query
    ? BLOG_ITEMS.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.meta.toLowerCase().includes(query),
      )
    : BLOG_ITEMS;

  return (
    <SiteShell
      title="Blog & Insights"
      titleDim={[2]}
      subtitle="Health education and patient guidance from Well Alive Hospital"
    >
      <section className="bg-[#FEFDF9] px-4 py-20 lg:py-28">
        <div className="page-container mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Featured Stories</p>
          <h2 className="mt-3 text-4xl">{query ? `Results for "${resolvedSearchParams?.q}"` : "Latest medical stories"}</h2>
          <p className="mt-2 text-black/50">
            {query ? `${posts.length} article${posts.length === 1 ? "" : "s"} found.` : "Health insights and guidance from our clinical team."}
          </p>
        </div>

        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <p className="page-container text-black/50">No articles match your search.</p>
        )}
      </section>

      <section className="bg-[#ECEDEC] py-20 lg:py-28">
        <div className="page-container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <DimmedHeadline
              as="h2"
              words={["100%", "Satisfaction", "Guaranteed."]}
              dim={[0]}
              surface="light"
              className="text-[36px] leading-[1.1] sm:text-[50px]"
            />
            <p className="mb-8 mt-6 max-w-xl text-lg text-black/70" style={{ letterSpacing: "-0.03em" }}>
              Every patient story shapes how we improve care, from first consultation through
              full recovery.
            </p>
            <Link href="/contact" className="cta-btn">
              Make an Appointment
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=1200"
            alt="Well Alive Hospital medical care team"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </SiteShell>
  );
}
