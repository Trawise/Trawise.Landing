import { useEffect } from "react";
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
  /** Absolute path of this route, e.g. "/privacy-policy". Sets rel=canonical. */
  path: string;
  /** Keep the route out of search results (utility and error pages). */
  noindex?: boolean;
}

/**
 * Keeps document title, rel=canonical and the robots directive in sync with
 * the active route.
 *
 * React Router swaps components without a document load, so nothing updates
 * these on its own. Without the canonical link every route would keep reporting
 * the homepage URL that index.html hardcodes, and noindex pages would stay
 * indexable on the strength of robots.txt alone.
 *
 * The robots tag is restored — not merely cleared — on unmount, so navigating
 * from a noindex page back to an indexable one cannot leave the directive
 * stuck on.
 */
export function usePageMeta({ title, path, noindex = false }: PageMeta): void {
  useEffect(() => {
    document.title = title
      ? `${title} | ${SITE_CONFIG.name}`
      : SITE_CONFIG.defaultTitle;
  }, [title]);

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = new URL(
      localePath(localeFromPath(window.location.pathname), path),
      SITE_CONFIG.url,
    ).href;
  }, [path]);

  // One alternate per language plus x-default, rebuilt per route: without
  // them the four translations compete for one URL and none of them ranks.
  useEffect(() => {
    const previous = document.querySelectorAll<HTMLLinkElement>(
      'link[rel="alternate"][data-page-meta]',
    );
    previous.forEach((link) => link.remove());

    const alternates = [
      ...LOCALES.map((locale) => ({ hreflang: locale, locale })),
      { hreflang: "x-default", locale: DEFAULT_LOCALE },
    ];

    alternates.forEach(({ hreflang, locale }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = new URL(localePath(locale, path), SITE_CONFIG.url).href;
      link.dataset.pageMeta = "true";
      document.head.appendChild(link);
    });
  }, [path]);

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
