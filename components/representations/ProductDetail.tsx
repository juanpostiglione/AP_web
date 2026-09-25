import type { DetailPageData } from '../../data/representations/types';
import Breadcrumbs from './Breadcrumbs';
import DetailBlocks from './DetailBlocks';

const brandNames = { chesterton: 'Chesterton', orange: 'Orange Technologies', worldfluid: 'WorldFluid' };

export default function ProductDetail({ page }: { page: DetailPageData }) {
  return (
    <>
      <Breadcrumbs current={page.label} parent={{ href: `/${page.parent}`, label: brandNames[page.brand] }} />
      <section className="story representation-detail" aria-label={page.label}>
        <div className="story-panels representation-detail__blocks">
          <DetailBlocks blocks={page.blocks} />
        </div>
      </section>
    </>
  );
}
