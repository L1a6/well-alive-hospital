import Link from "next/link";
import { type ReactNode } from "react";
import { Clock3, Mail, Phone } from "lucide-react";
import { Footer } from "./ui/footer-section";

type SiteShellProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function SiteShell({ title, subtitle, children }: SiteShellProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#dce9da] bg-white/95 backdrop-blur-md">
        <div className="border-b border-[#e6efe4] bg-[#f6fbf5] text-[#234821]">
          <div className="page-container flex flex-wrap items-center justify-between gap-3 py-2 text-[12px]">
            <div className="flex flex-wrap items-center gap-4 font-[500]">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                +234 9131193359
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                care@wellalivehospital.com
              </span>
            </div>
            <span className="inline-flex items-center gap-2 font-[500]">
              <Clock3 className="h-3.5 w-3.5" />
              Open 24/7 Emergency and Critical Care
            </span>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1920px] flex-wrap items-center justify-between gap-4 px-[20px] py-4 md:px-[35px]">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#5AAC4E] text-[20px] font-[700] text-white shadow-[0_8px_18px_rgba(90,172,78,0.35)]">
              WA
            </span>
            <div className="leading-tight">
              <p className="text-[10px] font-[600] uppercase tracking-[2.8px] text-[#5AAC4E]">Well Alive</p>
              <p className="text-[20px] font-[700] tracking-[-0.02em] text-[#0D210B]">Hospital</p>
            </div>
          </Link>

          <nav className="order-3 flex w-full items-center justify-start gap-1 overflow-x-auto rounded-full border border-[#dce9da] bg-white p-1 md:order-2 md:w-auto md:justify-center">
            <Link href="/" className="whitespace-nowrap rounded-full px-4 py-2.5 text-[14px] font-[600] text-[#234821] transition hover:bg-[#f1f8ef] hover:text-[#5AAC4E] md:px-5 md:py-3 md:text-[15px]">
              Home
            </Link>
            <Link href="/about" className="whitespace-nowrap rounded-full px-4 py-2.5 text-[14px] font-[600] text-[#234821] transition hover:bg-[#f1f8ef] hover:text-[#5AAC4E] md:px-5 md:py-3 md:text-[15px]">
              About
            </Link>
            <Link href="/services" className="whitespace-nowrap rounded-full px-4 py-2.5 text-[14px] font-[600] text-[#234821] transition hover:bg-[#f1f8ef] hover:text-[#5AAC4E] md:px-5 md:py-3 md:text-[15px]">
              Services
            </Link>
            <Link href="/blog" className="whitespace-nowrap rounded-full px-4 py-2.5 text-[14px] font-[600] text-[#234821] transition hover:bg-[#f1f8ef] hover:text-[#5AAC4E] md:px-5 md:py-3 md:text-[15px]">
              Blog
            </Link>
            <Link href="/contact" className="whitespace-nowrap rounded-full px-4 py-2.5 text-[14px] font-[600] text-[#234821] transition hover:bg-[#f1f8ef] hover:text-[#5AAC4E] md:px-5 md:py-3 md:text-[15px]">
              Contact
            </Link>
          </nav>

          <Link href="/contact" className="primary-btn order-2 bg-[#5AAC4E] px-[18px] py-[12px] text-[14px] md:order-3 md:px-[22px] md:py-[14px] md:text-[15px]">
            Make an Appointment
          </Link>
        </div>
      </header>

      {title ? (
        <section className="relative h-[540px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/img/hero/hero2.png"
              alt="bg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="page-container relative flex h-full items-center">
            <div>
              <h1 className="text-[70px] font-[300] text-[#0D210B]">{title}</h1>
              {subtitle ? <p className="mt-2 text-[26px] font-[300] text-[#234821]">{subtitle}</p> : null}
            </div>
          </div>
        </section>
      ) : null}

      <main>{children}</main>

      <Footer />
    </>
  );
}
