"use client";

import Link from "next/link";

import { useInView } from "../../hooks/use-in-view";

export type BlogPost = {
  id: string | number;
  title: string;
  excerpt: string;
  meta: string;
  imageSrc: string;
  href?: string;
};

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className="page-container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => {
        const CardContent = (
          <>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={post.imageSrc}
                alt={post.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                {post.meta}
              </span>
              <h3 className="mt-3 text-lg leading-snug">{post.title}</h3>
              <p className="mb-4 mt-2 flex-1 text-sm leading-relaxed text-black/60" style={{ letterSpacing: "-0.03em" }}>
                {post.excerpt}
              </p>
              <span
                className="text-sm font-medium text-black underline underline-offset-4"
                style={{ letterSpacing: "-0.03em" }}
              >
                Read article
              </span>
            </div>
          </>
        );

        if (post.href) {
          return (
            <Link
              key={post.id}
              href={post.href}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-none transition-transform duration-300 hover:-translate-y-1 ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {CardContent}
            </Link>
          );
        }

        return (
          <div
            key={post.id}
            className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-none ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}

export default BlogGrid;
