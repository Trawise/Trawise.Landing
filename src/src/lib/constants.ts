export const SITE_CONFIG = {
  name: "Trawise",
  description: "Connect with nearby hosts and find budget-friendly stays on Trawise - a mobile travel application with location-based request system.",
  email: "support@trawise.com",
  location: "Stockholm, Sweden",
} as const;

export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
] as const;

export const DOWNLOAD_LINKS = {
  playStore: "/coming-soon",
  appStore: "/coming-soon",
} as const;
