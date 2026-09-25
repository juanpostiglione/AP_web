import { projects } from '../../data/projects';

export default function ProjectsHero() {
  return (
    <section className="projects-hero" aria-labelledby="projects-title">
      <div className="projects-hero__inner">
        <div className="projects-hero__copy">
          <span className="portfolio-kicker">A.P ASOCIADOS C.A / PORTAFOLIO</span>
          <h1 id="projects-title">Nuestros<br /><em>Proyectos</em></h1>
          <p>Una mirada a nuestro trabajo metalmecánico: piezas industriales, fabricación en taller y estructuras de acero.</p>
        </div>
        <div className="projects-hero__count" aria-label={`${projects.length} fotografías de proyectos`}>
          <strong>{String(projects.length).padStart(2, '0')}</strong><span>fotografías<br />de proyectos</span>
        </div>
      </div>
    </section>
  );
}
