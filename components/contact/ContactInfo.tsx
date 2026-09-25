import { contactEmails } from '../../data/contact';
import { serviceAreas } from '../../data/services';

export default function ContactInfo() {
  return (
    <>
      <div className="contact-grid">
        <div className="contact-card"><div className="contact-card__icon">⌖</div><h3>Ubicación</h3><p>Puerto Ordaz, Estado Bolívar<br />Venezuela</p></div>
        <div className="contact-card"><div className="contact-card__icon">◷</div><h3>Horario</h3><p>Lunes a Viernes<br />8:00 AM - 5:00 PM</p></div>
        <div className="contact-card">
          <div className="contact-card__icon">✉</div><h3>Correo</h3>
          <p>{contactEmails.map((email) => <span key={email}><a href={`mailto:${email}`} className="contact-card__link">{email}</a><br /></span>)}</p>
        </div>
      </div>
    </>
  );
}
