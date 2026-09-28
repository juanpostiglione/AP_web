import type { Metadata } from 'next';
import AboutHero from '../../components/about/AboutHero';
import StoryPanels from '../../components/about/StoryPanels';

export const metadata: Metadata = {
  title: 'Empresa',
  description: 'Conoce la trayectoria, capacidad, miembros fundadores y junta directiva de A.P Asociados.',
};

export default function Nosotros() {
  return <><AboutHero /><StoryPanels /></>;
}
