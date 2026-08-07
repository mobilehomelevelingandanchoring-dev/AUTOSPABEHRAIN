import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle, Clock, PhoneCall } from "lucide-react";
import { SERVICES, SITE_CONFIG, FAQ_ITEMS } from "@/lib/constants";
import { generateServicePageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

type Props = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const s = SERVICES.find((x) => x.id === service);
  if (!s) return {};

  const title = `${s.name} in Bahrain | ${SITE_CONFIG.name}`;
  const description = `Professional ${s.name.toLowerCase()} in Bahrain starting from BHD ${s.price}. Mobile service — we come to your home or office. ${s.tagline}. Book via WhatsApp today.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/services/${s.id}` },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/services/${s.id}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const s = SERVICES.find((x) => x.id === service);
  if (!s) notFound();

  const waText = encodeURIComponent(
    `Hi! I'd like to book ${s.name} for my vehicle. Please let me know your availability.`
  );
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${waText}`;

  const serviceSchema = generateServicePageSchema(s.id);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Services", url: `${SITE_CONFIG.url}/#services` },
    { name: s.name, url: `${SITE_CONFIG.url}/services/${s.id}` },
  ]);

  const relatedFaqs = FAQ_ITEMS.filter((f) =>
    f.question.toLowerCase().includes(s.name.toLowerCase().split(" ")[0]) ||
    f.question.toLowerCase().includes("detail") ||
    f.question.toLowerCase().includes("book")
  ).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
              <li><a href="/#services" className="hover:text-[#d4af37] transition-colors">Services</a></li>
              <li className="text-[#3a3a3c]">/</li>
              <li className="text-[#d4af37]">{s.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4">
                Mobile Service · All Bahrain
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                {s.name}{" "}
                <span className="text-[#d4af37]">in Bahrain</span>
              </h1>
              <p className="text-xl text-[#8e8e93] leading-relaxed mb-8">
                {s.description}
              </p>

              <div className="flex items-center gap-6 mb-10 text-sm text-[#8e8e93]">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  {s.duration}
                </span>
                <span className="text-2xl font-bold text-[#f5f5f7]">
                  BHD {s.price}
                  <span className="text-sm font-normal text-[#8e8e93] ml-1">starting from</span>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#0a0a0a] font-bold px-8 py-4 rounded-full hover:bg-[#e9c34e] transition-colors"
                >
                  Book via WhatsApp
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 border border-[#3a3a3c] text-[#f5f5f7] font-semibold px-8 py-4 rounded-full hover:border-[#d4af37] transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="bg-[#141414] border border-[#2c2c2e] rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[#d4af37] mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {s.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="text-[#f5f5f7]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Mobile */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1c1c1e]">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose Mobile {s.name}?
          </h2>
          <p className="text-center text-[#8e8e93] max-w-2xl mx-auto mb-12">
            We bring professional {s.name.toLowerCase()} directly to your home, office, or any location across Bahrain — no driving, no waiting.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "We Come to You",
                body: "Our fully-equipped mobile unit comes to your home, office, or any location across all 15 major areas in Bahrain.",
              },
              {
                title: "No Utilities Needed",
                body: "We carry our own water, power, and all professional equipment. You don't need to provide anything.",
              },
              {
                title: "100% Satisfaction",
                body: "If you're not completely happy with the result, we return and fix it free of charge — no questions asked.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#141414] border border-[#2c2c2e] rounded-xl p-6"
              >
                <h3 className="font-semibold text-[#d4af37] mb-3">{item.title}</h3>
                <p className="text-[#8e8e93] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {relatedFaqs.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-[#1c1c1e]">
            <h2 className="text-3xl font-bold text-center mb-12">
              Common Questions
            </h2>
            <dl className="space-y-6">
              {relatedFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-[#141414] border border-[#2c2c2e] rounded-xl p-6"
                >
                  <dt className="font-semibold text-[#f5f5f7] mb-3">{faq.question}</dt>
                  <dd className="text-[#8e8e93] text-sm leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1c1c1e]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book Your{" "}
              <span className="text-[#d4af37]">{s.name}</span>?
            </h2>
            <p className="text-[#8e8e93] mb-8">
              Message us on WhatsApp — we respond within 30 minutes and can
              often schedule same-day or next-day service across all Bahrain.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#0a0a0a] font-bold px-10 py-4 rounded-full hover:bg-[#e9c34e] transition-colors text-lg"
            >
              Book {s.name} Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
