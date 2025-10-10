import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "./ui";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label="Go to homepage"
          >
            <img
              src="full-logo.png"
              alt="Trawise logo"
              className="h-10 w-auto"
              loading="eager"
            />
          </Link>

          <nav>
            <a
              href="https://host.trawise.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-900 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:border-blue-300"
            >
              {t("navigation.becomeHost")}
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
