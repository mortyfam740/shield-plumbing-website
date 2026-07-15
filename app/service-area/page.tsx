import type { Metadata } from "next";
import { CtaBand, PageHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Residential plumbing service based in Washougal and serving communities across Southwest Washington.",
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
            alt="Muted regional map highlighting Vancouver, Camas, and Washougal in Southwest Washington"
            width={1456}
            height={1092}
          />
          <div className="map-city map-city-vancouver"><i />Vancouver</div>
          <div className="map-city map-city-camas"><i />Camas</div>
          <div className="map-city map-city-washougal"><i />Washougal</div>
          <div className="map-county-title">
            <strong>Southwest Washington</strong>
            <span>Local service area</span>
          </div>
        </div>
        <div className="area-copy">
          <p className="eyebrow">Core communities</p>
          <h2>Local knowledge, responsive scheduling.</h2>
          <div className="city-grid">
            <span>Washougal</span>
            <span>Camas</span>
            <span>Vancouver</span>
            <span>Southwest Washington</span>
          </div>
          <p>
            If your home is elsewhere in Southwest Washington, call to confirm current
            scheduling and availability. Shield Plumbing is not currently
            scheduling work in Oregon.
          </p>
        </div>
      </section>
      <CtaBand title="Wondering if your home is in the service area?" text="Call with your city or ZIP code and Shield Plumbing will confirm availability." />
    </SiteShell>
  );
}
