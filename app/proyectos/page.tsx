import type { Metadata } from 'next';
import ProjectsHero from '../../components/projects/ProjectsHero';
import ProjectShowcase from '../../components/projects/ProjectShowcase';

export const metadata: Metadata = {
  title: 'Proyectos | A.P ASOCIADOS C.A',
  description: 'Galería de proyectos metalmecánicos de A.P Asociados: equipos industriales y estructuras de acero.',
};

export default function Proyectos() {
  return <><ProjectsHero /><ProjectShowcase /></>;
}
