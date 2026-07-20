import type { Metadata } from "next";
import { PageHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "SMS Terms & Privacy",
  description: "Text messaging terms, opt-out instructions, and SMS privacy information for Shield Plumbing LLC.",
};

export default function SmsTermsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Text messaging program" title="SMS Terms & Privacy">
        <p>Shield Plumbing LLC text messaging terms and privacy information.</p>
      </PageHero>
      <section className="page-shell-narrow">
        <iframe
          title="Shield Plumbing SMS Terms and Privacy Policy"
          src="https://en-1.fieldpulse.com/PdAOEbAoEazBUiWEAJ3_iZTVd7HmKLjYgHY2M_LJCOs/privacy-policy-and-terms"
          width="100%"
          height="1000"
          style={{ border: 0 }}
        />
      </section>
    </SiteShell>
  );
}
