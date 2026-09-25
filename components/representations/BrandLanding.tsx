import Link from 'next/link';
import type { BrandPage } from '../../data/representations/types';
import Breadcrumbs from './Breadcrumbs';

export default function BrandLanding({ page }: { page: BrandPage }) {
  return (
    <>
      <section className={`rep-hero rep-hero--${page.brand}`}>
        <div className="rep-hero__overlay" />
        <div className="rep-hero__content">
          <img src={page.logo} alt={page.heroTitle} className="rep-hero__logo" />
          <h1 className="rep-hero__title">{page.heroTitle}</h1>
          <p className="rep-hero__subtitle">{page.subtitle}</p>
        </div>
      </section>
      <Breadcrumbs current={page.label} />
      <section className="rep-products" aria-labelledby="product-lines-title">
        <div className="rep-products__header section-reveal">
          <h2 id="product-lines-title">Líneas de Producto</h2>
          <div className="header-line" />
        </div>
        <div className="rep-products__grid">
          {page.categories.map((category) => (
            <Link className="rep-product-card" key={category.slug} href={`/${category.slug}`}>
              <div className="rep-product-card__accent" />
              <div className="rep-product-card__body">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <span className="rep-product-card__arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
