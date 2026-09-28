import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="home-cta home-reveal" aria-labelledby="home-cta-title">
      <div className="home-shell home-cta__inner">
        <div className="home-reveal-piece">
          <span className="home-eyebrow">Conversemos</span>
          <h2 id="home-cta-title">Cuéntanos qué necesita tu operación.</h2>
          <p>Revisaremos tu requerimiento para orientar la conversación hacia la solución adecuada.</p>
        </div>
        <div className="home-cta__action home-reveal-piece">
          <Link href="/contacto" className="home-button home-button--primary">Iniciar una consulta <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
