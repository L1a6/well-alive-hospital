"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CalendarDays, Headset, Phone, Search, X } from "lucide-react";

import { MenuToggleIcon } from "./ui/menu-toggle-icon";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Departments" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!query.trim()) return;
    router.push(`/blog?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 animate-fade-in bg-[#FEFDF9]/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10 lg:py-5">
        <Link
          href="/"
          className="animate-slide-left delay-200 shrink-0 text-[24px] font-medium text-black sm:text-[28px] lg:text-[30px]"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.05em" }}
        >
          Well<span className="text-emerald-800">Alive</span>
        </Link>

        <nav className="animate-fade-in delay-400 hidden items-center gap-6 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="animate-slide-right delay-300 hidden items-center gap-1 md:flex">
          <button
            type="button"
            aria-label="Search the site"
            onClick={() => setSearchOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black/70 transition-colors hover:bg-black/[0.04] hover:text-emerald-800"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link
            href="/contact"
            aria-label="Book an appointment"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black/70 transition-colors hover:bg-black/[0.04] hover:text-emerald-800"
          >
            <CalendarDays size={20} strokeWidth={1.5} />
          </Link>
          <a
            href="tel:+2349131193359"
            aria-label="Call Well Alive Hospital"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black/70 transition-colors hover:bg-black/[0.04] hover:text-emerald-800"
          >
            <Phone size={20} strokeWidth={1.5} />
          </a>
          <Link
            href="/contact"
            aria-label="Patient support"
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800 text-white transition-opacity hover:opacity-90 lg:h-10 lg:w-10"
          >
            <Headset size={16} strokeWidth={1.75} />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="animate-slide-right delay-300 flex h-10 w-10 items-center justify-center text-black md:hidden"
        >
          <MenuToggleIcon open={open} className="h-6 w-6" duration={420} />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-black/[0.06] transition-[max-height,opacity] duration-300 ${
          searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form onSubmit={submitSearch} className="mx-auto flex w-full max-w-[1400px] items-center gap-3 px-5 py-3 sm:px-8 lg:px-10">
          <Search size={18} strokeWidth={1.5} className="shrink-0 text-black/40" />
          <input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, services, doctors..."
            className="w-full bg-transparent text-sm text-black placeholder:text-black/40 focus:outline-none"
            style={{ letterSpacing: "-0.03em" }}
          />
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
            className="shrink-0 text-black/40 transition-colors hover:text-black"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </form>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-emerald-950/98 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-[30px] font-medium text-white transition-colors hover:text-emerald-300"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.05em" }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="cta-btn mt-2 gap-2 !bg-white !text-black"
        >
          <CalendarDays size={18} />
          Book Appointment
        </Link>
        <a href="tel:+2349131193359" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-sm text-white/60">
          <Phone size={16} strokeWidth={1.5} />
          +234 913 119 3359
        </a>
      </div>
    </header>
  );
}
