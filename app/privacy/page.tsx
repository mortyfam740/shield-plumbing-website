import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteShell, business } from "../site-components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Shield Plumbing LLC, including customer and mobile messaging information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Customer information" title="Privacy Policy">
        <p>Effective July 14, 2026</p>
      </PageHero>
      <article className="legal-copy page-shell-narrow">
        <p>
          Shield Plumbing LLC respects your privacy. This policy explains the
          information we may collect, how we use it, and the choices available
          to you when you contact us or use this website.
        </p>
        <h2>Information we collect</h2>
        <p>
          We may collect information you provide directly, including your name,
          phone number, email address, service address, project details, photos,
          appointment information, and communications with us. We may also
          receive basic website usage information such as browser type, device
          type, pages viewed, and referral source.
        </p>
        <h2>How we use information</h2>
        <p>
          We use information to respond to inquiries, schedule and perform
          plumbing services, prepare estimates and invoices, communicate about
          appointments and projects, maintain business records, improve our
          website and service, protect against misuse, and comply with legal or
          regulatory obligations.
        </p>
        <h2>How information is shared</h2>
        <p>
          We may share information with service providers that support our
          operations, such as scheduling, phone, messaging, payment, accounting,
          website hosting, and customer-management providers. We may also share
          information when required by law or necessary to protect rights,
          safety, and property. We do not sell personal information.
        </p>
        <div className="legal-callout">
          <strong>Mobile information and consent</strong>
          <p>
            Mobile information, text-messaging originator opt-in data, and
            consent will not be shared with third parties or affiliates for
            marketing or promotional purposes. Sharing with service providers
            that support delivery of the messaging program is permitted only as
            needed to provide those services.
          </p>
        </div>
        <h2>Text messaging</h2>
        <p>
          If you separately opt in to receive text messages, Shield Plumbing LLC
          may send conversational and transactional messages related to service
          requests, scheduling, appointments, estimates, invoices, project
          updates, and customer care. Message frequency varies. Message and data
          rates may apply. Reply STOP to opt out or HELP for help. See our <Link href="/sms-terms">SMS Terms &amp; Privacy</Link> for more information.
        </p>
        <h2>Data choices and security</h2>
        <p>
          You may ask us to correct or delete information you provided, subject
          to legal and business recordkeeping obligations. We use reasonable
          safeguards, but no internet or electronic storage method is completely
          secure.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy may be sent to <a href={`mailto:${business.email}`}>{business.email}</a>, by calling <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>, or by mail to {business.mailingAddress}.
        </p>
      </article>
    </SiteShell>
  );
}
