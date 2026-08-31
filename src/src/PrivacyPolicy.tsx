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

export function PrivacyPolicy() {
  const { t } = useTranslation();
  const { reopen } = useCookieConsent();

  usePageMeta({
    title: t("pageTitles.privacyPolicy"),
    description: t("pageDescriptions.privacyPolicy"),
    path: "/privacy-policy",
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

              {/* The legal text below is intentionally provided in English only.
                  This is common practice for privacy policies and ensures legal
                  precision is not lost in translation. */}
              <div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  This Privacy Policy explains what personal data Trawise ("we",
                  "our", or "us") collects, why, who else sees it and how long
                  we keep it. It describes the Service as it works today.
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      1. What This Policy Covers
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      It covers the three places Trawise exists, together the
                      "Service":
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        The <strong>traveller app</strong> for iOS and Android,
                        where you post a request and read the answers
                      </li>
                      <li>
                        The <strong>host dashboard</strong> at{" "}
                        <a
                          href={HOST_APP_URL}
                          className={LINK_CLASS}
                          rel="noopener"
                        >
                          host.trawise.org
                        </a>
                        , where a place manages its listing and answers requests
                      </li>
                      <li>
                        This <strong>website</strong>, which is a marketing site
                        and holds no account of yours
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Once your request reaches a place, that place decides for
                      itself what it does with the details it receives, and more
                      so once a stay there is booked. For that use the place is
                      the controller and its own privacy notice applies, not
                      this one.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      2. Who We Are
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Trawise, {SITE_CONFIG.location}, is the controller of the
                      personal data described here. Write to{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className={LINK_CLASS}
                      >
                        {SITE_CONFIG.email}
                      </a>{" "}
                      about anything in this policy, including to exercise your
                      rights.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      3. The Data We Collect
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      Data you give us
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Account:</strong> your email address, your name,
                        your password (kept only as a hash, never in readable
                        form), your language, and the date you joined
                      </li>
                      <li>
                        <strong>Requests:</strong> the spot you pin or the area
                        you name, your dates and how far you can move them, how
                        many adults, children, infants and pets are coming, your
                        nightly budget and currency, and the reason if you
                        cancel
                      </li>
                      <li>
                        <strong>Listings, if you host:</strong> the name and
                        description of the place, its address and coordinates,
                        the contact email and telephone number you publish for
                        it, photographs, house rules, room types, prices and
                        availability
                      </li>
                      <li>
                        <strong>Organisation, if you host:</strong> its name and
                        country, whether it is a business or a private
                        individual, its members and their roles, and the email
                        addresses you invite colleagues with
                      </li>
                      <li>
                        <strong>Messages:</strong> what you write to the other
                        side of a request, and when each side read it
                      </li>
                      <li>
                        <strong>Reviews:</strong> the rating and comment written
                        after a stay, in either direction
                      </li>
                      <li>
                        <strong>Anything you write to support</strong>
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      Data we collect automatically
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Technical data:</strong> your IP address, which
                        reaches our servers with every request, is used to
                        rate-limit abuse and may appear in server logs, along
                        with the app or browser version, device type and
                        operating system
                      </li>
                      <li>
                        <strong>Push tokens:</strong> a device token issued by
                        Apple or Google and delivered through Expo, held while
                        you have push notifications switched on
                      </li>
                      <li>
                        <strong>Presence:</strong> a record of your live chat
                        connection and when it was last seen, so the other side
                        can be shown whether you are online
                      </li>
                      <li>
                        <strong>Website analytics:</strong> aggregate use of
                        this website through Google Analytics, and only if you
                        accept analytics cookies — see section 9
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      Data we get from someone else
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      If a host invites you into their organisation, we receive
                      the email address they entered so we can send the
                      invitation.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      Data we do not collect
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We never take payment for a stay, so we hold no card
                      number, bank detail or payment history. We do not ask
                      travellers for a telephone number, we do not collect
                      identity documents, we do not follow your location in the
                      background, and we run no advertising or cross-site
                      tracking in the apps. Other guests on your booking are a
                      count and nothing more — we never ask for their names or
                      any other detail about them.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      4. Location
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      The traveller app asks for your device location only while
                      you are using it, and only to centre the map on where you
                      are. You can refuse, and the app still works: choosing the
                      spot by hand, or searching for a place name, does the same
                      job. The app does not use background location.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      The coordinates that reach us are the ones attached to a
                      request you send — the spot you are asking to stay near.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      5. Why We Use It, and on What Legal Ground
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>To run the Service</strong> — your account,
                        matching a request to the places that can host it,
                        carrying messages, recording bookings and reviews.{" "}
                        <em>Ground: performance of our contract with you.</em>
                      </li>
                      <li>
                        <strong>To tell you what happened</strong> — an offer on
                        your request, a new message, a reminder that a stay is
                        approaching, a confirmation or password-reset code. You
                        can switch off the ones the Service can work without.{" "}
                        <em>Ground: performance of our contract with you.</em>
                      </li>
                      <li>
                        <strong>To keep the Service working and safe</strong> —
                        rate limiting, preventing abuse and fraud, looking into
                        what is reported to us.{" "}
                        <em>
                          Ground: our legitimate interest in a service that is
                          not abused.
                        </em>
                      </li>
                      <li>
                        <strong>To understand this website</strong> — which
                        pages people read.{" "}
                        <em>Ground: your consent, given in the banner.</em>
                      </li>
                      <li>
                        <strong>To meet our legal obligations</strong> —
                        responding to a lawful request from an authority,
                        keeping records the law requires.{" "}
                        <em>Ground: legal obligation.</em>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      6. What Other People on Trawise See
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        A request is <strong>not public</strong>. It is shown
                        only to published listings inside the area you chose
                        that can accommodate your party on your dates, and it is
                        not indexed by search engines
                      </li>
                      <li>
                        Those listings see the spot you pinned, your dates, your
                        party, your budget, the name on your profile, when you
                        joined and your rating as a traveller. They do{" "}
                        <strong>not see your email address</strong>, and we do
                        not ask you for a telephone number to pass on
                      </li>
                      <li>
                        Before a booking, a listing shows you its town, its
                        photographs and its position on the map. Its{" "}
                        <strong>
                          street address and the host's email and telephone
                        </strong>{" "}
                        are shown to you once your stay there is booked, and to
                        the members of the organisation behind it
                      </li>
                      <li>
                        Messages are visible to you and to the members of the
                        organisation with access to the listing you are talking
                        to — a place is a team, not one person
                      </li>
                      <li>
                        A published review, and the rating it feeds, is visible
                        to other users beside the name of the person or place it
                        is about
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      7. Who Else We Share It With
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We do not sell your personal data, and we do not share it
                      for anyone else's advertising. We use a small number of
                      providers, each processing data on our instructions:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Microsoft Azure</strong> — the servers,
                        database, photo storage and real-time messaging the
                        Service runs on
                      </li>
                      <li>
                        <strong>Expo</strong> — delivery of push notifications
                        and of updates to the mobile apps
                      </li>
                      <li>
                        <strong>Apple and Google</strong> — the push networks
                        that carry a notification to your device
                      </li>
                      <li>
                        <strong>Google Maps and Places</strong> — the map you
                        read and the place-name search you type into
                      </li>
                      <li>
                        <strong>Our email provider</strong> — delivery of the
                        mail we send you
                      </li>
                      <li>
                        <strong>Google Analytics</strong> — use of this website
                        only, and only with your consent
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We also disclose data where the law requires it, or where
                      we need to in order to establish or defend a legal claim.
                      If the Service is sold or merged, data may transfer with
                      it.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      8. Where Your Data Is Processed
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Trawise is operated from Sweden and our systems run on
                      Microsoft Azure. Some of the providers above operate
                      outside the European Economic Area. Where data reaches
                      them, the transfer relies on the European Commission's
                      Standard Contractual Clauses or another safeguard the GDPR
                      permits. Ask us if you want detail on a specific provider.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      9. Cookies and Local Storage
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>This website</strong> uses Google Analytics to
                      understand usage patterns. Analytics cookies are set only
                      once you accept them; if you decline, or have not yet
                      chosen, no analytics identifiers are stored. Strictly
                      necessary storage — remembering your cookie choice and
                      your language — is always active.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You can change or withdraw your choice at any time using{" "}
                      <button
                        type="button"
                        onClick={reopen}
                        className={LINK_CLASS}
                      >
                        cookie settings
                      </button>
                      , which reopens the consent banner.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>The host dashboard</strong> sets no analytics or
                      advertising cookies. It keeps your sign-in tokens and your
                      language in your browser's own storage, because it cannot
                      keep you signed in otherwise.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>The traveller app</strong> uses no cookies. It
                      keeps your sign-in tokens in your device's secure
                      keystore, with your language and display preferences
                      beside them. Notification permission is granted and
                      withdrawn in your operating system settings, and switched
                      per category inside the app.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      10. How Long We Keep It
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Your account and its history</strong> for as
                        long as the account exists
                      </li>
                      <li>
                        <strong>When you delete your account</strong> we
                        anonymise it rather than erase the rows outright: your
                        name, email address and password are removed, your push
                        tokens are deleted, your sessions are ended and your
                        host memberships are suspended. What remains is the
                        record of stays, messages and reviews that belongs to
                        the other party as much as to you, with nothing left in
                        it that identifies you. It cannot be undone
                      </li>
                      <li>
                        <strong>Presence records</strong> only while a
                        connection is live, and they are swept shortly after one
                        ends
                      </li>
                      <li>
                        <strong>Push tokens</strong> until you switch
                        notifications off, delete your account, or the token
                        stops being valid
                      </li>
                      <li>
                        <strong>Server logs and diagnostics</strong> for a short
                        operational period, for security and debugging
                      </li>
                      <li>
                        <strong>Anything the law requires us to keep</strong>{" "}
                        for as long as it requires
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      11. Security
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Traffic is encrypted in transit. Passwords are stored
                      hashed and are not readable by us; changing one ends every
                      session it was used in; sign-in attempts and emailed codes
                      are rate limited. Uploaded images are re-encoded from
                      decoded pixels, so nothing that rode along inside the
                      original file survives. No system is perfectly secure, and
                      we do not claim otherwise. Where the law requires us to
                      report a breach to you or to the supervisory authority, we
                      will.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      12. Automated Processing
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Two things happen without a person. Matching is automated:
                      a request reaches the listings that fall inside the chosen
                      area and can accommodate the party on the dates asked for.
                      Rate limiting is automated: too many sign-in attempts or
                      emailed codes in a short window will hold you off for a
                      while. Neither produces a legal effect for you in the
                      sense the GDPR means, and whether to offer you a room is
                      decided by the place, not by us and not by a machine.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      13. Your Rights
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Under the GDPR you may ask us for a copy of your data,
                      correct it, delete it, restrict or object to how we use
                      it, or receive it in a portable form. Where we rely on
                      your consent, you may withdraw it at any time; that does
                      not affect what we did before you did.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Two of these are built into the product:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Download my data</strong>, in Settings in either
                        app, gives you a file with your profile, your
                        notification settings, your requests and the offers on
                        them, the messages you wrote, the reviews you wrote and
                        received, and your organisation memberships. Messages
                        you received are left out: the other half of a
                        conversation is someone else's personal data
                      </li>
                      <li>
                        <strong>Delete account</strong>, in Settings in either
                        app, confirmed with your password, does what section 10
                        describes. If you are the last owner of an organisation,
                        hand it over first
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      For anything else, write to{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className={LINK_CLASS}
                      >
                        {SITE_CONFIG.email}
                      </a>
                      . We answer within the time the GDPR allows. If you think
                      we have handled your data badly, you may complain to your
                      local data protection authority — in Sweden, the Swedish
                      Authority for Privacy Protection (IMY).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      14. Changes to This Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may revise this policy. The current version is always
                      on this page and linked from both apps, and the date at
                      the top says when it last moved. Where a change materially
                      affects you, we will give reasonable notice before it
                      takes effect.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      15. Contact
                    </h2>
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
                    <p className="text-gray-700 leading-relaxed mt-4">
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
                  </section>
                </div>

                <div className="pt-8">
                  <BackLink to="/">{t("privacyPolicy.backToHome")}</BackLink>
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
