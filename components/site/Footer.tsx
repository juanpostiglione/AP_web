import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Representaciones</h4>
          <ul>
            <li><Link href="/chesterton">Chesterton</Link></li>
            <li><Link href="/orange-technologies">Orange Technologies</Link></li>
            <li><Link href="/worldfluid">WorldFluid</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Empresa</h4>
          <ul>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/proyectos">Proyectos</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Conectar</h4>
          <ul><li><Link href="/contacto">Contacto</Link></li></ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} A.P ASOCIADOS C.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
