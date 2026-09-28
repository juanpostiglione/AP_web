import { projects } from '../../data/projects';

export default function ProjectsHero() {
  return (
    <section className="projects-hero" aria-labelledby="projects-title">
      <div className="projects-hero__inner">
        <div className="projects-hero__copy">
          <span className="portfolio-kicker">A.P ASOCIADOS C.A / PORTAFOLIO</span>
          <h1 id="projects-title">Nuestros<br /><em>Proyectos</em></h1>
          <p>Proyectos documentados de fabricación, recuperación de equipos, estructuras y montaje para la industria venezolana.</p>
        </div>
        <div className="projects-hero__count" aria-label={`${projects.length} proyectos documentados`}>
          <strong>{String(projects.length).padStart(2, '0')}</strong><span>proyectos<br />documentados</span>
        </div>
      </div>
    </section>
  );
}
