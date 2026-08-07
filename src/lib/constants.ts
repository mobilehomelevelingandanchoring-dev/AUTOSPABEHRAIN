export const SITE_CONFIG = {
  name: "Bahrain Auto Spa",
  tagline: "Premium Car Detailing & Mobile Car Wash in Bahrain",
  description:
    "Premium mobile car detailing in Bahrain — ceramic coating, paint correction & full details at your home or office. Trusted by 4,500+ clients. Serving all Bahrain.",
  url: "https://sunshinecarspa.com",
  phone: "+97333445566",
  whatsapp: "+97333445566",
  email: "info@sunshinecarspa.com",
  googleMapsUrl:
    "https://maps.google.com/?q=Bahrain+Auto+Spa+Manama+Bahrain",
  address: "Manama, Kingdom of Bahrain",
  geo: {
    latitude: 26.2235,
    longitude: 50.5876,
  },
  foundingYear: 2016,
  workingHours: {
    weekdays: "7:00 AM – 8:00 PM",
    weekends: "8:00 AM – 6:00 PM",
    friday: "2:00 PM – 8:00 PM",
  },
  social: {
    instagram: "https://instagram.com/bahrainautospa",
    facebook: "https://facebook.com/bahrainautospa",
    tiktok: "https://tiktok.com/@bahrainautospa",
  },
  stats: {
    yearsExperience: 8,
    vehiclesCompleted: 12000,
    satisfiedClients: 4500,
    rating: 4.9,
    reviewCount: 847,
  },
} as const;

export const COVERAGE_AREAS = [
  "Manama",
  "Riffa",
  "Muharraq",
  "Saar",
  "Juffair",
  "Seef",
  "Isa Town",
  "Amwaj Islands",
  "Hamad Town",
  "Budaiya",
  "Adliya",
  "Diplomatic Area",
  "Sanabis",
  "Zinj",
  "Tubli",
] as const;

export type CoverageArea = (typeof COVERAGE_AREAS)[number];

export function areaToSlug(area: string): string {
  return area.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");
}

export function slugToArea(slug: string): CoverageArea | undefined {
  return COVERAGE_AREAS.find((a) => areaToSlug(a) === slug);
}

export const LOCATION_DATA: Record<
  string,
  {
    area: string;
    subtitle: string;
    intro: string;
    highlights: string[];
    popularService: string;
  }
