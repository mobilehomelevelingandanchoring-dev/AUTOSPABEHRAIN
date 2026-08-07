import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin, CheckCircle, Star, PhoneCall } from "lucide-react";
import {
  SITE_CONFIG,
  COVERAGE_AREAS,
  SERVICES,
  REVIEWS,
  LOCATION_DATA,
  areaToSlug,
  slugToArea,
} from "@/lib/constants";
import { generateLocationPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

type Props = { params: Promise<{ location: string }> };

export function generateStaticParams() {
  return COVERAGE_AREAS.map((area) => ({ location: areaToSlug(area) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const area = slugToArea(location);
  if (!area) return {};

  const title = `Car Detailing ${area} | Mobile Car Wash ${area} Bahrain | ${SITE_CONFIG.name}`;
  const description = `Premium mobile car detailing in ${area}, Bahrain. We come to your home or office — ceramic coating, paint correction & full details. Trusted by ${area} residents since 2016. Book today!`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/car-detailing-${location}` },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/car-detailing-${location}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const area = slugToArea(location);
  if (!area) notFound();

  const data = LOCATION_DATA[location] ?? {
    area,
    subtitle: `Bahrain`,
    intro: `Bahrain Auto Spa provides premium mobile car detailing throughout ${area}. We come to your home or office with all the equipment we need — no utilities required from you.`,
    highlights: ["Fully mobile service", "All Bahrain coverage", "Same-day availability"],
    popularService: "Full Detail",
  };

  const waText = encodeURIComponent(
    `Hi! I'm in ${area} and I'd like to book a car detailing service. Please let me know your availability.`
  );
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${waText}`;

  const locationSchema = generateLocationPageSchema(area);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Coverage Areas", url: `${SITE_CONFIG.url}/#coverage` },
    { name: `${area}`, url: `${SITE_CONFIG.url}/car-detailing-${location}` },
  ]);

  const localReviews = REVIEWS.filter((r) => r.location === area).length > 0
    ? REVIEWS.filter((r) => r.location === area)
    : REVIEWS.slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Navbar />

      <main className="bg-[#0a0a0a] text-[#f5f5f7] min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <nav className="text-sm text-[#8e8e93] mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li className="text-[#3a3a3c]">/</li>
              <li><a href="/#coverage" className="hover:text-[#d4af37] transition-colors">Areas</a></li>
              <li className="text-[#3a3a3c]">/</li>
              <li className="text-[#d4af37]">{area}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="flex items-center gap-2 text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4">
                <MapPin className="w-4 h-4" />
                {data.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Mobile Car Detailing{" "}
                <span className="text-[#d4af37]">{area}</span>
              </h1>
              <p className="text-xl text-[#8e8e93] leading-relaxed mb-8">
                {data.intro}
              </p>

              <ul className="space-y-3 mb-10">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[#f5f5f7]">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#0a0a0a] font-bold px-8 py-4 rounded-full hover:bg-[#e9c34e] transition-colors"
                >
                  Book in {area}
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 border border-[#3a3a3c] text-[#f5f5f7] font-semibold px-8 py-4 rounded-full hover:border-[#d4af37] transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-[#141414] border border-[#2c2c2e] rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[#d4af37] mb-6">
                Why {area} Clients Choose Us
              </h2>
              <dl className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Years Serving Bahrain", value: `${SITE_CONFIG.stats.yearsExperience}+` },
                  { label: "Vehicles Detailed", value: `${(SITE_CONFIG.stats.vehiclesCompleted / 1000).toFixed(0)}k+` },
                  { label: "Client Rating", value: `${SITE_CONFIG.stats.rating}/5` },
                  { label: "5-Star Reviews", value: `${SITE_CONFIG.stats.reviewCount}+` },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-3xl font-bold text-[#d4af37]">{stat.value}</dd>
                    <dt className="text-xs text-[#8e8e93] mt-1">{stat.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-[#8e8e93]">
                Most popular service in {area}:{" "}
                <span className="text-[#d4af37] font-semibold">{data.popularService}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1c1c1e]">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Services in {area}
          </h2>
          <p className="text-center text-[#8e8e93] max-w-2xl mx-auto mb-12">
            All services are mobile — our team comes to your home, office, or any {area} location.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`/services/${s.id}`}
                className="group bg-[#141414] border border-[#2c2c2e] rounded-xl p-6 hover:border-[#d4af37] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-[#f5f5f7] group-hover:text-[#d4af37] transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-xs text-[#d4af37] mt-1">{s.tagline}</p>
                  </div>
                  <span className="text-lg font-bold text-[#f5f5f7]">
                    BHD {s.price}
                  </span>
                </div>
                <p className="text-sm text-[#8e8e93] leading-relaxed">{s.description}</p>
                <p className="text-xs text-[#636366] mt-3">{s.duration}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1c1c1e]">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Reviews
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {localReviews.map((r) => (
              <div
                key={r.id}
                className="bg-[#141414] border border-[#2c2c2e] rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-[#f5f5f7] mb-4 leading-relaxed">
                  &ldquo;{r.review}&rdquo;
                </p>
                <div className="flex items-center justify-between text-sm text-[#8e8e93]">
                  <span className="font-semibold">{r.name}</span>
                  <span>{r.vehicle} · {r.service}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage note */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-[#1c1c1e] text-center">
          <h2 className="text-2xl font-bold mb-4">
            Also Serving All Surrounding Areas
          </h2>
          <p className="text-[#8e8e93] mb-8">
            Bahrain Auto Spa covers all {COVERAGE_AREAS.length} major areas in Bahrain.
            Not in {area}? We still come to you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {COVERAGE_AREAS.filter((a) => a !== area).map((a) => (
              <a
                key={a}
                href={`/car-detailing-${areaToSlug(a)}`}
                className="text-sm text-[#8e8e93] hover:text-[#d4af37] border border-[#2c2c2e] hover:border-[#d4af37] rounded-full px-4 py-2 transition-colors"
              >
                {a}
              </a>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1c1c1e]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Book Mobile Car Detailing in{" "}
              <span className="text-[#d4af37]">{area}</span>
            </h2>
            <p className="text-[#8e8e93] mb-8">
              Message us on WhatsApp — we respond within 30 minutes and can usually
              schedule same-day or next-day service in {area}.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#0a0a0a] font-bold px-10 py-4 rounded-full hover:bg-[#e9c34e] transition-colors text-lg"
            >
              Book in {area} Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
