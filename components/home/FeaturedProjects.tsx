import Link from 'next/link';
import { homeProjectPreview, projects } from '../../data/projects';

const featuredProjects = [
  homeProjectPreview,
  {
    image: projects[0].images[0].src,
    alt: projects[0].images[0].alt,
    category: projects[0].category,
    title: projects[0].title,
  },
  {
    image: projects[1].images[1].src,
    alt: projects[1].images[1].alt,
    category: projects[1].category,
    title: projects[1].title,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="home-section home-projects home-reveal" aria-labelledby="home-projects-title">
      <div className="home-shell">
        <div className="home-section__heading home-section__heading--light home-reveal-piece">
          <div>
            <span className="home-eyebrow">Portafolio fotográfico</span>
            <h2 id="home-projects-title">Trabajo industrial hecho a escala real</h2>
          </div>
          <p>Una selección de trabajos ejecutados para la industria venezolana, desde nuestros talleres hasta el montaje en campo.</p>
        </div>
        <div className="home-projects__grid">
          {featuredProjects.map((project, index) => (
            <article className={`home-project home-reveal-piece${index === 0 ? ' home-project--featured' : ''}`} key={project.image}>
              <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
              <div className="home-project__overlay">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="home-section__footer home-section__footer--light home-reveal-piece">
          <Link href="/proyectos" className="home-text-link">Ver portafolio completo <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
