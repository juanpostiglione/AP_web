import type { Metadata } from 'next';
import Hero from '../components/home/Hero';
import Representations from '../components/home/Representations';
import ScrollToServices from '../components/site/ScrollToServices';

export const metadata: Metadata = { title: 'A.P ASOCIADOS C.A - Soluciones Industriales' };

export default function Home() {
  return <><ScrollToServices /><Hero /><Representations /></>;
}
