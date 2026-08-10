import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Residential plumbing service based in Washougal and serving communities across Southwest Washington.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Local service area" title="Based in Washougal. Built to serve local homeowners.">
        <p>
          Shield Plumbing serves homeowners in Washougal, Camas, Vancouver, and
          communities throughout Southwest Washington.
        </p>
      </PageHero>
      <section className="page-shell area-layout">
        <div className="area-map">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/southwest-washington-service-map.png"
            alt="Shield Plumbing service area covering Washougal, Camas, Vancouver, and western Skamania County in Southwest Washington"
            width={1397}
            height={941}
          />
        </div>
        <div className="area-copy">
          <p className="eyebrow">Core communities</p>
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
            and current schedule. Shield Plumbing is not currently scheduling work
            in Oregon; Oregon service will be announced only after licensing is complete.
          </p>
        </div>
      </section>
      <CtaBand title="Wondering if your home is in the service area?" text="Call with your city or ZIP code and Shield Plumbing will confirm availability." />
    </SiteShell>
  );
}
