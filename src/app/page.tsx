"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";

import AboutPage from "../components/ui/about-page";
import { Component as FaqSection } from "../components/ui/demo";
import FeatureCarousel from "../components/ui/feature-carousel";
import Team, { type TeamMember } from "../components/ui/team";
import { Footer } from "../components/ui/footer-section";
import { FocusRail, type FocusRailItem } from "../components/ui/focus-rail";
import { MenuToggleIcon } from "../components/ui/menu-toggle-icon";
import { TestimonialsMinimal } from "../components/ui/minimal-testimonial";
import styles from "./page.module.css";

type HeroSlide = {
  title: string;
  subtitle: string;
  image: string;
};

type TeamProfile = {
  name: string;
  role: string;
  image: string;
};

const heroSlides: HeroSlide[] = [
  {
    title: "Modern Diagnostics. Human Support.",
    subtitle:
      "Clinical decision-making powered by laboratory precision, imaging depth, and transparent communication.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=2200",
  },
  {
    title: "Trusted Surgical Care In Uyo.",
    subtitle:
      "From consultation to recovery, your care pathway is clear, private, and handled by one coordinated team.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2200",
  },
  {
    title: "Expert Surgical Response, Day and Night.",
    subtitle:
      "Our consultants, theatre nurses, and emergency clinicians move in sync for safer, faster interventions.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2200",
  },
];

const careTeam: TeamProfile[] = [
  {
    name: "Dr. Israel Ben",
    role: "Consultant General Surgeon",
    image: "/israelben.jpg",
  },
  {
    name: "Nurse Mfon-Abasi Edet",
    role: "Senior Theatre Nurse",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Nseabasi Udo",
    role: "Emergency Medicine Specialist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Nurse Eno Bassey",
    role: "Maternity and Neonatal Nurse",
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Mfon Uwah",
    role: "Consultant Gastroenterologist",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Nurse Imaobong Etim",
    role: "Women’s Health Nurse",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Iniobong Essien",
    role: "Breast and Women’s Health Consultant",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1000",
  },
];

