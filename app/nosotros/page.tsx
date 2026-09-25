import type { Metadata } from 'next';
import AboutHero from '../../components/about/AboutHero';
import StoryPanels from '../../components/about/StoryPanels';

export const metadata: Metadata = {
  title: 'Nosotros | A.P ASOCIADOS C.A',
  description: 'Conoce la trayectoria y capacidad de A.P Asociados desde 1982.',
};

export default function Nosotros() {
  return <><AboutHero /><StoryPanels /></>;
}
