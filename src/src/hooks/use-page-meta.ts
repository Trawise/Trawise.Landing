import { useEffect } from "react";
import { SITE_CONFIG } from "../lib/constants";

interface PageMeta {
  /**
   * The page name, rendered as "Page Name | Trawise".
   *
   * Omit it on the home page: the hook then applies SITE_CONFIG.defaultTitle,
   * which is byte-identical to the <title> already in index.html, so the tab
   * label never flickers on first paint. That is also the honest choice for
   * SEO — language is selected client-side and every locale shares one URL,
   * so the title crawlers index is the default one regardless.
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
 * React Router swaps components without a document load, so none of these are
 * updated for us. Without the canonical link every route would keep reporting
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
    link.href = new URL(path, SITE_CONFIG.url).href;
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
