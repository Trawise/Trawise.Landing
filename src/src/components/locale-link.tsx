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
 * Internal links go through here rather than being written as bare paths: the
 * URL is what decides the language, so following an unprefixed path out of
 * `/sv/…` drops the visitor back into English and overwrites their stored
 * preference on the way.
 */
export function LocaleLink({ to, ...props }: LocaleLinkProps) {
  const { pathname } = useLocation();

  return <Link to={localePath(localeFromPath(pathname), to)} {...props} />;
}
