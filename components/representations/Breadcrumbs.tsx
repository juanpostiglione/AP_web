import Link from 'next/link';

interface Crumb {
  href: string;
  label: string;
}

export default function Breadcrumbs({ current, parent }: { current: string; parent?: Crumb }) {
  return (
    <nav className="breadcrumb" aria-label="Ruta de navegación">
      <Link href="/">Inicio</Link>
      <span className="breadcrumb__sep">›</span>
      <Link href="/#services">Representaciones</Link>
      {parent && <><span className="breadcrumb__sep">›</span><Link href={parent.href}>{parent.label}</Link></>}
      <span className="breadcrumb__sep">›</span>
      <span className="breadcrumb__current" aria-current="page">{current}</span>
    </nav>
  );
}
