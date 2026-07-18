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
    label: 'Clinical Services',
    links: [
      { title: 'General Medical Services', href: '/services' },
      { title: 'Expert Surgeries', href: '/services' },
      { title: 'Cancer Care Centre', href: '/services' },
      { title: 'Maternity Services', href: '/services' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Social',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'YouTube', href: '#', icon: YoutubeIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-emerald-950 text-white">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-8 lg:px-8 lg:py-20">
        <div className="grid w-full gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:gap-8">
          <AnimatedContainer className="space-y-5">
            <h3
              className="text-[28px] font-medium text-white"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif', letterSpacing: '-0.05em' }}
            >
              Well Alive Hospital
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-white/60" style={{ letterSpacing: '-0.03em' }}>
              Precision care and compassionate specialists for emergency response, surgery,
              women&apos;s health, pediatrics, and preventive medicine.
            </p>
            <div className="space-y-2 pt-2 text-sm text-white/60" style={{ letterSpacing: '-0.03em' }}>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                +234 913 119 3359
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                care@wellalivehospital.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                Shelter Afrique, Uyo
              </span>
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
