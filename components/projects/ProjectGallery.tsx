'use client';

import { useRef, useState } from 'react';
import type { ProjectImage } from '../../data/projects';

type ProjectGalleryProps = {
  images: ProjectImage[];
  eager?: boolean;
  label: string;
};

export default function ProjectGallery({ images, eager = false, label }: ProjectGalleryProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(images.length - 1, index));
    const viewport = viewportRef.current;
    const slide = viewport?.children.item(nextIndex) as HTMLElement | null;
    if (viewport && slide) viewport.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const slides = Array.from(viewport.children) as HTMLElement[];
    if (!slides.length) return;
    const nextIndex = slides.reduce((closest, slide, index) => (
      Math.abs(slide.offsetLeft - viewport.scrollLeft) < Math.abs(slides[closest].offsetLeft - viewport.scrollLeft)
        ? index
        : closest
    ), 0);
    if (nextIndex !== activeIndex) setActiveIndex(nextIndex);
  };

  return (
    <div className="project-gallery">
      <div
        ref={viewportRef}
        className="project-gallery__viewport"
        tabIndex={0}
        aria-label={`Galería de ${label}. Usa las flechas o desplázate horizontalmente.`}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <figure className="project-gallery__slide" key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              loading={eager && index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            {image.label && <figcaption>{image.label}</figcaption>}
          </figure>
        ))}
      </div>
      <div className="project-gallery__controls" aria-label={`Controles de la galería ${label}`}>
        <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Ver fotografía anterior">←</button>
        <span aria-live="polite">{images[activeIndex]?.label}</span>
        <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === images.length - 1} aria-label="Ver fotografía siguiente">→</button>
      </div>
    </div>
  );
}
