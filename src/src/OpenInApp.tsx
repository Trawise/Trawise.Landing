import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { LocaleLink } from "./components/locale-link";
import { usePageMeta } from "./hooks/use-page-meta";

const APP_SCHEME = "trawise";

// Long enough for the system prompt to take over the tab.
const FALLBACK_DELAY_MS = 1_500;

// Mail clients strip a custom scheme, so notification links point here and this
// page performs the jump.
export function OpenInApp() {
  const { t } = useTranslation();
  const { pathname, search } = useLocation();
  const [hasWaited, setHasWaited] = useState(false);

  const target = useMemo(() => {
    const route = pathname.replace(/^\/open\/?/, "");

    return `${APP_SCHEME}://${route}${search}`;
  }, [pathname, search]);

  usePageMeta({
    title: t("openInApp.title"),
    description: t("openInApp.description"),
    path: "/open",
    noindex: true,
  });

  useEffect(() => {
    window.location.href = target;

    const timer = window.setTimeout(() => setHasWaited(true), FALLBACK_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [target]);

  return (
    <main
      id="main-content"
      className="grow flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          {t("openInApp.heading")}
        </h1>
        <p className="mt-3 text-slate-600">{t("openInApp.body")}</p>
        <a
          href={target}
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white"
        >
          {t("openInApp.action")}
        </a>
        {hasWaited && (
          <p className="mt-6 text-sm text-slate-500">
            {t("openInApp.fallback")}{" "}
            <LocaleLink to="/" className="font-medium text-indigo-600 underline">
              {t("openInApp.fallbackLink")}
            </LocaleLink>
          </p>
        )}
      </div>
    </main>
  );
}
