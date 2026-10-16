export type ProjectPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const projectPhotos = {
  connections: { src: "/images/projects/will-water-heater-connections.webp", alt: "Will Mortensen working on connections beside a residential water heater", caption: "Owner-operated plumbing, with Will handling the work in your home.", width: 1050, height: 1400 },
  waterHeater: { src: "/images/projects/will-water-heater-replacement.webp", alt: "Will Mortensen beside a Bradford White tank water heater during installation work", caption: "Water heater replacement work by Shield Plumbing.", width: 1050, height: 1400 },
  controls: { src: "/images/projects/will-water-heater-controls.webp", alt: "Will Mortensen adjusting a residential water heater control", caption: "Attention to the installation details.", width: 1050, height: 1400 },
  remodel: { src: "/images/projects/will-remodel-plumbing.webp", alt: "Will Mortensen working on a water connection beside exposed framing during a bathroom remodel", caption: "Bathroom remodel plumbing before the walls are closed.", width: 1050, height: 1400 },
  pressureTank: { src: "/images/projects/pressure-tank-before-after.webp", alt: "Before and after a pressure tank replacement: an older galvanized tank and the replacement blue pressure tank", caption: "A pressure tank replacement by Shield Plumbing: the original tank and the replacement installation.", width: 1536, height: 1024 },
} satisfies Record<string, ProjectPhoto>;

export function ProjectPhotoFigure({ photo }: { photo: ProjectPhoto }) {
  return (
    <figure className="project-photo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export function ProjectGallery({ title, photos }: { title: string; photos: ProjectPhoto[] }) {
  return (
    <section className="page-shell project-section">
      <p className="eyebrow">From our work</p>
      <h2>{title}</h2>
      <div className={`project-gallery${photos.length === 1 ? " project-gallery-single" : ""}`}>
        {photos.map((photo) => <ProjectPhotoFigure key={photo.src} photo={photo} />)}
      </div>
    </section>
  );
}
