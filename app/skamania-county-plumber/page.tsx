import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SiteShell, TrustStrip, business } from "../site-components";

export const metadata: Metadata = {
  title: "Skamania County Plumber | Residential Plumbing Service",
  description: "Residential plumbing service for western Skamania County, WA, including North Bonneville, Stevenson, Carson, and nearby Columbia Gorge communities.",
  alternates: { canonical: "/skamania-county-plumber" },
  openGraph: { title: "Skamania County Plumber | Shield Plumbing", description: "Owner-operated residential plumbing service for western Skamania County and nearby Columbia Gorge communities.", url: "/skamania-county-plumber" },
};

const url = "https://shieldplumbingllc.com/skamania-county-plumber";
const schema = {
  "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url,
  name: "Skamania County Plumber | Shield Plumbing", about: { "@id": "https://shieldplumbingllc.com/#business" },
  areaServed: { "@type": "AdministrativeArea", name: "Skamania County", addressRegion: "WA" },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shieldplumbingllc.com" },
    { "@type": "ListItem", position: 2, name: "Skamania County Plumber", item: url },
  ] },
};

const services = [
  ["Residential plumbing repairs", "Diagnosis and repair for leaks, toilets, faucets, valves, hose bibbs, and other plumbing failures."],
  ["Water heater replacement", "Conventional tank water heater replacement and tankless replacement with related safety and code upgrades."],
  ["Drain and waste piping", "Residential drain stoppage service and repairs to damaged drain or waste piping."],
  ["Fixtures and remodels", "Fixture replacement plus rough-in and finish plumbing for planned residential improvements."],
];

export default function SkamaniaCountyPlumberPage() {
  return <SiteShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <PageHero eyebrow="Residential plumber serving Skamania County, WA" title="Plumbing service for homes in the Columbia Gorge."><p>Shield Plumbing serves western Skamania County from nearby Washougal, with availability based on location, job scope, and the current route.</p></PageHero>
    <TrustStrip />
    <section className="page-shell city-intro">
      <div className="city-story"><h2>A nearby option for western Skamania County.</h2>
        <p>Homeowners outside the larger Clark County cities can have fewer local plumbing options. Shield Plumbing is based in Washougal at the western entrance to the Columbia Gorge, making communities in western Skamania County a practical part of our service area.</p>
        <p>We consider work in North Bonneville, Stevenson, Carson, and nearby communities when the location and job fit the schedule. Rural properties, private water systems, access, travel time, and the availability of parts can affect the scope, so those details are discussed before an appointment is confirmed.</p>
        <p>The service remains the same: direct communication with the plumber doing the work, clear findings, practical options, protection of your home, and durable workmanship.</p>
      </div>
      <aside className="city-facts" aria-label="Skamania County service information"><h2>Service information</h2><dl>
        <div><dt>Core coverage</dt><dd>Western Skamania County, including North Bonneville, Stevenson, Carson, and nearby communities</dd></div>
        <div><dt>Scheduling</dt><dd>Availability depends on location, travel, job scope, and current route</dd></div>
        <div><dt>Call or text</dt><dd><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></dd></div>
        <div><dt>Washington license</dt><dd>#{business.waLicense}</dd></div>
      </dl></aside>
    </section>
    <section className="city-services"><div className="page-shell"><p className="eyebrow">Residential plumbing services</p><h2>Repairs and planned work for Gorge-area homes.</h2><p>Call with the property location and a description of the plumbing need so Shield Plumbing can confirm service availability.</p><div className="city-service-grid">{services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="page-shell city-detail"><div className="city-detail-grid"><div><h2>Tell us where the property is located.</h2><p>A city, ZIP code, or nearby landmark helps us evaluate travel and scheduling before confirming the call.</p><Link href="/contact">Contact Shield Plumbing</Link></div><div><h2>Serving Southwest Washington.</h2><p>Shield Plumbing also serves Washougal, Camas, Vancouver, and nearby Clark County communities.</p><Link href="/service-area">See the full service area</Link></div></div></section>
    <CtaBand title="Need a plumber in Skamania County?" text="Call with your location and a description of the work to confirm current availability." />
  </SiteShell>;
}
