export default function ContactHero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-title">
      <div className="contact-hero__inner">
        <div className="contact-hero__copy">
          <span className="section-kicker">Contacto técnico y comercial</span>
          <h1 id="contact-title" className="contact-hero__title">Conversemos sobre tu próximo proyecto.</h1>
          <p className="contact-lead">Comparte el alcance general de tu requerimiento. Nuestro equipo revisará la información para orientar la conversación hacia la solución adecuada.</p>
        </div>
        <aside className="contact-hero__brief" aria-label="Información útil para la solicitud">
          <span>Para comenzar</span>
          <h2>¿Qué información nos ayuda?</h2>
          <ul>
            <li>Tipo de equipo o servicio requerido</li>
            <li>Ubicación y etapa actual del proyecto</li>
            <li>Planos, medidas o condiciones relevantes</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
