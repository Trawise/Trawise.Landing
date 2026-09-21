/**
 * The Google Analytics side of a consent decision. index.html bootstraps the
 * tag and the Consent Mode defaults; everything that happens when the visitor
 * answers the banner happens here.
 */

const GA_COOKIE_PREFIX = "_ga";
const EXPIRED = "Thu, 01 Jan 1970 00:00:00 GMT";

function gtag(...args: unknown[]): void {
  if (typeof window === "undefined") return;
  // Defined by the inline snippet, so it exists even when a blocker stops the
  // loader: the command queues into dataLayer and is replayed if gtag.js lands.
  window.gtag?.(...args);
}

/**
 * Every domain the tag could have written its cookies to. gtag defaults to
 * cookie_domain 'auto', which picks the highest level it can — .trawise.org
 * rather than the host actually being browsed — and a cookie can only be
 * expired from the domain that set it.
 */
function cookieDomains(): (string | null)[] {
  const labels = window.location.hostname.split(".");
  const domains: (string | null)[] = [null];

  // Stops one short of the last label so the public suffix is never attempted.
  for (let i = 0; i < labels.length - 1; i += 1) {
    domains.push(`.${labels.slice(i).join(".")}`);
  }

  return domains;
}

/**
 * Consent Mode stops gtag reading and writing cookies, but leaves the ones it
 * already wrote in the browser. Withdrawing consent has to remove them.
 */
function clearAnalyticsCookies(): void {
  const names = document.cookie
    .split(";")
    .map((pair) => pair.split("=")[0].trim())
    .filter(
      (name) =>
        name === GA_COOKIE_PREFIX || name.startsWith(`${GA_COOKIE_PREFIX}_`),
    );

  names.forEach((name) => {
    cookieDomains().forEach((domain) => {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; path=/; expires=${EXPIRED}${domainPart}`;
    });
  });
}

/**
 * Grant analytics storage and record the page the visitor accepted on.
 *
 * The page_view is not redundant. The one gtag('config') queued was sent under
 * a denied default, as a cookieless ping, and a consent update only tells the
 * tag how to behave from here on — it never re-sends what already left. Without
 * this the first measured hit of a new visitor is whatever they navigate to
 * next, or nothing at all if they read the page and leave.
 */
export function grantAnalyticsConsent(): void {
  gtag("consent", "update", { analytics_storage: "granted" });
  gtag("event", "page_view");
}

export function denyAnalyticsConsent(): void {
  gtag("consent", "update", { analytics_storage: "denied" });
  clearAnalyticsCookies();
}
