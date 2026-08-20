import type { ComponentProps } from "react";
import { Link, useLocation } from "react-router-dom";

import { localeFromPath, localePath } from "../lib/locales";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "to"> & {
  /** Path without a language prefix, e.g. "/terms". */
  to: string;
};

/**
 * A link that stays in the language the visitor is reading.
 *
 * Every internal link used to be written as a bare path, so following one from
 * `/sv/…` landed on an unprefixed URL — and since the URL is what decides the
 * language, the site switched back to English and overwrote the stored
 * preference on the way. Going through here makes that impossible to forget.
 */
export function LocaleLink({ to, ...props }: LocaleLinkProps) {
  const { pathname } = useLocation();

  return <Link to={localePath(localeFromPath(pathname), to)} {...props} />;
}
