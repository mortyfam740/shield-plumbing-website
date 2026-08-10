import type { Metadata } from "next";
import { CityPage } from "../city-page";

export const metadata: Metadata = {
  title: "Vancouver WA Plumber | Residential Plumbing Service",
  description: "Need a residential plumber in Vancouver, WA? Shield Plumbing provides plumbing repairs, fixture installation, drain service, and water heater replacement.",
  alternates: { canonical: "/vancouver-plumber" },
  openGraph: { title: "Vancouver WA Plumber | Shield Plumbing", description: "Owner-operated residential plumbing service for Vancouver, Washington homeowners.", url: "/vancouver-plumber" },
};

const services: [string, string][] = [
  ["Plumbing repairs", "Troubleshooting and durable repairs for leaks, toilets, faucets, shutoff valves, hose bibbs, and other residential plumbing problems."],
  ["Water heater replacement", "Conventional tank water heater replacement and tankless replacement, including related code and safety upgrades."],
  ["Drain service", "Help with residential drain stoppages and damaged drain or waste piping, with clear findings before additional work is recommended."],
  ["Fixture installation", "Installation and replacement of kitchen and bathroom faucets, sinks, toilets, disposals, and other plumbing fixtures."],
  ["Remodel plumbing", "Rough-in and finish plumbing for planned kitchen, bathroom, laundry, and utility-area improvements."],
  ["Water and drain piping", "Targeted piping repairs and planned residential repiping when aging or damaged plumbing needs a lasting correction."],
];

export default function VancouverPlumberPage() {
  return <CityPage city="Vancouver" eyebrow="Residential plumber serving Vancouver, WA" title="Clear, professional plumbing service for Vancouver homes." intro="Shield Plumbing provides owner-operated residential plumbing repairs, replacements, installations, and remodel work in Vancouver, Washington." storyTitle="Residential plumbing without the runaround." story={[
    "From established homes in Cascade Park and Fisher's Landing to newer development near Columbia Tech Center and the 192nd Avenue corridor, east Vancouver has a wide range of plumbing systems and service needs. Shield Plumbing also regularly serves homeowners farther north and east in Brush Prairie and Hockinson. We evaluate the plumbing in the home, explain the findings, and provide practical options before work moves forward.",
    "Shield Plumbing is based in Washougal and regularly serves Clark County. East Vancouver is especially close to our home base, while scheduling elsewhere in Vancouver depends on the location, type of work, and current route. We would rather give you an honest answer about availability than make a promise we cannot keep.",
    "Call for a leaking fixture, failed water heater, drain problem, piping repair, planned replacement, or residential remodel. You communicate directly with the plumber responsible for the diagnosis and workmanship.",
  ]} localCoverage="Vancouver, Washington, with strongest availability in east Vancouver and nearby Clark County communities" services={services} sectionTitle="Plumbing repairs, replacements, and improvements." sectionIntro="Shield Plumbing helps Vancouver homeowners solve everyday plumbing failures and complete planned residential projects." secondTitle="Serving Vancouver from nearby Washougal." secondText="Vancouver is an important part of our Southwest Washington service area. Travel and scheduling vary across the city, with east Vancouver generally closest to our Washougal home base. Call with your neighborhood or ZIP code to confirm availability." />;
}
