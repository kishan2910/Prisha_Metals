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
        sectionSubtitle="Exclusive collections that define elegance, durability, and refined craftsmanship."
      />
    </>
  );
}
