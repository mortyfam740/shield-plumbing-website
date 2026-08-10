import Link from "next/link";
import type { ReactNode } from "react";

export const business = {
  name: "Shield Plumbing LLC",
  phoneDisplay: "(360) 335-3905",
  phoneHref: "+13603353905",
  email: "info@shieldplumbingllc.com",
  waLicense: "SHIELPL740L9",
  mailingAddress: "3307 Evergreen Way STE 707 #305, Washougal, WA 98671",
  hoursDisplay: "Monday–Friday, 8:00 a.m.–4:00 p.m.",
};

export function Header() {
  return (
    <>
      <div className="utility-bar">
        <span>Licensed, bonded &amp; insured</span>
        <span>WA License #{business.waLicense}</span>
        <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
      </div>
      <header className="site-header">
        <Link className="brand-image" href="/" aria-label="Shield Plumbing home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/shield-plumbing-horizontal.png"
            alt="Shield Plumbing LLC"
            width={1456}
            height={678}
            fetchPriority="high"
          />
        </Link>
        <nav aria-label="Primary navigation">
          <details className="nav-dropdown">
            <summary>Services</summary>
            <div className="nav-dropdown-menu" aria-label="Plumbing services">
              <Link href="/services">All services</Link>
              <Link href="/water-heater-replacement">Water heater replacement</Link>
              <Link href="/plumbing-repairs-fixture-installation">Plumbing repairs &amp; fixtures</Link>
              <Link href="/remodel-plumbing-rough-ins">Remodel plumbing &amp; rough-ins</Link>
            </div>
          </details>
          <details className="nav-dropdown">
            <summary>Service Area</summary>
            <div className="nav-dropdown-menu" aria-label="Service area locations">
              <Link href="/service-area">Service area overview</Link>
              <Link href="/washougal-plumber">Washougal</Link>
              <Link href="/camas-plumber">Camas</Link>
              <Link href="/vancouver-plumber">Vancouver</Link>
              <Link href="/skamania-county-plumber">Skamania County</Link>
            </div>
          </details>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="header-cta" href={`tel:${business.phoneHref}`}>
          <span>Call now</span>
          {business.phoneDisplay}
        </a>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Link className="footer-brand" href="/" aria-label="Shield Plumbing home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/shield-plumbing-horizontal.png"
              alt="Shield Plumbing LLC"
              width={1456}
              height={678}
            />
          </Link>
          <p>
            Residential plumbing grounded in protection, integrity, reliable
            workmanship, and trust.
          </p>
        </div>
        <div className="footer-links">
          <strong>Company</strong>
          <Link href="/services">Services</Link>
          <Link href="/service-area">Service Area</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <strong>Services</strong>
          <Link href="/water-heater-replacement">Water heater replacement</Link>
          <Link href="/plumbing-repairs-fixture-installation">Plumbing repairs &amp; fixtures</Link>
          <Link href="/remodel-plumbing-rough-ins">Remodel plumbing &amp; rough-ins</Link>
          <Link href="/services">All services</Link>
        </div>
        <div className="footer-links">
          <strong>Local service</strong>
          <Link href="/washougal-plumber">Washougal plumber</Link>
          <Link href="/camas-plumber">Camas plumber</Link>
          <Link href="/vancouver-plumber">Vancouver plumber</Link>
          <Link href="/skamania-county-plumber">Skamania County plumber</Link>
          <Link href="/service-area">Full service area</Link>
        </div>
        <div className="footer-links">
          <strong>Contact</strong>
          <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
          <span>{business.hoursDisplay}</span>
          <span>{business.mailingAddress}</span>
        </div>
        <div className="footer-links">
          <strong>Customer information</strong>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/sms-terms">SMS Terms &amp; Privacy</Link>
          <Link href="/sms-opt-in">SMS Opt-In</Link>
          <span>WA #{business.waLicense}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Shield Plumbing LLC</span>
        <span>Licensed, bonded &amp; insured</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-shell page-hero-inner">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="page-hero-copy">{children}</div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready for a clear next step?",
  text = "Call Shield Plumbing to talk through your repair, replacement, or upcoming project.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow light">Request service</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band-actions">
        <a className="button button-light" href={`tel:${business.phoneHref}`}>
          Call {business.phoneDisplay} <span aria-hidden="true">→</span>
        </a>
        <Link className="text-link" href="/contact">
          Contact options
        </Link>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip" aria-label="Why customers choose Shield Plumbing">
      <span>Licensed, bonded &amp; insured</span>
      <span>Owner-operated</span>
      <span>Clear options before work begins</span>
      <span>Respectful, clean workmanship</span>
    </div>
  );
}
