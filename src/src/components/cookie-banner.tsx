/**
 * CookieBanner
 *
 * A GDPR-compliant cookie consent banner that:
 *  - Appears fixed at the bottom of the viewport on first visit.
 *  - Slides up with a smooth entrance animation (collapsed to 0.01 ms when
 *    the user prefers reduced motion — handled by the global CSS rule).
 *  - Moves keyboard focus to the "Accept All" button on mount so that
 *    keyboard and screen-reader users are immediately aware of the prompt.
 *    This is the correct mechanism in a CSR app: aria-live on a newly
 *    mounted element is unreliable across screen readers, whereas a focus
 *    change always triggers a screen-reader announcement.
 *  - Offers "Accept All" and "Reject All" actions wired into Google
 *    Consent Mode v2 via the useCookieConsent hook.
 *  - Links to the Privacy Policy page (client-side navigation).
 *  - Matches the site's existing design system: border-2, rounded-lg,
 *    blue-600 primary, gray-200 secondary, identical focus rings.
 *  - Is mobile-first: text and buttons stack on narrow viewports and
 *    align in a single row on sm+ viewports.
 *  - Returns null (zero render cost) once the user has made a choice.
 */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCookieConsent } from "../hooks/use-cookie-consent";

export function CookieBanner() {
  const { t } = useTranslation();
  const { showBanner, accept, reject } = useCookieConsent();
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

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
  //
  // Safety:
  //   This effect runs only once (empty dep array). The component only mounts
  //   when showBanner is true, so acceptButtonRef.current is never null here.
  //   If showBanner were somehow false on mount the optional-chain no-ops.
  useEffect(() => {
    acceptButtonRef.current?.focus({ preventScroll: true });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!showBanner) return null;

  return (
    <div
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
                className="font-medium text-blue-600 hover:text-blue-700 underline underline-offset-2 decoration-blue-300 hover:decoration-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
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
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
            >
              {t("cookieBanner.rejectAll")}
            </button>

            <button
              ref={acceptButtonRef}
              type="button"
              onClick={accept}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-700 hover:border-blue-700 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
            >
              {t("cookieBanner.acceptAll")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
