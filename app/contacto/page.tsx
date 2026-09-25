import type { Metadata } from 'next';
import ContactHero from '../../components/contact/ContactHero';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | A.P ASOCIADOS C.A',
  description: 'Contacta a A.P Asociados en Puerto Ordaz, Venezuela.',
};

export default function Contacto() {
  return <><ContactHero /><section className="contact-content"><ContactInfo /><ContactForm /></section></>;
}
