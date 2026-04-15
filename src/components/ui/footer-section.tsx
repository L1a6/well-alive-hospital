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
		label: 'Patients & Visitors',
		links: [
			{ title: 'Find a Doctor', href: '#find-doctor' },
			{ title: 'Patient Portal', href: '#patient-portal' },
			{ title: 'Appointments', href: '#appointments' },
			{ title: 'Billing & Insurance', href: '#billing' },
		],
	},
	{
		label: 'Our Services',
		links: [
			{ title: 'Emergency Care', href: '/services/emergency' },
			{ title: 'Heart Center', href: '/services/cardiology' },
			{ title: 'Surgery', href: '/services/surgery' },
			{ title: 'Maternity', href: '/services/maternity' },
		],
	},
	{
		label: 'About Well Alive',
		links: [
			{ title: 'Careers', href: '/careers' },
			{ title: 'News & Media', href: '/news' },
			{ title: 'Contact Us', href: '/contact' },
			{ title: 'Locations', href: '/locations' },
		],
	},
	{
		label: 'Connect With Us',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-[#5AAC4E]/35 bg-[radial-gradient(35%_128px_at_50%_0%,rgb(90_172_78_/_0.16),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-[#5AAC4E]/35 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<HeartPulseIcon className="size-8 text-[#5AAC4E]" />
					<h3 className="text-xl font-bold text-[#5AAC4E]">Well Alive Hospital</h3>
					<p className="text-muted-foreground mt-8 text-sm md:mt-0">
						© {new Date().getFullYear()} Well Alive Hospital. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
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
