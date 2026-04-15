"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Menu, X } from "lucide-react";

import AboutPage from "../components/ui/about-page";
import FeatureCarousel from "../components/ui/feature-carousel";
import Team, { type TeamMember } from "../components/ui/team";
import { Footer } from "../components/ui/footer-section";
import { FocusRail, type FocusRailItem } from "../components/ui/focus-rail";
import { TestimonialsMinimal } from "../components/ui/minimal-testimonial";
import styles from "./page.module.css";

type HeroSlide = {
  title: string;
  subtitle: string;
  image: string;
};

type DoctorProfile = {
  name: string;
  specialty: string;
  credentials: string;
  image: string;
};

const heroSlides: HeroSlide[] = [
  {
    title: "Precision Care. Human Presence.",
    subtitle:
      "A premium medical destination in Uyo where emergency response, diagnostics, and specialist medicine work in one coordinated flow.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2200",
  },
  {
    title: "Healing Spaces, Built For Calm.",
    subtitle:
      "Thoughtful architecture, intelligent workflows, and compassionate teams designed to reduce anxiety and improve outcomes.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2200",
  },
  {
    title: "Specialists You Can Trust.",
    subtitle:
      "From urgent intervention to long-term management, every stage is guided by experienced clinicians and transparent communication.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2200",
  },
];

const doctors: DoctorProfile[] = [
  {
    name: "Dr. Israel Ben",
    specialty: "Consultant General Surgeon",
    credentials: "MD, Well Alive Hospital",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Victor Essien",
    specialty: "General Surgery",
    credentials: "MBBS, FICS",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Nseabasi Udo",
    specialty: "Emergency Medicine",
    credentials: "MBChB, FMCP",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Emem James",
    specialty: "Obstetrics & Gynecology",
    credentials: "MBBS, FWACS",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Mfon Uwah",
    specialty: "Pediatrics",
    credentials: "MBBS, FWACP",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dr. Anietie Brown",
    specialty: "Internal Medicine",
    credentials: "MBBS, FMCP",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=1000",
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

  const doctorTeam: TeamMember[] = doctors.map((doctor) => ({
    image: doctor.image,
    name: doctor.name,
    role: `${doctor.specialty} - ${doctor.credentials}`,
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
            <p>Well Alive</p>
          </a>

          <button
            type="button"
            className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
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
                    backgroundImage: `linear-gradient(130deg, rgba(10, 10, 10, 0.85), rgba(40, 40, 40, 0.4)), url('${slide.image}')`,
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
            <p>Clinical Services</p>
            <h2 style={{ maxWidth: "560px" }}>Advanced Care Units.</h2>
          </div>

          <FeatureCarousel />
        </section>

        <Team members={doctorTeam} />

        <section id="blogs" className="w-full bg-neutral-950 px-4 py-20 overflow-x-hidden">
          <div className="mb-12 text-center" data-reveal>
            <h2 className="text-4xl font-bold text-white mb-2">Featured Medical Stories</h2>
            <p className="text-neutral-400">Navigate the rail to explore specialist insights.</p>
          </div>

          <div data-reveal>
            <FocusRail items={blogFocusItems} autoPlay={false} loop={true} />
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-white px-4 py-20"
          data-reveal
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-1 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
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
          className="bg-white px-4 pb-20 pt-8 md:px-8"
          data-reveal
        >
          <div className="mx-auto w-full max-w-4xl">
            <div className="relative min-h-[260px] overflow-hidden rounded-[1.6rem] sm:min-h-[290px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000')",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(45,124,55,0.9),rgba(90,172,78,0.72))]" />

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
      </main>

      <Footer />
    </div>
  );
}
