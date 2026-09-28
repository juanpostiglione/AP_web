'use client';

import { useRef, useState } from 'react';
import type { ProjectImage } from '../../data/projects';

export default function BeforeAfterGallery({ images }: { images: ProjectImage[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(images.length - 1, index));
    const viewport = viewportRef.current;
    if (viewport) viewport.scrollTo({ left: viewport.clientWidth * nextIndex, behavior: 'smooth' });
    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport?.clientWidth) return;
    const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
    if (nextIndex !== activeIndex) setActiveIndex(nextIndex);
  };

  return (
    <div className="project-panel__comparison">
      <div
        ref={viewportRef}
        className="project-panel__media project-panel__media--comparison"
        tabIndex={0}
        aria-label="Comparación antes y después. Usa las flechas o desplázate horizontalmente para ver ambas fotografías."
        onScroll={handleScroll}
      >
        {images.map((image) => (
          <figure className="project-panel__media-item" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            {image.label && <figcaption>{image.label}</figcaption>}
          </figure>
        ))}
      </div>
      <div className="project-panel__controls" aria-label="Controles de comparación">
        <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Ver fotografía anterior">←</button>
        <span aria-live="polite">{images[activeIndex]?.label ?? `Imagen ${activeIndex + 1}`} <small>{activeIndex + 1} / {images.length}</small></span>
        <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === images.length - 1} aria-label="Ver fotografía siguiente">→</button>
      </div>
    </div>
  );
}
