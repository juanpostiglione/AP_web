import Link from 'next/link';
import { serviceAreas } from '../../data/services';

export default function CoreServices() {
  const coreAreas = serviceAreas.slice(0, 4);
  return (
    <section className="home-section home-services home-reveal" aria-labelledby="home-services-title">
      <div className="home-shell">
        <div className="home-section__heading home-reveal-piece">
          <div>
            <span className="home-eyebrow">Capacidades principales</span>
            <h2 id="home-services-title">Soluciones para cada etapa del proyecto</h2>
          </div>
          <p>Integramos fabricación, montaje y mantenimiento con experiencia en estructuras, recipientes y componentes para procesos industriales.</p>
        </div>
        <div className="home-services__grid">
          {coreAreas.map((service, index) => (
            <article className="home-service home-reveal-piece" key={service.title}>
              <span className="home-service__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.capabilities.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="home-section__footer home-reveal-piece">
          <Link href="/servicios" className="home-text-link">Explorar todos los servicios <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
