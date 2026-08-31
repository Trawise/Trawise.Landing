import { useTranslation } from "react-i18next";
import { LocaleLink } from "./components/locale-link";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { HOST_APP_URL, SITE_CONFIG } from "./lib/constants";
import { usePageMeta } from "./hooks/use-page-meta";

const LINK_CLASS =
  "text-brand-600 hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline underline-offset-2 decoration-gray-400 hover:decoration-current focus:decoration-current";

export function TermsOfService() {
  const { t } = useTranslation();

  usePageMeta({
    title: t("pageTitles.termsOfService"),
    description: t("pageDescriptions.termsOfService"),
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
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of Trawise
                  ("we", "our", or "us") — our mobile applications, our host
                  dashboard at{" "}
                  <a href={HOST_APP_URL} className={LINK_CLASS} rel="noopener">
                    host.trawise.org
                  </a>
                  , and this website (together, the "Service"). By creating an
                  account or using the Service you agree to these Terms. If you
                  do not agree, do not use the Service.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  A <strong>traveller</strong> is someone who posts a request
                  for somewhere to stay. A <strong>place</strong> is an
                  accommodation listed on the Service, managed by the{" "}
                  <strong>organisation</strong> that added it. Sections 1 to 3
                  apply to travellers, sections 4 to 6 to places and the people
                  who run them, and the rest to everyone.
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      Our Role
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
                      Any stay agreed through the Service is a contract between
                      the traveller and the place. We do not take payment for
                      stays, hold deposits, or guarantee that a place is
                      available, accurately described, lawfully operated, or
                      suitable for you.
                    </p>
                  </section>

                  <h2 className="text-3xl font-bold text-gray-900 pt-4">
                    Traveller Terms
                  </h2>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      1. Posting a Request
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A request is an invitation for places to respond. It is
                      not an offer to enter a contract, and posting one commits
                      you to nothing. It must describe a stay you actually want:
                      the dates, the party and the budget you post are the terms
                      places will answer on, and they are entitled to rely on
                      them.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      A request may be changed while no place has answered it.
                      Once a place has answered, the terms it answered on are
                      fixed, because changing them would move the ground under a
                      reply that has already been sent. You may cancel a request
                      that is not yet booked at any time.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      2. Offers and Booking
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      An offer from a place is a genuine proposal to host you on
                      the stated dates at the stated price. A booking exists
                      once you accept an offer through the Service, and from
                      that moment your agreement is with the place, on whatever
                      terms the two of you have agreed.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Payment, deposits, taxes, city fees, house rules and
                      cancellation terms are matters between you and the place.
                      We do not collect, hold, refund or mediate money, and we
                      are not responsible for what either of you does about it.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      3. Your Responsibilities as a Traveller
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        Honour a booking you have made, and tell the place
                        promptly if you cannot
                      </li>
                      <li>
                        Comply with the house rules and the law where you are
                        staying
                      </li>
                      <li>
                        Be responsible for the people you bring with you, and
                        for any damage caused during the stay
                      </li>
                      <li>
                        Satisfy yourself about a place before you book. We do
                        not inspect places, and reading a listing is not the
                        same as us vouching for it
                      </li>
                    </ul>
                  </section>

                  <h2 className="text-3xl font-bold text-gray-900 pt-4">
                    Host Terms
                  </h2>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      4. Listing a Place
                    </h3>
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
                        Your listing — its description, photographs, capacity,
                        facilities, house rules, prices and availability — is
                        accurate and kept current
                      </li>
                      <li>
                        The contact details you publish for the place are ones
                        you are entitled to publish
                      </li>
                      <li>
                        Meeting your own legal obligations is your
                        responsibility, not ours. We do not give tax, licensing
                        or regulatory advice
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      5. Answering Requests
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      An offer you send is a commitment. Only offer a stay you
                      can deliver, at a price you will honour, and honour a
                      booking once it is confirmed — or tell the traveller
                      promptly if you cannot. Prices you quote must be complete
                      and truthful: anything a traveller will be asked to pay
                      belongs in the offer or in the listing, not on arrival.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      You must not discriminate against travellers on any ground
                      protected by law.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      6. Organisations and Team Members
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A place belongs to the organisation that added it, not to
                      the individual who created the account. If you invite
                      colleagues into an organisation, you are responsible for
                      what they do with the access you grant them and for
                      removing that access when they leave. Anyone acting for an
                      organisation agrees to these Terms on its behalf and
                      confirms they are authorised to do so.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      A traveller's details reach you so that you can answer
                      their request and host their stay. Use them for that and
                      nothing else, and handle them in line with data protection
                      law — for that use, you are the controller of the data,
                      not us.
                    </p>
                  </section>

                  <h2 className="text-3xl font-bold text-gray-900 pt-4">
                    General Terms
                  </h2>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      7. Your Account
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        Give accurate registration details and keep them current
                      </li>
                      <li>
                        Confirm your email address — the account is not usable
                        until you do
                      </li>
                      <li>
                        Keep your password to yourself. You are responsible for
                        what is done through your account
                      </li>
                      <li>One person, one account</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      8. How Requests Reach Places
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A request is shown to published listings that fall inside
                      the area the traveller chose and can accommodate the party
                      on the dates asked for. We may change how requests are
                      matched, ordered and presented.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      9. Content You Provide
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You keep ownership of the text, photographs and other
                      material you submit. You grant us a non-exclusive,
                      worldwide, royalty-free licence to host, store, reproduce
                      and display that material for the purpose of operating and
                      promoting the Service. You confirm you hold the rights
                      needed to grant that licence. We may remove content that
                      breaches these Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      10. Messages
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The Service carries messages between a traveller and a
                      place about a request. They are not private correspondence
                      between two individuals: the members of the organisation
                      with access to that listing can read them, and we may read
                      a conversation where we need to look into a problem,
                      enforce these Terms, or comply with the law. Keep the
                      exchange to the stay, and do not send payment credentials
                      or identity documents through it.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      11. Reviews
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A review may only be written by someone who completed the
                      stay it describes, and must reflect a genuine, first-hand
                      experience. Neither side sees the other's review before
                      writing its own. A review is not a channel for
                      negotiation, threats or inducements, and offering anything
                      in exchange for one — or for its removal — is a breach of
                      these Terms. We do not edit reviews to suit either side,
                      and we do not remove one because its subject dislikes it,
                      but we may remove one that breaches these Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      12. Acceptable Use
                    </h3>
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
                        Move a conversation off the Service in order to avoid
                        these Terms, or solicit users for an unrelated service
                      </li>
                      <li>
                        Use another user's details for anything other than the
                        stay they relate to
                      </li>
                      <li>
                        Scrape, probe, overload, reverse engineer or otherwise
                        interfere with the Service or its security, or reach it
                        through anything other than our own apps and dashboard
                      </li>
                      <li>
                        Upload anything containing malicious code, or any image
                        you do not hold the rights to
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      13. Reporting a Problem
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you come across a listing, a message, a review or an
                      account that breaks these Terms or the law, write to{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className={LINK_CLASS}
                      >
                        {SITE_CONFIG.email}
                      </a>{" "}
                      and tell us what and where it is. We look into what we are
                      told about and may remove content or restrict an account
                      where these Terms have been broken. Reporting something in
                      bad faith, to gain an advantage over another user, is
                      itself a breach. Where someone is at risk, contact the
                      emergency services — we are not one.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      14. Availability of the Service
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may change, suspend or discontinue any part of the
                      Service, and the Service may set limits on how it is used
                      — the apps state those where they apply.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      15. The Apps
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We grant you a personal, non-transferable, revocable
                      licence to install and use the Trawise apps on devices you
                      control. The apps update themselves, including over the
                      air, so that everyone runs a version we can support. Where
                      you install through Apple's App Store or Google Play, that
                      store's terms apply to the download alongside these Terms;
                      the stores are not parties to these Terms and are not
                      responsible for the Service. Maps and place search inside
                      the apps are provided by Google and are subject to
                      Google's terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      16. Suspension, Termination and Leaving
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You may stop using the Service and delete your account at
                      any time, from Settings in either app. Deleting an account
                      anonymises it: your profile details are removed and your
                      sign-in stops working, while the record of stays, messages
                      and reviews that belongs to the other party as much as to
                      you remains, with nothing left in it that identifies you.
                      It cannot be undone. If you are the last owner of an
                      organisation, hand it over before you leave — places
                      belong to their organisation and are not deleted with a
                      member's account.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We may suspend or close an account that breaches these
                      Terms, that is used to harm another user, or where the law
                      requires it. Where it is reasonable to do so, we will tell
                      you why.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      17. Disclaimers and Liability
                    </h3>
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
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      18. Privacy
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our{" "}
                      <LocaleLink to="/privacy-policy" className={LINK_CLASS}>
                        Privacy Policy
                      </LocaleLink>{" "}
                      explains what personal data we collect, who else sees it
                      and how long we keep it. It forms part of these Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      19. Changes to These Terms
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may revise these Terms. The current version is always
                      available here and from within the apps, and the date at
                      the top says when it last moved. Where a change materially
                      affects you, we will give reasonable notice before it
                      takes effect; continuing to use the Service after that
                      means you accept it.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      20. Governing Law and Disputes
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms are governed by the law of Sweden, and the
                      courts of Sweden have jurisdiction. If you are a consumer
                      resident elsewhere in the EU, you keep the protection of
                      the mandatory rules of your own country, and you may bring
                      proceedings there.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      A dispute about a stay is between the traveller and the
                      place. If your dispute is with us, write to{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className={LINK_CLASS}
                      >
                        {SITE_CONFIG.email}
                      </a>{" "}
                      first.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      21. General
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms and the Privacy Policy are the whole agreement
                      between you and us about the Service. If a provision is
                      found unenforceable, the rest stands. Not enforcing a
                      provision is not a waiver of it. You may not transfer your
                      rights under these Terms; we may transfer ours if the
                      Service is sold or merged. These Terms are written in
                      English, and the English text governs.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      22. Contact
                    </h3>
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
                    <p className="text-gray-700 leading-relaxed mt-4">
                      How the product actually works, step by step, is in the{" "}
                      <LocaleLink to="/faq" className={LINK_CLASS}>
                        FAQ
                      </LocaleLink>
                      .
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
