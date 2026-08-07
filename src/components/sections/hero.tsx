"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Shield, Award, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const TRUST_BADGES = [
  { icon: Star, label: `${SITE_CONFIG.stats.rating} Rating`, sub: `${SITE_CONFIG.stats.reviewCount} Reviews` },
  { icon: Shield, label: "8+ Years", sub: "In Business" },
  { icon: Award, label: "12,000+", sub: "Vehicles Detailed" },
] as const;

function StatsCounter({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-gold">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-[#636366] mt-1 tracking-wider uppercase">
        {label}
      </div>
    </motion.div>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-[#d4af37] text-[#d4af37]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const handleBookNow = () => {
    const el = document.querySelector("#booking");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const el = document.querySelector("#services");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Real photo — Sunshine Car Spa storefront Riffa Bahrain */}
        <Image
          src="/images/sunshine-car-spa-riffa-bahrain-storefront.webp"
          alt="Sunshine Car Spa — professional car wash and detailing centre in Riffa, Bahrain"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />

        {/* Radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.12)_0%,transparent_60%)]" />

        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4af37]/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#d4af37]/[0.05] blur-[120px]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8"
          >
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase",
                "bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20"
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" aria-hidden="true" />
              Bahrain&apos;s Premium Mobile Detailing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6 sm:mb-8 max-w-5xl"
          >
            <span className="text-[#f5f5f7]">Your Car Deserves</span>
            <br />
            <span className="text-gradient-gold">Perfection.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-[#8e8e93] max-w-2xl leading-relaxed mb-8 sm:mb-10"
          >
            Professional mobile car detailing at your home, office, or anywhere
            in Bahrain. We bring our luxury-grade equipment directly to you —
            zero hassle, exceptional results.
          </motion.p>

          {/* Review Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8 sm:mb-10"
          >
            <div className="flex -space-x-2" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-[#2c2c2e] to-[#1c1c1e] flex items-center justify-center text-xs font-bold text-[#d4af37]"
                >
                  {["A", "S", "K", "F", "J"][i - 1]}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <StarRating />
              <span className="text-xs text-[#636366]">
                <span className="font-semibold text-[#f5f5f7]">{SITE_CONFIG.stats.rating}/5</span> from {SITE_CONFIG.stats.reviewCount}+ happy clients
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12 sm:mb-16 w-full sm:w-auto"
          >
            <button
              onClick={handleBookNow}
              className={cn(
                "group relative w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-8 py-4 rounded-xl text-base font-semibold",
                "bg-[#d4af37] text-[#0a0a0a]",
                "hover:bg-[#e8c84a] active:scale-[0.98]",
                "transition-all duration-200",
                "shadow-[0_0_40px_rgba(212,175,55,0.3)]",
                "hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
                "shine"
              )}
              aria-label="Book your car detailing appointment"
            >
              Book Your Detail Now
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=Hi! I'd like to book a car detailing service.`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-8 py-4 rounded-xl text-base font-medium",
                "bg-white/[0.06] text-[#f5f5f7]",
                "border border-white/[0.1]",
                "hover:bg-white/[0.1] hover:border-white/[0.2]",
                "active:scale-[0.98] transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              )}
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#25d366]" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl"
          >
            <div
              className={cn(
                "grid grid-cols-3 gap-4 sm:gap-8",
                "bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8",
                "backdrop-blur-sm"
              )}
            >
              <StatsCounter value="12K+" label="Vehicles Detailed" delay={0.5} />
              <div className="border-l border-white/[0.08] pl-4 sm:pl-8">
                <StatsCounter value={`${SITE_CONFIG.stats.rating}★`} label="Average Rating" delay={0.55} />
              </div>
              <div className="border-l border-white/[0.08] pl-4 sm:pl-8">
                <StatsCounter value="8+" label="Years Experience" delay={0.6} />
              </div>
            </div>
          </motion.div>

          {/* Coverage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-6 text-xs text-[#48484a] tracking-wider"
          >
            Serving · Manama · Riffa · Muharraq · Saar · Juffair · Seef ·
            Amwaj · and all of Bahrain
          </motion.p>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full border-t border-white/[0.06] bg-[#0a0a0a]/50 backdrop-blur-sm"
        aria-label="Trust indicators"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3"
              >
                <div
                  className="w-9 h-9 rounded-lg bg-[#d4af37]/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="w-4.5 h-4.5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#f5f5f7]">
                    {label}
                  </div>
                  <div className="text-xs text-[#636366]">{sub}</div>
                </div>
              </div>
            ))}
            <div className="hidden sm:block w-px h-10 bg-white/[0.08]" aria-hidden="true" />
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-3 group"
              aria-label={`Call us at ${SITE_CONFIG.phone}`}
            >
              <div
                className="w-9 h-9 rounded-lg bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors"
                aria-hidden="true"
              >
                <Phone className="w-4.5 h-4.5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#f5f5f7] group-hover:text-[#d4af37] transition-colors">
                  Call Now
                </div>
                <div className="text-xs text-[#636366]">{SITE_CONFIG.phone}</div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={handleScrollDown}
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 z-10",
          "hidden lg:flex flex-col items-center gap-2",
          "text-[#48484a] hover:text-[#d4af37] transition-colors duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
        )}
        aria-label="Scroll to services"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </motion.div>
      </motion.button>
    </section>
  );
}
