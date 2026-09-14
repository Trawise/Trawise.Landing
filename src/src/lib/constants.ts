export const SITE_CONFIG = {
  name: "Trawise",
  url: "https://trawise.org",
  /** Must stay identical to the <title> in index.html — see usePageMeta. */
  defaultTitle:
    "Trawise - Connect with Nearby Hosts and Find Budget-Friendly Stays",
  email: "support@trawise.org",
  location: "Stockholm, Sweden",
} as const;

export const HOST_APP_URL = "https://host.trawise.org/";

export const SOCIAL_LINKS = [
  { network: "LinkedIn", url: "https://www.linkedin.com/company/trawise" },
  { network: "Instagram", url: "https://www.instagram.com/tra.wise" },
] as const;
