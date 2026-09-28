import type { Metadata } from 'next';
import ProjectsHero from '../../components/projects/ProjectsHero';
import ProjectShowcase from '../../components/projects/ProjectShowcase';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Proyectos metalmecánicos de A.P Asociados para VENALUM, ALCASA, SIDOR y Ferrominera Orinoco.',
};

export default function Proyectos() {
  return <><ProjectsHero /><ProjectShowcase /></>;
}
