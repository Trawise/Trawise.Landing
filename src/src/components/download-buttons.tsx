import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DOWNLOAD_LINKS } from "../lib/constants";

interface DownloadButtonProps {
  store: "playStore" | "appStore";
  className?: string;
}

const playStoreIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
  </svg>
);

const appStoreIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
  </svg>
);

export function DownloadButton({ store, className = "" }: DownloadButtonProps) {
  const { t } = useTranslation();

  const config = {
    playStore: {
      href: DOWNLOAD_LINKS.playStore,
      icon: playStoreIcon,
      label: t("downloadButtons.playStore.label"),
      storeName: t("downloadButtons.playStore.store"),
      analyticsEvent: "download_android_clicked",
    },
    appStore: {
      href: DOWNLOAD_LINKS.appStore,
      icon: appStoreIcon,
      label: t("downloadButtons.appStore.label"),
      storeName: t("downloadButtons.appStore.store"),
      analyticsEvent: "download_ios_clicked",
    },
  }[store];

  const handleClick = () => {
    if (typeof window !== "undefined" && "gtag" in window) {
      try {
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          config.analyticsEvent,
          {
            event_category: "download",
            event_label: store,
          }
        );
      } catch (error) {
        console.error("Analytics tracking failed:", error);
      }
    }
  };

  return (
    <Link
      to={config.href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-lg transition-all group hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-300 ${className}`}
      aria-label={`${config.label} ${config.storeName} - Download Trawise mobile app`}
      role="button"
    >
      <div className="flex-shrink-0 text-indigo-500" aria-hidden="true">
        {config.icon}
      </div>
      <div className="text-left">
        <div className="text-sm font-semibold text-gray-500 group-hover:text-gray-600 transition-colors">
          {config.label}
        </div>
        <div className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
          {config.storeName}
        </div>
      </div>
    </Link>
  );
}
