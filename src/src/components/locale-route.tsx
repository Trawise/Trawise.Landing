import { lazy, useEffect } from "react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { DEFAULT_LOCALE, isLocale } from "../lib/locales";

// Lazy, like main.tsx's own reference to it: a static import here would pull
// the page into the entry chunk and silently undo that split — the build says
// so, as INEFFECTIVE_DYNAMIC_IMPORT. The Suspense boundary above the routes
// catches it.
const NotFound = lazy(() =>
  import("../NotFound").then((m) => ({ default: m.NotFound })),
);

interface LocaleRouteProps {
  children: ReactNode;
}

/**
 * Makes the URL the source of truth for language. Without this the prefix and
 * the rendered language could disagree — the crawler would index one and the
 * visitor would read the other.
 */
export function LocaleRoute({ children }: LocaleRouteProps) {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;

  // `:lang` matches any first segment, so a mistyped path like /foobar would
  // otherwise render the home page with a 200 and the canonical of "/" — a soft
  // 404 to a crawler, and no signal at all to the visitor.
  const isUnknownSegment = lang !== undefined && !isLocale(lang);

  useEffect(() => {
    if (i18n.resolvedLanguage !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  if (isUnknownSegment) return <NotFound />;

  return <>{children}</>;
}
