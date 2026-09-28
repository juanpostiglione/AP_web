import { contactEmails } from '../../data/contact';
export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info__heading">
        <span>Canales directos</span>
        <h2>Información de contacto</h2>
        <p>Estamos ubicados en Puerto Ordaz, uno de los principales centros industriales de Venezuela.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card"><div className="contact-card__icon" aria-hidden="true">01</div><div><h3>Ubicación</h3><p>Puerto Ordaz, Estado Bolívar<br />Venezuela</p></div></div>
        <div className="contact-card"><div className="contact-card__icon" aria-hidden="true">02</div><div><h3>Horario</h3><p>Lunes a viernes<br />8:00 a. m. – 5:00 p. m.</p></div></div>
        <div className="contact-card">
          <div className="contact-card__icon" aria-hidden="true">03</div><div><h3>Correo</h3>
          <p>{contactEmails.map((email) => <span key={email}><a href={`mailto:${email}`} className="contact-card__link">{email}</a><br /></span>)}</p></div>
        </div>
      </div>
      <div className="contact-info__note"><strong>Antes de enviar</strong><p>Si dispones de planos o documentos técnicos, indícalo en el mensaje para coordinar su envío durante el seguimiento.</p></div>
    </div>
  );
}
