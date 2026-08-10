import type { Metadata } from "next";
import { CityPage } from "../city-page";

export const metadata: Metadata = {
  title: "Camas Plumber | Residential Plumbing Service",
  description: "Looking for a residential plumber in Camas, WA? Shield Plumbing provides plumbing repairs, fixture installation, drain service, and water heater replacement.",
  alternates: { canonical: "/camas-plumber" },
  openGraph: { title: "Camas Plumber | Shield Plumbing", description: "Owner-operated residential plumbing service for Camas, Washington homeowners.", url: "/camas-plumber" },
};

const services: [string, string][] = [
  ["Plumbing repairs", "Troubleshooting and repair for leaks, toilets, faucets, shutoff valves, hose bibbs, and other common residential plumbing failures."],
  ["Water heater replacement", "Conventional tank water heater replacement and tankless replacement with attention to related code and safety requirements."],
  ["Drain service", "Residential drain stoppage service and repairs to drain and waste piping, with the findings explained before the scope expands."],
  ["Kitchen and bath fixtures", "Professional installation and replacement of faucets, sinks, toilets, disposals, and other frequently used plumbing fixtures."],
  ["Residential remodel plumbing", "Rough-in and finish plumbing for planned kitchens, bathrooms, laundry areas, and other residential improvements."],
  ["Piping repairs and upgrades", "Targeted water or drain piping repair and planned repiping when an aging system needs more than another temporary fix."],
];

export default function CamasPlumberPage() {
  return <CityPage city="Camas" eyebrow="Residential plumber serving Camas, WA" title="Straightforward plumbing service for Camas homes." intro="Shield Plumbing provides owner-operated residential plumbing repairs, replacements, fixture installations, and remodel work throughout Camas." storyTitle="Careful work for the home you depend on." story={[
    "Camas includes historic homes near downtown, established neighborhoods around Crown Park and Prune Hill, newer construction near Lacamas Lake, and homes in Fern Prairie and surrounding areas. Those homes do not all have the same plumbing needs. Shield Plumbing evaluates the actual system in front of us instead of treating every call like the same generic repair.",
    "As an owner-operated company based next door in Washougal, we keep the process personal and direct. You speak with the plumber responsible for the diagnosis and workmanship. We explain what we find, outline the available options, and protect the work area while the job is completed.",
    "Call when you have a leaking or failed fixture, a water heater that needs replacement, a drain problem, an aging piping component, or a planned kitchen or bathroom project. The goal is a durable solution that makes sense for your home—not unnecessary work or a rushed patch.",
  ]} localCoverage="Camas, Washington and nearby Southwest Washington communities" services={services} sectionTitle="Service for everyday problems and planned improvements." sectionIntro="Shield Plumbing helps Camas homeowners repair, replace, and improve the plumbing systems used throughout the home." secondTitle="Local service from neighboring Washougal." secondText="Shield Plumbing is based in Washougal, immediately adjacent to Camas. That makes Camas one of our core service communities, along with Washougal, Vancouver, and nearby areas of Southwest Washington." />;
}
