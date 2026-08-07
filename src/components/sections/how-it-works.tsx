"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Truck,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HOW_IT_WORKS } from "@/lib/constants";

const ICONS = {
  calendar: Calendar,
  truck: Truck,
  sparkles: Sparkles,
  "check-circle": CheckCircle,
} as const;

export function HowItWorks() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#080808]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
            How It Works
          </span>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
          >
            Simple, Convenient,{" "}
            <span className="text-gradient-gold">Effortless</span>
          </h2>
          <p className="text-[#636366] text-lg max-w-xl mx-auto">
            Getting your car professionally detailed has never been easier.
            Four simple steps to a spotless vehicle.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {HOW_IT_WORKS.map((step, index) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS] || CheckCircle;
            const isLast = index === HOW_IT_WORKS.length - 1;

            return (
              <div key={step.step} className="relative flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full"
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center",
                          "bg-[#d4af37]/10 border border-[#d4af37]/20",
                          "group-hover:bg-[#d4af37]/20 transition-colors"
                        )}
                        aria-hidden="true"
                      >
                        <Icon className="w-6 h-6 text-[#d4af37]" />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <span className="text-xs font-bold text-[#0a0a0a]">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Connector arrow (desktop) */}
                    {!isLast && (
                      <ArrowRight
                        className="hidden lg:block w-6 h-6 text-[#2c2c2e] shrink-0 ml-auto mr-2"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#f5f5f7] mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#636366] leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile connector */}
        <div
          className="flex flex-col items-center gap-2 mt-8 sm:hidden"
          aria-hidden="true"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-px h-6 bg-gradient-to-b from-[#d4af37]/30 to-transparent"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
