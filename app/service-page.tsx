import Link from "next/link";
import type { ReactNode } from "react";
import { CtaBand, PageHero, SiteShell, TrustStrip } from "./site-components";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  storyTitle: string;
  story: ReactNode[];
  servicesTitle: string;
  servicesIntro: string;
  services: [string, string][];
  planningTitle: string;
  planningText: string;
  related: { href: string; label: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
};

export function ServicePage(props: ServicePageProps) {
  return (
    <SiteShell>
      <PageHero eyebrow={props.eyebrow} title={props.title}>
        <p>{props.intro}</p>
      </PageHero>
      <TrustStrip />

      <section className="page-shell service-page-intro">
        <div>
          <h2>{props.storyTitle}</h2>
          {props.story.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <aside className="service-page-aside">
          <p className="eyebrow">What to expect</p>
          <h2>{props.planningTitle}</h2>
          <p>{props.planningText}</p>
          <Link href="/contact">Contact Shield Plumbing</Link>
        </aside>
      </section>

      <section className="city-services">
        <div className="page-shell">
          <p className="eyebrow">Residential plumbing</p>
          <h2>{props.servicesTitle}</h2>
          <p>{props.servicesIntro}</p>
          <div className="city-service-grid">
            {props.services.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell related-services">
        <p className="eyebrow">Related services</p>
        <h2>More ways Shield Plumbing can help.</h2>
        <div className="related-service-grid">
          {props.related.map((item) => (
            <Link href={item.href} key={item.href}>
              <strong>{item.label}</strong>
              <span>{item.text}</span>
              <b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={props.ctaTitle} text={props.ctaText} />
    </SiteShell>
  );
}
