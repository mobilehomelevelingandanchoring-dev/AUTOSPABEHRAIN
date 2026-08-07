"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#booking" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const top =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="Bahrain Auto Spa - Home"
            >
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#c9a84c] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-shadow duration-300">
                <Sparkles className="w-4 h-4 text-black" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#f5f5f7] font-semibold text-sm tracking-wide">
                  BAHRAIN
                </span>
                <span className="text-[#d4af37] font-bold text-base tracking-[0.15em] uppercase">
                  AUTO SPA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    "text-[#8e8e93] hover:text-[#f5f5f7]",
                    "hover:bg-white/[0.05]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]",
                    activeSection === link.href.slice(1) && "text-[#f5f5f7]"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg",
                  "text-[#8e8e93] hover:text-[#f5f5f7] transition-colors duration-200",
                  "hover:bg-white/[0.05]"
                )}
                aria-label={`Call us at ${SITE_CONFIG.phone}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <button
                onClick={() => handleNavClick("#booking")}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold",
                  "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#e8c84a]",
                  "transition-all duration-200 shadow-[0_0_20px_rgba(212,175,55,0.2)]",
                  "hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                )}
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg",
                "text-[#f5f5f7] hover:bg-white/[0.08] transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              )}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative flex flex-col h-full pt-20 px-6 pb-8">
              <nav
                className="flex flex-col gap-1 mt-4"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "w-full text-left px-4 py-4 rounded-xl text-lg font-medium",
                      "text-[#8e8e93] hover:text-[#f5f5f7] hover:bg-white/[0.05]",
                      "transition-all duration-200 border-b border-white/[0.04]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                    )}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-auto flex flex-col gap-3"
              >
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className={cn(
                    "flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl",
                    "bg-white/[0.06] text-[#f5f5f7] font-medium text-base",
                    "hover:bg-white/[0.1] transition-colors duration-200"
                  )}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now
                </a>
                <button
                  onClick={() => handleNavClick("#booking")}
                  className={cn(
                    "w-full px-6 py-4 rounded-xl text-base font-semibold",
                    "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#e8c84a]",
                    "transition-colors duration-200 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                  )}
                >
                  Book Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
