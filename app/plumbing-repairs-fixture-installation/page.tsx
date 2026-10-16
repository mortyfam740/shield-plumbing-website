import type { Metadata } from "next";
import { ServicePage } from "../service-page";
import { projectPhotos } from "../project-photos";

export const metadata: Metadata = {
  title: "Plumbing Repairs & Fixture Installation",
  description: "Residential leak repair, valve replacement, pipe repair, and fixture installation in Southwest Washington and selected Portland-area Oregon communities.",
  alternates: { canonical: "/plumbing-repairs-fixture-installation" },
};

export default function PlumbingRepairsPage() {
  return (
    <ServicePage
      project={{ title: "A look at a replacement project.", photos: [projectPhotos.pressureTank] }}
      eyebrow="Plumbing repairs & fixture installation"
      title="Practical repairs for the plumbing you use every day."
      intro="Shield Plumbing repairs leaking or damaged piping, replaces valves and failing components, and installs residential fixtures with clear communication about the work involved."
      storyTitle="Start with what is leaking, damaged, or no longer working."
      story={[
        <>You do not need to identify the failed part before calling. We evaluate the visible symptoms, explain what we find, and outline the appropriate path forward before work proceeds.</>,
        <>The focus is on durable residential repairs and clean installations—from a leaking shutoff valve or damaged section of pipe to replacing an aging faucet, toilet, hose bibb, or garbage disposal.</>,
      ]}
      planningTitle="Repair when appropriate. Replace when it makes sense."
      planningText="The condition of the component, accessibility, compatibility, and the surrounding plumbing all matter. We explain the available options so you can make an informed decision for your home."
      servicesTitle="Common plumbing repairs and installations."
      servicesIntro="Shield Plumbing handles a focused range of residential service work, including drain clearing when a stoppage is localized to a fixture or branch line."
      services={[
        ["Pipe leaks and damage", "Repair of accessible leaking, split, corroded, or otherwise damaged residential water and drain piping."],
        ["Valves and shutoffs", "Repair or replacement of angle stops, fixture shutoffs, hose bibbs, pressure-reducing valves, and other common residential valves."],
        ["Faucets and sinks", "Installation and replacement of kitchen, bathroom, laundry, and utility faucets, sinks, supplies, traps, and related connections."],
        ["Toilets", "Toilet repairs, rebuilds, reset work, and replacement when the fixture or surrounding connection needs attention."],
        ["Disposals and fixtures", "Garbage disposal replacement and installation of common residential plumbing fixtures and components."],
        ["Limited drain clearing", "Clearing of localized fixture and branch-line stoppages, with the location and apparent scope evaluated before the work proceeds."],
      ]}
      related={[
        { href: "/water-heater-replacement", label: "Water heater replacement", text: "Gas, electric, and appropriate tankless replacement options." },
        { href: "/remodel-plumbing-rough-ins", label: "Remodel plumbing & rough-ins", text: "Rough-in and finish plumbing for planned residential projects." },
      ]}
      ctaTitle="Have a plumbing repair or fixture project?"
      ctaText="Call Shield Plumbing and tell us what you are seeing, what you want replaced, or what is no longer working."
    />
  );
}
