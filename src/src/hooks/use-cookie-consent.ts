/**
 * useCookieConsent
 *
 * Manages cookie / analytics consent state:
 *  - Reads the prior decision from localStorage on first render so returning
 *    visitors never see the banner again.
 *  - Exposes `showBanner` (true only when no decision has been recorded yet).
 *  - Updates Google Analytics Consent Mode v2 whenever the user acts.
 *  - Wraps all localStorage access in try/catch so the hook is safe in
 *    private-browsing sessions where storage may be restricted.
 */

import { useState, useCallback } from "react";

const CONSENT_KEY = "cookie-consent";

export type ConsentStatus = "accepted" | "rejected" | null;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readStoredConsent(): ConsentStatus {
  try {
    const val = localStorage.getItem(CONSENT_KEY);
    if (val === "accepted" || val === "rejected") return val;
  } catch {
    // localStorage unavailable (private browsing, security policy, etc.)
  }
  return null;
}

function writeStoredConsent(status: "accepted" | "rejected"): void {
  try {
    localStorage.setItem(CONSENT_KEY, status);
  } catch {
    // ignore write failures
  }
}

/**
 * Update Google Consent Mode v2 state.
 * Safe to call even if gtag hasn't loaded yet — dataLayer is already
 * defined and commands will be replayed when the library loads.
 */
function updateGtagConsent(accepted: boolean): void {
  if (typeof window === "undefined") return;
  const gtagFn = (window as Window & { gtag?: (...args: unknown[]) => void })
    .gtag;
  if (typeof gtagFn === "function") {
    gtagFn("consent", "update", {
      analytics_storage: accepted ? "granted" : "denied",
    });
  }
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export interface CookieConsentState {
  /** The current decision, or null if no decision has been made yet. */
  consentStatus: ConsentStatus;
  /** True only when the user has not yet made a decision — show the banner. */
  showBanner: boolean;
  /** Persist 'accepted', update Consent Mode, hide the banner. */
  accept: () => void;
  /** Persist 'rejected', update Consent Mode, hide the banner. */
  reject: () => void;
}

export function useCookieConsent(): CookieConsentState {
  // Initialise from localStorage so the banner never flashes for returning
  // users (the stored value is available synchronously on first render).
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(
    readStoredConsent
  );

  const accept = useCallback(() => {
    writeStoredConsent("accepted");
    setConsentStatus("accepted");
    updateGtagConsent(true);
  }, []);

  const reject = useCallback(() => {
    writeStoredConsent("rejected");
    setConsentStatus("rejected");
    updateGtagConsent(false);
  }, []);

  return {
    consentStatus,
    showBanner: consentStatus === null,
    accept,
    reject,
  };
}
