import type { Metadata } from "next";
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
        <iframe
          title="Shield Plumbing SMS Opt-In Form"
          src="https://en-1.fieldpulse.com/UnxPR456BtXc9-lvhnAbh60rXvsVJou6kKAk3fzYo3M/opt-in-form"
          width="100%"
          height="1000"
          style={{ border: 0 }}
        />
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