> = {
  manama: {
    area: "Manama",
    subtitle: "Bahrain's Capital City",
    intro:
      "Serving Manama's business professionals, residents, and hotel guests across the Financial Harbour, Juffair Road, and central neighbourhoods. We come to your office parking or home — no disruption to your day.",
    highlights: [
      "Flexible office parking service",
      "Hotel concierge appointments",
      "Same-day availability most days",
    ],
    popularService: "Full Detail",
  },
  riffa: {
    area: "Riffa",
    subtitle: "Al Riffa & Riffa Views",
    intro:
      "Bahrain Auto Spa proudly serves Riffa — from the palace district to Riffa Views. Our mobile units travel directly to your villa or compound for a complete premium detailing experience without any inconvenience.",
    highlights: [
      "Compound & villa gate access",
      "Morning & weekend slots available",
      "Popular with luxury vehicle owners",
    ],
    popularService: "Ceramic Coating",
  },
  muharraq: {
    area: "Muharraq",
    subtitle: "Near Bahrain International Airport",
    intro:
      "Based in Muharraq or near the airport? We'll come to you. Perfect for getting your car detailed while you travel — leave us access and return to a pristine vehicle. We cover all Muharraq neighbourhoods.",
    highlights: [
      "Detail your car while you fly",
      "Traditional & modern areas covered",
      "Fast turnaround available",
    ],
    popularService: "Exterior Detail",
  },
  saar: {
    area: "Saar",
    subtitle: "North Bahrain's Premier Suburb",
    intro:
      "Saar's affluent villas and gated communities deserve premium car care. Bahrain Auto Spa is the go-to mobile detailing choice for Saar's discerning vehicle owners — from daily drivers to supercars.",
    highlights: [
      "Gated villa compound access",
      "High-end vehicle specialists",
      "Ceramic coating most requested",
    ],
    popularService: "Ceramic Coating",
  },
  juffair: {
    area: "Juffair",
    subtitle: "Manama's International District",
    intro:
      "Juffair's expat community, apartment residents, and hotel guests enjoy premium mobile detailing without leaving their building. We operate in underground car parks, open lots, and hotel driveways.",
    highlights: [
      "Apartment & condo building service",
      "All nationalities & vehicle types welcome",
      "Left & right-hand drive experience",
    ],
    popularService: "Mobile Wash",
  },
  seef: {
    area: "Seef",
    subtitle: "Bahrain's Shopping & Business Hub",
    intro:
      "Working or shopping in Seef? We'll detail your car in the parking lot while you're inside. From City Centre Mall to Seef Mall — productive time for you, a spotless vehicle as the result.",
    highlights: [
      "Mall & commercial parking service",
      "Business district specialists",
      "Quick turnaround for busy schedules",
    ],
    popularService: "Full Detail",
  },
  "isa-town": {
    area: "Isa Town",
    subtitle: "Central Bahrain",
    intro:
      "Isa Town residents and workers trust Bahrain Auto Spa for reliable, professional mobile detailing. We serve all parts of Isa Town with the same premium standard our clients across Bahrain expect.",
    highlights: [
      "Residential & commercial coverage",
      "Flexible package options",
      "Trusted by Isa Town families since 2016",
    ],
    popularService: "Full Detail",
  },
  "amwaj-islands": {
    area: "Amwaj Islands",
    subtitle: "Bahrain's Luxury Waterfront",
    intro:
      "Amwaj Islands' exclusive waterfront lifestyle deserves world-class car care. Our team specialises in the prestige vehicles common to this development — Bentley, Ferrari, Porsche, Lamborghini, and more.",
    highlights: [
      "Supercar & prestige vehicle specialists",
      "Waterfront villa & marina service",
      "Paint correction & ceramic coating experts",
    ],
    popularService: "Ceramic Coating",
  },
  "hamad-town": {
    area: "Hamad Town",
    subtitle: "Southern Bahrain",
    intro:
      "Hamad Town's family-oriented community gets full mobile detailing from Bahrain Auto Spa. We offer competitive pricing for families wanting to keep multiple vehicles in showroom condition.",
    highlights: [
      "Family vehicle packages available",
      "Multi-car discount on request",
      "Weekend slots perfect for families",
    ],
    popularService: "Full Detail",
  },
  budaiya: {
    area: "Budaiya",
    subtitle: "Bahrain's Northern Green Belt",
    intro:
      "Budaiya's residential villas and tree-lined streets are the perfect setting for our mobile detailing service. We drive to your home and transform your vehicle — no water supply or power needed from you.",
    highlights: [
      "Large estate & villa access",
      "Early morning appointments available",
      "Exterior & interior specialists",
    ],
    popularService: "Exterior Detail",
  },
  adliya: {
    area: "Adliya",
    subtitle: "Bahrain's Arts & Culture District",
    intro:
      "Adliya's creative professionals and restaurant owners trust Bahrain Auto Spa for mobile detailing that fits a busy lifestyle. Book via WhatsApp and we'll schedule around your day.",
    highlights: [
      "Restaurant & café area coverage",
      "Flexible scheduling around opening hours",
      "Creative professionals welcome",
    ],
    popularService: "Mobile Wash",
  },
  "diplomatic-area": {
    area: "Diplomatic Area",
    subtitle: "Bahrain's Embassy & Financial District",
    intro:
      "The Diplomatic Area's embassies, financial institutions, and luxury hotels trust Bahrain Auto Spa for discreet, professional mobile detailing. We are experienced working in secure and regulated environments.",
    highlights: [
      "Corporate & diplomatic account service",
      "Discreet, professional team",
      "Secure underground parking experience",
    ],
    popularService: "Full Detail",
  },
  sanabis: {
    area: "Sanabis",
    subtitle: "Northern Bahrain",
    intro:
      "Sanabis residents enjoy the full convenience of Bahrain Auto Spa's mobile service. Whether at home or work, we come to you and deliver the same premium detailing results our clients across Bahrain love.",
    highlights: [
      "Convenient residential door-to-door service",
      "Close to major road access routes",
      "Competitive pricing for the area",
    ],
    popularService: "Interior Detail",
  },
  zinj: {
    area: "Zinj",
    subtitle: "Central Residential Bahrain",
    intro:
      "Zinj's established residential community benefits from Bahrain Auto Spa's fully mobile detailing service. There's no need to drive anywhere — we come to your home and deliver showroom-quality results.",
    highlights: [
      "Established neighbourhood specialists",
      "Family-friendly booking process",
      "30-minute WhatsApp response guarantee",
    ],
    popularService: "Full Detail",
  },
  tubli: {
    area: "Tubli",
    subtitle: "Eastern Bahrain",
    intro:
      "Tubli's mix of residential and commercial properties falls well within our full service range. Bahrain Auto Spa mobile detailing is available throughout Tubli — all vehicle types, all package levels.",
    highlights: [
      "Residential & commercial area coverage",
      "Industrial site parking service available",
      "All vehicle sizes from hatchbacks to SUVs",
    ],
    popularService: "Exterior Detail",
  },
};

