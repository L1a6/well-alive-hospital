import os
import textwrap

workspace = r"c:\Users\Admin\Desktop\well-alive-hospital\src\app"

page_path = os.path.join(workspace, "page.tsx")
content = """// "use client" is required for interactive hooks
"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Custom types
type ServiceCard = { title: string; description: string; icon: string };
type DoctorProfile = { name: string; role: string; photo: string };

const services: ServiceCard[] = [
  {
    title: "Emergency Care",
    description: "24/7 rapid response trauma unit with advanced life-support readiness.",
    icon: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Cardiothoracic Surgery",
    description: "Minimally invasive procedures utilizing next-generation 3D imaging pipelines.",
    icon: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Maternal Health",
    description: "Tranquil, intelligent suites designed to reduce anxiety during life's most precious moments.",
    icon: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
  }
];

const doctors: DoctorProfile[] = [
  { name: "Dr. Imoh Ekanem", role: "Cardiology", photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" },
  { name: "Dr. Nseabasi Udo", role: "Emergency Medicine", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" },
  { name: "Dr. Emem James", role: "Obstetrics", photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600" },
  { name: "Dr. Victor Essien", role: "General Surgery", photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=600" },
];

export default function LandingPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  useLayoutEffect(() => {
    if (!pageRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth inertial scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Nav scroll effect
      ScrollTrigger.create({
        start: "top -50",
        onUpdate: (self) => setNavSolid(self.scrollY > 50)
      });

      // Z-index Parallax Reveal for Hero (Curtain Reveal)
      if (heroRef.current && heroBgRef.current && heroContentRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 30, // Pulls the background down
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
        
        gsap.to(heroContentRef.current, {
          yPercent: -50, // Pushes content up faster than scroll
          opacity: 0,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      // Scroll-triggered reveals for sections
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((elem) => {
        gsap.fromTo(elem, 
          { y: 60, opacity: 0 }, 
          { 
            y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: elem, start: "top 85%" }
          }
        );
      });
    }, pageRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  // Micro-interaction 3D tilt effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div ref={pageRef} className="bg-[#FFFFFF] text-[#0A110E] overflow-x-hidden">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${navSolid ? 'bg-[#FFFFFF]/80 backdrop-blur-xl border-[#0B2118]/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent border-transparent py-6'}`}>
        <div className="page-container flex items-center justify-between">
          <a href="#hero" className={`text-xl md:text-2xl font-extrabold tracking-[-0.05em] transition-colors ${navSolid ? 'text-[#0B2118]' : 'text-white'}`}>
            WELL ALIVE<span className="text-[#3ea37a]">.</span>
          </a>

          <button className={`md:hidden z-50 p-2 transition-colors ${menuOpen || navSolid ? 'text-[#0B2118]' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="sr-only">Toggle Menu</span>
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-transform origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-transform origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <nav className={`absolute md:static top-full left-0 w-full md:w-auto h-[100vh] md:h-auto pb-12 md:pb-0 bg-[#FFFFFF] md:bg-transparent flex flex-col md:flex-row items-center justify-center md:items-center gap-8 md:gap-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'translate-y-0' : '-translate-y-[150%] md:translate-y-0'}`}>
            <a href="#services" className={`nav-link text-xl md:text-sm font-bold uppercase tracking-widest ${navSolid || menuOpen ? 'text-[#0B2118]' : 'text-white/90 md:hover:text-white'}`} onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#team" className={`nav-link text-xl md:text-sm font-bold uppercase tracking-widest ${navSolid || menuOpen ? 'text-[#0B2118]' : 'text-white/90 md:hover:text-white'}`} onClick={() => setMenuOpen(false)}>Team</a>
            <a href="#contact" className={`nav-link text-xl md:text-sm font-bold uppercase tracking-widest ${navSolid || menuOpen ? 'text-[#0B2118]' : 'text-white/90 md:hover:text-white'}`} onClick={() => setMenuOpen(false)}>Location</a>
            <a href="#contact" className="mt-6 md:mt-0 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_8px_28px_rgba(47,138,102,0.3)] hover:-translate-y-0.5 bg-[#0B2118] text-[#F4FBF8]" onClick={() => setMenuOpen(false)}>
              Book Consult
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section (Z-Index Reveal with Video/Image Fallback) */}
      <section id="hero" ref={heroRef} className="relative w-full h-screen overflow-hidden bg-[#0A110E] flex items-center justify-center">
        <div ref={heroBgRef} className="absolute inset-0 z-0 origin-center w-full h-full scale-[1.05]">
          {/* External Pexels video link. Using a muted autoPlay video as background */}
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://cdn.coverr.co/videos/coverr-medical-research-facility-2720/1080p.mp4" type="video/mp4" />
          </video>
          {/* Extra dark overlay to ensure white text pops out seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A110E]/70 via-[#0A110E]/30 to-[#0A110E]/80 mix-blend-multiply" />
        </div>
        
        <div ref={heroContentRef} className="relative z-10 w-full max-w-[96vw] xl:max-w-7xl mx-auto flex flex-col items-center text-center px-4 pt-20">
          <span className="mb-8 inline-block px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] shadow-2xl">
            Shelter Afrique, Uyo
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[92px] font-extrabold text-white leading-[1.02] tracking-tight max-w-[1200px] mx-auto drop-shadow-2xl">
            Medical-Tech <span className="text-[#3ea37a] italic font-medium">Luxury.</span><br />
            Absolute Clinical Precision.
          </h1>
          <p className="mt-8 lg:mt-10 text-lg md:text-xl text-[#dce6e2] font-normal max-w-2xl leading-relaxed mx-auto drop-shadow">
            Experience world-class healthcare architecture driven by intelligent workflows and compassionate teams.
          </p>
          <div className="mt-14 flex items-center justify-center">
             <a href="#services" className="px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-700 shadow-2xl bg-gradient-to-tr from-[#164133] to-[#2f8a66] text-white hover:shadow-[0_12px_40px_rgba(62,163,122,0.4)] hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
              Explore Practice
            </a>
          </div>
        </div>
      </section>

      {/* Spacer to give the "Curtain Reveal" breathing room */}
      <div className="relative h-24 bg-[#FFFFFF] z-20 w-full rounded-t-[3rem] -mt-12 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]" />

      {/* Services Section (Glassmorphism 3-Column Grid) */}
      <section id="services" className="relative py-24 md:py-32 px-4 bg-[#FFFFFF] z-20">
        
        <div className="page-container relative z-10">
          <div className="text-center mb-24 reveal-up">
            <p className="text-[#2f8a66] uppercase tracking-[0.2em] font-bold text-xs mb-4">Core Domains</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0B2118] tracking-tight">Advanced Service Lines.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="reveal-up relative group cursor-pointer transition-transform duration-500 ease-out perspective-1000"
                style={{ transitionDelay: `${idx * 150}ms` }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Glassmorphism Card */}
                <div className="h-full bg-[#f4f7f6]/40 backdrop-blur-xl border border-[#0B2118]/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 overflow-hidden transition-all group-hover:bg-[#f4f7f6] flex flex-col group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                  <div className="w-full h-64 mb-8 rounded-2xl overflow-hidden relative shadow-inner">
                    <img src={service.icon} alt={service.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2118]/30 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity" />
                  </div>
                  <h3 className="text-2xl lg:text-[28px] font-bold text-[#0B2118] mb-4 leading-tight tracking-tight">{service.title}</h3>
                  <p className="text-[#4f5f58] text-base leading-[1.7] flex-grow">{service.description}</p>
                  
                  <div className="mt-8 flex items-center text-[#2f8a66] font-bold text-xs uppercase tracking-wider relative group/link">
                    <span className="relative z-10 transition-transform group-hover/link:translate-x-1">Discover More</span>
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section (Grid) */}
      <section id="team" className="py-32 px-4 bg-[#f9fafb] border-t border-[#0B2118]/5">
        <div className="page-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal-up">
            <div className="max-w-2xl">
              <p className="text-[#2f8a66] uppercase tracking-[0.2em] font-bold text-xs mb-4">Medical Faculty</p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#0B2118] tracking-tight leading-[1.05]">Meet the specialists<br/>leading your care.</h2>
            </div>
            <button className="self-start md:self-end px-8 py-4 rounded-full border-2 border-[#0B2118]/10 text-[#0B2118] font-bold text-xs uppercase tracking-widest hover:bg-[#0B2118] hover:text-white transition-colors duration-500 shadow-sm">
              View Full Faculty
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, idx) => (
              <div 
                key={idx} 
                className="reveal-up group relative cursor-pointer"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-[#ebebeb] shadow-sm transform transition-transform duration-700 hover:-translate-y-2">
                  <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2118]/90 via-[#0B2118]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 flex gap-3">
                     <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">→</span>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#0B2118] tracking-tight">{doctor.name}</h3>
                <p className="text-[#3ea37a] font-semibold text-xs tracking-widest uppercase mt-2">{doctor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact Section */}
      <section id="contact" className="py-0 relative flex flex-col lg:flex-row min-h-[85vh] bg-[#0A110E] overflow-hidden">
         {/* Subtle green lighting gradient for the dark section */}
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#164133] rounded-full blur-[150px] -z-10 translate-y-1/2 -translate-x-1/4 opacity-40 pointer-events-none" />

        {/* Contact Info Panel */}
        <div className="w-full lg:w-5/12 flex items-center justify-center p-10 py-24 lg:p-24 relative z-10 text-white">
          <div className="reveal-up w-full max-w-md">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-14 tracking-tight leading-[1.05]">Begin your<br/>consultation.</h2>
            
            <div className="space-y-12">
              <div className="group">
                <p className="uppercase tracking-[0.2em] font-bold text-[10px] text-[#3ea37a] mb-3">Location</p>
                <p className="text-2xl font-normal text-white hover:text-white/80 transition-colors leading-snug">Shelter Afrique, Uyo<br/>Akwa Ibom State, Nigeria</p>
              </div>
              
              <div className="h-px w-full bg-white/10" />
              
              <div className="group">
                <p className="uppercase tracking-[0.2em] font-bold text-[10px] text-[#3ea37a] mb-3">Direct Line (24/7)</p>
                <a href="tel:+2349131193359" className="text-3xl lg:text-4xl font-light text-white hover:text-[#3ea37a] transition-colors block">+234 913 119 3359</a>
              </div>
              
              <div className="group">
                <p className="uppercase tracking-[0.2em] font-bold text-[10px] text-[#3ea37a] mb-3">Admissions & Inquiries</p>
                <a href="mailto:care@wellalivehospital.com" className="text-xl lg:text-2xl font-light text-white hover:text-[#3ea37a] transition-colors block">care@wellalivehospital.com</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps iframe inside an asymmetrical masked grid */}
        <div className="w-full lg:w-7/12 h-[50vh] lg:h-auto relative reveal-up flex">
           {/* Dark fade on the left to blend with content panel seamlessly */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0A110E] to-transparent z-10 pointer-events-none hidden lg:block" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0A110E] to-transparent z-10 pointer-events-none lg:hidden" />
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15886.666324679724!2d7.9152349!3d5.0110398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d5baed2e8e30b%3A0xe5cde78aeb851f50!2sShelter%20Afrique%2C%20Uyo!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
            className="absolute inset-0 w-full h-full filter saturate-[0.8] contrast-[1.1]"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Glassmorphism accent over map */}
          <div className="absolute bottom-8 right-8 bg-[#0B2118]/80 backdrop-blur-md rounded-2xl p-6 hidden md:block border border-white/10 shadow-2xl">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3ea37a] rounded-full flex items-center justify-center animate-pulse">
                   <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                   <p className="text-[#dce6e2] text-xs font-bold uppercase tracking-widest leading-tight">Well Alive<br/>Hospital</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black text-[#dce6e2]/50 text-xs md:text-sm text-center font-medium border-t border-white/5">
        <div className="page-container flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Well Alive Hospital. Elevating Clinical Experiences.</p>
          <div className="flex gap-8 uppercase tracking-[0.15em] text-[10px] md:text-[11px] font-bold text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
"""
with open(page_path, "w", encoding="utf-8") as f:
    f.write(content)
