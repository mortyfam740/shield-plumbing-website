import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteShell, business } from "../site-components";

export const metadata: Metadata = {
  title: "SMS Opt-In",
  description: "Optional text messaging consent for Shield Plumbing LLC service communications.",
};

export default function SmsOptInPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Optional text updates" title="SMS Opt-In">
        <p>
          Choose whether you would like Shield Plumbing LLC to communicate with
          you by text about your service request.
        </p>
      </PageHero>
      <section className="page-shell-narrow optin-layout">
        <form className="optin-form" aria-describedby="form-status">
          <div className="field-row">
            <label>
              Full name
              <input type="text" name="name" autoComplete="name" disabled />
            </label>
            <label>
              Mobile phone number
              <input type="tel" name="mobile" autoComplete="tel" disabled />
            </label>
          </div>
          <label>
            Service address or city <span>(optional)</span>
            <input type="text" name="location" autoComplete="street-address" disabled />
          </label>
          <label className="consent-check">
            <input type="checkbox" name="sms-consent" disabled />
            <span>
              I agree to receive conversational and transactional text messages
              from Shield Plumbing LLC at the mobile number provided, including
              messages about service requests, scheduling, appointments,
              estimates, invoices, project updates, and customer care. Message
              frequency varies. Message and data rates may apply. Reply STOP to
              unsubscribe or HELP for help. Consent is not a condition of
              purchase. View the <Link href="/sms-terms">SMS Terms &amp; Privacy</Link> and <Link href="/privacy">Privacy Policy</Link>.
            </span>
          </label>
          <button type="button" disabled>Submit SMS consent</button>
          <p className="form-status" id="form-status">
            Form connection pending: this review version is ready for the
            FieldPulse Engage opt-in form or approved form endpoint before public launch.
          </p>
        </form>
        <aside className="optin-help">
          <p className="eyebrow">Prefer another method?</p>
          <h2>Texting is optional.</h2>
          <p>
            You can contact Shield Plumbing without opting in to SMS. Call <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a> or email <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
          <p>
            If you previously opted in and want to stop messages, reply <strong>STOP</strong>. For help, reply <strong>HELP</strong>.
          </p>
        </aside>
      </section>
    </SiteShell>
  );
}