export const SERVICES = [
  {
    id: "exterior-detail",
    name: "Exterior Detail",
    tagline: "Showroom-Quality Finish",
    description:
      "Complete exterior restoration — hand wash, clay bar treatment, iron decontamination, machine polish, and wax protection.",
    price: 25,
    duration: "2–3 hours",
    popular: false,
    features: [
      "Professional hand wash",
      "Wheel & tire deep clean",
      "Clay bar decontamination",
      "Iron fallout removal",
      "Machine polish (1-step)",
      "Carnauba wax protection",
      "Glass cleaning & treatment",
      "Trim dressing",
    ],
    image: "/images/services/exterior-detail.jpg",
  },
  {
    id: "interior-detail",
    name: "Interior Detail",
    tagline: "Immaculate Cabin Experience",
    description:
      "Deep interior transformation — vacuuming, steam cleaning, leather conditioning, odor elimination, and UV protection.",
    price: 30,
    duration: "2–4 hours",
    popular: false,
    features: [
      "Deep vacuum (all surfaces)",
      "Steam clean upholstery",
      "Leather clean & condition",
      "Dashboard & console detail",
      "Door panel deep clean",
      "Carpet shampooing",
      "Air vent cleaning",
      "Odor elimination",
    ],
    image: "/images/services/interior-detail.jpg",
  },
  {
    id: "full-detail",
    name: "Full Detail",
    tagline: "The Complete Transformation",
    description:
      "Our most comprehensive package — complete interior and exterior detailing for a total vehicle restoration.",
    price: 55,
    duration: "4–6 hours",
    popular: true,
    features: [
      "Everything in Exterior Detail",
      "Everything in Interior Detail",
      "Engine bay cleaning",
      "Headlight restoration",
      "Door jamb detailing",
      "Tire dressing & shine",
      "Window tint safe cleaning",
      "Detailed report & photos",
    ],
    image: "/images/services/full-detail.jpg",
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    tagline: "Swirl-Free Perfection",
    description:
      "Multi-stage machine polishing to remove swirl marks, scratches, water spots, and oxidation for a mirror-like finish.",
    price: 120,
    duration: "6–12 hours",
    popular: false,
    features: [
      "Paint thickness measurement",
      "Compounding (heavy correction)",
      "2-stage machine polishing",
      "Swirl & scratch removal",
      "Water spot elimination",
      "Paint sealant application",
      "Before & after documentation",
      "12-month protection",
    ],
    image: "/images/services/paint-correction.jpg",
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    tagline: "5-Year Paint Protection",
    description:
      "Professional-grade ceramic coating providing hydrophobic protection, UV resistance, and a permanent glass-like shine.",
    price: 250,
    duration: "2 days",
    popular: false,
    features: [
      "Full paint correction included",
      "9H hardness ceramic coat",
      "5-year protection warranty",
      "Hydrophobic self-cleaning",
      "UV & chemical resistance",
      "Enhanced gloss depth",
      "Wheel coating included",
      "Aftercare kit provided",
    ],
    image: "/images/services/ceramic-coating.jpg",
  },
  {
    id: "mobile-wash",
    name: "Mobile Wash",
    tagline: "We Come to You",
    description:
      "Quick, professional waterless or rinseless wash at your home, office, or anywhere in Bahrain. No water supply needed.",
    price: 12,
    duration: "45–60 min",
    popular: false,
    features: [
      "We come to your location",
      "No water connection needed",
      "Eco-friendly waterless wash",
      "Exterior wipe & shine",
      "Glass cleaning",
      "Tire dressing",
      "Interior quick vacuum",
      "Same-day booking available",
    ],
    image: "/images/services/mobile-wash.jpg",
  },
] as const;

