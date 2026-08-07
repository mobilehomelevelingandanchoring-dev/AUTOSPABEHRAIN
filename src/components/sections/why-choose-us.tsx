"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Award,
  ShieldCheck,
  Star,
  Clock,
  Receipt,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WHY_CHOOSE_US, SITE_CONFIG } from "@/lib/constants";

const ICONS = {
  "map-pin": MapPin,
  award: Award,
  "shield-check": ShieldCheck,
  star: Star,
  clock: Clock,
  receipt: Receipt,
} as const;

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/[0.02] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
                Why Choose Us
              </span>
              <h2
                id="why-us-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-6"
              >
                Bahrain&apos;s Most Trusted
                <br />
                <span className="text-gradient-gold">Detailing Experts</span>
              </h2>
              <p className="text-[#636366] text-lg leading-relaxed mb-8">
                With over 8 years serving the Kingdom of Bahrain and more than
                12,000 vehicles detailed, we&apos;ve built a reputation for
                excellence that speaks for itself.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "8+", label: "Years" },
                  { value: "12K+", label: "Vehicles" },
                  { value: "4.9★", label: "Rating" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "text-center p-4 rounded-xl",
                      "bg-white/[0.03] border border-white/[0.06]"
                    )}
                  >
                    <div className="text-2xl font-bold text-gradient-gold">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#636366] mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS] || Star;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={cn(
                    "p-5 rounded-xl border border-white/[0.08]",
                    "bg-[#141414] hover:border-white/[0.15]",
                    "transition-all duration-300 group"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg mb-4",
                      "bg-[#d4af37]/10 flex items-center justify-center",
                      "group-hover:bg-[#d4af37]/20 transition-colors"
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#f5f5f7] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#636366] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
