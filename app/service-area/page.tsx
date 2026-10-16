import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Based in Washougal, serving Southwest Washington and selected NE/SE Portland, Milwaukie, Clackamas, and Happy Valley residential areas.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Local service area" title="Based in Washougal. Built to serve local homeowners.">
        <p>
          Shield Plumbing serves homeowners in Washougal, Camas, Vancouver, and
          nearby Southwest Washington communities, plus selected residential areas
          in Northeast and Southeast Portland, Milwaukie, Clackamas, and Happy Valley.
        </p>
      </PageHero>
      <section className="page-shell area-layout">
        <figure className="area-map-figure">
        <div className="area-map">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/southwest-washington-service-map.png"
            alt="Shield Plumbing service area covering Washougal, Camas, Vancouver, and western Skamania County in Southwest Washington"
            width={1397}
            height={941}
          />
        </div>
        <figcaption>Washington coverage shown. Oregon service areas are listed below.</figcaption>
        </figure>
        <div className="area-copy">
          <p className="eyebrow">Southwest Washington</p>
          <h2>Local knowledge, responsive scheduling.</h2>
          <div className="city-grid">
            <Link href="/washougal-plumber">Washougal plumber →</Link>
            <Link href="/camas-plumber">Camas plumber →</Link>
            <Link href="/vancouver-plumber">Vancouver plumber →</Link>
            <Link href="/skamania-county-plumber">Skamania County plumber →</Link>
          </div>
          <p>
            Core scheduling includes Washougal, Camas, Vancouver, and western
            Skamania County, including regular service in east Clark County areas
            such as Brush Prairie and Hockinson. More distant locations may depend on the type of work
            and current schedule.
          </p>
        </div>
      </section>
      <section className="page-shell note-panel">
        <p className="eyebrow">Now serving Oregon</p>
        <h2>Residential service across the river.</h2>
        <div className="city-grid">
          <Link href="/portland-plumber">Northeast &amp; Southeast Portland →</Link>
          <Link href="/happy-valley-clackamas-plumber">Happy Valley, Clackamas &amp; Milwaukie →</Link>
        </div>
        <p>Our Oregon coverage focuses on residential Northeast and Southeast Portland along the I-205 corridor and west toward I-5, plus Milwaukie, Clackamas, and Happy Valley. Contact us for water heater replacement, kitchen and bathroom remodel plumbing, and residential repairs. Share your address to confirm coverage and scheduling.</p>
      </section>
      <CtaBand title="Wondering if your home is in the service area?" text="Call with your city or ZIP code and Shield Plumbing will confirm availability." />
    </SiteShell>
  );
}
