import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteShell, business } from "../site-components";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, text, or email Shield Plumbing LLC to discuss residential plumbing service.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Contact Shield Plumbing" title="Tell us what is going on. We will help with the next step.">
        <p>
          Call, text, or email with a short description of the issue, your city,
          and the best way to reach you.
        </p>
      </PageHero>
      <section className="page-shell contact-layout">
        <div className="contact-methods">
          <a href={`tel:${business.phoneHref}`}>
            <small>Call</small>
            <strong>{business.phoneDisplay}</strong>
            <span>Best for urgent questions and scheduling</span>
          </a>
          <a href={`sms:${business.phoneHref}`}>
            <small>Text</small>
            <strong>{business.phoneDisplay}</strong>
            <span>Photos and a short description are helpful</span>
          </a>
          <a href={`mailto:${business.email}`}>
            <small>Email</small>
            <strong>{business.email}</strong>
            <span>Good for project details and documents</span>
          </a>
          <div className="contact-mailing">
            <small>Business hours</small>
            <strong>{business.hoursDisplay}</strong>
            <span>Closed Saturday and Sunday</span>
          </div>
          <div className="contact-mailing">
            <small>Mailing address</small>
            <strong>{business.mailingAddress}</strong>
            <span>Business correspondence and mailed documents</span>
          </div>
        </div>
        <aside className="contact-expect">
          <p className="eyebrow">Helpful details to include</p>
          <h2>Make the first conversation productive.</h2>
          <ul className="check-list">
            <li>Your name and service address or city</li>
            <li>What you are seeing, hearing, or smelling</li>
            <li>When the problem started</li>
            <li>Photos of the fixture or affected area, if available</li>
          </ul>
          <p className="small-note">
            Text messaging is optional. Review the <Link href="/sms-terms">SMS Terms &amp; Privacy</Link> or use the <Link href="/sms-opt-in">SMS Opt-In form</Link>.
          </p>
        </aside>
      </section>
    </SiteShell>
  );
}
