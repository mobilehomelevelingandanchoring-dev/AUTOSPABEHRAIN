"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterItem {
  label: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

const EXAMPLES: BeforeAfterItem[] = [
  {
    label: "Car Wash",
    before: {
      src: "/images/toyota-land-cruiser-foam-wash-before-bahrain.webp",
      alt: "Toyota Land Cruiser before wash — covered in foam at Sunshine Car Spa Bahrain",
    },
    after: {
      src: "/images/toyota-land-cruiser-after-wash-clean-sunshine-car-spa.webp",
      alt: "Toyota Land Cruiser after professional wash — spotless clean result at Sunshine Car Spa Bahrain",
    },
  },
  {
    label: "Interior Detail",
    before: {
      src: "/images/car-interior-detailing-team-sunshine-car-spa-bahrain.webp",
      alt: "Interior detailing in progress — Sunshine Car Spa team deep cleaning car cabin Bahrain",
    },
    after: {
      src: "/images/car-interior-cleaning-leather-conditioning-bahrain.webp",
      alt: "Car interior after professional leather conditioning — spotless, like-new cabin at Sunshine Car Spa Bahrain",
    },
  },
  {
    label: "Foam Wash",
    before: {
      src: "/images/toyota-land-cruiser-full-foam-wash-riffa-bahrain.webp",
      alt: "Toyota Land Cruiser fully covered in foam wash — Sunshine Car Spa Riffa Bahrain",
    },
    after: {
      src: "/images/nissan-after-car-wash-clean-sunshine-car-spa-bahrain.webp",
      alt: "Nissan after full foam wash — gleaming clean result at Sunshine Car Spa Bahrain",
    },
  },
];

function Slider({ item }: { item: BeforeAfterItem }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSlider(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSlider(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) updateSlider(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        updateSlider(e.touches[0].clientX);
      }
    };
    const handleTouchEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, updateSlider]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-[16/9] sm:aspect-[4/3] rounded-2xl overflow-hidden",
        "select-none cursor-col-resize border border-white/[0.08]",
        isDragging && "cursor-grabbing"
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      aria-label={`Before and after comparison for ${item.label}. Drag to compare.`}
      role="img"
    >
      {/* BEFORE */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={item.before.src}
          alt={item.before.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* AFTER — clipped */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={item.after.src}
          alt={item.after.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10" />
        {/* Gold shimmer overlay on after side */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 30%, rgba(212,175,55,0.6) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#d4af37] z-10 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        aria-hidden="true"
      />

      {/* Handle */}
      <div
        className={cn(
          "absolute top-1/2 z-20 -translate-y-1/2 pointer-events-none",
          "w-10 h-10 rounded-full bg-[#d4af37] shadow-lg",
          "flex items-center justify-center",
          "shadow-[0_0_20px_rgba(212,175,55,0.5)]",
          "transition-transform duration-100",
          isDragging && "scale-110"
        )}
        style={{
          left: `${sliderPos}%`,
          transform: `translateX(-50%) translateY(-50%)`,
        }}
        aria-hidden="true"
      >
        <GripVertical className="w-5 h-5 text-[#0a0a0a]" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none" aria-hidden="true">
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-semibold text-[#8e8e93] uppercase tracking-wider">
          Before
        </span>
      </div>
      <div
        className="absolute top-4 right-4 z-10 pointer-events-none"
        style={{ opacity: sliderPos > 60 ? 0 : 1, transition: "opacity 0.2s" }}
        aria-hidden="true"
      >
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
          After
        </span>
      </div>

      {/* Drag hint */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        style={{ opacity: sliderPos === 50 && !isDragging ? 1 : 0, transition: "opacity 0.4s" }}
        aria-hidden="true"
      >
        <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-xs text-[#8e8e93] flex items-center gap-2">
          <span>←</span>
          <span>Drag to compare</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <section
      className="py-24 lg:py-32 bg-[#080808]"
      aria-labelledby="before-after-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
            Real Results
          </span>
          <h2
            id="before-after-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
          >
            See the{" "}
            <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="text-[#636366] text-lg max-w-xl mx-auto">
            Drag the slider to reveal the dramatic difference our detailing
            makes on every vehicle.
          </p>
        </motion.div>

        {/* Example Selector */}
        <div
          className="flex items-center justify-center gap-3 mb-8"
          role="tablist"
          aria-label="Before and after examples"
        >
          {EXAMPLES.map((ex, i) => (
            <button
              key={ex.label}
              onClick={() => setActiveExample(i)}
              role="tab"
              aria-selected={activeExample === i}
              aria-controls={`before-after-panel-${i}`}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]",
                activeExample === i
                  ? "bg-[#d4af37] text-[#0a0a0a]"
                  : "bg-white/[0.06] text-[#8e8e93] hover:bg-white/[0.1] hover:text-[#f5f5f7]"
              )}
            >
              {ex.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <motion.div
          key={activeExample}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          id={`before-after-panel-${activeExample}`}
          role="tabpanel"
          aria-label={`${EXAMPLES[activeExample].label} before and after comparison`}
        >
          <Slider item={EXAMPLES[activeExample]} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-[#48484a] mt-6"
        >
          All results are from real Sunshine Car Spa customers in Bahrain
        </motion.p>
      </div>
    </section>
  );
}
