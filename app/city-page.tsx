import Link from "next/link";
import { CtaBand, PageHero, SiteShell, TrustStrip, business } from "./site-components";

type CityPageProps = {
  city: "Washougal" | "Camas" | "Vancouver";
  eyebrow: string;
  title: string;
  intro: string;
  storyTitle: string;
  story: string[];
  localCoverage: string;
  services: [string, string][];
  sectionTitle: string;
  sectionIntro: string;
  secondTitle: string;
  secondText: string;
};

export function CityPage(props: CityPageProps) {
  const slug = `${props.city.toLowerCase()}-plumber`;
  const url = `https://shieldplumbingllc.com/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${props.city} Plumber | Shield Plumbing`,
    about: { "@id": "https://shieldplumbingllc.com/#business" },
    areaServed: { "@type": "City", name: props.city, addressRegion: "WA" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://shieldplumbingllc.com" },
        { "@type": "ListItem", position: 2, name: `${props.city} Plumber`, item: url },
      ],
    },
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow={props.eyebrow} title={props.title}><p>{props.intro}</p></PageHero>
      <TrustStrip />
      <section className="page-shell city-intro">
        <div className="city-story">
          <h2>{props.storyTitle}</h2>
          {props.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="city-facts" aria-label={`${props.city} service information`}>
          <h2>{props.city} service information</h2>
          <dl>
            <div><dt>Local coverage</dt><dd>{props.localCoverage}</dd></div>
            <div><dt>Service focus</dt><dd>Residential plumbing service, repair, replacement, and remodel work</dd></div>
            <div><dt>Call or text</dt><dd><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></dd></div>
            <div><dt>Washington license</dt><dd>#{business.waLicense}</dd></div>
          </dl>
        </aside>
      </section>
      <section className="city-services">
        <div className="page-shell">
          <p className="eyebrow">Residential plumbing services</p>
          <h2>{props.sectionTitle}</h2>
          <p>{props.sectionIntro}</p>
          <div className="city-service-grid">
            {props.services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="page-shell city-detail">
        <div className="city-detail-grid">
          <div>
            <h2>Start with what you are seeing.</h2>
            <p>You do not need to diagnose the problem yourself. Tell us what is leaking, draining slowly, making noise, or no longer working. After evaluating the plumbing, Shield Plumbing will explain the findings and available paths forward before work proceeds.</p>
            <Link href="/services">View residential plumbing services</Link>
          </div>
          <div>
            <h2>{props.secondTitle}</h2>
            <p>{props.secondText}</p>
            <Link href="/service-area">See the full service area</Link>
          </div>
        </div>
      </section>
      <CtaBand title={`Need a plumber in ${props.city}?`} text="Call Shield Plumbing to describe the issue or discuss your upcoming residential plumbing project." />
    </SiteShell>
  );
}
