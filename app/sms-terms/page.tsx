import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteShell, business } from "../site-components";

export const metadata: Metadata = {
  title: "SMS Terms & Privacy",
  description: "Text messaging terms, opt-out instructions, and SMS privacy information for Shield Plumbing LLC.",
};

export default function SmsTermsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Text messaging program" title="SMS Terms & Privacy">
        <p>Effective July 14, 2026</p>
      </PageHero>
      <article className="legal-copy page-shell-narrow">
        <p>
          These terms apply to text messages sent by Shield Plumbing LLC. By
          separately opting in, you agree to receive messages under these terms.
        </p>
        <h2>Program description</h2>
        <p>
          Shield Plumbing LLC may send conversational and transactional text
          messages related to service inquiries, scheduling, appointment
          confirmations and reminders, technician arrival or project updates,
          estimates, invoices, customer support, and follow-up about requested
          plumbing services.
        </p>
        <h2>Consent and frequency</h2>
        <p>
          Consent to receive text messages is not a condition of purchase.
          Message frequency varies based on your service request and your
          interactions with Shield Plumbing LLC. Message and data rates may
          apply according to your wireless plan.
        </p>
        <h2>Opt out and help</h2>
        <p>
          Reply <strong>STOP</strong> to unsubscribe from text messages. After
          you send STOP, you may receive one confirmation message. Reply <strong>HELP</strong> for help, call <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>, or email <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
        <h2>Delivery</h2>
        <p>
          Wireless carriers are not liable for delayed or undelivered messages.
          Message delivery is subject to the availability and operation of your
          wireless service and is not guaranteed.
        </p>
        <h2>SMS privacy</h2>
        <div className="legal-callout">
          <p>
            Mobile information, text-messaging originator opt-in data, and
            consent will not be shared with third parties or affiliates for
            marketing or promotional purposes. Information may be shared with
            service providers only as needed to operate and deliver the messaging
            program.
          </p>
        </div>
        <p>
          We use your mobile number and messaging information to provide the
          communications described above, respond to you, document consent and
          opt-out requests, prevent misuse, and comply with law. For additional
          details, review the <Link href="/privacy">Shield Plumbing Privacy Policy</Link>.
        </p>
        <h2>Changes</h2>
        <p>
          Shield Plumbing LLC may update these terms. The effective date at the
          top of this page identifies the current version.
        </p>
      </article>
    </SiteShell>
  );
}
