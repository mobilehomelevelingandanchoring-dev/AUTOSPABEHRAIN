"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Check, Clock, ArrowRight, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ServiceCard({
  service,
  isSelected,
  onSelect,
}: {
  service: (typeof SERVICES)[number];
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.article
      variants={CARD_VARIANTS}
      onClick={onSelect}
      className={cn(
        "relative group cursor-pointer rounded-2xl transition-all duration-300",
        "border overflow-hidden",
        isSelected || service.popular
          ? "border-[#d4af37]/40 bg-gradient-to-b from-[#d4af37]/[0.06] to-[#141414]"
          : "border-white/[0.08] bg-[#141414] hover:border-white/[0.15]"
      )}
      style={{
        boxShadow: isSelected
          ? "0 0 40px rgba(212,175,55,0.1), inset 0 1px 0 rgba(212,175,55,0.1)"
          : undefined,
      }}
      aria-label={`${service.name} - Starting from BHD ${service.price}`}
    >
      {/* Popular indicator */}
      {service.popular && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          aria-hidden="true"
        />
      )}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37] text-[#0a0a0a]">
            <Star className="w-3 h-3 fill-current" aria-hidden="true" />
            Most Popular
          </span>
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="mb-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-1">
            {service.tagline}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f7]">
            {service.name}
          </h3>
          <p className="text-sm text-[#636366] leading-relaxed mt-3">
            {service.description}
          </p>
        </div>

        {/* Price & Duration */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.06]">
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-[#636366]">from</span>
            <span className="text-3xl font-bold text-[#f5f5f7]">
              BHD {service.price}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[#636366] text-sm">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Features */}
        <ul
          className="space-y-2.5 mb-7"
          role="list"
          aria-label={`${service.name} included features`}
        >
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Check
                className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm text-[#8e8e93]">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=Hi! I'm interested in the ${service.name} service.`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group/btn w-full inline-flex items-center justify-center gap-2",
            "px-6 py-3.5 rounded-xl text-sm font-semibold",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]",
            service.popular || isSelected
              ? "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#e8c84a] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              : "bg-white/[0.06] text-[#f5f5f7] hover:bg-white/[0.1] border border-white/[0.08]"
          )}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Book ${service.name} via WhatsApp`}
        >
          Book This Service
          <ArrowRight
            className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.article>
  );
}

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#0a0a0a]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
            <Zap className="w-3 h-3" aria-hidden="true" />
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
          >
            Premium Detailing Services
            <br />
            <span className="text-gradient-gold">Delivered to Your Door</span>
          </h2>
          <p className="text-[#636366] text-lg max-w-2xl mx-auto leading-relaxed">
            From a quick mobile wash to full ceramic coating, every service is
            performed by certified professionals using industry-leading products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedService === service.id}
              onSelect={() =>
                setSelectedService(
                  selectedService === service.id ? null : service.id
                )
              }
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-[#636366] text-sm mb-4">
            Not sure which service is right for you?
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=Hi! I need help choosing the right detailing service for my car.`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium",
              "bg-white/[0.06] text-[#f5f5f7] border border-white/[0.08]",
              "hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200"
            )}
            aria-label="Get a free consultation via WhatsApp"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
