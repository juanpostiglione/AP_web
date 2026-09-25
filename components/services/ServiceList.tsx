import Link from 'next/link';
import { documentedWork, serviceAreas } from '../../data/services';
import CompanyCapabilities from './CompanyCapabilities';
import WorkSpread from './WorkSpread';

export default function ServiceList() {
  return (
    <>
      <section className="services-book" aria-label="Servicios metalmecánicos">
        {serviceAreas.map((service, index) => (
          <div className="services-book__pair" key={service.title}>
            <article className={`service-chapter${index % 2 ? ' service-chapter--reverse' : ''}`}>
              <div className="service-chapter__media"><img src={service.image} alt={service.alt} loading={index === 0 ? 'eager' : 'lazy'} /></div>
              <div className="service-chapter__content">
                <div className="service-chapter__heading">
                  <span className="service-chapter__number">{String(index + 1).padStart(2, '0')} / {String(serviceAreas.length).padStart(2, '0')}</span>
                  <span className="service-chapter__section">{service.section}</span>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <h3>Qué hacemos</h3>
                <ul className="service-chapter__capabilities">{service.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
                {service.documentedExample && (
                  <div className="service-chapter__example">
                    <span>Experiencia documentada</span>
                    <p>{service.documentedExample}</p>
                  </div>
                )}
              </div>
            </article>
            {index % 2 === 1 && <WorkSpread section={documentedWork[Math.floor(index / 2)]} index={Math.floor(index / 2)} />}
          </div>
        ))}
      </section>
      <CompanyCapabilities />
      <section className="services-page__cta">
        <div><span className="portfolio-kicker">CÓMO PODEMOS AYUDARTE</span><h2>Cuéntanos qué necesitas.</h2></div>
        <Link href="/contacto" className="services-page__cta-link">Hablar con nosotros <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
