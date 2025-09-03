import { Link } from 'react-router-dom';
import { Container } from './components/ui';
import { Footer } from './components/footer';

export function NotFound() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 z-50 focus:z-50"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <section
          className="min-h-screen flex items-center"
          aria-labelledby="error-heading"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="text-center space-y-6">
                <h1
                  id="error-heading"
                  className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900"
                >
                  404 - Page Not Found
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  The page you are looking for doesn't exist. Let's get you back to discovering amazing accommodation options.
                </p>
              </div>

              <nav className="pt-8" aria-label="Return navigation">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                  Back to Home
                </Link>
              </nav>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
    </>
  );
}
