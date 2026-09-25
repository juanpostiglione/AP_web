import Link from 'next/link';

// Change this image under public/images to update the home page photo.
export default function Hero() {
  return (
    <section id="home" className="hero tw-flow-section">
      <div className="hero-bg">
        <img src="/images/ap_new_01.jpeg" alt="Instalaciones industriales de A.P Asociados"
          className="hero-bg-image active" fetchPriority="high" decoding="async" />
      </div>
      <div className="hero-slogan-center">
        <span className="hero-company-name">A.P Asociados C.A</span>
        <h1 className="hero-main-slogan">Construimos <span className="slogan-key">eficiencia</span><br />y seguridad</h1>
        <span className="hero-accent-line" />
        <span className="hero-sub-slogan">Metalmecanica industrial desde 1982</span>
      </div>
      <div className="hero-scroll-indicator"><Link href="/nosotros" className="hero-cta-link">Conocenos</Link></div>
    </section>
  );
}
