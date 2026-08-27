import { useTranslation } from "react-i18next";
import { LocaleLink } from "./components/locale-link";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { SITE_CONFIG } from "./lib/constants";
import { usePageMeta } from "./hooks/use-page-meta";

const LINK_CLASS =
  "text-brand-600 hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline decoration-transparent hover:decoration-current focus:decoration-current";

export function TermsOfService() {
  const { t } = useTranslation();

  usePageMeta({
    title: t("pageTitles.termsOfService"),
    path: "/terms",
  });

  return (
    <>
      <SkipLink />

      <Header />

      <main id="main-content" className="grow">
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t("termsOfService.title")}
                </h1>
                <p className="text-gray-600">
                  {t("termsOfService.lastUpdated")}
                </p>
              </header>

              {/* English only, for the same reason as the privacy policy: the
                  legal meaning must not drift between translations. */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8">
                  These Terms of Service ("Terms") govern your use of Trawise
                  ("we", "our", or "us") — our mobile applications, our host
                  dashboard, and this website (together, the "Service"). By
                  creating an account or using the Service you agree to these
                  Terms. If you do not agree, do not use the Service.
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      1. What Trawise Is
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Trawise is a marketplace that works in reverse: a
                      traveller publishes a request describing where they want
                      to stay, when, for how many people, and at what nightly
                      budget, and nearby places respond with offers. We provide
                      the platform on which that exchange happens.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>
                        We are not a party to any booking, and we are not a
                        travel agency, a tour operator or an accommodation
                        provider.
                      </strong>{" "}
                      Any stay you agree through the Service is a contract
                      between the traveller and the place. We do not take
                      payment for stays, hold deposits, or guarantee that a
                      place is available, accurately described, lawfully
                      operated, or suitable for you.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      2. Eligibility and Your Account
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        You must be at least 18 years old to create an account
                        and to agree a stay
                      </li>
                      <li>
                        You must give accurate registration details and keep
                        them current
                      </li>
                      <li>
                        You are responsible for everything done through your
                        account, and for keeping your password confidential
                      </li>
                      <li>
                        You must confirm your email address before the account
                        becomes usable
                      </li>
                      <li>One person, one account</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      3. Requests, Offers and Bookings
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A request is an invitation for places to respond, not an
                      offer to enter a contract. An offer from a place is a
                      genuine proposal to host you on the stated dates at the
                      stated terms. A booking exists once the traveller accepts
                      an offer through the Service.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        A traveller may book at most one place per request
                      </li>
                      <li>
                        Payment, deposits, taxes, city fees and cancellation
                        terms are arranged directly between the traveller and
                        the place, unless we state otherwise in the Service
                      </li>
                      <li>
                        Once booked, changing or cancelling a stay is a matter
                        between the traveller and the place
                      </li>
                      <li>
                        A place must honour a booking it has confirmed, and must
                        tell the traveller promptly if it cannot
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      4. Obligations of Places and Organisations
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you list a place, whether as a business or as a private
                      individual, you confirm that:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        You are entitled to offer the accommodation, and doing
                        so complies with the law, your lease, your building
                        rules and any registration, licensing or tax obligation
                        that applies to you
                      </li>
                      <li>
                        Your listing — description, photographs, capacity,
                        facilities and rules — is accurate and current
                      </li>
                      <li>
                        You will not discriminate against travellers on any
                        ground protected by law
                      </li>
                      <li>
                        Where you invite colleagues into an organisation, you
                        are responsible for what they do with the access you
                        grant them
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      5. Acceptable Use
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You agree not to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        Post anything unlawful, fraudulent, misleading,
                        harassing, hateful, or infringing on someone else's
                        rights
                      </li>
                      <li>
                        Impersonate another person, or misrepresent who is
                        offering or requesting a stay
                      </li>
                      <li>
                        Move the conversation off the Service in order to avoid
                        these Terms, or solicit users for an unrelated service
                      </li>
                      <li>
                        Scrape, probe, overload, reverse engineer or otherwise
                        interfere with the Service or its security
                      </li>
                      <li>
                        Upload anything containing malicious code, or any image
                        you do not have the right to use
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      6. Content You Provide
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      You keep ownership of the text, photographs and other
                      material you submit. You grant us a non-exclusive,
                      worldwide, royalty-free licence to host, store, reproduce
                      and display that material for the purpose of operating and
                      promoting the Service. You confirm you have the rights
                      needed to grant that licence. We may remove content that
                      breaches these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      7. Reviews
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Reviews may only be written by someone who completed the
                      stay being reviewed, and must reflect a genuine,
                      first-hand experience. Reviews may be corrected shortly
                      after they are written; they are not a channel for
                      negotiation, threats or inducements. We do not edit
                      reviews to suit either side, but we may remove one that
                      breaches these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      8. Price and Availability
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      The Service is currently free to use for travellers and
                      for places. We may introduce paid features in future; if
                      we do, we will say so clearly before you are charged, and
                      nothing you already use will start costing money without
                      notice. We may change, suspend or discontinue any part of
                      the Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      9. Suspension and Termination
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      You may stop using the Service and delete your account at
                      any time. We may suspend or close an account that breaches
                      these Terms, that is used to harm another user, or where
                      we are required to do so by law. Where it is reasonable to
                      do so, we will tell you why.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      10. Disclaimers and Liability
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      The Service is provided as it is. We do not verify the
                      identity of every user or inspect the places listed, and
                      we make no warranty about their conduct, safety or
                      legality. To the extent the law allows, we are not liable
                      for any indirect or consequential loss, or for any
                      dispute, injury or loss arising from a stay agreed through
                      the Service.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Nothing in these Terms limits any liability that cannot
                      lawfully be limited, and nothing here removes the
                      statutory rights you have as a consumer.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      11. Privacy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our{" "}
                      <LocaleLink to="/privacy-policy" className={LINK_CLASS}>
                        Privacy Policy
                      </LocaleLink>{" "}
                      explains what personal data we collect and why. It forms
                      part of these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      12. Changes to These Terms
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may revise these Terms. The current version is always
                      available here and in the apps. If a change materially
                      affects you, we will give reasonable notice; continuing to
                      use the Service after a change means you accept it.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      13. Governing Law
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms are governed by the law of Sweden, and the
                      courts of Sweden have jurisdiction. If you are a consumer
                      resident elsewhere in the EU, you keep the protection of
                      the mandatory rules of your own country, and you may bring
                      proceedings there.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      14. Contact
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Questions about these Terms:
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Email:{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className={LINK_CLASS}
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      {SITE_CONFIG.name}, {SITE_CONFIG.location}
                    </p>
                  </section>
                </div>

                <div className="pt-8">
                  <BackLink to="/">{t("termsOfService.backToHome")}</BackLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
