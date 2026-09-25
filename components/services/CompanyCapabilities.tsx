import { brochureSpecialties, serviceProfile } from '../../data/services';

// Supporting brochure copy is kept separate from the four service chapters.
export default function CompanyCapabilities() {
  return (
    <section className="service-profile" aria-labelledby="service-profile-title">
      <div className="service-profile__inner">
        <div className="service-profile__intro">
          <span className="portfolio-kicker">TRAYECTORIA Y CAPACIDAD</span>
          <h2 id="service-profile-title">Fabricación y montaje metalmecánico</h2>
          <p>{serviceProfile.introduction}</p>
          <p>{serviceProfile.trajectory}</p>
          <p>{serviceProfile.quality}</p>
        </div>
        <div className="service-profile__specialties">
          <h3>Especialidades</h3>
          <ul>{brochureSpecialties.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="service-profile__figures">
          <div>
            <h3>Capacidad de fabricación</h3>
            <dl>{serviceProfile.capacity.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
          </div>
          <div>
            <h3>Área total</h3>
            <dl>{serviceProfile.areas.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
          </div>
        </div>
        <div className="service-profile__sectors"><h3>Sectores</h3><ul>{serviceProfile.sectors.map((sector) => <li key={sector}>{sector}</li>)}</ul></div>
      </div>
    </section>
  );
}
