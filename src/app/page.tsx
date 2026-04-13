"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./page.module.css";

const heroPoster =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1800";
const heroVideo =
  "https://videos.pexels.com/video-files/7088485/7088485-hd_1920_1080_25fps.mp4";

const bentoStats = [
  { value: "24/7", label: "Emergency" },
  { value: "18", label: "Specialties" },
  { value: "09m", label: "Avg Triage" },
];

const services = [
  {
    title: "Acute",
    body: "Rapid emergency response and stabilization.",
    icon: "A",
  },
  {
    title: "Imaging",
    body: "High-definition diagnostics and reporting.",
    icon: "I",
  },
  {
    title: "Surgery",
    body: "Modern theatres with guided recovery.",
    icon: "S",
  },
  {
    title: "Maternity",
    body: "Safe maternal and neonatal care.",
    icon: "M",
  },
  {
    title: "Cardio",
    body: "Advanced heart care and monitoring.",
    icon: "C",
  },
];

const doctors = [
  {
    name: "Dr. Imoh Ekanem",
    role: "Cardiology",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Dr. Nseabasi Udo",
    role: "Emergency",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Dr. Emem James",
    role: "Obstetrics",
    photo:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Dr. Victor Essien",
    role: "Surgery",
    photo:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=900",
  },
];

const quotes = [
  "Care that feels personal.",
  "Calm spaces. Fast action.",
  "Trusted hands, every day.",
];

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState(doctors[0]);

  useLayoutEffect(() => {
    if (!pageRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const onScroll = () => {
      setNavSolid(window.scrollY > 28);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    const ctx = gsap.context(() => {
      gsap.to("[data-hero-word]", {
        scale: 2,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        "[data-reveal]",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "[data-reveal-root]",
            start: "top 82%",
          },
        },
      );

      const bento = gsap.utils.toArray<HTMLElement>("[data-bento-item]");
      bento.forEach((item, index) => {
        const directions = [
          { x: -40, y: 20 },
          { x: 40, y: 0 },
          { x: 0, y: 40 },
          { x: -20, y: -30 },
        ];
        const from = directions[index % directions.length];

        gsap.fromTo(
          item,
          { x: from.x, y: from.y, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.75,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#about",
              start: "top 78%",
            },
          },
        );
      });

      const serviceTrack = document.querySelector<HTMLElement>("[data-service-track]");
      const serviceWrap = document.querySelector<HTMLElement>("[data-service-wrap]");

      if (serviceTrack && serviceWrap) {
        const updateHorizontal = () => {
          const distance = Math.max(0, serviceTrack.scrollWidth - serviceWrap.clientWidth);

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#services",
              start: "top top",
              end: `+=${Math.max(900, distance + 500)}`,
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });

          tl.to(serviceTrack, {
            x: -distance,
            ease: "none",
          });
        };

        updateHorizontal();
      }

      const quoteItems = gsap.utils.toArray<HTMLElement>("[data-quote]");
      quoteItems.forEach((quote, index) => {
        gsap.fromTo(
          quote,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quote,
              start: "top 85%",
            },
          },
        );

        if (index > 0) {
          gsap.set(quote, { opacity: 0.45 });
        }
      });
    }, pageRef);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={pageRef} className={styles.page}>
      <header className={`${styles.nav} ${navSolid ? styles.navSolid : ""}`}>
        <div className={styles.navInner}>
          <a href="#hero" className={styles.logo}>
            <span>WA</span>
            <p>Well Alive</p>
          </a>

          <button
            type="button"
            className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#doctors" onClick={() => setMenuOpen(false)}>
              Doctors
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <a href="#contact" className={styles.navCta} onClick={() => setMenuOpen(false)}>
              Book
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className={styles.hero}>
          <h1 data-hero-word className={styles.heroWord}>
            WELL ALIVE
          </h1>

          <div className={styles.heroMediaShell}>
            <video className={styles.heroVideo} autoPlay muted loop playsInline poster={heroPoster}>
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>

          <article className={styles.heroCard} data-reveal-root>
            <p className={styles.miniTag} data-reveal>
              Uyo, Nigeria
            </p>
            <h2 data-reveal>Life, Defined.</h2>
            <p data-reveal>
              World-class hospital care with fast diagnostics, modern facilities, and trusted specialists.
            </p>
            <a href="#contact" className={styles.heroCta} data-reveal>
              Book
            </a>
          </article>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.aboutHead}>
            <p>About</p>
            <h2>Built For Uyo</h2>
          </div>

          <div className={styles.bentoGrid}>
            <article className={`${styles.bentoLarge} ${styles.bentoCard}`} data-bento-item>
              <img
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1200"
                alt="Hospital interior"
                loading="lazy"
              />
            </article>

            {bentoStats.map((stat) => (
              <article key={stat.label} className={`${styles.bentoStat} ${styles.bentoCard}`} data-bento-item>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}

            <article className={`${styles.bentoTall} ${styles.bentoCard}`} data-bento-item>
              <h3>Human Care</h3>
              <p>
                We combine medical technology, clinical speed, and patient empathy into one connected care
                model.
              </p>
            </article>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <div className={styles.servicesHeader}>
            <p>Clinical Units</p>
            <h2>Service Track</h2>
          </div>

          <div className={styles.servicesWrap} data-service-wrap>
            <div className={styles.servicesTrack} data-service-track>
              {services.map((service) => (
                <article key={service.title} className={styles.serviceCard}>
                  <span>{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="doctors"
          className={styles.doctors}
          style={{
            backgroundImage: `linear-gradient(115deg, rgba(1,50,32,0.8), rgba(1,50,32,0.36)), url('${activeDoctor.photo}')`,
          }}
        >
          <div className={styles.doctorHead}>
            <p>Doctors</p>
            <h2>Meet Experts</h2>
          </div>

          <div className={styles.doctorList}>
            {doctors.map((doctor, index) => (
              <button
                key={doctor.name}
                type="button"
                className={styles.doctorItem}
                style={{ marginLeft: `${index * 8}%` }}
                onMouseEnter={() => setActiveDoctor(doctor)}
                onFocus={() => setActiveDoctor(doctor)}
              >
                <img src={doctor.photo} alt={doctor.name} loading="lazy" />
                <div>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.role}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.editorial}>
          <div className={styles.blogList}>
            <p>Insights</p>
            <ul>
              <li>
                <span>01</span>
                <h3>Smarter Recovery</h3>
              </li>
              <li>
                <span>02</span>
                <h3>Early Detection</h3>
              </li>
              <li>
                <span>03</span>
                <h3>Better Outcomes</h3>
              </li>
            </ul>
          </div>

          <div className={styles.quoteWall}>
            {quotes.map((quote) => (
              <blockquote key={quote} data-quote>
                {quote}
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contactAnchor}>
          <div className={styles.contactInfo}>
            <p>Contact</p>
            <h2>Shelter Afrique</h2>
            <p>care@wellalivehospital.com</p>
            <p>+234 913 119 3359</p>
            <p>Uyo, Akwa Ibom</p>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              title="Shelter Afrique Map"
              src="https://www.google.com/maps?q=Shelter+Afrique,+Uyo&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <h4>About</h4>
          <p>High-trust medical care for modern families.</p>
        </div>
        <div>
          <h4>Links</h4>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>care@wellalivehospital.com</p>
          <p>+234 913 119 3359</p>
        </div>
        <div>
          <h4>Socials</h4>
          <a href="#">Instagram</a>
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
