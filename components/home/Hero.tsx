import Link from 'next/link';

// Change this image under public/images to update the home page photo.
export default function Hero() {
  return (
    <section id="home" className="hero home-hero" aria-labelledby="home-title">
      <div className="hero-bg">
        <img src="/images/ap_new_01.webp" alt="Instalaciones industriales de A.P Asociados"
          className="hero-bg-image active" width="810" height="1080" fetchPriority="high" decoding="async" />
      </div>
      <div className="hero-slogan-center" style={{ pointerEvents: 'auto' }}>
        <span className="hero-company-name">Metalmecánica industrial · Desde 1982</span>
        <h1 id="home-title" className="hero-main-slogan">
          Construimos <span className="slogan-key">eficiencia</span><br />
          y seguridad
        </h1>
        <p className="home-hero__lead">Fabricación, montaje y mantenimiento para instalaciones industriales que exigen precisión, continuidad y experiencia.</p>
        <div className="home-hero__actions">
          <Link href="/nosotros/" className="home-button home-button--primary">Conoce nuestra empresa <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <a className="home-hero__scroll" href="#capacidades" aria-label="Ir a las capacidades de la empresa"><span aria-hidden="true">↓</span> Descubrir capacidades</a>
    </section>
  );
}
