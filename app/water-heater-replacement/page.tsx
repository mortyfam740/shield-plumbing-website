import type { Metadata } from "next";
import { ServicePage } from "../service-page";
import { projectPhotos } from "../project-photos";

export const metadata: Metadata = {
  title: "Water Heater Replacement | Southwest WA & Portland Area",
  description: "Gas, electric, and tankless water heater replacement in Southwest Washington and selected NE/SE Portland, Milwaukie, Clackamas, and Happy Valley areas.",
  alternates: { canonical: "/water-heater-replacement" },
};

export default function WaterHeaterReplacementPage() {
  return (
    <ServicePage
      project={{ title: "Careful work, from connections to controls.", photos: [projectPhotos.waterHeater, projectPhotos.controls] }}
      eyebrow="Water heater replacement"
      title="A dependable replacement, chosen for your home."
      intro="When it is time to replace your water heater, Shield Plumbing helps you choose a practical option for your home, household needs, and budget—and installs it with careful attention to the complete system."
      storyTitle="Clear options without making the process complicated."
      story={[
        <>A water heater affects daily comfort, energy use, and the safety of your plumbing system. Shield Plumbing provides professional replacement of standard gas and electric tank water heaters, along with tankless replacement when it is appropriate for the existing home.</>,
        <>Before the work begins, we review the installation, explain the available choices, and identify connection or code-related improvements that should be included. The goal is a reliable replacement with a clear scope—not an unexpected list of additions after the old unit is removed.</>,
      ]}
      planningTitle="Plan around the home—not just the tank."
      planningText="Capacity, fuel type, available space, venting, electrical requirements, household demand, and the existing connections all influence the right replacement. We account for those details before recommending an option."
      servicesTitle="What a water heater replacement may include."
      servicesIntro="Every installation is evaluated individually, with the necessary work explained before replacement begins."
      services={[
        ["Gas tank water heaters", "Replacement of conventional residential gas water heaters with attention to venting, gas connections, shutoffs, and required safety components."],
        ["Electric tank water heaters", "Replacement of standard residential electric water heaters, including demand-response-ready models when required for the home."],
        ["Tankless replacement", "Replacement of an existing tankless water heater when the home and current installation make it a practical fit."],
        ["Connections and shutoffs", "Evaluation and replacement of water connections, shutoff valves, drain pans, and related components when needed for a sound installation."],
        ["Code-related upgrades", "Clear identification of expansion control, seismic protection, venting, electrical, or other installation updates that apply to the replacement."],
        ["Removal and cleanup", "Careful removal of the existing unit and a clean, orderly installation of the replacement."],
      ]}
      related={[
        { href: "/plumbing-repairs-fixture-installation", label: "Plumbing repairs & fixture installation", text: "Leaks, valves, damaged piping, and fixture replacement." },
        { href: "/remodel-plumbing-rough-ins", label: "Remodel plumbing & rough-ins", text: "Plumbing for kitchens, bathrooms, additions, and planned improvements." },
      ]}
      ctaTitle="Planning a water heater replacement?"
      ctaText="Call Shield Plumbing to discuss the current installation, your household needs, and the right next step."
    />
  );
}
