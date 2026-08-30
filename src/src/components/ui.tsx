import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="container mx-auto px-4">{children}</div>;
}

/** The measure every band of the page shares, so its edges never move. */
export const CONTENT_WIDTH = "max-w-5xl mx-auto";

type SectionTone = "default" | "muted" | "dark";

/**
 * Backgrounds alternate down the page, so no two neighbouring sections share a
 * ground and every boundary is visible without a rule drawn across it.
 */
const SECTION_TONE: Record<SectionTone, string> = {
  default: "bg-white",
  muted: "bg-gray-50",
  dark: "bg-brand-700",
};

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  /** id of the heading that names the section. */
  labelledBy: string;
}

/** A band of the page: its ground, vertical rhythm and measure, in one place. */
export function Section({
  children,
  id,
  tone = "default",
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${SECTION_TONE[tone]}`}
      aria-labelledby={labelledBy}
    >
      <Container>
        <div className={CONTENT_WIDTH}>{children}</div>
      </Container>
    </section>
  );
}

/** The mark between two links in a row of them. */
export function Separator() {
  return (
    <span className="text-gray-400" aria-hidden="true">
      •
    </span>
  );
}

interface SectionHeadingProps {
  /** Names the audience this section is talking to. */
  eyebrow: string;
  title: string;
  subtitle: string;
  /** The id the <h2> carries, for the section's own aria-labelledby. */
  id: string;
  /** Set on the dark hosts section, where the light palette is unreadable. */
  tone?: "light" | "dark";
}

/** The header every section opens with, shared so their rhythm cannot drift. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-16">
      {/* brand-600, not brand-500: at 14px this is body-size text, and
          brand-500 on gray-50 is only 4.27:1 — short of AA's 4.5. */}
      <span
        className={`inline-block text-sm font-semibold uppercase tracking-wide ${
          dark ? "text-gray-300" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`font-extrabold text-3xl leading-tight md:text-4xl ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <p className={`text-lg ${dark ? "text-gray-300" : "text-gray-600"}`}>
        {subtitle}
      </p>
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center rounded-lg transition-all " +
  "focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 border-2 border-brand-600 text-white " +
    "hover:bg-brand-700 hover:border-brand-700 hover:shadow-sm",
  secondary:
    "bg-white border-2 border-gray-200 text-gray-900 " +
    "hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm focus:border-brand-500",
  // For the dark hosts section, where a brand-600 button would disappear into
  // the ground. The focus ring needs its own offset colour there too.
  inverse:
    "bg-white border-2 border-white text-gray-900 " +
    "hover:bg-gray-100 hover:border-gray-100 focus:ring-white focus:ring-offset-brand-700",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm font-medium",
  md: "px-6 py-3 text-base font-medium",
  lg: "px-8 py-4 text-base font-semibold",
};

/**
 * The classes every button-like thing on the site shares.
 *
 * Declared once so padding, weight, transition and hover cannot drift between
 * files. They are anchors, links and buttons alike, so this hands back the
 * classes rather than an element.
 */
export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  extra = "",
): string {
  return [BASE, VARIANTS[variant], SIZES[size], extra]
    .filter(Boolean)
    .join(" ");
}
