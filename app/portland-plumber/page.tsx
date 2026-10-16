import type { Metadata } from "next";
import { OregonAreaPage } from "../oregon-area-page";

const title = "Portland OR Plumber | NE & SE Portland";
const description = "Owner-operated residential plumbing in NE and SE Portland. Water heater replacement, kitchen and bath remodel plumbing, and repairs. Call Shield Plumbing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portland-plumber" },
  openGraph: { title: `${title} | Shield Plumbing`, description, url: "/portland-plumber", images: [{ url: "/images/shield-hero-plumbing.png", width: 1536, height: 1024, alt: "Shield Plumbing residential plumbing service" }] },
  twitter: { card: "summary_large_image", title: `${title} | Shield Plumbing`, description, images: ["/images/shield-hero-plumbing.png"] },
};

export default function PortlandPlumberPage() {
  return (
    <OregonAreaPage
      slug="portland-plumber"
      title="Residential plumbing in Northeast and Southeast Portland."
      intro="Shield Plumbing helps homeowners in Northeast and Southeast Portland with water heater replacements, kitchen and bathroom remodel plumbing, and everyday repairs. We’re an owner-operated business based in Washougal, now serving selected residential areas across the river in Oregon."
      coverage="Residential NE and SE Portland along the I-205 corridor and west into nearby neighborhoods toward I-5. Share your address or ZIP code to confirm availability."
      storyTitle="Clear options. Careful workmanship. A plumber you can talk to."
      story={[
        "Whether you’re replacing a leaking fixture or planning a bathroom remodel, it helps to understand what the work involves. We evaluate the existing plumbing, explain the proposed scope, and talk through practical options before work begins.",
        "Our Portland scheduling focuses on residential neighborhoods in Northeast and Southeast Portland. Availability depends on your address, the type of work, and our current schedule. Tell us where the home is located and any timing you’re working around so we can give you a clear next step.",
      ]}
      services={[
        { title: "Water heater replacement", text: "Gas and electric tank water heater replacement, plus tankless replacement when appropriate. We review the existing setup and explain the proposed equipment and related installation work before you move forward.", href: "/water-heater-replacement" },
        { title: "Kitchen and bathroom remodel plumbing", text: "Drain locations, water connections, and valve placement need to work with your finished design. We provide rough-in and finish plumbing and can coordinate the plumbing portion with your general contractor.", href: "/remodel-plumbing-rough-ins" },
        { title: "Repairs and fixture installations", text: "Help with leaking piping, unreliable shutoff valves, toilets, faucets, and other residential plumbing components. We explain what we find and discuss the scope before work begins.", href: "/plumbing-repairs-fixture-installation" },
      ]}
      related={{ href: "/happy-valley-clackamas-plumber", label: "South of Portland?", text: "We also serve homeowners in Milwaukie, Clackamas, and Happy Valley—the southern portion of our Oregon service area." }}
      questions={[
        { question: "Are you based in Portland?", answer: "We’re based in Washougal, Washington, and travel to selected residential areas in Northeast and Southeast Portland. We do not have a Portland storefront." },
        { question: "Do you repair or maintain water heaters?", answer: "Our water heater work focuses on replacement, including tankless replacement when appropriate. We do not offer water heater troubleshooting or tankless maintenance service." },
      ]}
    />
  );
}
