import { type ReactNode } from "react";

import { Navbar } from "./navbar";
import { Footer } from "./ui/footer-section";
import { DimmedHeadline } from "./ui/dimmed-headline";

type SiteShellProps = {
  title?: string;
  titleDim?: number[];
  subtitle?: string;
  children: ReactNode;
};

export function SiteShell({ title, titleDim = [], subtitle, children }: SiteShellProps) {
  return (
    <>
      <Navbar />

      {title ? (
        <section className="relative flex h-[380px] items-center overflow-hidden bg-black sm:h-[440px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&q=80&w=2200"
              alt=""
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.65) 100%)",
            }}
          />
          <div className="page-container relative">
            <DimmedHeadline
              as="h1"
              words={title.split(" ")}
              dim={titleDim}
              surface="dark"
              trigger="mount"
              baseDelay={2}
              className="text-[44px] leading-[1.05] sm:text-[64px] md:text-[80px]"
            />
            {subtitle ? (
              <p className="animate-fade-up delay-700 mt-4 max-w-xl text-base text-white/70 sm:text-lg" style={{ letterSpacing: "-0.03em" }}>
                {subtitle}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      <main>{children}</main>

      <Footer />
    </>
  );
}
