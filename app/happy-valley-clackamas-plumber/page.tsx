import type { Metadata } from "next";
import { OregonAreaPage } from "../oregon-area-page";

const title = "Happy Valley & Clackamas Plumber";
const description = "Residential plumbing in Happy Valley, Clackamas, and Milwaukie. Water heater replacement, remodel plumbing, and repairs from owner-operated Shield Plumbing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/happy-valley-clackamas-plumber" },
  openGraph: { title: `${title} | Shield Plumbing`, description, url: "/happy-valley-clackamas-plumber", images: [{ url: "/images/shield-hero-plumbing.png", width: 1536, height: 1024, alt: "Shield Plumbing residential plumbing service" }] },
  twitter: { card: "summary_large_image", title: `${title} | Shield Plumbing`, description, images: ["/images/shield-hero-plumbing.png"] },
};

export default function HappyValleyClackamasPlumberPage() {
  return (
    <OregonAreaPage
      slug="happy-valley-clackamas-plumber"
      title="Residential plumbing in Happy Valley, Clackamas, and Milwaukie."
      intro="Practical help for repairs, replacements, and the next project at home. Shield Plumbing serves homeowners in Happy Valley, Clackamas, and Milwaukie with water heater replacement, kitchen and bathroom remodel plumbing, and residential repairs."
      coverage="Happy Valley, Clackamas, and Milwaukie form the southern portion of our Oregon service area. Scheduling depends on the exact address, scope, and current route."
      storyTitle="Planning a kitchen or bathroom update?"
      story={[
        "It helps to discuss the plumbing before fixtures are ordered and the walls are closed. A new shower base, a different valve, or a relocated sink can affect the rough-in and the sequence of the project.",
        "Shield Plumbing can review the plumbing scope with you or your contractor, complete the rough-in, and return for finish connections and fixture installation. Share any plans, fixture selections, photos, and target dates when you get in touch.",
        "Based in Washougal, we schedule Oregon work through the I-205 corridor. Share your service address rather than relying only on the city in your mailing address, so we can confirm coverage and availability for your home.",
      ]}
      services={[
        { title: "Remodel plumbing", text: "Rough-in and finish plumbing for kitchen and bathroom improvements. We discuss fixture locations, connections, and the plumbing scope with you or your contractor so the work fits the project plan.", href: "/remodel-plumbing-rough-ins" },
        { title: "Water heater replacement", text: "We replace gas and electric tank water heaters and offer tankless replacement when appropriate. Photos of the current heater, its label, and the surrounding connections help us prepare for an initial conversation.", href: "/water-heater-replacement" },
        { title: "Residential repairs and fixtures", text: "Repairs for leaking piping, faucets, toilets, shutoff valves, and other residential plumbing components. If you’re replacing several fixtures, tell us about the full list when scheduling so we can plan for the work together.", href: "/plumbing-repairs-fixture-installation" },
      ]}
      related={{ href: "/portland-plumber", label: "Looking for service farther north?", text: "Our Oregon coverage also includes selected residential neighborhoods in Northeast and Southeast Portland along and west of I-205 toward I-5." }}
      questions={[
        { question: "Can you work with my general contractor?", answer: "Yes. We can coordinate the plumbing portion of your kitchen or bathroom remodel. Send the plans, fixture selections, and project schedule so we can discuss the rough-in and finish work." },
        { question: "What should I send about a repair?", answer: "Start with your service address and what you’re seeing. Photos of the fixture or affected plumbing are helpful. You do not need to diagnose the problem before contacting us." },
      ]}
    />
  );
}
