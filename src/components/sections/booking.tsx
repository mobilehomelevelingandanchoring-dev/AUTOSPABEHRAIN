"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Send,
  CheckCircle,
  Loader2,
  Calendar,
  Car,
  User,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s\+\-\(\)]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  vehicle: z.string().min(2, "Please describe your vehicle"),
  date: z.string().optional(),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

function FormField({
  label,
  error,
  required,
  children,
  id,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[#d1d1d6]"
      >
        {label}
        {required && (
          <span className="text-[#d4af37] ml-1" aria-label="required">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-400 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses = cn(
  "w-full px-4 py-3 rounded-xl text-sm text-[#f5f5f7]",
  "bg-[#1c1c1e] border border-white/[0.1]",
  "placeholder:text-[#48484a]",
  "hover:border-white/[0.2]",
  "focus:outline-none focus:border-[#d4af37]/60 focus:ring-1 focus:ring-[#d4af37]/30",
  "transition-all duration-200"
);

export function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);

    const message = encodeURIComponent(
      `Hi! I'd like to book a detailing service.\n\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Service: ${data.service}\n` +
      `Vehicle: ${data.vehicle}\n` +
      (data.date ? `Preferred Date: ${data.date}\n` : "") +
      (data.email ? `Email: ${data.email}\n` : "") +
      (data.message ? `Message: ${data.message}` : "")
    );

    // Simulate brief loading then redirect to WhatsApp
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);
    setIsSubmitted(true);

    setTimeout(() => {
      window.open(
        `https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=${message}`,
        "_blank",
        "noopener,noreferrer"
      );
    }, 500);
  };

  return (
    <section
      id="booking"
      className="py-24 lg:py-32 bg-[#0a0a0a] relative"
      aria-labelledby="booking-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-28"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-5">
                Book Now
              </span>
              <h2
                id="booking-heading"
                className="text-3xl sm:text-4xl font-bold text-[#f5f5f7] tracking-tight mt-4 mb-5"
              >
                Ready to Transform
                <br />
                <span className="text-gradient-gold">Your Vehicle?</span>
              </h2>
              <p className="text-[#636366] leading-relaxed mb-8">
                Fill in the form and we&apos;ll send your details directly to
                WhatsApp for instant booking. We respond within 30 minutes.
              </p>

              {/* Quick Contact Options */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}?text=Hi! I'd like to book a car detailing service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 w-full px-5 py-4 rounded-xl",
                    "bg-[#25d366]/10 border border-[#25d366]/20",
                    "hover:bg-[#25d366]/15 transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366]"
                  )}
                  aria-label="Book instantly via WhatsApp"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25d366]/20 flex items-center justify-center shrink-0" aria-hidden="true">
                    <MessageCircle className="w-5 h-5 text-[#25d366]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#f5f5f7]">
                      WhatsApp
                    </div>
                    <div className="text-xs text-[#636366]">
                      Instant response
                    </div>
                  </div>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className={cn(
                    "flex items-center gap-3 w-full px-5 py-4 rounded-xl",
                    "bg-white/[0.04] border border-white/[0.08]",
                    "hover:bg-white/[0.08] transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                  )}
                  aria-label={`Call us at ${SITE_CONFIG.phone}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center shrink-0" aria-hidden="true">
                    <Phone className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#f5f5f7]">
                      {SITE_CONFIG.phone}
                    </div>
                    <div className="text-xs text-[#636366]">Call anytime</div>
                  </div>
                </a>
              </div>

              {/* Guarantees */}
              <div className="mt-8 space-y-2.5">
                {[
                  "Free consultation",
                  "Same-day response",
                  "100% satisfaction guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" aria-hidden="true" />
                    <span className="text-sm text-[#636366]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={cn(
                  "flex flex-col items-center justify-center gap-6 p-12 rounded-2xl",
                  "bg-[#141414] border border-[#d4af37]/30 text-center"
                )}
              >
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#d4af37]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f5f5f7] mb-2">
                    Booking Request Sent!
                  </h3>
                  <p className="text-[#636366] text-sm max-w-xs">
                    Your WhatsApp is opening with your booking details. We&apos;ll
                    confirm your appointment within 30 minutes.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-[#d4af37] hover:text-[#e8c84a] transition-colors underline"
                >
                  Book another service
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={cn(
                  "p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#141414]",
                  "space-y-5"
                )}
                noValidate
                aria-label="Booking request form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    id="name"
                    label="Your Name"
                    error={errors.name?.message}
                    required
                  >
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48484a]" aria-hidden="true" />
                      <input
                        id="name"
                        {...register("name")}
                        type="text"
                        placeholder="Ahmed Al-Mansoori"
                        autoComplete="name"
                        className={cn(inputClasses, "pl-10")}
                        aria-required="true"
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                    </div>
                  </FormField>

                  <FormField
                    id="phone"
                    label="Phone / WhatsApp"
                    error={errors.phone?.message}
                    required
                  >
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48484a]" aria-hidden="true" />
                      <input
                        id="phone"
                        {...register("phone")}
                        type="tel"
                        placeholder="+973 XXXX XXXX"
                        autoComplete="tel"
                        className={cn(inputClasses, "pl-10")}
                        aria-required="true"
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                    </div>
                  </FormField>
                </div>

                <FormField
                  id="email"
                  label="Email Address"
                  error={errors.email?.message}
                >
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48484a]" aria-hidden="true" />
                    <input
                      id="email"
                      {...register("email")}
                      type="email"
                      placeholder="optional@email.com"
                      autoComplete="email"
                      className={cn(inputClasses, "pl-10")}
                    />
                  </div>
                </FormField>

                <FormField
                  id="service"
                  label="Service Required"
                  error={errors.service?.message}
                  required
                >
                  <select
                    id="service"
                    {...register("service")}
                    className={cn(
                      inputClasses,
                      "appearance-none",
                      !watch("service") && "text-[#48484a]"
                    )}
                    aria-required="true"
                  >
                    <option value="" className="bg-[#1c1c1e] text-[#48484a]">
                      Select a service...
                    </option>
                    {SERVICES.map((s) => (
                      <option
                        key={s.id}
                        value={s.name}
                        className="bg-[#1c1c1e] text-[#f5f5f7]"
                      >
                        {s.name} — from BHD {s.price}
                      </option>
                    ))}
                    <option value="Not sure" className="bg-[#1c1c1e] text-[#f5f5f7]">
                      Not sure — need advice
                    </option>
                  </select>
                </FormField>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    id="vehicle"
                    label="Your Vehicle"
                    error={errors.vehicle?.message}
                    required
                  >
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48484a]" aria-hidden="true" />
                      <input
                        id="vehicle"
                        {...register("vehicle")}
                        type="text"
                        placeholder="e.g. BMW 5 Series 2022"
                        className={cn(inputClasses, "pl-10")}
                        aria-required="true"
                      />
                    </div>
                  </FormField>

                  <FormField
                    id="date"
                    label="Preferred Date"
                    error={errors.date?.message}
                  >
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48484a]" aria-hidden="true" />
                      <input
                        id="date"
                        {...register("date")}
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className={cn(inputClasses, "pl-10")}
                      />
                    </div>
                  </FormField>
                </div>

                <FormField
                  id="message"
                  label="Additional Notes"
                  error={errors.message?.message}
                >
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={3}
                    placeholder="Any special requests, location details, or questions..."
                    className={cn(
                      inputClasses,
                      "resize-none leading-relaxed"
                    )}
                  />
                </FormField>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "group w-full inline-flex items-center justify-center gap-2",
                    "px-6 py-4 rounded-xl text-base font-semibold",
                    "bg-[#d4af37] text-[#0a0a0a]",
                    "hover:bg-[#e8c84a] active:scale-[0.99]",
                    "transition-all duration-200",
                    "shadow-[0_0_30px_rgba(212,175,55,0.3)]",
                    "hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]",
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                  aria-label="Submit booking request"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Preparing Booking...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Send Booking via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-[#48484a] text-center">
                  Your details will be sent securely via WhatsApp. We respond
                  within 30 minutes during working hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
