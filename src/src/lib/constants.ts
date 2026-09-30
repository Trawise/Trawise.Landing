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

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/trawise/id6749550755?itscg=30200&itsct=apps_box_badge&mttnsubad=6749550755";

export const PRODUCT_HUNT_URL =
  "https://www.producthunt.com/products/trawise?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-trawise";

export const PRODUCT_HUNT_BADGE_URL =
  "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1265429&theme=light&t=1790760581521";

export const SOCIAL_LINKS = [
  { network: "LinkedIn", url: "https://www.linkedin.com/company/trawise" },
  { network: "Instagram", url: "https://www.instagram.com/tra.wise" },
] as const;
