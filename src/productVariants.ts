import type { ProductItem } from './productCatalog';

export type CatalogProductVariant = {
  slug: string;
  image: string;
  label: string;
  material: string;
  description: string;
};

function getLinePrefix(itemName: string): string {
  const name = itemName.toLowerCase();
  if (name.includes('mortise')) return 'PM-M';
  if (name.includes('cabinet')) return 'PM-C';
  if (name.includes('pull')) return 'PM-P';
  if (name.includes('lock')) return 'PM-L';
  if (name.includes('hinge')) return 'PM-H';
  if (name.includes('shower')) return 'PM-S';
  if (name.includes('knob')) return 'PM-K';
  if (name.includes('viewer')) return 'PM-V';
  return 'PM-X';
}

/** Build one display code per image (PM-M1, PM-M2, PM-C1 ...). */
export function getCatalogVariants(item: ProductItem): CatalogProductVariant[] {
  const code = getLinePrefix(item.name);
  return item.images.map((image, i) => ({
    slug: `variant-${i + 1}`,
    image,
    label: `${code}${i + 1}`,
    material: 'Forged brass body; stainless/steel inserts where applicable.',
    description:
      'Specification values shown are indicative for catalogue preview. Final details are confirmed against approved drawings and production samples.',
  }));
}

export function findCatalogVariant(item: ProductItem, variantSlug: string | undefined): CatalogProductVariant | undefined {
  if (!variantSlug) return undefined;
  return getCatalogVariants(item).find((v) => v.slug === variantSlug);
}
