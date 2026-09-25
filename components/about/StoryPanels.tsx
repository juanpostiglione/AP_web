import { storyPanels } from '../../data/about';

export default function StoryPanels() {
  return (
    <section className="story story--page">
      <div className="story-panels">
        {storyPanels.map((panel) => (
          <article className="story-panel" key={panel.title}>
            <div className="story-panel-media"><img src={panel.image} alt={panel.alt} /></div>
            <div className="story-panel-content">
              <span className="step-kicker">{panel.kicker}</span>
              <h3>{panel.title}</h3>
              {panel.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {panel.areas && <ul className="story-area-list">{panel.areas.map(([label, value]) => <li key={label}><span>{label}</span> {value}</li>)}</ul>}
              {panel.specialties && <ul className="story-list">{panel.specialties.map((item) => <li key={item}>{item}</li>)}</ul>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
