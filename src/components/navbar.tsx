"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, Mail, Phone } from "lucide-react";

import { MenuToggleIcon } from "./ui/menu-toggle-icon";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Departments" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 animate-fade-in bg-[#FEFDF9]/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="animate-slide-left delay-200 flex shrink-0 items-center gap-2 text-[22px] font-medium text-black sm:text-[24px]"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.05em" }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800 text-[15px] text-white">
            +
          </span>
          Well<span className="text-emerald-800">Alive</span>
        </Link>

        <nav className="animate-fade-in delay-400 hidden items-center gap-1 rounded-full border border-black/[0.06] bg-black/[0.02] p-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[14px] font-medium text-black/65 transition-colors duration-200 hover:bg-white hover:text-black hover:shadow-sm"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.04em" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="animate-slide-right delay-300 hidden items-center gap-3 lg:flex">
          <a
            href="tel:+2349131193359"
            aria-label="Call Well Alive Hospital"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] text-black/70 transition-colors hover:border-emerald-800 hover:text-emerald-800"
          >
            <Phone size={17} strokeWidth={1.5} />
          </a>
          <Link href="/contact" className="cta-btn !h-11 gap-2 px-5 text-sm">
            <CalendarDays size={16} />
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="animate-slide-right delay-300 flex h-10 w-10 items-center justify-center text-black lg:hidden"
        >
          <MenuToggleIcon open={open} className="h-6 w-6" duration={420} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-emerald-950/98 transition-opacity duration-300 lg:hidden ${
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
      