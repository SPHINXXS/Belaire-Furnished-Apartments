declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_ADS_ID = "AW-11004192117";

const LABELS = {
  whatsapp: "wY-qCPa_x9gcEPXKmv8o",
  phone: "h_VaCPm_x9gcEPXKmv8o",
  enquiryForm: "uUdSCPy_x9gcEPXKmv8o",
} as const;

type ConversionType = keyof typeof LABELS;

export function trackConversion(
  type: ConversionType,
  value?: number
) {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${LABELS[type]}`,
    ...(value !== undefined && {
      value,
      currency: "KES",
    }),
  });
}