import { PageHero } from '../components/PageHero';
import { PremiumCategoryShowcase } from '../components/PremiumCategoryShowcase';
import { IMAGE_PATHS } from '../imagePaths';
import { PRODUCT_CATEGORIES } from '../productCatalog';

/**
 * Product catalogue: compact hero + luxury category showcase (editorial cards, no chip clutter).
 */
export function ProductsPage() {
  return (
    <>

      <PremiumCategoryShowcase
        categories={PRODUCT_CATEGORIES}
        layout="catalog"
        eyebrow="Signature collections"
        sectionTitle="Eight signature collections"
        sectionSubtitle="Architectural brass and precision hardware—each line photographed and documented like a high-end catalogue."
      />
    </>
  );
}
