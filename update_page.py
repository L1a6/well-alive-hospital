import os

workspace = r"c:\Users\Admin\Desktop\well-alive-hospital\src\app"

layout_path = os.path.join(workspace, "layout.tsx")
with open(layout_path, "w", encoding="utf-8") as f:
    f.write("""import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Well Alive Hospital, Uyo",
  description: "Premium cinematic healthcare landing experience for Well Alive Hospital, Uyo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
""")

css_path = os.path.join(workspace, "globals.css")
with open(css_path, "w", encoding="utf-8") as f:
    f.write("""@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body {
    @apply bg-[#F6F7F6] text-[#0A110E] break-words;
    font-family: "Inter", "Segoe UI", sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Plus Jakarta Sans", "Inter", sans-serif;
    letter-spacing: -0.02em;
    @apply text-[#0A110E];
  }
  
  * {
    box-sizing: border-box;
  }
}

@layer components {
  .page-container {
    @apply w-full max-w-[96vw] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .primary-btn {
    @apply inline-flex items-center justify-center rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-wider px-6 py-4 bg-[#0B2118] text-[#F4FBF8] border border-white/10 hover:bg-[#153B2B] hover:shadow-xl hover:-translate-y-0.5;
  }

  .nav-link {
    @apply text-sm font-medium text-[#0B2118]/80 hover:text-[#0B2118] transition-colors duration-200 uppercase tracking-widest relative;
  }
}
""")

