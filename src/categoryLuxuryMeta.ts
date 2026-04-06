import type { ProductCategory } from './productCatalog';

/** Editorial titles + one-line blurbs keyed to catalog `name` (luxury catalogue tone). */
const LUXURY_BY_CATALOG_NAME: Record<string, { displayTitle: string; blurb: string }> = {
  'PREMIUM HANDLES': {
    displayTitle: 'Premium Handles',
    blurb: '',
  },
  'DOOR LOCKS': {
    displayTitle: 'Door Locks',
    blurb: '',
  },
  'CLASSIC HINGES': {
    displayTitle: 'Classic Hinges',
    blurb: '',
  },
  'BATH FITTINGS': {
    displayTitle: 'Bath Fittings',
    blurb: '',
  },
  'GLASS HARDWARES': {
    displayTitle: 'Glass Hardware',
    blurb: '',
  },
  'LUXURY KNOBS': {
    displayTitle: 'Luxury Knobs',
    blurb: '',
  },
  'DOOR VIEWERS': {
    displayTitle: 'Door Viewers',
    blurb: '',
  },
  'PRECISION COMPONENTS': {
    displayTitle: 'Precision Components',
    blurb: '',
  },
};

function fallbackTitle(catalogName: string): string {
  return catalogName
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function getLuxuryCategoryCopy(category: ProductCategory): { displayTitle: string; blurb: string } {
  const row = LUXURY_BY_CATALOG_NAME[category.name];
  if (row) return row;
  return {
    displayTitle: fallbackTitle(category.name),
    blurb: 'Discover finishes, sub-lines, and specifications in this collection.',
  };
}
