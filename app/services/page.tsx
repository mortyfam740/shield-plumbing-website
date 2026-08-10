import type { Metadata } from "next";
import { Droplets, House, Wrench } from "lucide-react";
import { CtaBand, PageHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "Residential Plumbing Services",
  description: "Water heaters, plumbing repairs, fixture installation, repipes, and remodel plumbing from Shield Plumbing LLC.",
  alternates: { canonical: "/services" },
};

const serviceGroups = [
  {
    icon: Wrench,
    title: "Service & repair",
    description:
      "Clear troubleshooting and lasting repairs for common residential plumbing problems.",
    items: [
      "Leak diagnosis and repair",
      "Toilet repair and replacement",
      "Faucets, sinks, disposals, and fixtures",
      "Hose bibbs and shutoff valves",
      "Drain and waste piping repair",
    ],
  },
  {
    icon: House,
    title: "Installations & improvements",
    description:
      "Code-conscious plumbing for planned upgrades, remodel phases, and improving older systems.",
    items: [
      "Kitchen and bathroom fixture installation",
      "Residential remodel plumbing",
      "Finish plumbing",
      "Water and drain repiping",
      "Laundry and utility plumbing",
    ],
  },
  {
    icon: Droplets,
    title: "Water heaters",
    description:
      "Replacement and maintenance for conventional residential tank water heaters.",
    items: [
      "Tank water heater replacement",
      "Tankless replacement",
      "Routine flushing and maintenance",
      "Code and safety upgrades associated with replacement",
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
