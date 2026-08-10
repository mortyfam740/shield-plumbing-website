import type { Metadata } from "next";
import { CityPage } from "../city-page";

export const metadata: Metadata = {
  title: "Washougal Plumber | Residential Plumbing Service",
  description: "Need a residential plumber in Washougal, WA? Shield Plumbing provides plumbing repairs, fixture installation, drain service, and water heater replacement.",
  alternates: { canonical: "/washougal-plumber" },
  openGraph: { title: "Washougal Plumber | Shield Plumbing", description: "Owner-operated residential plumbing service based in Washougal, Washington.", url: "/washougal-plumber" },
};

const services: [string, string][] = [
  ["Plumbing repairs", "Diagnosis and durable repair of leaks, toilets, faucets, shutoff valves, hose bibbs, and other residential plumbing problems."],
  ["Water heater replacement", "Conventional tank water heater replacement and tankless replacement, including associated code and safety upgrades."],
  ["Drain service", "Help with residential drain stoppages and repairs to drain and waste piping, with clear findings before additional work is recommended."],
  ["Fixture installation", "Installation and replacement of kitchen and bathroom faucets, sinks, toilets, disposals, and other plumbing fixtures."],
  ["Remodel plumbing", "Rough-in and finish plumbing for residential kitchen, bathroom, laundry, and utility-area improvements."],
  ["Water and drain piping", "Targeted piping repairs and planned residential repiping when aging or damaged plumbing needs a lasting correction."],
];

export default function WashougalPlumberPage() {
  return <CityPage city="Washougal" eyebrow="Residential plumber in Washougal, WA" title="Local plumbing service for Washougal homeowners." intro="Shield Plumbing is based in Washougal and provides owner-operated residential plumbing repairs, replacements, installations, and remodel work." storyTitle="A Washougal plumber who answers for the work." story={[
    "When plumbing fails, you need more than a quick patch. You need a clear explanation of what is wrong, practical options, and work that respects your home. Shield Plumbing is a small, owner-operated company, so you communicate directly with the plumber evaluating and completing the job.",
    "From homes near downtown and Lookout Ridge to properties along the Washougal River corridor and surrounding residential areas, plumbing systems can vary widely by age, layout, and previous repairs. We approach each home individually, protect the work area, and explain the scope before work begins.",
    "Call for a leaking fixture, failed water heater, drain problem, planned replacement, or residential improvement project. If the request falls outside our current services, we will be straightforward about that too.",
  ]} localCoverage="Washougal, Washington 98671 and nearby communities" services={services} sectionTitle="Help for repairs, replacements, and planned projects." sectionIntro="Shield Plumbing focuses on the plumbing systems and fixtures Washougal homeowners depend on every day." secondTitle="Serving Washougal and nearby communities." secondText="Washougal is our home base. We also schedule residential plumbing work in Camas, Vancouver, and other nearby Southwest Washington communities. Availability varies with job location and schedule." />;
}
