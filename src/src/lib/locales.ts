/**
 * The languages the site is published in. English is served at the bare path
 * and the rest under a prefix, so each translation has a URL a crawler can
 * index — sharing one URL is why the translations generated no organic
 * traffic.
 */
export const LOCALES = ["en", "es", "it", "sv"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const isLocale = (value: string | undefined): value is Locale =>
  LOCALES.includes(value as Locale);

/** The path a route has in a given language. */
export const localePath = (locale: Locale, path: string): string => {
  const clean = path === "/" ? "" : path;

  return locale === DEFAULT_LOCALE ? clean || "/" : `/${locale}${clean}`;
};
