import type { ProductItem } from './productCatalog';

export type CatalogProductVariant = {
  slug: string;
  image: string;
  label: string;
  dimensions: string;
  material: string;
  finish: string;
  weight: string;
  description: string;
};

const SAMPLE_FINISHES = ['Satin brass', 'Polished chrome', 'Antique brass', 'Matte black PVD', 'Brushed nickel', 'Lacquered brass'];

/** Build one “SKU row” per image; specs are placeholders until real data is wired. */
export function getCatalogVariants(item: ProductItem): CatalogProductVariant[] {
  return item.images.map((image, i) => ({
    slug: `variant-${i + 1}`,
    image,
    label: `${item.name} · ${i + 1}`,
    dimensions: `${110 + (i % 6) * 12} × ${38 + (i % 4) * 6} × ${18 + (i % 3) * 4} mm (typical — confirm on order)`,
    material: 'Forged brass body; stainless or steel inserts where specified',
    finish: SAMPLE_FINISHES[i % SAMPLE_FINISHES.length],
    weight: `${160 + i * 25} g (approx.)`,
    description:
      'Dimensions, material, and finish are representative for catalogue presentation. Request a technical data sheet or drawing review for project-specific confirmation.',
  }));
}

export function findCatalogVariant(item: ProductItem, variantSlug: string | undefined): CatalogProductVariant | undefined {
  if (!variantSlug) return undefined;
  return getCatalogVariants(item).find((v) => v.slug === variantSlug);
}
