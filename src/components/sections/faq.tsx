"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof FAQ_ITEMS)[number];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "border rounded-xl overflow-hidden transition-all duration-300",
        isOpen
          ? "border-[#d4af37]/30 bg-[#d4af37]/[0.03]"
          : "border-white/[0.08] bg-[#141414] hover:border-white/[0.15]"
      )}
    >
      <button
        id={id}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          "w-full flex items-start sm:items-center justify-between gap-4 p-5 sm:p-6 text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-inset"
        )}
      >
        <span
          className={cn(
            "text-base font-medium leading-snug transition-colors duration-200",
            isOpen ? "text-[#f5f5f7]" : "text-[#d1d1d6]"
          )}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 mt-0.5 sm:mt-0"
          aria-hidden="true"
        >
          <ChevronDown
            className={cn(
              "w-5 h-5 transition-colors duration-200",
              isOpen ? "text-[#d4af37]" : "text-[#636366]"
            )}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
              <div className="h-px bg-[#d4af37]/10 mb-4" aria-hidden="true" />
              <p className="text-[#8e8e93] text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 lg:py-32 bg-[#0a0a0a]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
            <HelpCircle className="w-3 h-3" aria-hidden="true" />
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
          >
            Common{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-[#636366] text-lg">
            Everything you need to know about our mobile detailing service.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div
          className="space-y-3"
          role="list"
          aria-label="Frequently asked questions"
        >
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} role="listitem">
              <FAQItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <p className="text-[#636366] text-sm mb-3">
            Still have a question?
          </p>
          <a
            href="https://wa.me/97334678435?text=Hi! I have a question about your detailing services."
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium",
              "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#e8c84a]",
              "transition-colors duration-200"
            )}
          >
            Ask Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
