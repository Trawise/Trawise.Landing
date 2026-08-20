/**
 * CookieBanner
 *
 * A GDPR-compliant cookie consent banner that:
 *  - Appears fixed at the bottom of the viewport on first visit, and again
 *    whenever the user reopens it from the footer's "Cookie settings" control.
 *  - Slides up with a smooth entrance animation (collapsed to 0.01 ms when
 *    the user prefers reduced motion — handled by the global CSS rule).
 *  - Moves keyboard focus to the "Accept All" button on appearance so that
 *    keyboard and screen-reader users are immediately aware of the prompt.
 *    This is the correct mechanism in a CSR app: aria-live on a newly
 *    mounted element is unreliable across screen readers, whereas a focus
 *    change always triggers a screen-reader announcement.
 *  - Offers "Accept All" and "Reject All" actions wired into Google
 *    Consent Mode v2 via the useCookieConsent hook.
 *  - Links to the Privacy Policy page (client-side navigation).
 *  - Is mobile-first: text and buttons stack on narrow viewports and
 *    align in a single row on sm+ viewports.
 *  - Renders nothing (zero cost) once the user has made a choice.
 */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCookieConsent } from "../hooks/use-cookie-consent";
import { buttonClass } from "./ui";

export function CookieBanner() {
  const { showBanner } = useCookieConsent();

  // The visible banner is a separate component so that it genuinely mounts
  // and unmounts with `showBanner`. That is what makes the focus effect below
  // fire on a *reopen* as well as on the first visit — an effect living on an
  // always-mounted wrapper would only ever run once, on initial page load.
  return showBanner ? <CookieBannerDialog /> : null;
}

function CookieBannerDialog() {
  const { t } = useTranslation();
  const { accept, reject } = useCookieConsent();
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Publish the banner's height as --cookie-banner-height so the rest of the
  // layout can stay clear of it. It is measured rather than hardcoded because
  // the height depends on how far the copy wraps, which varies by viewport and
  // by language.
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const root = document.documentElement;
    const apply = () =>
      root.style.setProperty("--cookie-banner-height", `${el.offsetHeight}px`);

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(el);

    return () => {
      observer.disconnect();
      // Falls back to the 0px declared on :root.
      root.style.removeProperty("--cookie-banner-height");
    };
  }, []);

  // Move focus to the Accept button on mount.
  //
  // Why here rather than relying on aria-live:
  //   This is a client-side-rendered app — the banner is injected into the
  //   DOM after the initial parse, not present in the original HTML.
  //   Placing aria-live on the banner's own root element is an anti-pattern
  //   because screen readers only observe *changes within* a persistent live
  //   region; they do not reliably announce the region being added to the DOM.
  //   A focus() call, on the other hand, always triggers an SR announcement.
  //
  // Why preventScroll:
  //   The banner is position:fixed at the bottom of the viewport, so it is
  //   already visible — scrolling to it would be unexpected and jarring.
  useEffect(() => {
    acceptButtonRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div
      ref={bannerRef}
      role="region"
      aria-label={t("cookieBanner.ariaLabel")}
      className="cookie-banner-enter fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200"
      style={{ boxShadow: "0 -4px 24px rgba(0,0,0,0.08)" }}
    >
      <div className="container mx-auto px-4 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          {/* ── Icon + message ─────────────────────────────────────────── */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Decorative emoji — hidden from assistive technology */}
            <span
              className="text-xl leading-none mt-0.5 flex-shrink-0 select-none"
              aria-hidden="true"
            >
              🍪
            </span>

            <p className="text-sm text-gray-600 leading-relaxed">
              {t("cookieBanner.message")}{" "}
              <Link
                to="/privacy-policy"
                className="font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2 decoration-brand-600/40 hover:decoration-current transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-1 rounded"
              >
                {t("cookieBanner.learnMore")}
              </Link>
            </p>
          </div>

          {/* ── Action buttons ──────────────────────────────────────────── */}
          {/*
            Mobile  (< sm): flex row, each button is flex-1 → equal width,
                             balanced feel on narrow screens.
            Desktop (≥ sm): buttons shrink to their content width and sit
                             at the trailing edge of the row.
          */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={reject}
              className={buttonClass("secondary", "sm", "flex-1 sm:flex-initial whitespace-nowrap")}
            >
              {t("cookieBanner.rejectAll")}
            </button>

            <button
              ref={acceptButtonRef}
              type="button"
              onClick={accept}
              className={buttonClass("primary", "sm", "flex-1 sm:flex-initial whitespace-nowrap")}
            >
              {t("cookieBanner.acceptAll")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
