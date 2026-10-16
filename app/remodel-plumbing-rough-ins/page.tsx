import type { Metadata } from "next";
import { ServicePage } from "../service-page";
import { projectPhotos } from "../project-photos";

export const metadata: Metadata = {
  title: "Remodel Plumbing & Rough-Ins",
  description: "Residential kitchen and bathroom remodel plumbing in Southwest Washington and selected Portland-area Oregon communities. Rough-in and finish plumbing.",
  alternates: { canonical: "/remodel-plumbing-rough-ins" },
};

export default function RemodelPlumbingPage() {
  return (
    <ServicePage
      project={{ title: "The details behind the finished room.", photos: [projectPhotos.remodel] }}
      eyebrow="Remodel plumbing & rough-ins"
      title="Plumbing planned around the finished space."
      intro="Shield Plumbing provides residential rough-in and finish plumbing for bathroom, kitchen, basement, and other home improvement projects in coordination with homeowners and contractors."
      storyTitle="Good remodel plumbing starts before the walls close."
      story={[
        <>Fixture locations, framing, cabinetry, drainage, venting, and water-supply routes all affect one another. Early coordination helps the plumbing fit the design while keeping the work practical, accessible, and ready for the next phase.</>,
        <>Shield Plumbing can complete a focused plumbing portion of a larger remodel or coordinate the rough-in and finish stages as part of the planned scope. We clarify responsibilities, fixture selections, access, and project timing before work begins.</>,
      ]}
      planningTitle="Built for coordination."
      planningText="Remodels move more smoothly when fixture specifications, wall and floor layouts, framing readiness, and schedule expectations are established early. We work through those details with the homeowner or general contractor."
      servicesTitle="Residential remodel plumbing scope."
      servicesIntro="The exact scope is tailored to the room, existing plumbing, project plans, and the responsibilities assigned to each trade."
      services={[
        ["Bathroom remodels", "Rough-in and finish plumbing for showers, tubs, toilets, vanities, sinks, and bathroom fixture relocations."],
        ["Kitchen remodels", "Water, drain, vent, sink, faucet, disposal, dishwasher, and other kitchen plumbing associated with the new layout."],
        ["Basement bathrooms", "Plumbing for new basement bathroom spaces where the existing structure and available connections support the project."],
        ["Drain, waste, and vent", "Planned DWV rough-in work for new or relocated fixtures, coordinated with framing and the finished layout."],
        ["Water-supply rough-ins", "Hot and cold water piping, fixture supplies, valves, and connections routed for the planned installation."],
        ["Finish plumbing", "Installation and connection of included fixtures after surfaces, cabinets, and other required finish work are ready."],
      ]}
      related={[
        { href: "/plumbing-repairs-fixture-installation", label: "Plumbing repairs & fixture installation", text: "Fixture replacements, valves, leaks, and damaged piping." },
        { href: "/water-heater-replacement", label: "Water heater replacement", text: "Replacement options planned for the home and household." },
      ]}
      ctaTitle="Planning a remodel or rough-in?"
      ctaText="Call Shield Plumbing to discuss the layout, project stage, fixture plans, and plumbing scope."
    />
  );
}
