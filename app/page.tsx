import type { Metadata } from 'next';
import Hero from '../components/home/Hero';
import HomeStats from '../components/home/HomeStats';
import Representations from '../components/home/Representations';
import HomeCTA from '../components/home/HomeCTA';
import ScrollToServices from '../components/site/ScrollToServices';

export const metadata: Metadata = { title: { absolute: 'A.P ASOCIADOS C.A | Soluciones metalmecánicas' } };

export default function Home() {
  return (
    <>
      <ScrollToServices />
      <Hero />
      <HomeStats />
      <Representations />
      <HomeCTA />
    </>
  );
}
