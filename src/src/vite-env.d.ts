/// <reference types="vite/client" />

declare global {
  interface Window {
    /**
     * Google Analytics (gtag.js). Declared here because the tag is bootstrapped
     * by an inline script in index.html rather than an npm package, so nothing
     * else teaches TypeScript that it exists. Optional on purpose: an ad or
     * tracking blocker can prevent the loader from ever defining it, so every
     * call site must still guard.
     */
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
