"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Images } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  span?: "wide" | "tall" | "normal";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/images/alfa-romeo-supercar-detailing-sunshine-car-spa-bahrain.webp",
    alt: "Yellow Alfa Romeo 4C supercar professional wash at Sunshine Car Spa Bahrain — exotic car detailing specialists",
    title: "Alfa Romeo 4C Supercar Detail",
    category: "Car Wash",
    span: "wide",
  },
  {
    id: 2,
    src: "/images/toyota-fj-cruiser-ceramic-coating-ppf-bahrain.webp",
    alt: "Toyota FJ Cruiser paint protection film and ceramic coating application at Sunshine Car Spa Riffa Bahrain",
    title: "FJ Cruiser Ceramic Coating",
    category: "Ceramic Coating",
    span: "normal",
  },
  {
    id: 3,
    src: "/images/car-interior-detailing-team-sunshine-car-spa-bahrain.webp",
    alt: "Professional interior detailing team cleaning Mitsubishi Attrage seats and carpet at Sunshine Car Spa Bahrain",
    title: "Interior Deep Clean",
    category: "Interior Detail",
    span: "tall",
  },
  {
    id: 4,
    src: "/images/toyota-land-cruiser-foam-wash-car-wash-bahrain.webp",
    alt: "Toyota Land Cruiser receiving professional foam car wash treatment at Sunshine Car Spa Riffa Bahrain",
    title: "Land Cruiser Foam Wash",
    category: "Car Wash",
    span: "normal",
  },
  {
    id: 5,
    src: "/images/toyota-land-cruiser-after-wash-clean-sunshine-car-spa.webp",
    alt: "Toyota Land Cruiser 200 series after premium professional car wash — spotless result at Sunshine Car Spa Bahrain",
    title: "Land Cruiser — After Wash",
    category: "Car Wash",
    span: "normal",
  },
  {
    id: 6,
    src: "/images/car-interior-cleaning-leather-conditioning-bahrain.webp",
    alt: "Professional interior leather cleaning and conditioning service on blue SUV at Sunshine Car Spa Bahrain",
    title: "Interior Leather Conditioning",
    category: "Interior Detail",
    span: "wide",
  },
  {
    id: 7,
    src: "/images/hyundai-foam-wash-professional-car-wash-bahrain.webp",
    alt: "Hyundai Tucson professional foam wash with technician at Sunshine Car Spa car wash Riffa Bahrain",
    title: "Hyundai Foam Treatment",
    category: "Car Wash",
    span: "normal",
  },
  {
    id: 8,
    src: "/images/toyota-land-cruiser-underbody-pressure-wash-bahrain.webp",
    alt: "Toyota Land Cruiser underbody and chassis professional pressure wash at Sunshine Car Spa Bahrain",
    title: "Underbody Pressure Wash",
    category: "Car Wash",
    span: "normal",
  },
  {
    id: 9,
    src: "/images/alfa-romeo-4c-car-wash-detailing-bahrain.webp",
    alt: "Alfa Romeo 4C Italian supercar professional detailing service at Sunshine Car Spa Bahrain — exotic vehicle specialists",
    title: "Alfa Romeo 4C — Front Detail",
    category: "Car Wash",
    span: "normal",
  },
  {
    id: 10,
    src: "/images/nissan-foam-wash-night-car-wash-bahrain.webp",
    alt: "Professional night car wash service — Nissan getting expert foam treatment at Sunshine Car Spa Bahrain",
    title: "Night Wash Service",
    category: "Car Wash",
    span: "normal",
  },
  {
    id: 11,
    src: "/images/toyota-land-cruiser-full-foam-wash-riffa-bahrain.webp",
    alt: "Toyota Land Cruiser covered in professional foam wash at Sunshine Car Spa Riffa Bahrain",
    title: "Full Foam Application",
    category: "Car Wash",
    span: "normal",
  },
  {
    id: 12,
    src: "/images/sunshine-car-spa-riffa-bahrain-storefront.webp",
    alt: "Sunshine Car Spa professional car wash and detailing centre — Riffa, Bahrain. Services: Car Wash, Ceramic Coating, Detailing, Sunfilm, Upholstery, Polishing",
    title: "Sunshine Car Spa — Riffa",
    category: "Full Detail",
    span: "wide",
  },
];

const CATEGORIES = ["All", "Car Wash", "Interior Detail", "Ceramic Coating", "Full Detail"] as const;

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
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
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]",
        item.span === "wide" ? "aspect-[2/1]" : item.span === "tall" ? "aspect-[3/4]" : "aspect-square"
      )}
      aria-label={`View ${item.title} — ${item.category}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
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

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — enlarged view`}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/[0.1] flex items-center justify-center text-white hover:bg-white/[0.2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" aria-hidden="true" />
      </button>

      <motion.figure
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.1]"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1024px"
          quality={90}
        />
        <figcaption className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-1">
            {item.category}
          </p>
          <h3 className="text-xl font-bold text-[#f5f5f7]">{item.title}</h3>
        </figcaption>
      </motion.figure>
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
            Our Work
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
          >
            Real Results,{" "}
            <span className="text-gradient-gold">Real Cars</span>
          </h2>
          <p className="text-[#636366] text-lg max-w-xl mx-auto">
            Every photo is from an actual Sunshine Car Spa client in Bahrain.
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
              <div key={item.id} className="break-inside-avoid mb-4" role="listitem">
                <GalleryCard item={item} onClick={() => setLightboxItem(item)} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-[#636366]">No items in this category yet.</div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
