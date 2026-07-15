import Link from "next/link";
import { Droplets, House, Wrench } from "lucide-react";
import { CtaBand, SiteShell, TrustStrip, business } from "./site-components";

const services = [
  {
    icon: Wrench,
    title: "Residential repairs",
    text: "Thoughtful troubleshooting and durable repairs for leaks, toilets, faucets, fixtures, and failing plumbing components.",
  },
  {
    icon: House,
    title: "Remodels & installations",
    text: "Clean, code-conscious plumbing for fixture upgrades, finish work, repipes, and residential improvement projects.",
  },
  {
    icon: Droplets,
    title: "Water heaters",
    text: "Conventional tank water heater replacement, tankless replacement, routine maintenance, and associated code and safety upgrades.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="eyebrow light">Local residential plumbing</p>
            <h1>Quality work. Clear communication. No runaround.</h1>
            <p>
              Owner-operated plumbing service for homeowners in Washougal,
              Camas, Vancouver, and the surrounding area.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href={`tel:${business.phoneHref}`}>
                Call {business.phoneDisplay} <span aria-hidden="true">→</span>
              </a>
              <Link className="text-link" href="/services">
                Explore services
              </Link>
            </div>
          </div>
          <div className="home-hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/shield-hero-plumbing.png"
              alt="Clean modern residential bathroom with plumbing fixtures"
              width={1536}
              height={1024}
              fetchPriority="high"
            />
            <div className="area-card">
              <small>Based in</small>
              <strong>Washougal, WA</strong>
              <span>Serving Southwest Washington</span>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="page-shell section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How we can help</p>
            <h2>Residential plumbing, handled the right way.</h2>
          </div>
          <p>
            From urgent repairs to planned improvements, Shield Plumbing gives
            you a straightforward explanation and a durable solution.
          </p>
        </div>
        <div className="service-card-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-card-top">
                  <span className="service-icon" aria-hidden="true"><Icon /></span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href="/services">
                  View services <b aria-hidden="true">↗</b>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split-story">
        <div className="split-story-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/shield-service-plumbing.png"
            alt="Water flowing from a clean residential bathroom faucet"
            width={1536}
            height={1024}
            loading="lazy"
          />
        </div>
        <div className="split-story-copy">
          <p className="eyebrow">The Shield standard</p>
          <h2>A small company with a high standard.</h2>
          <p>
            The shield represents the standard we bring into every home:
            protection for your property, honest guidance, dependable work,
            and respect throughout the project.
          </p>
          <ul className="check-list">
            <li>Direct communication with the plumber doing the work</li>
            <li>Clear scope and options before work begins</li>
            <li>Professional protection, integrity, and cleanup in your home</li>
          </ul>
          <Link className="inline-arrow" href="/about">
            Meet Shield Plumbing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="license-band">
        <div>
          <p className="eyebrow light">Licensed. Bonded. Insured.</p>
          <h2>Professional protection you can verify.</h2>
        </div>
        <dl>
          <div>
            <dt>Washington contractor license</dt>
            <dd>#{business.waLicense}</dd>
          </div>
          <div>
            <dt>Business</dt>
            <dd>Shield Plumbing LLC</dd>
          </div>
          <div>
            <dt>Service type</dt>
            <dd>Residential plumbing</dd>
          </div>
        </dl>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
