"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Images } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  gradient: string;
  span?: "wide" | "tall" | "normal";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Porsche 911 Ceramic Coating",
    category: "Ceramic Coating",
    gradient: "from-[#1a1a2e] to-[#0f0f1a]",
    span: "wide",
  },
  {
    id: 2,
    title: "BMW M5 Paint Correction",
    category: "Paint Correction",
    gradient: "from-[#1a1a1a] to-[#0a0a0a]",
  },
  {
    id: 3,
    title: "Range Rover Full Detail",
    category: "Full Detail",
    gradient: "from-[#1c180e] to-[#100e08]",
    span: "tall",
  },
  {
    id: 4,
    title: "Mercedes GLE Interior",
    category: "Interior Detail",
    gradient: "from-[#141414] to-[#080808]",
  },
  {
    id: 5,
    title: "Ferrari Interior Clean",
    category: "Interior Detail",
    gradient: "from-[#1a0808] to-[#0a0404]",
  },
  {
    id: 6,
    title: "Tesla Model S Detail",
    category: "Exterior Detail",
    gradient: "from-[#0e1a1a] to-[#081010]",
    span: "wide",
  },
  {
    id: 7,
    title: "Lexus LX Exterior",
    category: "Exterior Detail",
    gradient: "from-[#181818] to-[#0c0c0c]",
  },
  {
    id: 8,
    title: "Audi A7 Polishing",
    category: "Paint Correction",
    gradient: "from-[#101820] to-[#080e14]",
  },
];

const CATEGORIES = ["All", "Exterior Detail", "Interior Detail", "Paint Correction", "Ceramic Coating", "Full Detail"] as const;

function GalleryCard({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={cn(
        "group relative w-full rounded-xl overflow-hidden",
        "border border-white/[0.08] hover:border-[#d4af37]/30",
        "bg-gradient-to-br focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]",
        item.gradient,
        item.span === "wide" ? "aspect-[2/1]" : item.span === "tall" ? "aspect-[3/4]" : "aspect-square"
      )}
      aria-label={`View ${item.title} - ${item.category}`}
    >
      {/* Shimmer decoration */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(212,175,55,0.1) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      {/* Car emoji placeholder */}
      <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20" aria-hidden="true">
        🚗
      </div>

      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100",
          "flex items-center justify-center transition-opacity duration-300"
        )}
        aria-hidden="true"
      >
        <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center border border-[#d4af37]/40">
          <ZoomIn className="w-5 h-5 text-[#d4af37]" />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-0.5">
          {item.category}
        </p>
        <p className="text-sm font-medium text-[#f5f5f7]">{item.title}</p>
      </div>
    </motion.button>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} - enlarged view`}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/[0.1] flex items-center justify-center text-white hover:bg-white/[0.2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" aria-hidden="true" />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden",
          "border border-white/[0.1] bg-gradient-to-br",
          item.gradient
        )}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.4) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20" aria-hidden="true">
          🚗
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-1">
            {item.category}
          </p>
          <h3 className="text-xl font-bold text-[#f5f5f7]">{item.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-[#0a0a0a]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
            <Images className="w-3 h-3" aria-hidden="true" />
            Gallery
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
          >
            Our Work Speaks{" "}
            <span className="text-gradient-gold">for Itself</span>
          </h2>
          <p className="text-[#636366] text-lg max-w-xl mx-auto">
            A showcase of some of our finest work across Bahrain.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Gallery category filter"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]",
                activeCategory === cat
                  ? "bg-[#d4af37] text-[#0a0a0a]"
                  : "bg-white/[0.05] text-[#8e8e93] hover:bg-white/[0.1] hover:text-[#f5f5f7] border border-white/[0.08]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"
          role="list"
          aria-label="Gallery images"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-4"
                role="listitem"
              >
                <GalleryCard
                  item={item}
                  onClick={() => setLightboxItem(item)}
                />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-[#636366]">
            No items in this category yet.
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox
            item={lightboxItem}
            onClose={() => setLightboxItem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
