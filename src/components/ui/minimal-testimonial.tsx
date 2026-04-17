"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "From admission to discharge, the nurses and doctors explained every step clearly. I felt safe, respected, and genuinely cared for.",
    name: "Mfor-Abasi Udoh",
    role: "Maternity Patient",
    image: "/mfor-abasi.jpg",
  },
  {
    quote: "A rare hospital that combines leading medical technology with genuine human compassion. My recovery was flawless.",
    name: "Marcus Johnson",
    role: "Surgical Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60",
  },
  {
    quote: "From pediatrics to general care, the staff at Well Alive always ensure we feel heard and deeply cared for.",
    name: "Elena Voss",
    role: "Mother of Two",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&auto=format&fit=crop&q=60",
  },
]

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0)
  const activeIndex = testimonials.length > 0 ? active % testimonials.length : 0
  const activeTestimonial = testimonials[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-8 md:py-8">
      {/* Quote */}
      <div className="relative mb-10 min-h-[170px] md:min-h-[120px]">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 text-center text-lg font-normal leading-relaxed text-neutral-700 md:text-2xl md:leading-relaxed
              transition-all duration-500 ease-out
              ${
                active === i
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-4 blur-sm pointer-events-none"
              }
            `}
          >
            "{t.quote}"
          </p>
        ))}
      </div>

      {/* Author Row */}
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Avatars */}
        <div className="flex -space-x-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-emerald-100
                transition-all duration-300 ease-out
                ${
                  activeIndex === i
                    ? "z-10 scale-110 ring-emerald-600"
                    : "opacity-70 saturate-0 hover:opacity-100 hover:scale-105 hover:saturate-100"
                }
              `}
            >
              <Image
                src={t.image || "/placeholder.svg"}
                alt={t.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Active Author Info */}
        <div className="min-h-[44px] text-center">
          <span className="block text-base font-semibold text-neutral-900">{activeTestimonial?.name ?? ""}</span>
          <span className="block text-sm text-neutral-600">{activeTestimonial?.role ?? ""}</span>
        </div>
      </div>
    </div>
  )
}
