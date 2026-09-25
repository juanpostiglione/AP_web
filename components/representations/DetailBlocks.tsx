import Link from 'next/link';
import type { DetailBlock, StoryItem } from '../../data/representations/types';

// Inline formatting is authored in this repository's data files. Do not feed
// untrusted form input into these HTML fields.
function InlineCopy({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function StoryItemView({ item }: { item: StoryItem }) {
  switch (item.type) {
    case 'paragraph': return <p><InlineCopy html={item.html} /></p>;
    case 'subheading': return <h4 className="representation-subheading">{item.text}</h4>;
    case 'list': return (
      <ul className="story-list">
        {item.items.map((text, index) => <li key={index}><InlineCopy html={text} /></li>)}
      </ul>
    );
  }
}

export default function DetailBlocks({ blocks }: { blocks: DetailBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case 'heading':
        return <div key={index} className="section-header representation-heading">
          {index === 0 ? <h1>{block.text}</h1> : <h2>{block.text}</h2>}
          <div className="header-line" />
        </div>;
      case 'story':
        return (
          <article key={index} className="story-panel is-visible single-column representation-story">
            <div className="story-panel-content wide">
              {block.items.map((item, itemIndex) => <StoryItemView key={itemIndex} item={item} />)}
            </div>
            {block.image && (
              <div className="story-panel-media representation-figure">
                <img src={block.image} alt={block.imageAlt || ''} />
              </div>
            )}
          </article>
        );
      case 'products':
        return (
          <div key={index} className={`product-grid${block.scroll ? ' product-grid--scroll' : ''}`}>
            {block.cards.map((card, cardIndex) => (
              <article className="product-card" key={`${card.title}-${cardIndex}`}>
                <img src={card.image} alt={card.alt} className={`product-image${card.detailImage ? ' product-image--detail' : ''}`}
                  style={card.imageHeight ? { height: card.imageHeight } : undefined} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        );
      case 'features':
        return (
          <div key={index} className="representation-features">
            <h3>{block.title}</h3>
            <div className="representation-features__grid">
              {block.items.map((feature) => <div key={feature.title}><h4>{feature.title}</h4><p>{feature.text}</p></div>)}
            </div>
          </div>
        );
      case 'bullets':
        return <div key={index} className="representation-features"><h3>{block.title}</h3><ul className="story-list">{block.items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
      case 'links':
        return (
          <div key={index} className="representation-related">
            {block.title && <h3>{block.title}</h3>}
            <ul>{block.items.map((item) => <li key={item.href}>
              {/^https?:\/\//.test(item.href)
                ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.text}</a>
                : <Link href={item.href}>{item.text}</Link>}
            </li>)}</ul>
          </div>
        );
    }
  });
}
