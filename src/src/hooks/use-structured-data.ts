import { useEffect } from "react";

/** Marks the tag as ours, so a re-render replaces it instead of stacking. */
const OWNED_ATTRIBUTE = "data-structured-data";

/**
 * Publishes a JSON-LD graph for the active route and removes it on unmount.
 *
 * React Router swaps components without a document load, so a script left in
 * the head would describe the previous page.
 */
export function useStructuredData(graph: object): void {
  const serialised = JSON.stringify(graph);

  useEffect(() => {
    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.setAttribute(OWNED_ATTRIBUTE, "true");
    script.textContent = serialised;
    document.head.appendChild(script);

    return () => script.remove();
  }, [serialised]);
}
