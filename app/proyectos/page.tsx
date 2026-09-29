import type { Metadata } from 'next';
import ProjectsHero from '../../components/projects/ProjectsHero';
import ProjectShowcase from '../../components/projects/ProjectShowcase';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Selección de proyectos metalmecánicos de fabricación, montaje, recuperación de equipos y recipientes industriales.',
};

export default function Proyectos() {
  return <><ProjectsHero /><ProjectShowcase /></>;
}
