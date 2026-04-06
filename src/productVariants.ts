import type { ProductItem } from './productCatalog';

export type CatalogProductVariant = {
  slug: string;
  image: string;
  label: string;
  material: string;
  finish: string;
  description: string;
};

const AVAILABLE_FINISHES = 'SSM – Satin Stainless / Matt Finish, ZB – Zinc Black, ABM – Antique Brass Matt, PVDR – PVD Rose Gold, PVDG – PVD Gold';

/** Build one "SKU row" per image; specs are placeholders until real data is wired. */
export function getCatalogVariants(item: ProductItem): CatalogProductVariant[] {
  return item.images.map((image, i) => ({
    slug: `variant-${i + 1}`,
    image,
    label: `${item.name} · ${i + 1}`,
    material: 'Forged brass body; stainless or steel inserts where specified',
    finish: 'Multiple finishes available',
    description:
      'Specifications and finish options are representative for catalogue presentation. We offer customization per your project requirements. Request a technical data sheet or drawing review for project-specific confirmation.',
  }));
}

export function findCatalogVariant(item: ProductItem, variantSlug: string | undefined): CatalogProductVariant | undefined {
  if (!variantSlug) return undefined;
  return getCatalogVariants(item).find((v) => v.slug === variantSlug);
}
