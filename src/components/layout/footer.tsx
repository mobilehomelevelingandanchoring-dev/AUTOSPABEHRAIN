import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
import { SITE_CONFIG, COVERAGE_AREAS, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const TiktokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.81 1.54V6.77a4.83 4.83 0 01-1.04-.08z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Footer() {
  return (
    <footer
      className="bg-[#080808] border-t border-white/[0.06]"
      aria-label="Site footer"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 group w-fit mb-6"
              aria-label="Bahrain Auto Spa - Home"
            >
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#c9a84c] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#f5f5f7] font-semibold text-sm tracking-wide">
                  BAHRAIN
                </span>
                <span className="text-[#d4af37] font-bold text-base tracking-[0.15em] uppercase">
                  AUTO SPA
                </span>
              </div>
            </Link>
            <p className="text-[#636366] text-sm leading-relaxed mb-6 max-w-xs">
              Bahrain&apos;s premium mobile car detailing service. We bring
              luxury car care to your doorstep across the Kingdom.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center",
                  "text-[#636366] hover:text-[#d4af37] hover:bg-white/[0.1]",
                  "transition-all duration-200"
                )}
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center",
                  "text-[#636366] hover:text-[#d4af37] hover:bg-white/[0.1]",
                  "transition-all duration-200"
                )}
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center",
                  "text-[#636366] hover:text-[#d4af37] hover:bg-white/[0.1]",
                  "transition-all duration-200"
                )}
                aria-label="Follow us on TikTok"
              >
                <TiktokIcon />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center",
                  "text-[#636366] hover:text-[#25d366] hover:bg-white/[0.1]",
                  "transition-all duration-200"
                )}
                aria-label="Message us on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-[#f5f5f7] font-semibold text-sm tracking-widest uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#services`}
                    className={cn(
                      "text-[#636366] hover:text-[#d4af37] text-sm",
                      "transition-colors duration-200 inline-flex items-center gap-1 group"
                    )}
                  >
                    {service.name}
                    <ArrowUpRight
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Areas Column */}
          <div>
            <h3 className="text-[#f5f5f7] font-semibold text-sm tracking-widest uppercase mb-5">
              Coverage Areas
            </h3>
            <ul
              className="grid grid-cols-2 gap-x-4 gap-y-2.5"
              role="list"
              aria-label="Service coverage areas in Bahrain"
            >
              {COVERAGE_AREAS.slice(0, 12).map((area) => (
                <li key={area}>
                  <span className="text-[#636366] text-sm flex items-center gap-1.5">
                    <span
                      className="w-1 h-1 rounded-full bg-[#d4af37] shrink-0"
                      aria-hidden="true"
                    />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[#f5f5f7] font-semibold text-sm tracking-widest uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-[#636366] hover:text-[#f5f5f7] transition-colors duration-200 group"
                  aria-label={`Call us at ${SITE_CONFIG.phone}`}
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 text-[#d4af37] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs text-[#48484a] uppercase tracking-wider mb-0.5">
                      Phone / WhatsApp
                    </div>
                    <div className="text-sm font-medium">{SITE_CONFIG.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-[#636366] hover:text-[#f5f5f7] transition-colors duration-200"
                  aria-label={`Email us at ${SITE_CONFIG.email}`}
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 text-[#d4af37] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs text-[#48484a] uppercase tracking-wider mb-0.5">
                      Email
                    </div>
                    <div className="text-sm">{SITE_CONFIG.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 mt-0.5 text-[#d4af37] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs text-[#48484a] uppercase tracking-wider mb-0.5">
                      Service Area
                    </div>
                    <div className="text-sm text-[#636366]">
                      All of Bahrain
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Clock
                    className="w-4 h-4 mt-0.5 text-[#d4af37] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs text-[#48484a] uppercase tracking-wider mb-0.5">
                      Working Hours
                    </div>
                    <div className="text-sm text-[#636366] space-y-1">
                      <div>
                        Sat–Thu: {SITE_CONFIG.workingHours.weekdays}
                      </div>
                      <div>Fri: {SITE_CONFIG.workingHours.friday}</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#48484a] text-sm text-center sm:text-left">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
              reserved. Kingdom of Bahrain.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-[#48484a] hover:text-[#636366] text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#48484a] hover:text-[#636366] text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
