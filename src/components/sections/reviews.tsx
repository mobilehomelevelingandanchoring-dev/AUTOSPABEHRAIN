"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { REVIEWS, SITE_CONFIG } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating
              ? "fill-[#d4af37] text-[#d4af37]"
              : "fill-[#2c2c2e] text-[#2c2c2e]"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "relative p-6 sm:p-7 rounded-2xl border border-white/[0.08]",
        "bg-[#141414] hover:border-white/[0.15]",
        "transition-all duration-300 group",
        "hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      )}
      aria-label={`Review from ${review.name}, ${review.rating} stars`}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10" aria-hidden="true">
        <Quote className="w-8 h-8 text-[#d4af37] fill-current" />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>

      {/* Review Text */}
      <blockquote className="text-[#8e8e93] text-sm leading-relaxed mb-5">
        &ldquo;{review.review}&rdquo;
      </blockquote>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37]/30 to-[#c9a84c]/10 border border-[#d4af37]/20 flex items-center justify-center text-sm font-bold text-[#d4af37]"
            aria-hidden="true"
          >
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-[#f5f5f7]">
              {review.name}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#48484a]">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              {review.location}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-medium text-[#636366]">
            {review.service}
          </div>
          <div className="text-xs text-[#48484a]">{review.date}</div>
        </div>
      </div>
    </motion.article>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
            Customer Reviews
          </span>
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
          >
            What Our Clients{" "}
            <span className="text-gradient-gold">Say</span>
          </h2>

          {/* Aggregate Rating */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#f5f5f7] mb-1">
                {SITE_CONFIG.stats.rating}
              </div>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="text-sm text-[#636366]">
                Based on {SITE_CONFIG.stats.reviewCount}+ reviews
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Customer reviews"
        >
          {REVIEWS.map((review, index) => (
            <div key={review.id} role="listitem">
              <ReviewCard review={review} index={index} />
            </div>
          ))}
        </div>

        {/* Platform Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
          aria-label="Review platforms"
        >
          <div className="text-sm text-[#48484a]">Verified reviews on:</div>
          <div className="flex items-center gap-6">
            {["Google", "Facebook", "Instagram"].map((platform) => (
              <div
                key={platform}
                className="flex items-center gap-1.5 text-[#636366] text-sm"
              >
                <div
                  className="w-2 h-2 rounded-full bg-[#d4af37]"
                  aria-hidden="true"
                />
                {platform}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
