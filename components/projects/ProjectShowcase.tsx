import Link from 'next/link';
import { projectGroups } from '../../data/projects';
import ProjectGallery from './ProjectGallery';

export default function ProjectShowcase() {
  return (
    <section className="projects-showcase" aria-label="Galería de proyectos">
      {projectGroups.map((group, index) => (
        <article className="project-group" key={group.category}>
          <header className="project-group__header">
            <div>
              <span className="portfolio-kicker">{group.category}</span>
              <h2>{group.title}</h2>
            </div>
            <div className="project-group__intro">
              <p>{group.description}</p>
              <span>Usa las flechas o desliza horizontalmente</span>
            </div>
          </header>
          <ProjectGallery images={group.images} eager={index === 0} label={group.category} />
        </article>
      ))}
      <div className="projects-cta">
        <div><span className="portfolio-kicker">HABLEMOS DE TU PROYECTO</span><h2>¿Tienes una idea en mente?</h2></div>
        <Link href="/contacto" className="projects-cta__link">Contáctanos <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
