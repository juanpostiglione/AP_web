import { serviceProfile } from '../../data/services';

const stats = [
  { value: '1982', label: 'Año de puesta en marcha' },
  { value: serviceProfile.areas[0].value, label: 'Superficie total' },
  { value: serviceProfile.areas[1].value, label: 'Área de talleres' },
  { value: String(serviceProfile.sectors.length).padStart(2, '0'), label: 'Sectores industriales' },
];

export default function HomeStats() {
  return (
    <section id="capacidades" className="home-stats home-reveal" aria-label="Capacidades de A.P. Asociados">
      <div className="home-shell home-stats__grid">
        {stats.map((stat) => (
          <div className="home-stat home-reveal-piece" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
