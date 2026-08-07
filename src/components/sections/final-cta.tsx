"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

export function FinalCTA() {
  const handleBookNow = () => {
    const el = document.querySelector("#booking");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-24 lg:py-32 bg-[#080808] relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-1 mb-6"
          aria-label="5 star rated service"
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
              aria-hidden="true"
            />
          ))}
        </motion.div>

        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#f5f5f7] tracking-tight mb-6"
        >
          Your Car Deserves
          <br />
          <span className="text-gradient-gold">the Best.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#636366] text-lg max-w-xl mx-auto mb-10"
        >
          Join over 4,500 satisfied customers across Bahrain. Book your
          professional mobile detailing service today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleBookNow}
            className={cn(
              "group w-full sm:w-auto inline-flex items-center justify-center gap-2",
              "px-8 py-4 rounded-xl text-base font-semibold",
              "bg-[#d4af37] text-[#0a0a0a]",
              "hover:bg-[#e8c84a] active:scale-[0.98]",
              "transition-all duration-200",
              "shadow-[0_0_50px_rgba(212,175,55,0.35)]",
              "hover:shadow-[0_0_70px_rgba(212,175,55,0.5)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            )}
            aria-label="Book your car detailing appointment"
          >
            Book Your Detail Now
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </button>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=Hi! I'd like to book a car detailing service.`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group w-full sm:w-auto inline-flex items-center justify-center gap-2",
              "px-8 py-4 rounded-xl text-base font-medium",
              "bg-white/[0.06] text-[#f5f5f7] border border-white/[0.1]",
              "hover:bg-white/[0.1] hover:border-white/[0.2]",
              "active:scale-[0.98] transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            )}
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-[#25d366]" aria-hidden="true" />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-6 text-xs text-[#48484a]"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25d366]" aria-hidden="true" />
            Instant Response
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" aria-hidden="true" />
            Same Day Available
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#636366]" aria-hidden="true" />
            All Bahrain
          </span>
        </motion.div>
      </div>
    </section>
  );
}
