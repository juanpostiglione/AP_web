import Link from 'next/link';
import { projects } from '../../data/projects';
import BeforeAfterGallery from './BeforeAfterGallery';

export default function ProjectShowcase() {
  return (
    <section className="projects-showcase" aria-label="Galería de proyectos">
      {projects.map((project, index) => (
        <article className="project-panel" key={project.title}>
          {project.images.length > 1 ? (
            <BeforeAfterGallery images={project.images} />
          ) : (
            <div className="project-panel__media">
              {project.images.map((image, imageIndex) => (
              <figure className="project-panel__media-item" key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                {image.label && <figcaption>{image.label}</figcaption>}
              </figure>
              ))}
            </div>
          )}
          <div className="project-panel__content">
            <span className="project-panel__index">Proyecto {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            <span className="project-panel__category">{project.category}</span>
            <h2>{project.title}</h2>
            {project.images.length > 1 && <span className="project-panel__scroll-note">Usa las flechas o desliza para comparar <span aria-hidden="true">↔</span></span>}
            {project.client && <span className="project-panel__client">Cliente / {project.client}</span>}
            {project.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <span className="project-panel__rule" aria-hidden="true" />
          </div>
        </article>
      ))}
      <div className="projects-cta">
        <div><span className="portfolio-kicker">HABLEMOS DE TU PROYECTO</span><h2>¿Tienes una idea en mente?</h2></div>
        <Link href="/contacto" className="projects-cta__link">Contáctanos <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
