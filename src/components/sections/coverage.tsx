"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { COVERAGE_AREAS, SITE_CONFIG } from "@/lib/constants";

export function Coverage() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#080808]"
      aria-labelledby="coverage-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              Coverage Areas
            </span>
            <h2
              id="coverage-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
            >
              We Come to{" "}
              <span className="text-gradient-gold">Your Location</span>
            </h2>
            <p className="text-[#636366] text-lg leading-relaxed mb-8">
              Our mobile detailing service covers all major areas across the
              Kingdom of Bahrain. No matter where you are, we bring our
              professional setup directly to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=Hi! I'd like to confirm if you cover my area in Bahrain.`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group inline-flex items-center justify-center gap-2",
                  "px-6 py-3.5 rounded-xl text-sm font-semibold",
                  "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#e8c84a]",
                  "transition-all duration-200"
                )}
                aria-label="Confirm your area coverage via WhatsApp"
              >
                Confirm Your Area
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-6 py-3.5 rounded-xl text-sm font-medium",
                  "bg-white/[0.06] text-[#f5f5f7] border border-white/[0.08]",
                  "hover:bg-white/[0.1] transition-all duration-200"
                )}
                aria-label={`Call us at ${SITE_CONFIG.phone}`}
              >
                Call Us
              </a>
            </div>
          </motion.div>

          {/* Right: Area Grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              role="list"
              aria-label="Coverage areas in Bahrain"
            >
              {COVERAGE_AREAS.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  role="listitem"
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-3 rounded-xl",
                    "bg-[#141414] border border-white/[0.08]",
                    "hover:border-[#d4af37]/30 hover:bg-[#d4af37]/[0.04]",
                    "transition-all duration-200 cursor-default group"
                  )}
                >
                  <MapPin
                    className="w-3.5 h-3.5 text-[#d4af37] shrink-0 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#8e8e93] group-hover:text-[#f5f5f7] transition-colors">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4 text-xs text-[#48484a] text-center"
            >
              Don&apos;t see your area? Contact us — we may still be able to help!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
