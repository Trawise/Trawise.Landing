import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="container mx-auto px-4">{children}</div>;
}

type ButtonVariant = "primary" | "secondary";
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
  return [BASE, VARIANTS[variant], SIZES[size], extra].filter(Boolean).join(" ");
}
