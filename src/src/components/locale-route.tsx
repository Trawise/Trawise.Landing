import { useEffect } from "react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { DEFAULT_LOCALE, isLocale } from "../lib/locales";

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

  useEffect(() => {
    if (i18n.resolvedLanguage !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}
