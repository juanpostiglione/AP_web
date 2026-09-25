import Link from 'next/link';
import { projects } from '../../data/projects';

export default function ProjectShowcase() {
  return (
    <section className="projects-showcase" aria-label="Galería de proyectos">
      {projects.map((project, index) => (
        <article className="project-panel" key={project.image}>
          <div className="project-panel__media">
            <img src={project.image} alt={project.alt} loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
          <div className="project-panel__content">
            <span className="project-panel__index">Imagen {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            <span className="project-panel__category">{project.category}</span>
            <h2>{project.title}</h2>
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
