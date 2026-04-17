"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  Baby,
  FlaskConical,
  HeartPulse,
  Microscope,
  ScanLine,
  Stethoscope,
  ShieldPlus,
  type LucideIcon,
} from "lucide-react";

import { cn } from "../../lib/utils";

type Feature = {
  id: string;
  label: string;
  icon: LucideIcon;
  image: string;
  description: string;
};

const BRAND = "#5AAC4E";
const BRAND_DEEP = "#2D7C37";

const FEATURES: Feature[] = [
  {
    id: "general-medical-services",
    label: "General Medical Services",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1400",
    description: "Consultation, diagnosis, and coordinated follow-up for everyday and complex health needs.",
  },
  {
    id: "expert-surgeries",
    label: "Expert Surgeries",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=1400",
    description: "Consultant-led procedures with theatre safety protocols and recovery monitoring.",
  },
  {
    id: "breast-diseases",
    label: "Breast Diseases",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1400",
    description: "Early screening, breast health evaluation, and personalized treatment planning.",
  },
  {
    id: "cancer-care-centre",
    label: "Cancer Care Centre",
    icon: ShieldPlus,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1400",
    description: "Oncology support pathways for diagnosis guidance, treatment coordination, and aftercare.",
  },
  {
    id: "gastroenterology",
    label: "Gastroenterology",
    icon: ScanLine,
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1400",
    description: "Digestive health reviews, procedure referrals, and long-term gastrointestinal care.",
  },
  {
    id: "maternity-services",
    label: "Maternity Services",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1400",
    description: "Antenatal, delivery, and postnatal support for safe motherhood and newborn wellness.",
  },
  {
    id: "laboratory-services",
    label: "Laboratory Services",
    icon: Microscope,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1400",
    description: "Reliable sample testing and rapid laboratory reporting for confident clinical decisions.",
  },
  {
    id: "ultrasound-scan-services",
    label: "Ultrasound Scan Services",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1400",
    description: "Soft-tissue and obstetric imaging with clinician-reviewed interpretation.",
  },
];

const AUTO_PLAY_INTERVAL = 3600;
const ITEM_HEIGHT = 58;

const wrap = (min: number, max: number, value: number) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) {
      setStep((value) => value + diff);
    }
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const length = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > length / 2) {
      normalizedDiff -= length;
    }
    if (diff < -length / 2) {
      normalizedDiff += length;
    }

    if (normalizedDiff === 0) {
      return "active";
    }
    if (normalizedDiff === -1) {
      return "prev";
    }
    if (normalizedDiff === 1) {
      return "next";
    }
    return "hidden";
  };

  return (
    <div className="mx-auto w-full max-w-[min(1400px,96vw)] px-2 sm:px-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white shadow-[0_24px_70px_rgba(14,50,39,0.12)] lg:rounded-[2.6rem]">
        <div className="flex flex-col lg:grid lg:grid-cols-[0.95fr_1.05fr] min-h-[250px] lg:min-h-[440px]">
          <div
            className="relative overflow-hidden px-4 md:px-6 py-6 sm:px-8 lg:px-10 lg:py-9"
            style={{
              background: `linear-gradient(170deg, ${BRAND} 0%, ${BRAND_DEEP} 68%, #15543f 100%)`,
            }}
          >
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/16 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/18 to-transparent" />

            <div className="relative flex h-full min-h-[250px] lg:min-h-[330px] items-center justify-center lg:justify-start">
              {FEATURES.map((feature, index) => {
                const FeatureIcon = feature.icon;
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(
                  -(FEATURES.length / 2),
                  FEATURES.length / 2,
                  distance,
                );

                return (
                  <motion.div
                    key={feature.id}
                    style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      opacity: 1 - Math.abs(wrappedDistance) * 0.24,
                    }}
                    transition={{ type: "spring", stiffness: 95, damping: 24, mass: 1 }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "group relative flex items-center gap-3 rounded-full border px-5 py-3 text-left transition-all duration-500 sm:px-6",
                        isActive
                          ? "z-10 border-white bg-white text-[#2D7C37]"
                          : "border-white/30 bg-transparent text-white/70 hover:border-white/55 hover:text-white",
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex items-center justify-center rounded-full transition-colors",
                          isActive ? "text-[#2D7C37]" : "text-white/50",
                        )}
                      >
                        <FeatureIcon className="h-4 w-4" />
                      </span>

                      <span className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.16em] sm:text-[13px]">
                        {feature.label}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative flex min-h-[250px] lg:min-h-[360px] flex-col justify-center overflow-hidden bg-[#f4fbf7] px-4 py-4 md:py-6 sm:px-8 lg:px-10 lg:py-8">
            <div className="relative h-[250px] sm:h-[300px] lg:h-[360px] w-full">
              {FEATURES.map((feature, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";

                return (
                  <motion.article
                    key={feature.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -84 : isNext ? 84 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.72,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.42 : 0,
                      rotate: isPrev ? -2.5 : isNext ? 2.5 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
                    className="absolute inset-0 overflow-hidden rounded-[1.6rem] border-4 border-white bg-white sm:border-[6px]"
                  >
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className={cn(
                        "h-full w-full object-cover transition-all duration-700",
                        isActive ? "grayscale-0" : "grayscale blur-[1.2px] brightness-90",
                      )}
                    />

                    <AnimatePresence>
                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-[#0c2a20]/95 via-[#0c2a20]/50 to-transparent p-6"
                        >
                          <div className="mb-2 w-fit rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#2D7C37]">
                            {index + 1} / {FEATURES.length}
                          </div>
                          <h3 className="text-xl font-semibold text-white">{feature.label}</h3>
                          <p className="mt-2 max-w-md text-sm leading-6 text-white/85">
                            {feature.description}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-4 h-2" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
