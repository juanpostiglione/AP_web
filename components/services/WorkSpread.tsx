import { documentedWork } from '../../data/services';

type WorkSection = (typeof documentedWork)[number];

// A visible catalog page follows each pair of photographic service chapters.
export default function WorkSpread({ section, index }: { section: WorkSection; index: number }) {
  return (
    <section className={`service-work${index === 0 ? ' service-work--dark' : ''}`} aria-labelledby={`trabajos-${index}`}>
      <div className="service-work__inner">
        <div className="service-work__heading">
          <span className="portfolio-kicker">TRABAJOS DOCUMENTADOS</span>
          <h2 id={`trabajos-${index}`}>{section.title}<br /><em>{section.subtitle}</em></h2>
          <p>Obras y equipos incluidos en el folleto corporativo de A.P. Asociados.</p>
        </div>
        <ol className="service-work__list">
          {section.items.map((item, itemIndex) => (
            <li key={item}><span className="service-work__number" aria-hidden="true">{String(itemIndex + 1).padStart(2, '0')}</span><span>{item}</span></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
