'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, HeartPulseIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Patient Care',
		links: [
			{ title: 'Find a Doctor', href: '#find-doctor' },
			{ title: 'Appointments', href: '#appointments' },
		],
	},
	{
		label: 'Clinical Units',
		links: [
			{ title: 'Emergency Care', href: '/services/emergency' },
			{ title: 'Heart Center', href: '/services/cardiology' },
		],
	},
	{
		label: 'Hospital',
		links: [
			{ title: 'Contact Us', href: '/contact' },
			{ title: 'Locations', href: '/locations' },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-[#5AAC4E]/45 bg-[linear-gradient(160deg,#153921_0%,#1a4527_52%,#245b33_100%)] px-6 py-12 text-white lg:py-16">
			<div className="bg-[#9ad888]/35 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<HeartPulseIcon className="size-8 text-[#5AAC4E]" />
					<h3 className="text-xl font-bold text-[#d8f3c8]">Well Alive Hospital</h3>
					<p className="mt-8 text-sm text-white/75 md:mt-0">
						© {new Date().getFullYear()} Well Alive Hospital. All rights reserved.
					</p>
					<div className="flex items-center gap-3 pt-2 text-white/80">
						<a href="#" className="transition-colors hover:text-white" aria-label="Facebook">
							<FacebookIcon className="size-4" />
						</a>
						<a href="#" className="transition-colors hover:text-white" aria-label="Instagram">
							<InstagramIcon className="size-4" />
						</a>
						<a href="#" className="transition-colors hover:text-white" aria-label="YouTube">
							<YoutubeIcon className="size-4" />
						</a>
						<a href="#" className="transition-colors hover:text-white" aria-label="LinkedIn">
							<LinkedinIcon className="size-4" />
						</a>
					</div>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs text-[#d8f3c8]">{section.label}</h3>
								<ul className="mt-4 space-y-2 text-sm text-white/75">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="inline-flex items-center transition-all duration-300 hover:text-white"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
