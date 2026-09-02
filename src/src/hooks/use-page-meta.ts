import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SITE_CONFIG } from "../lib/constants";
import {
  DEFAULT_LOCALE,
  LOCALES,
  localeFromPath,
  localePath,
} from "../lib/locales";

interface PageMeta {
  /**
   * The page name, rendered as "Page Name | Trawise".
   *
   * Omit it on the home page: the hook then applies SITE_CONFIG.defaultTitle,
   * which is byte-identical to the <title> already in index.html, so the tab
   * label never flickers on first paint.
   */
  title?: string;
  /** What this route is about, in the language being read. */
  description: string;
  /** Absolute path of this route, e.g. "/privacy-policy". Sets rel=canonical. */
  path: string;
  /** Keep the route out of search results (utility and error pages). */
  noindex?: boolean;
}

/**
 * Sets a meta tag's content, creating the tag when index.html has none. The
 * attribute differs by vocabulary: Open Graph keys on `property`, everything
 * else on `name`.
 */
function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
): void {
  const selector = `meta[${attribute}="${key}"]`;
  let meta = document.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

/**
 * Keeps document title, description, the sharing tags, rel=canonical and the
 * robots directive in sync with the active route.
 *
 * React Router swaps components without a document load, so nothing updates
 * these on its own. Without the canonical link every route would keep reporting
 * the homepage URL that index.html hardcodes, and noindex pages would stay
 * indexable on the strength of robots.txt alone. The description and the og:
 * and twitter: tags were left behind the same way, so every subpage in every
 * language described the English home page.
 *
 * The robots tag is restored — not merely cleared — on unmount, so navigating
 * from a noindex page back to an indexable one cannot leave the directive
 * stuck on.
 */
export function usePageMeta({
  title,
  description,
  path,
  noindex = false,
}: PageMeta): void {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_CONFIG.name}`
      : SITE_CONFIG.defaultTitle;

    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
  }, [title, description]);

  // One effect for everything the route's URL decides. The locale comes from
  // the router rather than from `window.location`, so it is a dependency and
  // not a value read behind React's back: a language switch keeps `path` the
  // same, and these tags all have to move with it.
  useEffect(() => {
    const locale = localeFromPath(pathname);
    const canonical = new URL(localePath(locale, path), SITE_CONFIG.url).href;

    setMeta("property", "og:url", canonical);
    setMeta("property", "og:locale", locale);

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }

    link.href = canonical;

    // One alternate per language plus x-default, rebuilt per route: without
    // them the four translations compete for one URL and none of them ranks.
    document
      .querySelectorAll<HTMLLinkElement>(
        'link[rel="alternate"][data-page-meta]',
      )
      .forEach((previous) => previous.remove());

    const alternates = [
      ...LOCALES.map((alternate) => ({ hreflang: alternate, locale: alternate })),
      { hreflang: "x-default", locale: DEFAULT_LOCALE },
    ];

    alternates.forEach(({ hreflang, locale: alternate }) => {
      const alternateLink = document.createElement("link");

      alternateLink.rel = "alternate";
      alternateLink.hreflang = hreflang;
      alternateLink.href = new URL(
        localePath(alternate, path),
        SITE_CONFIG.url,
      ).href;
      alternateLink.dataset.pageMeta = "true";
      document.head.appendChild(alternateLink);
    });
  }, [path, pathname]);

  useEffect(() => {
    let meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    const previous = meta.content;
    meta.content = noindex ? "noindex, follow" : "index, follow";
    return () => {
      meta.content = previous;
    };
  }, [noindex]);
}
