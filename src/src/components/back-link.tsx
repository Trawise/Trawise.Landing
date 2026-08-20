import { LocaleLink } from "./locale-link";

interface BackLinkProps {
  to: string;
  children: string;
}

export function BackLink({ to, children }: BackLinkProps) {
  return (
    <LocaleLink
      to={to}
      className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline decoration-transparent hover:decoration-current focus:decoration-current"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M19 12H5M5 12L12 19M5 12L12 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </LocaleLink>
  );
}
