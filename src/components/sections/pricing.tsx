"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRICING_PACKAGES, SITE_CONFIG } from "@/lib/constants";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-[#080808]"
      aria-labelledby="pricing-heading"
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
            <Zap className="w-3 h-3" aria-hidden="true" />
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
          >
            Transparent{" "}
            <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-[#636366] text-lg max-w-xl mx-auto">
            No hidden fees, no surprises. Clear pricing for exceptional car
            care. All prices start from — contact us for your exact quote.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "relative rounded-2xl border overflow-hidden",
                "transition-all duration-300",
                pkg.popular
                  ? "border-[#d4af37]/40 bg-gradient-to-b from-[#d4af37]/[0.07] to-[#141414] shadow-[0_0_60px_rgba(212,175,55,0.12)]"
                  : "border-white/[0.08] bg-[#141414]"
              )}
            >
              {/* Popular indicator */}
              {pkg.popular && (
                <>
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37] text-[#0a0a0a]">
                      ★ Best Value
                    </span>
                  </div>
                </>
              )}

              <div className="p-7 sm:p-8">
                {/* Package Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#f5f5f7] mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-[#636366]">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/[0.06]">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-xs text-[#636366]">
                      {pkg.priceNote}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#f5f5f7]">
                      BHD {pkg.price}
                    </span>
                    <span className="text-sm text-[#636366]">per vehicle</span>
                  </div>
                </div>

                {/* Features */}
                <ul
                  className="space-y-3 mb-8"
                  role="list"
                  aria-label={`${pkg.name} package features`}
                >
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[#8e8e93]">{feature}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 opacity-40"
                    >
                      <X
                        className="w-4 h-4 text-[#636366] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[#636366] line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=Hi! I'd like to book the ${pkg.name} package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group w-full inline-flex items-center justify-center gap-2",
                    "px-6 py-3.5 rounded-xl text-sm font-semibold",
                    "transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]",
                    pkg.popular
                      ? "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#e8c84a] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      : "bg-white/[0.06] text-[#f5f5f7] hover:bg-white/[0.1] border border-white/[0.08]"
                  )}
                  aria-label={`Book ${pkg.name} package`}
                >
                  {pkg.cta}
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div
            className={cn(
              "inline-flex items-start sm:items-center gap-3 px-6 py-4 rounded-xl",
              "bg-white/[0.03] border border-white/[0.06] text-sm text-[#636366]",
              "max-w-2xl text-left sm:text-center"
            )}
          >
            <span className="text-[#d4af37] shrink-0">ℹ</span>
            Prices vary by vehicle size, condition, and location. All quotes are
            provided upfront with no surprise charges. Commercial fleet pricing
            available.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
