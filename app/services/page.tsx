import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, House, Wrench } from "lucide-react";
import { CtaBand, PageHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "Residential Plumbing Services",
  description: "Water heaters, plumbing repairs, fixture installation, repipes, and remodel plumbing from Shield Plumbing LLC.",
  alternates: { canonical: "/services" },
};

const serviceGroups = [
  {
    icon: Droplets,
    title: "Water heater replacement",
    href: "/water-heater-replacement",
    description:
      "Replacement options selected for the home, household needs, existing installation, and budget.",
    items: [
      "Tank water heater replacement",
      "Tankless replacement",
      "Code and safety upgrades associated with replacement",
    ],
  },
  {
    icon: Wrench,
    title: "Plumbing repairs & fixture installation",
    href: "/plumbing-repairs-fixture-installation",
    description:
      "Focused residential repairs and clean fixture installations with clear options before work begins.",
    items: [
      "Leaking and damaged pipe repair",
      "Toilet repair and replacement",
      "Faucets, sinks, disposals, and fixtures",
      "Hose bibbs, shutoff valves, and common valve replacement",
      "Limited fixture and branch-line drain clearing",
    ],
  },
  {
    icon: House,
    title: "Remodel plumbing & rough-ins",
    href: "/remodel-plumbing-rough-ins",
    description:
      "Code-conscious rough-in and finish plumbing planned around the completed room.",
    items: [
      "Bathroom, kitchen, and basement remodels",
      "Drain, waste, and vent rough-ins",
      "Water-supply rough-ins",
      "Fixture relocation",
      "Finish plumbing and fixture installation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Residential plumbing services" title="Practical solutions for the plumbing your home depends on.">
        <p>
          Shield Plumbing focuses on residential service, repairs, replacements,
          and remodel work—with clear communication from diagnosis through
          completion.
        </p>
      </PageHero>
      <section className="page-shell service-detail-list">
        {serviceGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article className="service-detail" key={group.title}>
              <div className="detail-mark">
                <span className="detail-icon" aria-hidden="true"><Icon /></span>
              </div>
              <div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <Link className="service-detail-link" href={group.href}>Explore this service <span aria-hidden="true">→</span></Link>
              </div>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          );
        })}
      </section>
      <section className="note-panel page-shell-narrow">
        <p className="eyebrow">Not sure what the repair involves?</p>
        <h2>Start with the symptoms.</h2>
        <p>
          You do not need to diagnose the problem before calling. Tell us what
          you are seeing, hearing, or smelling, and we will help determine the
          right next step.
        </p>
      </section>
      <CtaBand title="Need service or planning an upgrade?" />
    </SiteShell>
  );
}
