import type { Metadata } from "next";
import { CtaBand, PageHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "About",
  description: "Meet William Mortensen and discover the protection, integrity, reliability, and trust behind Shield Plumbing.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About Shield Plumbing" title="The Shield Behind the Name">
        <p>
          Protection is more than part of our name. It is the standard behind
          the way we serve your home.
        </p>
      </PageHero>
      <section className="page-shell about-layout">
        <div className="about-portrait-panel">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/william-mortensen-headshot.png"
            alt="William Mortensen, owner of Shield Plumbing"
            width={1086}
            height={1448}
          />
          <div className="portrait-caption">
            <strong>William Mortensen</strong>
            <span>Owner · Journeyman Plumber</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A local standard</p>
          <h2>Built to protect what matters.</h2>
          <p>
            Shield Plumbing was founded on a simple belief: when you invite
            someone into your home, you deserve more than a skilled
            plumber—you deserve someone you can trust. After years of serving
            homeowners in residential plumbing, I set out to build a company
            where integrity, craftsmanship, and respect aren&apos;t just marketing
            phrases—they&apos;re the standard. Every decision we make is guided by
            the understanding that we&apos;re not just repairing plumbing; we&apos;re
            helping protect one of your biggest investments: your home.
          </p>
          <p>
            The shield in our name represents the values we strive to bring to
            every customer: protection, integrity, reliability, and trust.
            Whether we&apos;re repairing a leak, replacing a water heater, or
            completing a larger plumbing project, our goal is to provide
            lasting solutions, honest recommendations, and quality workmanship
            you can feel confident in long after the job is complete. We
            believe trust is earned through every interaction, and we&apos;re
            committed to building a reputation that reflects those values in
            every home we serve.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="page-shell">
          <p className="eyebrow light">What guides the work</p>
          <div className="values-grid values-grid-four">
            <article><h3>Protection</h3><p>Care for your home, its surfaces, and the plumbing systems you depend on.</p></article>
            <article><h3>Integrity</h3><p>Give honest recommendations and explain the options in plain language.</p></article>
            <article><h3>Reliability</h3><p>Use sound methods and quality materials to create lasting solutions.</p></article>
            <article><h3>Trust</h3><p>Earn confidence through respectful service and professional accountability.</p></article>
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
