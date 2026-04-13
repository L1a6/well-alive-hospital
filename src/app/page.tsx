"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import styles from "./page.module.css";

const serviceCards = [
  {
    title: "Neural Diagnostics",
    detail:
      "AI-assisted imaging and cross-specialist review that compresses diagnosis time while increasing confidence in every treatment path.",
    image:
      "https://source.unsplash.com/featured/1200x900/?medical,diagnostics,technology&sig=11",
    tone: "Emerald Grid",
  },
  {
    title: "Cardio Continuum",
    detail:
      "Emergency triage, catheter lab access, and monitored recovery modeled as one fluid pathway with minute-level escalation controls.",
    image: "https://source.unsplash.com/featured/1200x900/?hospital,cardiology,care&sig=12",
    tone: "Forest Pulse",
  },
  {
    title: "Maternal Suites",
    detail:
      "Quiet birthing suites with neonatal support, private digital check-ins, and family-ready recovery programs.",
    image: "https://source.unsplash.com/featured/1200x900/?maternity,hospital,modern&sig=13",
    tone: "Silver Calm",
  },
  {
    title: "Precision Surgery",
    detail:
      "Hybrid operating rooms with synchronized anesthesia analytics and post-op telemetry for faster stabilization.",
    image: "https://source.unsplash.com/featured/1200x900/?surgery,medical,robotics&sig=14",
    tone: "Matte Depth",
  },
];

const careSignals = [
  { label: "Live Bed Intelligence", value: "24/7" },
  { label: "Clinical Teams", value: "42" },
  { label: "Patient Guidance Score", value: "98.4%" },
  { label: "Average Triage Window", value: "6 min" },
];

