"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Menu, X } from "lucide-react";

import AboutPage from "../components/ui/about-page";
import FeatureCarousel from "../components/ui/feature-carousel";
import Team, { type TeamMember } from "../components/ui/team";
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

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type BlogPost = {
  title: string;
  date: string;
  category: string;
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

const testimonials: Testimonial[] = [
  {
    quote:
      "From emergency admission to discharge, the process felt fast, organized, and deeply human. Every clinician communicated with clarity.",
    name: "Mfon Udofia",
    role: "Patient Family Representative",
  },
  {
    quote:
      "Well Alive combines clinical confidence with empathy. The doctors explained each decision and gave us peace of mind.",
    name: "Iniobong Etim",
    role: "Cardiac Follow-up Patient",
  },
  {
    quote:
      "The environment is premium, the team is responsive, and the care pathway is seamless. It truly feels world-class.",
    name: "Grace Bassey",
    role: "Maternity Care Patient",
  },
];

const blogPosts: BlogPost[] = [
  {
    title: "Understanding Cardiology Innovations in 2024",
    date: "April 10, 2024",
    category: "Insights",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mental Health Strategies for Fast-paced Lives",
    date: "March 22, 2024",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Pediatric Nutrition: What Parents Must Know",
    date: "March 05, 2024",
    category: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
  },
];

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeQuote, setActiveQuote] = useState(0);

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
    const quoteTimer = window.setInterval(() => {
      setActiveQuote((current) => (current + 1) % testimonials.length);
    }, 7400);

    return () => window.clearInterval(quoteTimer);
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

      gsap.fromTo(
        "[data-testimonial-panel]",
        {
          y: 36,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#testimonials",
            start: "top 75%",
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
            <span className={styles.logoMark} aria-hidden="true">
              <span className={styles.logoPulse} />
            </span>
            <p>Well Alive</p>
          </a>

          <button
            type="button"
            className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
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
                    backgroundImage: `linear-gradient(130deg, rgba(7, 28, 21, 0.84), rgba(38, 169, 122, 0.34)), url('${slide.image}')`,
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

        <section id="blogs" className={styles.blogs}>
          <div className={styles.sectionHead} style={{ marginLeft: "clamp(1rem, 3vw, 2rem)" }} data-reveal>
            <p>Medical Insights</p>
            <h2>Health intelligence, simplified for you.</h2>
          </div>

          <div className={styles.blogsGrid}>
            {blogPosts.map((post) => (
              <article key={post.title} className={styles.blogCard} data-reveal data-cursor="grow">
                <div className={styles.blogCardImageWrapper}>
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className={styles.blogInfo}>
                  <div className={styles.blogMeta}>
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className={styles.testimonials}>
          <div className={styles.testimonialsInner} data-testimonial-panel>
            <p className={styles.testimonialKicker}>Testimonials</p>
            <blockquote>{`“${testimonials[activeQuote].quote}”`}</blockquote>
            <h3>{testimonials[activeQuote].name}</h3>
            <span>{testimonials[activeQuote].role}</span>

            <div className={styles.testimonialDots}>
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  className={`${styles.testimonialDot} ${activeQuote === index ? styles.testimonialDotActive : ""}`}
                  onClick={() => setActiveQuote(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <article className={styles.contactPanel} data-reveal>
            <p>Contact & Location</p>
            <h2>Visit Well Alive Hospital, Shelter Afrique, Uyo.</h2>

            <div className={styles.contactRows}>
              <div>
                <h3>Front Desk</h3>
                <a href="tel:+2349131193359">+234 913 119 3359</a>
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:care@wellalivehospital.com">care@wellalivehospital.com</a>
              </div>
              <div>
                <h3>Address</h3>
                <p>Shelter Afrique, Uyo, Akwa Ibom</p>
              </div>
            </div>

            <div className={styles.contactActions}>
              <a href="tel:+2349131193359" className={styles.primaryCta} data-cursor="grow">
                Call Front Desk
              </a>
              <a href="mailto:care@wellalivehospital.com" className={styles.secondaryCtaDark} data-cursor="grow">
                Email Care Team
              </a>
            </div>
          </article>

          <div className={styles.mapFrame} data-reveal data-cursor="grow">
            <iframe
              title="Well Alive Hospital Uyo Map"
              src="https://www.google.com/maps?q=Shelter+Afrique,+Uyo,+Akwa+Ibom&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <article>
            <h4>Well Alive Hospital</h4>
            <p>
              Enterprise-grade healthcare experiences powered by clinical precision, design clarity,
              and compassionate teams.
            </p>
          </article>

          <article>
            <h4>Navigate</h4>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
          </article>

          <article>
            <h4>Contact</h4>
            <a href="tel:+2349131193359">+234 913 119 3359</a>
            <a href="mailto:care@wellalivehospital.com">care@wellalivehospital.com</a>
            <p>Shelter Afrique, Uyo</p>
          </article>

          <article>
            <h4>Hours</h4>
            <p>Emergency: 24/7</p>
            <p>Outpatient: 8:00 AM - 8:00 PM</p>
            <p>Diagnostics: 7:00 AM - 9:00 PM</p>
          </article>
        </div>

        <p className={styles.footerBottom}>© 2026 Well Alive Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
}
