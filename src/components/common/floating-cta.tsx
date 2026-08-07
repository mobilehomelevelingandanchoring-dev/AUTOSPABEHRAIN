"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          aria-label="Quick contact options"
          role="complementary"
        >
          {/* Expanded options */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3"
              >
                {/* Phone */}
                <motion.a
                  href={`tel:${SITE_CONFIG.phone}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl",
                    "bg-[#1c1c1e] border border-white/[0.1]",
                    "text-[#f5f5f7] text-sm font-medium",
                    "shadow-xl hover:border-white/[0.2] transition-all duration-200"
                  )}
                  aria-label={`Call us at ${SITE_CONFIG.phone}`}
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" aria-hidden="true" />
                  Call Now
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=Hi! I'd like to book a detailing service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl",
                    "bg-[#1c1c1e] border border-white/[0.1]",
                    "text-[#f5f5f7] text-sm font-medium",
                    "shadow-xl hover:border-white/[0.2] transition-all duration-200"
                  )}
                  aria-label="Message us on WhatsApp"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Pulse ring */}
            {!isExpanded && (
              <span
                className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30"
                aria-hidden="true"
              />
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                "relative w-14 h-14 rounded-full flex items-center justify-center",
                "shadow-[0_4px_20px_rgba(37,211,102,0.4)]",
                "transition-all duration-300",
                isExpanded
                  ? "bg-[#2c2c2e] shadow-none"
                  : "bg-[#25d366] hover:bg-[#20bc59] hover:scale-110"
              )}
              aria-label={isExpanded ? "Close contact options" : "Open contact options"}
              aria-expanded={isExpanded}
            >
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-[#f5f5f7]" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="whatsapp"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <WhatsAppIcon />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBook = () => {
    const el = document.querySelector("#booking");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "fixed bottom-0 left-0 right-0 z-40 lg:hidden",
            "bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/[0.08]",
            "px-4 py-3 safe-area-pb"
          )}
          aria-label="Mobile booking bar"
          role="complementary"
        >
          <div className="flex items-center gap-3 max-w-sm mx-auto">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl",
                "bg-white/[0.06] border border-white/[0.1] text-[#f5f5f7]",
                "text-sm font-medium transition-colors hover:bg-white/[0.1]"
              )}
              aria-label={`Call us at ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call
            </a>
            <button
              onClick={handleBook}
              className={cn(
                "flex-[2] flex items-center justify-center gap-2 py-3 rounded-xl",
                "bg-[#d4af37] text-[#0a0a0a] font-semibold text-sm",
                "hover:bg-[#e8c84a] transition-colors",
                "shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              )}
              aria-label="Book your car detailing appointment"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
