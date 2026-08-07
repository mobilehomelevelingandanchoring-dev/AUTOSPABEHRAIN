import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { generateFAQSchema, generateServiceSchema } from "@/lib/schema";

// Above-fold: statically imported — included in the initial JS bundle
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

// Below-fold: dynamically imported — split into separate JS chunks loaded on demand
const BeforeAfter = dynamic(() =>
  import("@/components/sections/before-after").then((m) => ({ default: m.BeforeAfter }))
);
const Reviews = dynamic(() =>
  import("@/components/sections/reviews").then((m) => ({ default: m.Reviews }))
);
const Pricing = dynamic(() =>
  import("@/components/sections/pricing").then((m) => ({ default: m.Pricing }))
);
const Gallery = dynamic(() =>
  import("@/components/sections/gallery").then((m) => ({ default: m.Gallery }))
);
const Coverage = dynamic(() =>
  import("@/components/sections/coverage").then((m) => ({ default: m.Coverage }))
);
const FAQ = dynamic(() =>
  import("@/components/sections/faq").then((m) => ({ default: m.FAQ }))
);
const Booking = dynamic(() =>
  import("@/components/sections/booking").then((m) => ({ default: m.Booking }))
);
const FinalCTA = dynamic(() =>
  import("@/components/sections/final-cta").then((m) => ({ default: m.FinalCTA }))
);

// Floating UI: deferred — not needed until after page mount
const FloatingCTA = dynamic(
  () => import("@/components/common/floating-cta").then((m) => ({ default: m.FloatingCTA })),
  { ssr: false }
);
const MobileBookingBar = dynamic(
  () => import("@/components/common/floating-cta").then((m) => ({ default: m.MobileBookingBar })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | #1 Mobile Car Detailing in Bahrain`,
  description: `Bahrain's most trusted premium mobile car detailing service. Expert ceramic coating, paint correction, full details & mobile wash at your home or office. Serving Manama, Riffa, Muharraq & all of Bahrain. Book today!`,
  openGraph: {
    title: `${SITE_CONFIG.name} | Premium Mobile Car Detailing in Bahrain`,
    description: `Professional mobile car detailing at your doorstep. Ceramic coating, paint correction, full details & more. Serving all of Bahrain. Book online in 60 seconds.`,
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema();
  const serviceSchemas = generateServiceSchema();

  return (
    <>
      {/* Page-specific Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* Above fold — static */}
        <Hero />
        <HowItWorks />
        <Services />
        <WhyChooseUs />

        {/* Below fold — dynamically loaded */}
        <BeforeAfter />
        <Reviews />
        <Pricing />
        <Gallery />
        <Coverage />
        <FAQ />
        <Booking />
        <FinalCTA />
      </main>

      <Footer />

      {/* Deferred floating UI — mounted client-side only */}
      <FloatingCTA />
      <MobileBookingBar />
    </>
  );
}
