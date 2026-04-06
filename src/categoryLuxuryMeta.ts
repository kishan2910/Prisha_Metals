import type { ProductCategory } from './productCatalog';

const LUXURY_BY_CATALOG_NAME: Record<string, { displayTitle: string }> = {
  'PREMIUM HANDLES': {
    displayTitle: 'Premium Handles',
  },
  'DOOR LOCKS': {
    displayTitle: 'Door Locks',
  },
  'CLASSIC HINGES': {
    displayTitle: 'Classic Hinges',
  },
  'BATH FITTINGS': {
    displayTitle: 'Bath Fittings',
  },
  'GLASS HARDWARES': {
    displayTitle: 'Glass Hardware',
  },
  'LUXURY KNOBS': {
    displayTitle: 'Luxury Knobs',
  },
  'DOOR VIEWERS': {
    displayTitle: 'Door Viewers',
  },
  'PRECISION COMPONENTS': {
    displayTitle: 'Precision Components',
  },
};

function fallbackTitle(catalogName: string): string {
  return catalogName
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function getLuxuryCategoryCopy(category: ProductCategory): { displayTitle: string } {
  const row = LUXURY_BY_CATALOG_NAME[category.name];
  if (row) return row;
  return {
    displayTitle: fallbackTitle(category.name),
  };
}
