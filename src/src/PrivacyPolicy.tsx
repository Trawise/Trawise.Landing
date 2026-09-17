import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LocaleLink } from "./components/locale-link";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { HOST_APP_URL, SITE_CONFIG } from "./lib/constants";
import { usePageMeta } from "./hooks/use-page-meta";
import { useCookieConsent } from "./hooks/use-cookie-consent";

const LINK_CLASS =
  "text-brand-600 hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline underline-offset-2 decoration-gray-400 hover:decoration-current focus:decoration-current";

const Email = () => (
  <a href={`mailto:${SITE_CONFIG.email}`} className={LINK_CLASS}>
    {SITE_CONFIG.email}
  </a>
);

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="space-y-4 text-gray-700 leading-relaxed">
    <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
    {children}
  </section>
);

const List = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc list-inside space-y-2">{children}</ul>
);

export function PrivacyPolicy() {
  const { t } = useTranslation();
  const { reopen } = useCookieConsent();

  usePageMeta({
    title: t("pageTitles.privacyPolicy"),
    description: t("pageDescriptions.privacyPolicy"),
    path: "/privacy-policy",
    localised: false,
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
                  {t("privacyPolicy.title")}
                </h1>
                <p className="text-gray-600">
                  {t("privacyPolicy.lastUpdated")}
                </p>
              </header>

              {/* English only, so the legal meaning cannot drift between
                  translations. */}
              <div className="space-y-10">
                <p className="text-gray-700 leading-relaxed">
                  This policy explains what personal data Trawise ("we")
                  collects, why, who else sees it and how long we keep it. It
                  describes the Service as it works today.
                </p>

                <Section title="1. Scope">
                  <p>The Service is three things together:</p>
                  <List>
                    <li>the traveller app for iOS and Android;</li>
                    <li>
                      the host dashboard at{" "}
                      <a
                        href={HOST_APP_URL}
                        className={LINK_CLASS}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        host.trawise.org
                      </a>
                      ;
                    </li>
                    <li>this website, which holds no account of yours.</li>
                  </List>
                  <p>
                    Once your request reaches a place, that place decides for
                    itself what it does with the details it receives. For that
                    use the place is the controller and its own privacy notice
                    applies.
                  </p>
                </Section>

                <Section title="2. Controller">
                  <p>
                    Trawise, {SITE_CONFIG.location}, is the controller of the
                    data described here. Write to <Email /> about anything in
                    this policy, including to exercise your rights.
                  </p>
                </Section>

                <Section title="3. What we collect">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Data you give us
                  </h3>
                  <List>
                    <li>
                      <strong>Account:</strong> email address, name, password
                      (stored as a hash), language, and the date you joined.
                    </li>
                    <li>
                      <strong>Requests:</strong> the spot or area, the dates,
                      the party, the nightly budget and currency, and the
                      reason if you cancel.
                    </li>
                    <li>
                      <strong>Listings, if you host:</strong> the place's name,
                      description, address and coordinates, the contact email
                      and telephone you publish for it, photographs, house
                      rules, room types, prices and availability.
                    </li>
                    <li>
                      <strong>Organisation, if you host:</strong> its name,
                      whether it is a business or a private individual, its
                      members and their roles, and the email addresses you
                      invite colleagues with.
                    </li>
                    <li>
                      <strong>Bookings:</strong> the place, room type, dates and
                      agreed nightly price of each stay, and if it is
                      cancelled, which side cancelled and the reason given.
                    </li>
                    <li>
                      <strong>Messages:</strong> what you write to the other
                      side of a request, and how far each side has read.
                    </li>
                    <li>
                      <strong>Reviews:</strong> the rating and comment written
                      after a stay, in either direction.
                    </li>
                    <li>
                      <strong>Reports:</strong> what you report to us and how
                      it was resolved.
                    </li>
                  </List>

                  <h3 className="text-lg font-semibold text-gray-900">
                    Data we collect automatically
                  </h3>
                  <List>
                    <li>
                      <strong>Technical data:</strong> your IP address, used to
                      rate-limit abuse and present in server logs, with the app
                      or browser version, device type and operating system.
                    </li>
                    <li>
                      <strong>Devices:</strong> for each handset you sign in
                      on, a push token issued by Apple or Google and delivered
                      through Expo, and when it was last seen.
                    </li>
                    <li>
                      <strong>Notifications:</strong> a record of each thing
                      the Service told you, with the facts it names and whether
                      you have read it, and the address or device each email or
                      push went to.
                    </li>
                    <li>
                      <strong>Location:</strong> the traveller app reads your
                      device location only while you use it, to centre the map.
                      You can refuse and choose the spot by hand. Only the
                      coordinates of a request you send reach us.
                    </li>
                    <li>
                      <strong>Presence:</strong> whether your live chat
                      connection is open, so the other side can see you are
                      online.
                    </li>
                    <li>
                      <strong>Performance:</strong> how long the traveller app
                      takes to start, with app version, device model and
                      operating system, sent to Expo.
                    </li>
                    <li>
                      <strong>Website analytics:</strong> aggregate use of this
                      website through Google Analytics, only if you accept
                      analytics cookies (section 8).
                    </li>
                  </List>

                  <h3 className="text-lg font-semibold text-gray-900">
                    Data we do not collect
                  </h3>
                  <p>
                    We take no payment for stays, so we hold no card, bank or
                    payment details. We do not ask travellers for a telephone
                    number, collect identity documents, track location in the
                    background, or run advertising or cross-site tracking in
                    the apps. Other guests on a booking are a count and nothing
                    more.
                  </p>
                </Section>

                <Section title="4. Why we use it">
                  <List>
                    <li>
                      <strong>To run the Service:</strong> your account,
                      matching requests to places, carrying messages, recording
                      bookings and reviews. Ground: our contract with you.
                    </li>
                    <li>
                      <strong>To tell you what happened:</strong> an offer, a
                      booking, a cancellation, a message, a reminder, a
                      confirmation or reset code. You can switch off the ones
                      the Service can work without. Ground: our contract with
                      you.
                    </li>
                    <li>
                      <strong>To keep the Service working and safe:</strong>{" "}
                      rate limiting, preventing abuse, looking into reports,
                      measuring app start-up. Ground: our legitimate interest
                      in a secure, reliable service.
                    </li>
                    <li>
                      <strong>To meet legal obligations</strong> and to
                      establish or defend legal claims.
                    </li>
                    <li>
                      <strong>Website analytics:</strong> only with your
                      consent.
                    </li>
                  </List>
                </Section>

                <Section title="5. What other users see">
                  <List>
                    <li>
                      A request is shown only to published places inside the
                      chosen area that can host the party on the dates. It is
                      not public and not indexed by search engines.
                    </li>
                    <li>
                      Those places see the spot, dates, party, budget, profile
                      name, join date and traveller rating. They do not see the
                      email address.
                    </li>
                    <li>
                      Before a booking, a place shows its town, photographs and
                      map position. Its street address and the host's contact
                      details are shown once a stay there is booked.
                    </li>
                    <li>
                      Messages are visible to the traveller and to the members
                      of the organisation with access to the listing.
                    </li>
                    <li>
                      A published review and the rating it feeds are visible to
                      other users.
                    </li>
                  </List>
                </Section>

                <Section title="6. Providers">
                  <p>
                    We do not sell personal data or share it for anyone else's
                    advertising. These providers process data on our
                    instructions:
                  </p>
                  <List>
                    <li>
                      <strong>Microsoft Azure:</strong> servers, database, photo
                      storage and real-time messaging.
                    </li>
                    <li>
                      <strong>Expo:</strong> push delivery, app updates and
                      start-up measurement.
                    </li>
                    <li>
                      <strong>Apple and Google:</strong> the push networks.
                    </li>
                    <li>
                      <strong>Google Maps and Places:</strong> the map and
                      place-name search in the apps.
                    </li>
                    <li>
                      <strong>Our email provider:</strong> delivery of the mail
                      we send.
                    </li>
                    <li>
                      <strong>Google Analytics:</strong> this website only, with
                      your consent.
                    </li>
                  </List>
                  <p>
                    We also disclose data where the law requires it or to
                    establish or defend a legal claim. If the Service is sold or
                    merged, data may transfer with it.
                  </p>
                </Section>

                <Section title="7. Where it is processed">
                  <p>
                    Trawise is operated from Sweden on Microsoft Azure. Some
                    providers operate outside the European Economic Area; those
                    transfers rely on the European Commission's Standard
                    Contractual Clauses or another safeguard the GDPR permits.
                  </p>
                </Section>

                <Section title="8. Cookies">
                  <p>
                    This website sets analytics cookies only after you accept
                    them. Storage for your cookie choice and language is always
                    on. Change your choice at any time in{" "}
                    <button
                      type="button"
                      onClick={reopen}
                      className={LINK_CLASS}
                    >
                      cookie settings
                    </button>
                    . The apps use no advertising cookies; they keep your
                    sign-in tokens and language in the device's secure storage.
                  </p>
                </Section>

                <Section title="9. How long we keep it">
                  <List>
                    <li>
                      <strong>Your account and its history</strong> while the
                      account exists.
                    </li>
                    <li>
                      <strong>When you delete your account</strong> we
                      anonymise it: name, email address, password and devices
                      are removed, queued notifications are discarded, sessions
                      are ended and host memberships are suspended. Stays,
                      messages and reviews remain on the other party's record
                      with nothing that identifies you. It cannot be undone.
                    </li>
                    <li>
                      <strong>Devices</strong> until you sign out on the
                      handset, delete your account, or the push network reports
                      it gone; an account keeps its ten most recently seen.
                    </li>
                    <li>
                      <strong>Notifications</strong> 180 days once read, a year
                      if never read. Delivery records 30 days, or 90 days if
                      undeliverable. Push receipts about a day.
                    </li>
                    <li>
                      <strong>Presence</strong> only while a connection is live.
                    </li>
                    <li>
                      <strong>Server logs</strong> for a short operational
                      period.
                    </li>
                    <li>
                      <strong>Anything the law requires us to keep</strong> for
                      as long as it requires.
                    </li>
                  </List>
                </Section>

                <Section title="10. Security">
                  <p>
                    Traffic is encrypted in transit. Passwords are stored
                    hashed; changing one ends every session. Sign-in attempts
                    and emailed codes are rate limited. Uploaded images are
                    re-encoded, so nothing hidden in the original file
                    survives. No system is perfectly secure; where the law
                    requires us to report a breach, we will.
                  </p>
                </Section>

                <Section title="11. Your rights">
                  <p>
                    Under the GDPR you may ask for a copy of your data, correct
                    it, delete it, restrict or object to its use, or receive it
                    in a portable form, and withdraw consent where we rely on
                    it. Two of these are built in:
                  </p>
                  <List>
                    <li>
                      <strong>Download my data</strong>, in Settings in either
                      app: your profile, notification settings and devices,
                      requests and their offers, bookings, messages you wrote,
                      reviews written and received, notifications, reports and
                      organisation memberships. Messages you received are the
                      other person's data and are left out.
                    </li>
                    <li>
                      <strong>Delete account</strong>, in Settings in either
                      app, confirmed with your password, does what section 9
                      describes. The last owner of an organisation hands it
                      over first.
                    </li>
                  </List>
                  <p>
                    For anything else, write to <Email />. You may also complain
                    to your data protection authority; in Sweden, the Swedish
                    Authority for Privacy Protection (IMY).
                  </p>
                </Section>

                <Section title="12. Changes">
                  <p>
                    The current version is always on this page and linked from
                    both apps; the date at the top says when it changed. Where a
                    change materially affects you, we give reasonable notice
                    first.
                  </p>
                </Section>

                <Section title="13. Contact">
                  <p>
                    <Email />
                    <br />
                    {SITE_CONFIG.name}, {SITE_CONFIG.location}
                  </p>
                </Section>

                <p className="text-gray-700 leading-relaxed">
                  The{" "}
                  <LocaleLink to="/terms" className={LINK_CLASS}>
                    Terms of Service
                  </LocaleLink>{" "}
                  set out the rules of using Trawise, and the{" "}
                  <LocaleLink to="/faq" className={LINK_CLASS}>
                    FAQ
                  </LocaleLink>{" "}
                  explains how it works.
                </p>
              </div>

              <div className="mt-12">
                <BackLink to="/">{t("privacyPolicy.backToHome")}</BackLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
