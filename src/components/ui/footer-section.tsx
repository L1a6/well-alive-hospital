'use client';

import type { ComponentProps, ComponentType, ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Departments',
    links: [
      { title: 'General Medicine', href: '/services' },
      { title: 'Expert Surgeries', href: '/services' },
      { title: 'Cancer Care Centre', href: '/services' },
      { title: 'Maternity Services', href: '/services' },
    ],
  },
  {
    label: 'Quick Links',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Doctors', href: '/#doctors' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

const socialLinks = [
  { title: 'Facebook', href: '#', icon: FacebookIcon },
  { title: 'Instagram', href: '#', icon: InstagramIcon },
  { title: 'YouTube', href: '#', icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-emerald-950 text-white">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-8 lg:px-8 lg:py-20">
        <div className="grid w-full gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:gap-8">
          <AnimatedContainer className="space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[26px] font-medium text-white"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif', letterSpacing: '-0.05em' }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[15px] text-emerald-800">
                +
              </span>
              Well<span className="text-emerald-400">Alive</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60" style={{ letterSpacing: '-0.03em' }}>
              Precision care and compassionate specialists for emergency response, surgery,
              women&apos;s health, pediatrics, and preventive medicine.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  aria-label={social.title}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </AnimatedContainer>

          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.08 + index * 0.08}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                {section.label}
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/60" style={{ letterSpacing: '-0.03em' }}>
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}

          <AnimatedContainer delay={0.24}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Visit Us</h4>
            <div className="mt-4 space-y-3 text-sm text-white/60" style={{ letterSpacing: '-0.03em' }}>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                Shelter Afrique, Uyo
              </span>
              <a href="tel:+2349131193359" className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                +234 913 119 3359
              </a>
              <a href="mailto:care@wellalivehospital.com" className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                care@wellalivehospital.com
              </a>
              <span className="block pt-1 text-white/40">Open 24 hours, every day</span>
            </div>
          </AnimatedContainer>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p style={{ letterSpacing: '-0.03em' }}>
            © {new Date().getFullYear()} Well Alive Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-6" style={{ letterSpacing: '-0.03em' }}>
            <Link href="/contact" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 14, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.65 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