page_path = os.path.join(workspace, "page.tsx")
with open(page_path, "w", encoding="utf-8") as f:
    f.write(""""use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Custom types
type HeroSlide = { title: string; subtitle: string; image: string };
type ServiceCard = { title: string; description: string; image: string };
type DoctorProfile = { name: string; role: string; photo: string; bgImage?: string };
type Testimonial = { quote: string; name: string; role: string };

const services: ServiceCard[] = [
  {
    title: "Emergency Response",
    description: "Our trauma teams operate in a 24/7 readiness state, equipped with advanced life-support modules.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Cardiothoracic Care",
    description: "Minimally invasive heart procedures utilizing next-generation imaging and 3D modeling.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Maternal Unit",
    description: "Tranquil suites designed for comfort and absolute clinical safety during life's most precious moments.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Oncology Center",
    description: "Targeted therapies and compassionate support environments for long-term patient healing.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
  }
];

const doctors: DoctorProfile[] = [
  { name: "Dr. Imoh Ekanem", role: "Cardiology", photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=900" },
  { name: "Dr. Nseabasi Udo", role: "Emergency", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=900" },
  { name: "Dr. Emem James", role: "Obstetrics", photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=900" },
  { name: "Dr. Victor Essien", role: "Surgery", photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=900" },
];

const testimonials: Testimonial[] = [
  { quote: "The architectural calm and clinical precision here set a completely new standard for healthcare.", name: "Mrs. Akan Akpan", role: "Patient" },
  { quote: "From diagnosis to post-op recovery, the seamless workflow saved me immense stress and anxiety.", name: "Chief Etuk Inyang", role: "Patient" }
];

const blogs = [
  { title: "The Future of Minimally Invasive Surgery", category: "Medical Innovation", date: "April 10, 2026", link: "#" },
  { title: "Understanding Cardiac Recovery Protocols", category: "Patient Guide", date: "April 5, 2026", link: "#" },
  { title: "Nutrition and Cellular Regeneration", category: "Wellness", date: "March 28, 2026", link: "#" }
];

export default function LandingPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState(doctors[0]);

  useLayoutEffect(() => {
    if (!pageRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const onScroll = () => {
      setNavSolid(window.scrollY > 28);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Smooth Scroll Integration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Horizontal Scroll for Services
    const ctx = gsap.context(() => {
      if (!servicesRef.current || !trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth - window.innerWidth;
      
      gsap.to(trackRef.current, {
        x: -trackWidth,
        ease: "none",
        scrollTrigger: {
          trigger: servicesRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${trackWidth}`,
          anticipatePin: 1
        }
      });
    }, pageRef);

    return () => {
      window.removeEventListener("scroll", onScroll);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="overflow-hidden bg-[#F6F7F6]">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-black/5 ${navSolid ? 'bg-[#F6F7F6]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="page-container flex items-center justify-between">
          <a href="#hero" className="text-xl md:text-2xl font-extrabold tracking-tight text-[#0B2118]">
            WELL ALIVE<span className="text-[#42A37C]">.</span>
          </a>

          <button className="md:hidden text-[#0B2118] z-50 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="sr-only">Toggle Menu</span>
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <nav className={`absolute md:static top-full left-0 w-full md:w-auto h-[100vh] md:h-auto pb-12 md:pb-0 bg-[#F6F7F6] md:bg-transparent flex flex-col md:flex-row items-center justify-center md:items-center gap-8 md:gap-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'translate-y-0' : '-translate-y-[150%] md:translate-y-0'}`}>
            <a href="#about" className="nav-link text-xl md:text-sm" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" className="nav-link text-xl md:text-sm" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#doctors" className="nav-link text-xl md:text-sm" onClick={() => setMenuOpen(false)}>Doctors</a>
            <a href="#testimonials" className="nav-link text-xl md:text-sm" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#blog" className="nav-link text-xl md:text-sm" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#contact" className="primary-btn mt-6 md:mt-0" onClick={() => setMenuOpen(false)}>Book Appointment</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2200" 
            alt="Hospital Interior" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F7F6]/60 via-[#F6F7F6]/30 to-[#F6F7F6]" />
        </div>
        
        <div className="relative z-10 w-full max-w-[96vw] xl:max-w-7xl mx-auto text-center flex flex-col items-center">
          <p className="uppercase tracking-[0.2em] font-medium text-sm md:text-base text-[#0B2118]/70 mb-6 drop-shadow-sm">
            Welcome to Well Alive
          </p>
          <h1 className="text-5xl md:text-7xl xl:text-[84px] font-bold text-[#0B2118] leading-[1.05] tracking-tight max-w-[1000px] mx-auto drop-shadow-sm">
            Precision Care. <br className="md:hidden" />
            <span className="text-[#42A37C] font-normal italic">Human Presence.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#2C4A3E] font-medium max-w-2xl leading-relaxed mx-auto">
            A premium medical destination in Uyo where emergency response, diagnostics, and specialist medicine work in one coordinated flow.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#services" className="primary-btn px-8 py-5">
              Explore Our Practice
            </a>
          </div>
        </div>
      </section>

      {/* About Section (No Cards, Clean Typographic layout) */}
      <section id="about" className="py-32 md:py-48 px-4 bg-white border-y border-[#0B2118]/5">
        <div className="page-container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2118] leading-tight mb-8">
              Healing spaces designed <br />for absolute calm.
            </h2>
            <div className="space-y-6 text-[#2C4A3E] text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              <p>
                We believed that healthcare should not only be technologically advanced but architecturally intelligent. Every corridor, suite, and surgical theater at Well Alive Hospital functions to reduce anxiety and enhance the healing state.
              </p>
              <p>
                From minimally invasive procedures to targeted therapies, our clinical teams are empowered by a framework of total precision.
              </p>
            </div>
            <a href="#contact" className="inline-block mt-10 font-bold uppercase tracking-wider text-[#0B2118] border-b-2 border-transparent hover:border-[#42A37C] pb-1 transition-all">
              Discover our story
            </a>
          </div>
          <div className="relative h-[60vh] lg:h-[75vh] w-full rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture" 
                className="w-full h-full object-cover object-center" 
              />
          </div>
        </div>
      </section>

      {/* Services Horizontal Scroll */}
      <section id="services" ref={servicesRef} className="h-screen bg-[#0B2118] text-white flex items-center overflow-hidden relative">
        <div className="absolute top-16 md:top-24 left-0 w-full px-8 md:px-16 z-10 flex justify-between items-center">
          <h2 className="text-4xl md:text-6xl font-bold">Our Practice</h2>
          <p className="hidden md:block uppercase tracking-widest text-sm text-white/50">Scroll to explore</p>
        </div>
        <div ref={trackRef} className="flex h-[60vh] items-center whitespace-nowrap pl-4 md:pl-16 pt-16">
          {services.map((service, idx) => (
            <div key={idx} className="relative w-[85vw] md:w-[45vw] h-full flex-shrink-0 mr-8 md:mr-16 rounded-lg overflow-hidden group">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2118]/90 via-[#0B2118]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 whitespace-normal w-full md:w-[90%]">
                <p className="text-[#42A37C] font-mono text-sm tracking-[0.2em] mb-3">0{idx + 1}</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{service.title}</h3>
                <p className="text-lg text-white/80 leading-relaxed md:max-w-md">{service.description}</p>
              </div>
            </div>
          ))}
          {/* Spacer block at the end */}
          <div className="w-[10vw] md:w-[30vw] h-full flex-shrink-0" />
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="relative py-40 min-h-[90vh] flex flex-col justify-end bg-black transition-all duration-700 overflow-hidden">
        {/* Dynamic Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 opacity-60 md:opacity-80"
          style={{ backgroundImage: `url('${activeDoctor.photo}')` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        <div className="relative z-10 page-container w-full">
          <p className="uppercase tracking-[0.2em] text-sm text-[#42A37C] mb-6">Expertise</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 max-w-xl leading-tight">
            Consult the specialists leading your care.
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-x-0 group/list">
            {doctors.map((doctor, index) => (
              <div 
                key={doctor.name}
                className="md:border-l md:border-white/20 pl-6 py-4 md:w-1/4 cursor-pointer transition-all duration-500 hover:bg-white/5 group-hover/list:opacity-50 hover:!opacity-100"
                onMouseEnter={() => setActiveDoctor(doctor)}
                onClick={() => setActiveDoctor(doctor)}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{doctor.name}</h3>
                <p className="text-white/60 font-medium">{doctor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Sleek Quotes) */}
      <section id="testimonials" className="py-32 bg-[#F6F7F6]">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16">
            {testimonials.map((test, index) => (
              <div key={index} className="p-8 md:p-12 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <span className="text-[#42A37C] text-5xl font-serif leading-none">"</span>
                <p className="text-xl md:text-2xl font-medium text-[#0A110E] mt-4 mb-8 leading-snug">
                  {test.quote}
                </p>
                <div>
                  <h4 className="font-bold text-[#0A110E] text-sm uppercase tracking-widest">{test.name}</h4>
                  <p className="text-gray-500 text-sm mt-1">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-40 bg-white border-t border-[#0B2118]/5">
        <div className="page-container">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <p className="uppercase tracking-[0.2em] font-medium text-sm text-[#42A37C] mb-4">Journal</p>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0B2118]">Insights & News.</h2>
            </div>
            <a href="#blog" className="primary-btn">View All articles</a>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {blogs.map((blog, idx) => (
              <a key={idx} href={blog.link} className="flex flex-col group mt-4">
                <div className="h-60 bg-[#F6F7F6] rounded-xl overflow-hidden mb-6">
                  <div className="w-full h-full bg-gray-200/50 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#0B2118]/60">{blog.category}</span>
                  <span className="text-xs text-gray-400">{blog.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2118] leading-snug group-hover:text-[#42A37C] transition-colors">{blog.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-[#0B2118] text-white">
        <div className="page-container max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready for a consultation?</h2>
          <p className="text-xl md:text-2xl text-white/70 font-medium mb-16 max-w-2xl mx-auto">
            Our premium care directors are standing by to organize your visit or discuss your medical needs.
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
              <h4 className="uppercase tracking-[0.1em] text-xs font-bold text-white/50 mb-2">Direct Line</h4>
              <a href="tel:+2349131193359" className="text-3xl font-medium hover:text-[#42A37C] transition-colors">+234 913 119 3359</a>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
              <h4 className="uppercase tracking-[0.1em] text-xs font-bold text-white/50 mb-2">Admissions & Care</h4>
              <a href="mailto:care@wellalivehospital.com" className="text-2xl font-medium hover:text-[#42A37C] transition-colors">care@wellalivehospital.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white/40 text-sm text-center border-t border-white/10">
        <div className="page-container flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Well Alive Hospital. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
""")
