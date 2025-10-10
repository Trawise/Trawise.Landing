import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SITE_CONFIG } from "../lib/constants";
import { LanguageSwitcher } from "./language-switcher";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img
              src="full-logo.png"
              alt={`${SITE_CONFIG.name} logo`}
              className="h-6 w-auto"
              width={120}
              height={24}
            />
            <p className="text-gray-600">{t("footer.description")}.</p>
          </div>

          <div className="space-y-6 md:ml-auto md:max-w-sm">
            <h2 className="text-xl font-bold text-gray-900">
              {t("footer.contactUs")}
            </h2>
            <address className="space-y-4 not-italic">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex-shrink-0" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M21 9L13.6359 14.25H10.3641L3 9L12 3L21 9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.4163 8.37562L12.4163 2.37562C12.293 2.29339 12.1482 2.24951 12 2.24951C11.8518 2.24951 11.707 2.29339 11.5837 2.37562L2.58375 8.37562C2.48101 8.44417 2.39679 8.53703 2.33857 8.64595C2.28034 8.75488 2.24992 8.87649 2.25 9V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V9C21.7501 8.87649 21.7197 8.75488 21.6614 8.64595C21.6032 8.53703 21.519 8.44417 21.4163 8.37562ZM9.0675 14.25L3.75 18V10.4559L9.0675 14.25ZM10.6022 15H13.3978L18.7069 18.75H5.29312L10.6022 15ZM14.9325 14.25L20.25 10.4559V18L14.9325 14.25ZM12 3.90094L19.6791 9.02062L13.3978 13.5H10.6041L4.32281 9.02062L12 3.90094Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex-shrink-0" aria-hidden="true">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M12 2.75C10.0109 2.75 8.10322 3.54018 6.6967 4.9467C5.29018 6.35322 4.5 8.26088 4.5 10.25C4.5 17 12 22.25 12 22.25C12 22.25 19.5 17 19.5 10.25C19.5 8.26088 18.7098 6.35322 17.3033 4.9467C15.8968 3.54018 13.9891 2.75 12 2.75ZM12 13.25C11.4067 13.25 10.8266 13.0741 10.3333 12.7444C9.83994 12.4148 9.45542 11.9462 9.22836 11.3981C9.0013 10.8499 8.94189 10.2467 9.05764 9.66473C9.1734 9.08279 9.45912 8.54824 9.87868 8.12868C10.2982 7.70912 10.8328 7.4234 11.4147 7.30764C11.9967 7.19189 12.5999 7.2513 13.1481 7.47836C13.6962 7.70542 14.1648 8.08994 14.4944 8.58329C14.8241 9.07664 15 9.65666 15 10.25C15 11.0456 14.6839 11.8087 14.1213 12.3713C13.5587 12.9339 12.7956 13.25 12 13.25Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 6.5C11.2583 6.5 10.5333 6.71993 9.91661 7.13199C9.29993 7.54404 8.81928 8.12971 8.53545 8.81494C8.25162 9.50016 8.17736 10.2542 8.32205 10.9816C8.46675 11.709 8.8239 12.3772 9.34835 12.9017C9.8728 13.4261 10.541 13.7833 11.2684 13.9279C11.9958 14.0726 12.7498 13.9984 13.4351 13.7145C14.1203 13.4307 14.706 12.9501 15.118 12.3334C15.5301 11.7167 15.75 10.9917 15.75 10.25C15.75 9.25544 15.3549 8.30161 14.6517 7.59835C13.9484 6.89509 12.9946 6.5 12 6.5ZM12 12.5C11.555 12.5 11.12 12.368 10.75 12.1208C10.38 11.8736 10.0916 11.5222 9.92127 11.111C9.75097 10.6999 9.70642 10.2475 9.79323 9.81105C9.88005 9.37459 10.0943 8.97368 10.409 8.65901C10.7237 8.34434 11.1246 8.13005 11.561 8.04323C11.9975 7.95642 12.4499 8.00097 12.861 8.17127C13.2722 8.34157 13.6236 8.62996 13.8708 8.99997C14.118 9.36998 14.25 9.80499 14.25 10.25C14.25 10.8467 14.0129 11.419 13.591 11.841C13.169 12.2629 12.5967 12.5 12 12.5ZM12 2C9.81273 2.00248 7.71575 2.87247 6.16911 4.41911C4.62247 5.96575 3.75248 8.06273 3.75 10.25C3.75 13.1938 5.11031 16.3138 7.6875 19.2734C8.84552 20.6108 10.1489 21.8151 11.5734 22.8641C11.6995 22.9524 11.8498 22.9998 12.0037 22.9998C12.1577 22.9998 12.308 22.9524 12.4341 22.8641C13.856 21.8147 15.1568 20.6104 16.3125 19.2734C18.8859 16.3138 20.25 13.1938 20.25 10.25C20.2475 8.06273 19.3775 5.96575 17.8309 4.41911C16.2843 2.87247 14.1873 2.00248 12 2ZM12 21.3125C10.4503 20.0938 5.25 15.6172 5.25 10.25C5.25 8.45979 5.96116 6.7429 7.22703 5.47703C8.4929 4.21116 10.2098 3.5 12 3.5C13.7902 3.5 15.5071 4.21116 16.773 5.47703C18.0388 6.7429 18.75 8.45979 18.75 10.25C18.75 15.6153 13.5497 20.0938 12 21.3125Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>{SITE_CONFIG.location}</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-500 order-2 md:order-1">
              <p>
                &copy; {currentYear} {SITE_CONFIG.name}.{" "}
                {t("footer.allRightsReserved")}.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <nav
                className="flex flex-wrap items-center justify-center gap-3"
                aria-label="Footer navigation"
              >
                <LanguageSwitcher />
                <span className="text-gray-400" aria-hidden="true">
                  •
                </span>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current whitespace-nowrap"
                >
                  {t("navigation.home")}
                </Link>
                <span className="text-gray-400" aria-hidden="true">
                  •
                </span>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current whitespace-nowrap"
                >
                  {t("navigation.privacyPolicy")}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
