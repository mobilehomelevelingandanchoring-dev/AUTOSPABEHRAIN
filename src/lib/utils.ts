import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency = "BHD") {
  return new Intl.NumberFormat("en-BH", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatPhoneNumber(phone: string) {
  return phone.replace(/(\+973)(\d{4})(\d{4})/, "$1 $2 $3");
}
