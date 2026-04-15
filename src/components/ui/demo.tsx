"use client";

import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

const DEMO_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Early Stroke Warning Signs Every Family Should Know",
    description: "Recognize FAST symptoms and reduce response time for better outcomes.",
    meta: "Neurology • Emergency",
    imageSrc:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 2,
    title: "Heart Health Screening Timeline by Age",
    description: "A practical guide to blood pressure, lipid, and ECG checks through adulthood.",
    meta: "Cardiology • Prevention",
    imageSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 3,
    title: "Pediatric Fever: Home Care vs Hospital Visit",
    description: "Know when to monitor, when to medicate, and when to seek urgent care.",
    meta: "Pediatrics • Family Care",
    imageSrc:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 4,
    title: "Safe Recovery After Surgery",
    description: "Post-operative milestones, red flags, and habits that speed healing.",
    meta: "Surgery • Recovery",
    imageSrc:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
  {
    id: 5,
    title: "Women’s Preventive Health Checklist",
    description: "Annual tests and lifestyle actions that lower long-term health risk.",
    meta: "Women’s Health • Wellness",
    imageSrc:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    href: "/blog-details",
  },
];

export default function DemoOne() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f3fbea] py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold text-[#143120]">Featured Medical Stories</h1>
        <p className="text-[#3f5f49]">Navigate the rail to explore specialist insights.</p>
      </div>

      <FocusRail items={DEMO_ITEMS} autoPlay={false} loop={true} />
    </main>
  );
}