const pathways = [
  {
    title: "Intake Layer",
    copy: "Unified digital intake and nurse verification with contextual triage prompts.",
  },
  {
    title: "Decision Layer",
    copy: "Medical teams review diagnostics in shared command views to reduce handoff delay.",
  },
  {
    title: "Recovery Layer",
    copy: "Follow-up guidance, remote monitoring, and specialist touchpoints stay continuous post-discharge.",
  },
];

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!pageRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.15,
    });

    let rafId = 0;
    const onFrame = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(onFrame);
    };

    rafId = window.requestAnimationFrame(onFrame);
    lenis.on("scroll", ScrollTrigger.update);

    const tiltCleanup: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".heroPin",
          start: "top top",
          end: "+=170%",
          scrub: 1.2,
          pin: true,
        },
      });

      heroTimeline
        .to(
          ".heroCopy",
          {
            scale: 1.3,
            yPercent: -16,
            opacity: 0.08,
            filter: "blur(5px)",
            ease: "none",
          },
          0,
        )
        .to(
          ".heroGlass",
          {
            yPercent: -20,
            opacity: 0,
            ease: "none",
          },
          0,
        )
        .to(
          ".heroLayerMid",
          {
            yPercent: -12,
            scale: 1.15,
            ease: "none",
          },
          0,
        )
        .to(
          ".heroLayerBack",
          {
            yPercent: -4,
            scale: 1.22,
            ease: "none",
          },
          0,
        )
        .to(
          ".heroOverlay",
          {
            opacity: 0.78,
            ease: "none",
          },
          0,
        );

      gsap.fromTo(
        ".curtainLeft",
        { xPercent: 0 },
        {
          xPercent: -104,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".curtainStage",
            start: "top 82%",
            end: "top 32%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".curtainRight",
        { xPercent: 0 },
        {
          xPercent: 104,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".curtainStage",
            start: "top 82%",
            end: "top 32%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".serviceHeadline",
        { y: 72, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".curtainStage",
            start: "top 56%",
          },
        },
      );

      const revealBlocks = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      revealBlocks.forEach((block, index) => {
        gsap.fromTo(
          block,
          { y: 72, opacity: 0, clipPath: "inset(0 0 100% 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            ease: "power3.out",
            delay: index % 3 === 0 ? 0 : 0.08,
            scrollTrigger: {
              trigger: block,
              start: "top 88%",
            },
          },
        );
      });

      const cards = gsap.utils.toArray<HTMLElement>(".tiltCard");
      cards.forEach((card) => {
        const glow = card.querySelector<HTMLElement>("[data-glow]");

        const onMove = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotateY: x * 9,
            rotateX: y * -9,
            y: -6,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 1000,
          });

          if (glow) {
            gsap.to(glow, {
              x: x * 24,
              y: y * 24,
              opacity: 0.85,
              duration: 0.35,
              ease: "power2.out",
            });
          }
        };

        const onLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          });

          if (glow) {
            gsap.to(glow, {
              x: 0,
              y: 0,
              opacity: 0.4,
              duration: 0.55,
              ease: "power3.out",
            });
          }
        };

        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);

        tiltCleanup.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", onLeave);
        });
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      tiltCleanup.forEach((cleanup) => cleanup());
      ctx.revert();
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={pageRef} className={styles.page}>
      <div className={styles.atmosphere} />

      <header className={styles.nav} data-reveal>
        <div className={styles.brand}>
          <span className={styles.brandMark}>WA</span>
          <div>
            <p className={styles.brandKicker}>Well Alive Hospital</p>
            <p className={styles.brandCity}>Uyo Clinical Nexus</p>
          </div>
        </div>

        <nav className={styles.navLinks}>
          <a href="#services">Services</a>
          <a href="#innovation">Innovation</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className={styles.navCta}>
          Private Appointment
        </a>
      </header>

      <main>
        <section className={`${styles.heroPin} heroPin`}>
          <div
            className={`${styles.heroLayerBack} heroLayerBack`}
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/featured/2000x1300/?hospital,medical,architecture,technology&sig=1')",
            }}
          >
            <video className={styles.heroVideo} autoPlay muted loop playsInline>
              <source
                src="https://videos.pexels.com/video-files/7088485/7088485-hd_1920_1080_25fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div
            className={`${styles.heroLayerMid} heroLayerMid`}
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/featured/2000x1300/?hospital,interior,medical,light&sig=2')",
            }}
          />

          <div className={`${styles.heroOverlay} heroOverlay`} />

          <div className={`${styles.heroCopy} heroCopy`}>
            <p className={styles.eyebrow}>Cinematic Medical-Tech Experience</p>
            <h1>
              Well Alive Hospital
              <span>Engineered Care in Uyo</span>
            </h1>
            <p className={styles.heroLead}>
              A precision-led healthcare environment where diagnostics, treatment, and
              recovery are orchestrated as one seamless premium journey.
            </p>

            <div className={styles.heroActions}>
              <a href="#services" className={styles.liquidCta}>
                Explore Care Programs
              </a>
              <a href="#contact" className={styles.ghostCta}>
                Book Consultation
              </a>
            </div>
          </div>

          <aside className={`${styles.heroGlass} heroGlass tiltCard`}>
            <span data-glow className={styles.cardGlow} />
            <p className={styles.heroGlassLabel}>Command Center Snapshot</p>
            <div className={styles.heroGlassRows}>
              <p>
                <strong>18</strong>
                <span>live specialty channels</span>
              </p>
              <p>
                <strong>5D</strong>
                <span>care pathway mapping</span>
              </p>
              <p>
                <strong>99.2%</strong>
                <span>care continuity confidence</span>
              </p>
            </div>
          </aside>
        </section>

        <section className={styles.signalStrip}>
          {careSignals.map((signal) => (
            <article key={signal.label} className={`${styles.signalCard} tiltCard`} data-reveal>
              <span data-glow className={styles.cardGlow} />
              <p>{signal.label}</p>
              <h3>{signal.value}</h3>
            </article>
          ))}
        </section>

        <section id="services" className={`${styles.curtainStage} curtainStage`}>
          <div className={styles.curtainMask}>
            <div className={`${styles.curtainPanel} ${styles.curtainLeft} curtainLeft`} />
            <div className={`${styles.curtainPanel} ${styles.curtainRight} curtainRight`} />
          </div>

          <div className={`${styles.serviceHeadline} serviceHeadline`}>
            <p>Adaptive Clinical Programs</p>
            <h2>Asymmetrical by design. Precise by outcome.</h2>
          </div>

          <div className={styles.serviceGrid}>
            {serviceCards.map((service, index) => (
              <article
                key={service.title}
                className={`${styles.serviceCard} tiltCard ${index % 2 === 0 ? styles.serviceCardTall : ""}`}
                data-reveal
              >
                <span data-glow className={styles.cardGlow} />
                <div
                  className={styles.cardMedia}
                  style={{ backgroundImage: `url('${service.image}')` }}
                  aria-hidden="true"
                />
                <div className={styles.cardBody}>
                  <p>{service.tone}</p>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="innovation" className={styles.innovation}>
          <div className={styles.innovationGrid}>
            <article className={`${styles.protocolPanel} tiltCard`} data-reveal>
              <span data-glow className={styles.cardGlow} />
              <p className={styles.panelKicker}>Medical-Tech Luxury</p>
              <h2>Matte silver interfaces. Forest depth architecture.</h2>
              <p>
                Every environment from triage bays to recovery suites is tuned for visual
                calm, data clarity, and private patient confidence.
              </p>
              <Link href="/contact" className={styles.inlineLink}>
                Schedule an executive facility walk-through
              </Link>
            </article>

            <article
              className={`${styles.imagePanel} tiltCard`}
              data-reveal
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/featured/1500x1100/?hospital,interior,modern,clean&sig=31')",
              }}
            >
              <span data-glow className={styles.cardGlow} />
              <p>Immersive, clinical, warm.</p>
            </article>
          </div>

          <div className={styles.pathwayGrid}>
            {pathways.map((path, index) => (
              <article key={path.title} className={`${styles.pathwayCard} tiltCard`} data-reveal>
                <span data-glow className={styles.cardGlow} />
                <span className={styles.pathIndex}>0{index + 1}</span>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.finalCta} data-reveal>
          <div className={styles.finalCard}>
            <p>Well Alive Hospital, Uyo</p>
            <h2>Reserve Your Priority Consultation</h2>
            <p>
              A dedicated care architect will coordinate your visit, specialist routing,
              and complete treatment briefing before arrival.
            </p>
            <div className={styles.heroActions}>
              <a href="mailto:care@wellalivehospital.com" className={styles.liquidCta}>
                care@wellalivehospital.com
              </a>
              <a href="tel:+2349131193359" className={styles.ghostCta}>
                +234 913 119 3359
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Well Alive Hospital, Uyo</p>
        <p>Emerald intelligence for modern patient care.</p>
      </footer>
    </div>
  );
}
