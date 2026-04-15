'use client';

import type { ComponentProps, ComponentType, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  HeartPulseIcon,
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
      { title: 'Emergency', href: '#services' },
      { title: 'Cardiology', href: '#services' },
      { title: 'Surgery', href: '#services' },
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
    <footer className="relative w-full overflow-hidden border-t border-emerald-200/30 bg-[linear-gradient(160deg,#2d7c37_0%,#5aac4e_52%,#2d7c37_100%)] text-emerald-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(217,250,211,0.18),transparent_74%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-12 md:px-10 lg:py-14">
        <div className="grid w-full gap-9 md:grid-cols-[1.3fr_1fr] md:gap-12">
          <AnimatedContainer className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200/25 bg-emerald-200/10 px-4 py-2 text-sm text-emerald-100">
              <HeartPulseIcon className="h-4 w-4" />
              Trusted Care In Uyo
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">Well Alive Hospital</h3>
            <p className="max-w-md text-sm leading-relaxed text-emerald-50/80">
              Precision care and compassionate specialists for emergency response, surgery, women&apos;s
              health, pediatrics, and preventive medicine.
            </p>
          </AnimatedContainer>

          <div className="grid grid-cols-2 gap-8">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.08 + index * 0.08}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200/85">
                  {section.label}
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-emerald-50/80">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs tracking-wide text-emerald-100/70">
          © {new Date().getFullYear()} Well Alive Hospital. All rights reserved.
        </p>
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
