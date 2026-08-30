import { type ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * A phone screenshot, in a phone. The bezel is CSS rather than baked into the
 * asset, so replacing a screenshot stays a recapture and not a compositing job.
 */
export function PhoneFrame({ children, className = "" }: FrameProps) {
  return (
    <div
      className={`rounded-[2.25rem] border-[0.55rem] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

interface BrowserFrameProps extends FrameProps {
  /** Shown in the address bar. The dashboard really is at this address. */
  url: string;
  /** The hosts section is dark, where a gray-200 border disappears. */
  tone?: "light" | "dark";
}

/**
 * A screenshot of the dashboard, in a browser. The chrome is decoration, so it
 * is hidden from assistive technology and the <img> carries the description.
 */
export function BrowserFrame({
  children,
  url,
  tone = "light",
  className = "",
}: BrowserFrameProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl border ${
        dark ? "border-white/15" : "border-gray-200"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 px-4 h-10 border-b ${
          dark ? "bg-gray-800 border-white/10" : "bg-gray-100 border-gray-200"
        }`}
        aria-hidden="true"
      >
        <span className="flex gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`block w-2.5 h-2.5 rounded-full ${
                dark ? "bg-white/25" : "bg-gray-300"
              }`}
            />
          ))}
        </span>
        <span
          className={`mx-auto px-3 py-0.5 rounded text-xs truncate max-w-[60%] ${
            dark ? "bg-white/10 text-gray-300" : "bg-white text-gray-500"
          }`}
        >
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}
