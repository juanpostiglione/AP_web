import type { Metadata } from 'next';
import ServicesHero from '../../components/services/ServicesHero';
import ServiceList from '../../components/services/ServiceList';

export const metadata: Metadata = {
  title: 'Servicios | A.P ASOCIADOS C.A',
  description: 'Estructura metálica, tanques y recipientes, montaje, mantenimiento y sector petrolero de A.P. Asociados.',
};

export default function Servicios() {
  return <><ServicesHero /><ServiceList /></>;
}
