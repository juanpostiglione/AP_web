import Link from 'next/link';
import { contactEmails } from '../../data/contact';
import '../../styles/13-footer-representaciones.css';

// Footer de tres columnas. Los correos se mantienen en data/contact.ts para
// que cualquier cambio de contacto se refleje en todas las páginas.
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer ap-footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <Link className="footer-brand__identity" href="/" aria-label="A.P. Asociados, volver al inicio">
            <img src="/images/logo-ap-asociados.jpg" alt="" width="70" height="82" />
            <span>A.P. ASOCIADOS <small>C.A.</small></span>
          </Link>
          <p>
            Soluciones metalmecánicas para la industria venezolana desde 1982.
            Fabricación, montaje y mantenimiento con experiencia en cada proyecto.
          </p>
        </div>

        <div className="footer-section footer-contact">
          <h2>Contacto</h2>
          <ul>
            {contactEmails.map((email) => (
              <li key={email}><a href={`mailto:${email}`}>{email}</a></li>
            ))}
          </ul>
          <Link className="footer-contact__link" href="/contacto">Hablemos de tu proyecto <span aria-hidden="true">↗</span></Link>
        </div>

        <nav className="footer-section footer-links" aria-label="Enlaces del pie de página">
          <h2>Enlaces rápidos</h2>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/proyectos">Proyectos</Link></li>
            <li><Link href="/#services">Representaciones</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} A.P. ASOCIADOS C.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
