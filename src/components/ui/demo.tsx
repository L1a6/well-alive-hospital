"use client";

import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

const DEMO_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Stroke First Aid: The First 10 Minutes",
    description: "Recognize FAST signs and act early to improve recovery outcomes.",
    meta: "Emergency • Neurology",
    imageSrc:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop",
    href: "#stroke",
  },
  {
    id: 2,
    title: "Heart Screening by Age Group",
    description: "Know the right timeline for BP checks, ECG, and lipid profile tests.",
    meta: "Cardiology • Prevention",
    imageSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    href: "#cardio",
  },
  {
    id: 3,
    title: "Pediatric Fever: Home Care vs Hospital Visit",
    description: "Clear red-flag symptoms every parent should watch for.",
    meta: "Pediatrics • Family",
    imageSrc:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1000&auto=format&fit=crop",
    href: "#pediatrics",
  },
  {
    id: 4,
    title: "Safe Recovery After Surgery",
    description: "Post-op milestones, warning signs, and follow-up routines.",
    meta: "Surgery • Recovery",
    imageSrc:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1000&auto=format&fit=crop",
    href: "#recovery",
  },
  {
    id: 5,
    title: "Women’s Preventive Health Checklist",
    description: "Annual screening priorities for stronger long-term health.",
    meta: "Women’s Health • Wellness",
    imageSrc:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    href: "#womens-health",
  },
];

export default function DemoOne() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex flex-col items-center justify-center py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Featured Medical Stories</h1>
        <p className="text-neutral-400">Navigate the rail to explore specialist insights.</p>
      </div>

      <FocusRail items={DEMO_ITEMS} autoPlay={false} loop={true} />
    </main>
  );
}
