/**
 * Cookie and analytics consent, persisted in localStorage and pushed into
 * Google Consent Mode v2 on every change.
 *
 * The decision lives in a module-level store rather than component state
 * because two components observe it — the banner and the footer's "cookie
 * settings" control — and they must never disagree about whether the banner is
 * open. Every storage access is guarded: private browsing makes localStorage
 * throw rather than be absent.
 */

import { useSyncExternalStore } from "react";

const CONSENT_KEY = "cookie-consent";

export type ConsentStatus = "accepted" | "rejected" | null;

// ---------------------------------------------------------------------------
// Storage helpers
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

function writeStoredConsent(status: ConsentStatus): void {
  try {
    if (status === null) localStorage.removeItem(CONSENT_KEY);
    else localStorage.setItem(CONSENT_KEY, status);
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
// Module-level store
// ---------------------------------------------------------------------------

let status: ConsentStatus = readStoredConsent();
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setStatus(next: ConsentStatus): void {
  status = next;
  writeStoredConsent(next);
  listeners.forEach((listener) => listener());
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
  /** Clear the stored decision and show the banner again. */
  reopen: () => void;
}

function accept(): void {
  setStatus("accepted");
  updateGtagConsent(true);
}

function reject(): void {
  setStatus("rejected");
  updateGtagConsent(false);
}

/**
 * Revoke the stored decision. Analytics storage is denied immediately rather
 * than waiting for the new choice, so the user is never tracked during the
 * window where the banner is open again.
 */
function reopen(): void {
  setStatus(null);
  updateGtagConsent(false);
}

export function useCookieConsent(): CookieConsentState {
  const consentStatus = useSyncExternalStore(subscribe, () => status);

  return {
    consentStatus,
    showBanner: consentStatus === null,
    accept,
    reject,
    reopen,
  };
}