const blogFocusItems: FocusRailItem[] = [
  {
    id: 1,
    title: "Stroke First Aid: What to Do in the First 10 Minutes",
    description: "A practical FAST-based response guide from our emergency and neurology team.",
    meta: "Emergency • April 10, 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
    href: "/blog-details",
  },
  {
    id: 2,
    title: "Blood Pressure Myths That Delay Early Treatment",
    description: "Understand common misconceptions and when to seek medical review.",
    meta: "Cardiology • March 22, 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    href: "/blog-details",
  },
  {
    id: 3,
    title: "Childhood Fever: Home Monitoring vs Hospital Visit",
    description: "Clear pediatric advice on warning signs that should never be ignored.",
    meta: "Pediatrics • March 05, 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800",
    href: "/blog-details",
  },
  {
    id: 4,
    title: "Post-Surgery Recovery Checklist for Families",
    description: "Daily milestones, red flags, and follow-up timing after common procedures.",
    meta: "Surgery • February 18, 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&q=80&w=800",
    href: "/blog-details",
  },
  {
    id: 5,
    title: "Women’s Annual Preventive Tests by Age Group",
    description: "A concise screening map for long-term health protection and early detection.",
    meta: "Women’s Health • January 30, 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    href: "/blog-details",
  },
];

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const doctorTeam: TeamMember[] = careTeam.map((member) => ({
    image: member.image,
    name: member.name,
    role: member.role,
  }));

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6200);

    return () => window.clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    if (!heroCopyRef.current) {
      return;
    }

    const items = heroCopyRef.current.querySelectorAll<HTMLElement>("[data-slide-text]");
    gsap.fromTo(
      items,
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.06,
        ease: "power2.out",
      },
    );
  }, [activeSlide]);

  useLayoutEffect(() => {
    if (!pageRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.03,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const onScroll = () => {
      setNavSolid(window.scrollY > 26);
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
      ScrollTrigger.refresh();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const cursor = cursorRef.current;
    const cursorCleanups: Array<() => void> = [];

    if (cursor && !window.matchMedia("(pointer: coarse)").matches) {
      const quickX = gsap.quickTo(cursor, "x", { duration: 0.16, ease: "power2.out" });
      const quickY = gsap.quickTo(cursor, "y", { duration: 0.16, ease: "power2.out" });

      const moveCursor = (event: MouseEvent) => {
        quickX(event.clientX - 9);
        quickY(event.clientY - 9);
      };

      window.addEventListener("mousemove", moveCursor, { passive: true });
      cursorCleanups.push(() => window.removeEventListener("mousemove", moveCursor));

      const hoverTargets = pageRef.current.querySelectorAll<HTMLElement>('[data-cursor="grow"]');
      hoverTargets.forEach((target) => {
        const enter = () => cursor.classList.add(styles.cursorGrow);
        const leave = () => cursor.classList.remove(styles.cursorGrow);

        target.addEventListener("mouseenter", enter);
        target.addEventListener("mouseleave", leave);
        target.addEventListener("focus", enter);
        target.addEventListener("blur", leave);

        cursorCleanups.push(() => {
          target.removeEventListener("mouseenter", enter);
          target.removeEventListener("mouseleave", leave);
          target.removeEventListener("focus", enter);
          target.removeEventListener("blur", leave);
        });
      });
    }

    const ctx = gsap.context(() => {
      gsap.to("[data-hero-parallax]", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      const revealBlocks = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      revealBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.82,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 86%",
            },
          },
        );
      });

      gsap.fromTo(
        "[data-doctor-card]",
        {
          y: 44,
          opacity: 0,
          rotateX: -8,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#doctors",
            start: "top 72%",
          },
        },
      );
    }, pageRef);

    return () => {
      cursorCleanups.forEach((cleanup) => cleanup());
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={pageRef} className={styles.page}>
      <div ref={cursorRef} className={styles.cursor} />

      <header className={`${styles.nav} ${navSolid ? styles.navSolid : ""}`}>
        <div className={styles.navInner}>
          <a href="#hero" className={styles.logo} data-cursor="grow">
            <span className={styles.logoImageWrap} aria-hidden="true">
              <Image
                src="/logo.png"
                alt="Well Alive Hospital"
                fill
                sizes="112px"
                className={styles.logoImage}
                priority
              />
            </span>
          </a>

          <button
            type="button"
            className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuToggleIcon open={menuOpen} className="h-6 w-6" duration={420} />
          </button>

          <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
            <a href="#hero" onClick={() => setMenuOpen(false)} data-cursor="grow">
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} data-cursor="grow">
              About
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)} data-cursor="grow">
              Services
            </a>
            <a href="#doctors" onClick={() => setMenuOpen(false)} data-cursor="grow">
              Doctors
            </a>
            <a href="#blogs" onClick={() => setMenuOpen(false)} data-cursor="grow">
              Blogs
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)} data-cursor="grow">
              Testimonials
            </a>
            <a
              href="#contact"
              className={styles.navCta}
              data-cursor="grow"
              onClick={() => setMenuOpen(false)}
            >
              Book Consultation
            </a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.heroAboutStack}>
          <section id="hero" className={styles.hero}>
            <div className={styles.heroSlides} aria-hidden="true">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`${styles.heroSlide} ${activeSlide === index ? styles.heroSlideActive : ""}`}
                  style={{
                    backgroundImage: `linear-gradient(130deg, rgba(11, 38, 24, 0.82), rgba(19, 92, 60, 0.4)), url('${slide.image}')`,
                  }}
                />
              ))}
              <div className={styles.heroTexture} data-hero-parallax />
            </div>

            <div ref={heroCopyRef} className={styles.heroContent} data-hero-copy>
              <p className={styles.heroKicker} data-slide-text>
                Well Alive Hospital, Uyo
              </p>
              <h1 data-slide-text>{heroSlides[activeSlide].title}</h1>
              <p className={styles.heroLead} data-slide-text>
                {heroSlides[activeSlide].subtitle}
              </p>

              <div className={styles.heroActions} data-slide-text>
                <a href="#contact" className={styles.primaryCta} data-cursor="grow">
                  Book Consultation
                </a>
                <a href="#services" className={styles.secondaryCta} data-cursor="grow">
                  Explore Services
                </a>
              </div>

              <div className={styles.heroPager} data-slide-text>
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={`${styles.heroDot} ${activeSlide === index ? styles.heroDotActive : ""}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="about" className={styles.about}>
            <div data-reveal>
              <AboutPage />
            </div>
          </section>
        </div>

        <section id="services" className={styles.servicesFeatureSection}>
          <div
            className={styles.sectionHead}
            style={{ marginLeft: "clamp(1rem, 5vw, 2rem)", paddingBottom: "2rem" }}
            data-reveal
          >
            <p className={styles.frostPill}>Clinical Services</p>
            <h2 style={{ maxWidth: "560px" }}>Advanced Care Units.</h2>
          </div>

          <FeatureCarousel />
        </section>

        <Team members={doctorTeam} />

        <section
          id="blogs"
          className="w-full overflow-x-hidden bg-[linear-gradient(180deg,#10251e_0%,#0f221d_38%,#122a22_100%)] px-4 py-10 md:py-16"
        >
          <div className="mb-6 text-center md:mb-10" data-reveal>
            <p className="mx-auto mb-3 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              Blog Highlights
            </p>
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">Featured Medical Stories</h2>
            <p className="text-neutral-400">Navigate the rail to explore specialist insights.</p>
          </div>

          <div data-reveal>
            <FocusRail
              items={blogFocusItems}
              autoPlay={true}
              interval={4300}
              loop={true}
              className="h-[370px] md:h-[560px]"
            />
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-white px-4 pb-8 pt-12"
          data-reveal
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-1 text-center">
              <p className="mb-3 inline-flex rounded-full border border-emerald-200/80 bg-white/35 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-[0_10px_24px_rgba(31,120,84,0.14)] backdrop-blur-xl">
                Testimonials
              </p>
              <h2 className="text-3xl font-semibold leading-snug text-neutral-900 md:text-4xl">
                Stories From Well Alive Patients.
              </h2>
            </div>
            <TestimonialsMinimal />
          </div>
        </section>

        <section
          id="contact"
          className="bg-white px-4 pb-10 pt-0 md:px-8"
          data-reveal
        >
          <div className="mx-auto w-full max-w-4xl">
            <div className="relative min-h-[260px] overflow-hidden rounded-[1.6rem] sm:min-h-[290px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/cta.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(45,124,55,0.58),rgba(90,172,78,0.36))]" />
              <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(12,32,20,0.66),rgba(11,41,26,0.52))]" />

              <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[290px] sm:px-10">
                <p className="inline-flex rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-50">
                  Premium Care Access
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
                  Book A Specialist Consultation In Minutes.
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-emerald-50/90 sm:text-base">
                  Priority scheduling, private diagnostics, and a coordinated care plan from the
                  Well Alive clinical team.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="mailto:info@wellalivehospital.com"
                    className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
                    data-cursor="grow"
                  >
                    Send Email
                  </a>
                  <a
                    href="tel:+2340000000000"
                    className="rounded-full border border-white/55 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                    data-cursor="grow"
                  >
                    Call Front Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="bg-[linear-gradient(180deg,#f7fcf4_0%,#edf6e8_100%)] px-4 py-12 md:px-8"
          data-reveal
        >
          <div className="mx-auto w-full max-w-6xl">
            <FaqSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
