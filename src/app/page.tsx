import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { generateFAQSchema, generateServiceSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { Pricing } from "@/components/sections/pricing";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FAQ } from "@/components/sections/faq";
import { Booking } from "@/components/sections/booking";
import { Coverage } from "@/components/sections/coverage";
import { FinalCTA } from "@/components/sections/final-cta";
import { FloatingCTA, MobileBookingBar } from "@/components/common/floating-cta";

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
        {/* 1. Hero */}
        <Hero />

        {/* 2. How It Works */}
        <HowItWorks />

        {/* 3. Services */}
        <Services />

        {/* 4. Before & After */}
        <BeforeAfter />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Reviews */}
        <Reviews />

        {/* 7. Pricing */}
        <Pricing />

        {/* 8. Gallery */}
        <Gallery />

        {/* 9. Coverage Areas */}
        <Coverage />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Booking */}
        <Booking />

        {/* 12. Final CTA */}
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating CTAs */}
      <FloatingCTA />
      <MobileBookingBar />
    </>
  );
}
