import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section gsap-footer-col">
          <h4>Representaciones</h4>
          <ul>
            <li><a href="/chesterton">Chesterton</a></li>
            <li><a href="/orange-technologies">Orange Technologies</a></li>
            <li><a href="/worldfluid">WorldFluid</a></li>
          </ul>
        </div>
        <div className="footer-section gsap-footer-col">
          <h4>Empresa</h4>
          <ul><li><Link href="/nosotros">Nosotros</Link></li></ul>
        </div>
        <div className="footer-section gsap-footer-col">
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
