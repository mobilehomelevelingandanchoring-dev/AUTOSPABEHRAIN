import { SITE_CONFIG, SERVICES, REVIEWS, FAQ_ITEMS, COVERAGE_AREAS } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    // CarWash matches Google Business Profile category; AutoRepair covers detailing services
    "@type": ["LocalBusiness", "CarWash", "AutoRepair"],
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/images/logo.png`,
      width: 200,
      height: 60,
    },
    priceRange: "$$",
    currenciesAccepted: "BHD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    hasMap: SITE_CONFIG.googleMapsUrl,
    foundingDate: String(SITE_CONFIG.foundingYear),
    additionalType: "https://www.wikidata.org/entity/Q97631",
    // Exact address from Google Business Profile: "4HFQ+7VR, Riffa, Bahrain"
    address: {
      "@type": "PostalAddress",
      streetAddress: "4HFQ+7VR",
      addressLocality: "Riffa",
      addressRegion: "Southern Governorate",
      addressCountry: "BH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    // All 15 Bahrain areas we serve, plus country-level
    areaServed: [
      { "@type": "Country", name: "Bahrain" },
      ...COVERAGE_AREAS.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: { "@type": "Country", name: "Bahrain" },
      })),
    ],
    // Radius-based service area covering all of Bahrain
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "14:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.stats.rating,
      reviewCount: SITE_CONFIG.stats.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.review,
      datePublished: r.date,
    })),
    sameAs: Object.values(SITE_CONFIG.social),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/images/logo.png`,
      width: 200,
      height: 60,
    },
    foundingDate: String(SITE_CONFIG.foundingYear),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "customer service",
        contactOption: "TollFree",
        availableLanguage: ["English", "Arabic"],
        areaServed: "BH",
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.whatsapp,
        contactType: "sales",
        availableLanguage: ["English", "Arabic"],
        areaServed: "BH",
      },
    ],
    sameAs: Object.values(SITE_CONFIG.social),
  };
}

export function generateServiceSchema() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}/services/${service.id}`,
    name: service.name,
    description: service.description,
    url: `${SITE_CONFIG.url}/services/${service.id}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.url}/#business`,
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: { "@type": "Country", name: "Bahrain" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.features.map((f, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: f,
      })),
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "BHD",
      availability: "https://schema.org/InStock",
      validFrom: `${SITE_CONFIG.foundingYear}-01-01`,
      priceValidUntil: "2027-12-31",
      url: `${SITE_CONFIG.url}/services/${service.id}`,
    },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Duration",
      value: service.duration,
    },
  }));
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    inLanguage: "en-BH",
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
  };
}

export function generateServicePageSchema(serviceId: string) {
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}/services/${service.id}`,
    name: `${service.name} in Bahrain`,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.url}/#business`,
      name: SITE_CONFIG.name,
    },
    areaServed: { "@type": "Country", name: "Bahrain" },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "BHD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function generateLocationPageSchema(area: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CarWash", "AutoRepair"],
    "@id": `${SITE_CONFIG.url}/#business-${area.toLowerCase().replace(/\s+/g, "-")}`,
    name: `${SITE_CONFIG.name} — ${area}`,
    description: `Premium mobile car detailing in ${area}, Bahrain. We come to you — ceramic coating, paint correction & full details at your home or office.`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: {
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "Country", name: "Bahrain" },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.stats.rating,
      reviewCount: SITE_CONFIG.stats.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
