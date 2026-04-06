import type { ProductCategory } from './productCatalog';

/** Editorial titles + one-line blurbs keyed to catalog `name` (luxury catalogue tone). */
const LUXURY_BY_CATALOG_NAME: Record<string, { displayTitle: string; blurb: string }> = {
  'PREMIUM HANDLES': {
    displayTitle: 'Premium Handles',
    blurb: 'Mortise, pull, and cabinet lines—sculpted brass with quiet presence.',
  },
  'DOOR LOCKS': {
    displayTitle: 'Door Locks',
    blurb: 'Bodies, cylinders, and locking brass engineered for dependable security.',
  },
  'CLASSIC HINGES': {
    displayTitle: 'Classic Hinges',
    blurb: 'Butt, railway, overlay, and specialty hinges with bearing discipline.',
  },
  'BATH FITTINGS': {
    displayTitle: 'Bath Fittings',
    blurb: 'Mixers, showers, and accessories coordinated for refined wash spaces.',
  },
  'GLASS HARDWARES': {
    displayTitle: 'Glass Hardware',
    blurb: 'Brackets, caps, and fixings composed for architectural glass.',
  },
  'LUXURY KNOBS': {
    displayTitle: 'Luxury Knobs',
    blurb: 'Signature profiles for doors and cabinetry—tactile, balanced, lasting.',
  },
  'DOOR VIEWERS': {
    displayTitle: 'Door Viewers',
    blurb: 'Optical hardware with clarity and discretion at the entrance.',
  },
  'PRECISION COMPONENTS': {
    displayTitle: 'Precision Components',
    blurb: 'Turned and machined brass produced to drawing, batch after batch.',
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
