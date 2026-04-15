"use client";

import * as React from "react";
import { motion, type Transition, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

// Define the props for the CtaCard component
interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  description: string;
  inputPlaceholder?: string;
  buttonText: string;
  onButtonClick?: (email: string) => void;
}

const springInTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 12,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: springInTransition,
  },
};

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      title,
      description,
      inputPlaceholder = "Email address",
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (onButtonClick) {
        onButtonClick(email);
      }
      console.log("Email submitted:", email);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-[1.75rem] border border-[#5AAC4E]/35 bg-white/10 text-white shadow-[0_24px_80px_rgba(24,85,43,0.35)]",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        <img
          src={imageSrc}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(220,247,200,0.38),transparent_36%),linear-gradient(120deg,rgba(26,85,45,0.88),rgba(53,132,67,0.74),rgba(90,172,78,0.68))]" />
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <motion.div
          className="relative z-10 grid h-full grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-start text-left text-white">
            <motion.h2
              className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 max-w-xl text-lg text-emerald-50/90"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="flex w-full max-w-md flex-col items-center justify-center lg:ml-auto"
            variants={itemVariants}
          >
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder={inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-grow border-white/45 bg-white/20 text-white placeholder:text-emerald-50/80 backdrop-blur-md focus-visible:border-white focus-visible:ring-2 focus-visible:ring-emerald-100/90"
                aria-label={inputPlaceholder}
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 bg-[#f2ffe8] text-[#1d5c2f] hover:bg-white"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";

export { CtaCard };
