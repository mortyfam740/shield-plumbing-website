import Link from "next/link";
import { CtaBand, PageHero, SiteShell, TrustStrip, business } from "./site-components";
import { ProjectPhotoFigure, projectPhotos } from "./project-photos";

type OregonAreaPageProps = {
  slug: string;
  title: string;
  intro: string;
  coverage: string;
  storyTitle: string;
  story: string[];
  services: { title: string; text: string; href: string }[];
  questions: { question: string; answer: string }[];
  related: { href: string; label: string; text: string };
};

export function OregonAreaPage(props: OregonAreaPageProps) {
  const url = `https://shieldplumbingllc.com/${props.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: props.title,
    about: { "@id": "https://shieldplumbingllc.com/#business" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://shieldplumbingllc.com" },
        { "@type": "ListItem", position: 2, name: props.title, item: url },
      ],
    },
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow="Owner-operated residential plumbing in Oregon" title={props.title}>
        <p>{props.intro}</p>
        <div className="hero-actions">
          <a className="button button-light" href={`tel:${business.phoneHref}`}>Call {business.phoneDisplay}</a>
          <Link className="text-link" href="/contact">Discuss your project</Link>
        </div>
      </PageHero>
      <TrustStrip />
      <section className="page-shell city-intro">
        <div className="city-story">
          <h2>{props.storyTitle}</h2>
          {props.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <ProjectPhotoFigure photo={props.slug === "portland-plumber" ? projectPhotos.connections : projectPhotos.remodel} />
        </div>
        <aside className="city-facts" aria-label="Oregon service information">
          <h2>Service at your home</h2>
          <dl>
            <div><dt>Local coverage</dt><dd>{props.coverage}</dd></div>
            <div><dt>Our home base</dt><dd>Washougal, Washington. We travel to your home in Oregon.</dd></div>
            <div><dt>Business hours</dt><dd>{business.hoursDisplay}</dd></div>
            <div><dt>Call</dt><dd><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></dd></div>
            <div><dt>Oregon contractor license</dt><dd>CCB #{business.orCcb}</dd></div>
          </dl>
        </aside>
      </section>
      <section className="city-services">
        <div className="page-shell">
          <p className="eyebrow">How we can help</p>
          <h2>Repairs, replacements, and planned improvements.</h2>
          <p>Clear communication about the work, with care for the home around it.</p>
          <div className="city-service-grid">
            {props.services.map((service) => (
              <article key={service.href}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link className="service-detail-link" href={service.href}>Explore {service.title.toLowerCase()} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="page-shell city-detail">
        <div className="city-detail-grid">
          <div>
            <h2>Let’s start with the details.</h2>
            <p>Call or text with your service address, a short description of the work, and any timing you’re working around. Photos of the existing plumbing are helpful. For a remodel, include available plans and fixture selections.</p>
            <p>We’ll confirm service coverage and discuss the next step for evaluating your job. You’ll get an explanation of the proposed work before it begins.</p>
            <Link href="/contact">Contact Shield Plumbing</Link>
          </div>
          <div>
            <h2>{props.related.label}</h2>
            <p>{props.related.text}</p>
            <Link href={props.related.href}>Explore this service area</Link>
          </div>
        </div>
      </section>
      <section className="page-shell city-detail" aria-label="Oregon service questions">
        <div className="city-detail-grid">
          {props.questions.map(({ question, answer }) => (
            <div key={question}><h2>{question}</h2><p>{answer}</p></div>
          ))}
        </div>
      </section>
      <CtaBand title="Tell us about your plumbing project." text="Share your location and what you need. We’ll help you figure out the next step." />
    </SiteShell>
  );
}
