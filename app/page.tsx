import { Metadata } from 'next';
import Link from 'next/link';
import ScrollToServices from './components/ScrollToServices';

export const metadata: Metadata = {
  title: 'A.P ASOCIADOS C.A - Soluciones Industriales',
};

export default function Home() {
  return (
    <>
      <ScrollToServices />
      <section id="home" className="hero tw-flow-section">
        <div className="hero-bg">
          <img
            src="/images/ap_new_01.jpeg"
            alt="Instalaciones industriales de A.P Asociados"
            className="hero-bg-image active"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-slogan-center gsap-hero-block">
          <span className="hero-company-name gsap-hero-line">A.P Asociados C.A</span>
          <h1 className="hero-main-slogan gsap-hero-line">
            Construimos <span className="slogan-key">eficiencia</span>
            <br />y seguridad
          </h1>
          <span className="hero-accent-line gsap-hero-line"></span>
          <span className="hero-sub-slogan gsap-hero-line">Metalmecanica industrial desde 1982</span>
        </div>
        <div className="hero-scroll-indicator">
          <Link href="/nosotros" className="hero-cta-link">
            Conocenos
          </Link>
        </div>
      </section>

      <section id="services" className="services tw-flow-section">
        <div className="section-header section-reveal">
          <span className="section-kicker">Nuestros Aliados</span>
          <h2>Representaciones</h2>
          <div className="header-line"></div>
        </div>
        <div className="services-grid">
          <a className="service-card representation-card tw-metal-card gsap-service-card" href="/chesterton">
            <div className="service-card__logo-wrap">
              <img src="/images/chesterton.png" alt="Chesterton" className="representation-logo" />
            </div>
            <div className="service-card__content">
              <h3>Chesterton</h3>
              <p>Sellos mecanicos, empaquetaduras, juntas y soluciones de sellado industrial de clase mundial.</p>
              <span className="service-card__cta">
                Explorar productos <span>→</span>
              </span>
            </div>
          </a>
          <a className="service-card representation-card tw-metal-card gsap-service-card" href="/orange-technologies">
            <div className="service-card__logo-wrap">
              <img src="/images/orange-technologies.png" alt="Orange Technologies" className="representation-logo" />
            </div>
            <div className="service-card__content">
              <h3>Orange Technologies</h3>
              <p>Soluciones avanzadas en abrazaderas de tuberia, recubrimientos y reparacion industrial.</p>
              <span className="service-card__cta">
                Explorar productos <span>→</span>
              </span>
            </div>
          </a>
          <a className="service-card representation-card tw-metal-card gsap-service-card" href="/worldfluid">
            <div className="service-card__logo-wrap">
              <img src="/images/worldfluid.png" alt="WorldFluid" className="representation-logo" />
            </div>
            <div className="service-card__content">
              <h3>WorldFluid</h3>
              <p>Valvulas, tuberias, sistemas de filtracion y equipos especializados para la industria.</p>
              <span className="service-card__cta">
                Explorar productos <span>→</span>
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
