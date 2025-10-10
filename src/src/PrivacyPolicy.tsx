import { useTranslation } from "react-i18next";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Container } from "./components/ui";
import { SITE_CONFIG } from "./lib/constants";

export function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-grow">
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t("privacyPolicy.title")}
                </h1>
                <p className="text-gray-600">
                  {t("privacyPolicy.lastUpdated")}
                </p>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8">
                  This Privacy Policy explains how Trawise ("we", "our", or
                  "us") collects, uses, stores, and shares personal information
                  when you use our mobile application ("Service"). By using the
                  Service, you acknowledge and agree to this policy.
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      1. Information We Collect
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may collect various types of information depending on
                      how you interact with the Service:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Account Information:</strong> Email address,
                        name (optional), and other profile data you provide
                      </li>
                      <li>
                        <strong>Location Data:</strong> Device GPS or
                        approximate location for location-based features
                      </li>
                      <li>
                        <strong>Technical Data:</strong> Device type, operating
                        system, app version, settings
                      </li>
                      <li>
                        <strong>Usage Data:</strong> Interactions, app activity,
                        performance metrics, crash logs
                      </li>
                      <li>
                        <strong>Authentication:</strong> Secure login
                        credentials or tokens
                      </li>
                      <li>
                        <strong>Other Voluntary Data:</strong> Preferences,
                        settings, or additional fields you may submit
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      2. How We Use Your Data
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may use the collected information to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Provide and operate the Service</li>
                      <li>Customize user experience and recommendations</li>
                      <li>Enable location-based functionality</li>
                      <li>
                        Communicate with you (including in-app notifications)
                      </li>
                      <li>Improve reliability, performance, and support</li>
                      <li>
                        Prevent abuse, enforce terms, and comply with
                        regulations
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      3. Legal Grounds
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Depending on your region, our processing of your data may
                      be based on:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Your explicit consent</li>
                      <li>Contractual necessity</li>
                      <li>Legal obligations</li>
                      <li>
                        Legitimate business interests, such as product
                        improvement or fraud prevention
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      4. Sharing of Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may share information with third-party service
                      providers as necessary to operate the Service. This
                      includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Cloud storage and infrastructure services</li>
                      <li>Analytics and monitoring tools</li>
                      <li>Support and communication platforms</li>
                      <li>Legal or regulatory authorities when required</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We do not sell your personal data to third parties.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      5. Data Retention
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We retain data only as long as necessary for the purposes
                      outlined in this policy or as required by law. Retention
                      periods may depend on:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Account status (active/inactive/deleted)</li>
                      <li>Legal requirements</li>
                      <li>Support history</li>
                      <li>Technical and operational needs</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      6. Your Rights
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Depending on your jurisdiction, you may have rights to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Access the personal data we hold about you</li>
                      <li>Correct or update inaccurate information</li>
                      <li>Delete your data or close your account</li>
                      <li>Export your data in a portable format</li>
                      <li>Object to certain types of processing</li>
                      <li>Withdraw consent, where applicable</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      To exercise these rights, contact us at{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current"
                      >
                        {SITE_CONFIG.email}
                      </a>{" "}
                      or via in-app support.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      7. Children's Privacy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      The Service is not intended for use by individuals under
                      the age of 13. We do not knowingly collect data from
                      children. If you believe a child has provided data, please
                      contact us immediately.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      8. Data Security
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We apply reasonable administrative, technical, and
                      physical safeguards to protect your data. While we aim to
                      ensure security, no method of transmission or storage is
                      fully secure.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      9. International Transfers
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Your data may be stored or processed in countries outside
                      your own. Where required, we implement safeguards to
                      ensure lawful international data transfers.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      10. Cookies and Tracking Technologies
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may use cookies or similar technologies to understand
                      usage patterns and enhance functionality. You may manage
                      cookie preferences through your device or operating system
                      settings.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      11. Changes to This Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may revise this Privacy Policy from time to time. The
                      latest version will always be available in-app. Continued
                      use of the Service after updates indicates your acceptance
                      of the changes.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      12. Contact
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      If you have questions or requests regarding this Privacy
                      Policy, please reach out to:
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Email:{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                  </section>
                </div>

                <nav className="pt-8" aria-label="Return navigation">
                  <BackLink to="/">{t("privacyPolicy.backToHome")}</BackLink>
                </nav>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