export const PRICING_PACKAGES = [
  {
    id: "essential",
    name: "Essential",
    description: "Perfect for regular maintenance",
    price: 25,
    priceNote: "Starting from",
    features: [
      "Exterior hand wash",
      "Interior vacuum",
      "Glass cleaning",
      "Tire & wheel clean",
      "Dashboard wipe",
      "Air freshener",
    ],
    notIncluded: ["Polish", "Wax", "Leather condition"],
    cta: "Book Essential",
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Our most popular package",
    price: 55,
    priceNote: "Starting from",
    features: [
      "Full exterior detail",
      "Complete interior detail",
      "Machine polish (1-step)",
      "Carnauba wax",
      "Leather conditioning",
      "Engine bay clean",
      "Odor elimination",
      "Free re-clean guarantee",
    ],
    notIncluded: [],
    cta: "Book Premium",
    popular: true,
  },
  {
    id: "elite",
    name: "Elite",
    description: "The ultimate car care experience",
    price: 250,
    priceNote: "Starting from",
    features: [
      "Everything in Premium",
      "2-stage paint correction",
      "9H ceramic coating",
      "5-year protection",
      "Wheel ceramic coat",
      "Hydrophobic glass coat",
      "Paint thickness report",
      "Aftercare kit included",
    ],
    notIncluded: [],
    cta: "Book Elite",
    popular: false,
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    name: "Ahmed Al-Mansoori",
    location: "Manama",
    rating: 5,
    date: "2026-07-24",
    dateDisplay: "2 weeks ago",
    review:
      "Absolutely incredible service! My Range Rover looks better than when I bought it. The team was professional, on time, and the ceramic coating result is stunning. Highly recommend.",
    vehicle: "Range Rover Sport",
    service: "Ceramic Coating",
    avatar: "/images/reviews/ahmed.jpg",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    location: "Seef",
    rating: 5,
    date: "2026-07-07",
    dateDisplay: "1 month ago",
    review:
      "I've tried many car detailing services in Bahrain but none come close to Bahrain Auto Spa. They came to my office, did a full detail on my BMW, and it was spotless. Professional and efficient.",
    vehicle: "BMW 5 Series",
    service: "Full Detail",
    avatar: "/images/reviews/sarah.jpg",
  },
  {
    id: 3,
    name: "Khalid Al-Zayani",
    location: "Riffa",
    rating: 5,
    date: "2026-07-17",
    dateDisplay: "3 weeks ago",
    review:
      "Used their mobile wash service twice now. Extremely convenient — they come to your home, use eco-friendly products, and leave the car looking perfect. Will definitely use again.",
    vehicle: "Mercedes GLC",
    service: "Mobile Wash",
    avatar: "/images/reviews/khalid.jpg",
  },
  {
    id: 4,
    name: "Fatima Hassan",
    location: "Juffair",
    rating: 5,
    date: "2026-08-02",
    dateDisplay: "5 days ago",
    review:
      "The paint correction service transformed my Porsche Cayenne. The swirl marks and scratches that I thought were permanent are completely gone. The team is highly skilled and professional.",
    vehicle: "Porsche Cayenne",
    service: "Paint Correction",
    avatar: "/images/reviews/fatima.jpg",
  },
  {
    id: 5,
    name: "James Robertson",
    location: "Saar",
    rating: 5,
    date: "2026-06-07",
    dateDisplay: "2 months ago",
    review:
      "Outstanding attention to detail. Every nook and cranny of my Tesla was cleaned to perfection. The interior detailing was particularly impressive — it genuinely smells and looks brand new.",
    vehicle: "Tesla Model S",
    service: "Interior Detail",
    avatar: "/images/reviews/james.jpg",
  },
  {
    id: 6,
    name: "Noor Al-Khalifa",
    location: "Amwaj Islands",
    rating: 5,
    date: "2026-07-31",
    dateDisplay: "1 week ago",
    review:
      "Booked through WhatsApp and they were here within 2 hours. The team was polite, efficient, and incredibly thorough. My Lexus LX has never looked this good. Truly premium service.",
    vehicle: "Lexus LX 600",
    service: "Full Detail",
    avatar: "/images/reviews/noor.jpg",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do you come to my location?",
    answer:
      "Yes! We are a fully mobile car detailing service. We come to your home, office, hotel, or any location across Bahrain. You don't need to leave your car anywhere — we bring our professional equipment to you.",
  },
  {
    question: "Do you need a water connection at my location?",
    answer:
      "No, we are completely self-sufficient. Our mobile units carry their own water supply, power generators, and all professional equipment. We require no utilities from your location whatsoever.",
  },
  {
    question: "How long does a full detail take?",
    answer:
      "A full detail typically takes 4–6 hours depending on the size and condition of your vehicle. We never rush — quality is our priority. For paint correction and ceramic coating, the process may take 1–2 days.",
  },
  {
    question: "What areas do you cover in Bahrain?",
    answer:
      "We cover all major areas in Bahrain including Manama, Riffa, Muharraq, Saar, Juffair, Seef, Isa Town, Amwaj Islands, Hamad Town, Budaiya, Adliya, and more. Contact us to confirm your area.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book via WhatsApp, phone call, or through our online booking form on this page. We typically respond within 30 minutes and can often schedule same-day or next-day appointments.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use only professional-grade, pH-neutral, eco-friendly products from leading brands. Our ceramic coatings are professional-grade 9H formulations with verified warranties. We never use cheap consumer products.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Absolutely. If you're not 100% satisfied with our work, we will return and fix any areas free of charge. Our reputation depends on your satisfaction and we take it extremely seriously.",
  },
  {
    question: "How much does ceramic coating cost?",
    answer:
      "Our ceramic coating packages start from BHD 250 and include full paint correction. The final price depends on your vehicle's size and current paint condition. Contact us for a free assessment and quote.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Book in 60 Seconds",
    description:
      "Choose your service and preferred time via WhatsApp or our booking form. We'll confirm within 30 minutes.",
    icon: "calendar",
  },
  {
    step: "02",
    title: "We Come to You",
    description:
      "Our fully-equipped mobile unit arrives at your location at the agreed time — home, office, or anywhere.",
    icon: "truck",
  },
  {
    step: "03",
    title: "Professional Detailing",
    description:
      "Our certified detailers transform your vehicle using professional products and equipment.",
    icon: "sparkles",
  },
  {
    step: "04",
    title: "Delivered Immaculate",
    description:
      "Inspect your vehicle and drive away with complete satisfaction. We don't leave until you're delighted.",
    icon: "check-circle",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Fully Mobile Service",
    description:
      "We come to you anywhere in Bahrain. No waiting, no driving, no inconvenience.",
    icon: "map-pin",
  },
  {
    title: "Certified Professionals",
    description:
      "Our team is trained and certified in the latest detailing techniques and products.",
    icon: "award",
  },
  {
    title: "Premium Products Only",
    description:
      "Professional-grade, eco-friendly products used by top detailers worldwide.",
    icon: "shield-check",
  },
  {
    title: "Guaranteed Results",
    description:
      "100% satisfaction guarantee. We return to fix anything you're not happy with.",
    icon: "star",
  },
  {
    title: "8+ Years Experience",
    description:
      "Over 12,000 vehicles detailed since 2016. Experience and expertise you can trust.",
    icon: "clock",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. Clear pricing upfront. What we quote is what you pay.",
    icon: "receipt",
  },
] as const;
