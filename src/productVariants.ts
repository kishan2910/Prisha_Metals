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
    label: `${item.pmPrefix}-${String(i + 1).padStart(2, '0')}`,
    material: 'Brass, Stainless steel, Zinc Alloy, Aluminium',
    finish: 'Multiple finishes available',
    description:
      'We tailor every detail to match your exact specifications. We offer full customization per your requirements.',
  }));
}

export function findCatalogVariant(item: ProductItem, variantSlug: string | undefined): CatalogProductVariant | undefined {
  if (!variantSlug) return undefined;
  return getCatalogVariants(item).find((v) => v.slug === variantSlug);
}
