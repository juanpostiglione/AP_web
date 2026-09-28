import Link from 'next/link';
import { featuredBrands } from '../../data/representations';

// Edit card copy and logos in data/representations/index.ts; product categories
// live in the three brand files next to it.
export default function Representations() {
  return (
    <section id="representaciones" className="services tw-flow-section home-representations home-reveal">
      <div className="section-header section-reveal home-reveal-piece">
        <span className="section-kicker">Soluciones especializadas</span>
        <h2>Representaciones industriales</h2>
        <p className="home-representations__intro">Tecnologías complementarias para sellado, reparación, control de corrosión, válvulas y tratamiento de fluidos.</p>
        <div className="header-line" />
      </div>
      <div className="services-grid">
        {featuredBrands.map((brand) => (
          <Link className="service-card representation-card tw-metal-card" href={`/${brand.slug}`} key={brand.slug}>
            <div className="service-card__logo-wrap"><img src={brand.logo} alt={brand.name} className="representation-logo" /></div>
            <div className="service-card__content">
              <h3>{brand.name}</h3><p>{brand.description}</p>
              <span className="service-card__cta">Explorar productos <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
