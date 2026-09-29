import { companyChapters, companyFacts, companyOverview, currentBoard, founders, type TeamMember } from '../../data/about';

function TeamGroup({ title, eyebrow, members }: { title: string; eyebrow: string; members: TeamMember[] }) {
  return (
    <section className="company-team__group" aria-labelledby={`team-${eyebrow}`}>
      <div className="company-team__group-heading">
        <span>{eyebrow}</span>
        <h3 id={`team-${eyebrow}`}>{title}</h3>
      </div>
      <div className="company-team__grid">
        {members.map((member) => (
          <article className="company-person" key={`${title}-${member.name}`}>
            <div className="company-person__portrait" aria-label={`Espacio reservado para la fotografía de ${member.name}`}>
              <span>{member.initials}</span>
              <small>Foto</small>
            </div>
            <div className="company-person__copy">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function StoryPanels() {
  return (
    <>
      <section className="company-overview" aria-labelledby="company-overview-title">
        <div className="company-shell company-overview__grid">
          <div className="company-overview__copy">
            <span className="company-eyebrow">Quiénes somos</span>
            <h2 id="company-overview-title">{companyOverview.title}</h2>
            {companyOverview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <dl className="company-facts" aria-label="Cifras de la empresa">
            {companyFacts.map((fact) => (
              <div key={fact.label}>
                <dt className={fact.compact ? 'company-fact__value company-fact__value--compact' : 'company-fact__value'}>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="company-chapters" aria-labelledby="company-chapters-title">
        <div className="company-shell company-chapters__layout">
          <div className="company-chapters__intro">
            <span className="company-eyebrow">Nuestra empresa</span>
            <h2 id="company-chapters-title">Una historia que se entiende por etapas.</h2>
            <p>Abre cada apartado para conocer la trayectoria, los procesos, la infraestructura y las especialidades de A.P. Asociados.</p>
          </div>
          <div className="company-accordion">
            {companyChapters.map((chapter, index) => (
              <details key={chapter.title} open={index === 0}>
                <summary>
                  <span className="company-accordion__number">{chapter.number}</span>
                  <span className="company-accordion__summary">
                    <small>{chapter.kicker}</small>
                    <strong>{chapter.title}</strong>
                  </span>
                  <span className="company-accordion__toggle" aria-hidden="true">+</span>
                </summary>
                <div className="company-accordion__content">
                  {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {chapter.specialties && (
                    <ul>{chapter.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}</ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" className="company-team" aria-labelledby="company-team-title">
        <div className="company-shell">
          <div className="company-team__intro">
            <span className="company-eyebrow">Liderazgo</span>
            <h2 id="company-team-title">Personas detrás de la trayectoria.</h2>
            <p>Una estructura de liderazgo con continuidad generacional y compromiso con el desarrollo de la empresa.</p>
          </div>
          <TeamGroup title="Miembros fundadores" eyebrow="fundadores" members={founders} />
          <TeamGroup title="Junta directiva actual" eyebrow="junta-directiva" members={currentBoard} />
        </div>
      </section>
    </>
  );
}
