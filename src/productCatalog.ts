export const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** Encode each path segment so spaces, parentheses, etc. work in URLs. */
export function encodeAssetPath(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return '/' + clean.split('/').filter(Boolean).map((seg) => encodeURIComponent(seg)).join('/');
}

export function productImg(...segments: string[]): string {
  return encodeAssetPath(['assets', 'images', 'products', ...segments].join('/'));
}

export type ProductItem = {
  name: string;
  images: string[];
};

export type ProductCategory = {
  name: string;
  image: string;
  items: ProductItem[];
};

const ph = 'premium handle';
const dl = 'door locks';
const ch = 'classic hinges';
const bf = 'bath fittings';
const gh = 'glass hardwares';
const lk = 'luxury knobs';
const dv = 'door viewers';
const bc = 'brass components';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    name: 'PREMIUM HANDLES',
    image: productImg(ph, 'Mortise handle', 'Untitled design.png'),
    items: [
      {
        name: 'Mortise handle',
        images: [
          productImg(ph, 'Mortise handle', 'Untitled design.png'),
          productImg(ph, 'Mortise handle', 'Untitled design (1).png'),
          productImg(ph, 'Mortise handle', 'Untitled design (2).png'),
          productImg(ph, 'Mortise handle', 'Untitled design (3).png'),
          productImg(ph, 'Mortise handle', 'Untitled design (4).png'),
          productImg(ph, 'Mortise handle', 'Untitled design (5).png'),
          productImg(ph, 'Mortise handle', 'Untitled design (6).png'),
          productImg(ph, 'Mortise handle', 'Untitled design (7).png'),
          productImg(ph, 'Mortise handle', 'Untitled design (8).png'),
        ],
      },
      {
        name: 'Cabinet Handle',
        images: [
          productImg(ph, 'Cabinet Handle', 'Untitled design.png'),
          productImg(ph, 'Cabinet Handle', 'Untitled design (1).png'),
          productImg(ph, 'Cabinet Handle', 'Untitled design (2).png'),
          productImg(ph, 'Cabinet Handle', 'Untitled design (3).png'),
          productImg(ph, 'Cabinet Handle', 'Untitled design (4).png'),
          productImg(ph, 'Cabinet Handle', 'Untitled design (5).png'),
          productImg(ph, 'Cabinet Handle', 'Untitled design (6).png'),
        ],
      },
      {
        name: 'Pull Handle',
        images: [
          productImg(ph, 'Pull Handle', 'Untitled design.png'),
          productImg(ph, 'Pull Handle', 'Untitled design (1).png'),
          productImg(ph, 'Pull Handle', 'Untitled design (2).png'),
          productImg(ph, 'Pull Handle', 'Untitled design (3).png'),
          productImg(ph, 'Pull Handle', 'Untitled design (4).png'),
          productImg(ph, 'Pull Handle', 'Untitled design (5).png'),
          productImg(ph, 'Pull Handle', 'Untitled design (6).png'),
          productImg(ph, 'Pull Handle', 'Untitled design (7).png'),
        ],
      },
    ],
  },
  {
    name: 'DOOR LOCKS',
    image: productImg(dl, 'Lock body', 'baby latch', 'madhuram52702461651581006.png'),
    items: [
      {
        name: 'Lock body',
        images: [
          productImg(dl, 'Lock body', 'baby latch', 'madhuram52702461651581006.png'),
          productImg(dl, 'Lock body', 'baby latch', 'madhuram66973771650979512.png'),
          productImg(dl, 'Lock body', 'cy body', 'madhuram11688681655531730.png'),
          productImg(dl, 'Lock body', 'cy body', 'madhuram49757711649767764.jpg'),
          productImg(dl, 'Lock body', 'dead lock', 'madhuram53061291650979538.png'),
          productImg(dl, 'Lock body', 'dead lock', 'madhuram96851211651581083.png'),
          productImg(dl, 'Lock body', 'ky body', 'madhuram56254511650979562.png'),
          productImg(dl, 'Lock body', 'ky body', 'madhuram60749561651581132 (1).png'),
        ],
      },
      {
        name: 'Cylinder Lock',
        images: [
          productImg(dl, 'Cylinder Lock', 'both side key cylinder', 'madhuram11341711651581213.png'),
          productImg(dl, 'Cylinder Lock', 'both side key cylinder', 'madhuram87158651650979414.png'),
          productImg(dl, 'Cylinder Lock', 'cylinder (1 side key knob)', 'madhuram50661421655531767.png'),
          productImg(dl, 'Cylinder Lock', 'cylinder (1 side key knob)', 'madhuram78529031649767130.jpg'),
          productImg(dl, 'Cylinder Lock', 'cylinder coin key less', 'madhuram84107301650979436.png'),
          productImg(dl, 'Cylinder Lock', 'cylinder coin key less', 'madhuram97915021651581283.png'),
          productImg(dl, 'Cylinder Lock', 'half cylinder knob', 'madhuram18678681650979426.png'),
          productImg(dl, 'Cylinder Lock', 'half cylinder knob', 'madhuram49062711651581243.png'),
        ],
      },
    ],
  },
  {
    name: 'CLASSIC HINGES',
    image: productImg(ch, 'brass hinge butt', 'Untitled design.png'),
    items: [
      {
        name: 'Brass hinge butt',
        images: [
          productImg(ch, 'brass hinge butt', 'Untitled design.png'),
          productImg(ch, 'brass hinge butt', 'Untitled design (1).png'),
        ],
      },
      {
        name: 'Brass Hinge railway',
        images: [
          productImg(ch, 'brass Hinge railway', 'Untitled design.png'),
          productImg(ch, 'brass Hinge railway', 'madhuram92375101651226549.jpg'),
        ],
      },
      {
        name: 'brass hinge bearing',
        images: [
          productImg(ch, 'brass hinge bearing', 'madhuram12817941651225889.jpg'),
          productImg(ch, 'brass hinge bearing', 'madhuram48923331650522221.png'),
        ],
      },
      {
        name: 'BRASS HINGE BEARING ITALIAN TIPS',
        images: [productImg(ch, 'BRASS HINGE BEARING ITALIAN TIPS', 'Untitled design.png')],
      },
      {
        name: 'brass hinge L locking',
        images: [
          productImg(ch, 'brass hinge L locking', 'Untitled design.png'),
          productImg(ch, 'brass hinge L locking', 'madhuram49903751651226132.jpg'),
        ],
      },
      {
        name: 'brass hinge L locking 90',
        images: [
          productImg(ch, 'brass hinge L locking 90', 'Untitled design.png'),
          productImg(ch, 'brass hinge L locking 90', 'Untitled design (1).png'),
        ],
      },
      {
        name: 'brass hinge Z',
        images: [productImg(ch, 'brass hinge Z', 'Untitled design.png')],
      },
      {
        name: 'brass overlay hinge',
        images: [
          productImg(ch, 'brass overlay hinge', 'full overlay.jpg'),
          productImg(ch, 'brass overlay hinge', 'half.jpg'),
          productImg(ch, 'brass overlay hinge', 'Untitled design.png'),
        ],
      },
      {
        name: 'brass hinge  W locking',
        images: [productImg(ch, 'brass hinge  W locking', 'Untitled design.png')],
      },
      {
        name: 'brass hinge parlament',
        images: [productImg(ch, 'brass hinge parlament', 'Untitled design.png')],
      },
      {
        name: 'brass hinge spring',
        images: [
          productImg(ch, 'brass hinge spring', 'madhuram25393211650787913.png'),
          productImg(ch, 'brass hinge spring', 'Untitled design.png'),
        ],
      },
    ],
  },
  {
    name: 'BATH FITTINGS',
    image: productImg(bf, 'piller cock (wash basin)', 'Untitled design.png'),
    items: [
      {
        name: 'Piller Cock (Wash Basin)',
        images: [
          productImg(bf, 'piller cock (wash basin)', 'Untitled design.png'),
          productImg(bf, 'piller cock (wash basin)', 'Untitled design (1).png'),
          productImg(bf, 'piller cock (wash basin)', 'Untitled design (2).png'),
          productImg(bf, 'piller cock (wash basin)', 'Untitled design (3).png'),
        ],
      },
      {
        name: 'Swan neck (Sink) Piller cock',
        images: [
          productImg(bf, 'Swan neck (Sink) Piller cock', '1.png'),
          productImg(bf, 'Swan neck (Sink) Piller cock', 'Untitled design.png'),
          productImg(bf, 'Swan neck (Sink) Piller cock', 'Untitled design (1).png'),
        ],
      },
      {
        name: 'bib cock',
        images: [productImg(bf, 'bib cock', 'Untitled design (1).png')],
      },
      {
        name: 'Multi flow hand SHOWER (including chain + abs hook)',
        images: [
          productImg(bf, 'Multi flow hand SHOWER (including chain + abs hook)', '180.jpg'),
          productImg(bf, 'Multi flow hand SHOWER (including chain + abs hook)', '183.jpg'),
          productImg(bf, 'Multi flow hand SHOWER (including chain + abs hook)', 'Untitled design.png'),
        ],
      },
      {
        name: 'Shower Head square',
        images: [productImg(bf, 'Shower Head square', 'Untitled design.png')],
      },
      {
        name: 'Toilet paper holder',
        images: [productImg(bf, 'Toilet paper holder', 'Untitled design.png')],
      },
      {
        name: 'Towel Rod',
        images: [
          productImg(bf, 'Towel Rod', 'madhuram97284061655214772.png'),
          productImg(bf, 'Towel Rod', 'Untitled design.png'),
        ],
      },
      {
        name: 'Towel Rack',
        images: [productImg(bf, 'Towel Rack', 'Untitled design.png')],
      },
      {
        name: 'Full Brass Liquid Dispenser',
        images: [
          productImg(bf, 'Full Brass Liquid Dispenser', 'madhuram15150851655370039.jpg'),
          productImg(bf, 'Full Brass Liquid Dispenser', 'Untitled design.png'),
        ],
      },
    ],
  },
  {
    name: 'GLASS HARDWARES',
    image: productImg(gh, 'Brass D Bracket', 'madhuram58621061650547145.png'),
    items: [
      { name: 'Brass D Bracket', images: [productImg(gh, 'Brass D Bracket', 'madhuram58621061650547145.png')] },
      { name: 'Brass F Bracket', images: [productImg(gh, 'Brass F Bracket', 'madhuram63854271650547192.png')] },
      { name: 'Brass Square Bracket', images: [productImg(gh, 'Brass Square Bracket', 'madhuram59115401650547276.png')] },
      { name: 'Brass Mirror Screw', images: [productImg(gh, 'Brass Mirror Screw', 'madhuram45206171650547239.png')] },
      {
        name: 'Brass Mirror Cap',
        images: [
          productImg(gh, 'Brass Mirror Cap', 'madhuram35872391650965243.png'),
          productImg(gh, 'Brass Mirror Cap', 'madhuram39994161650964236.png'),
          productImg(gh, 'Brass Mirror Cap', 'madhuram56004281650964203.png'),
          productImg(gh, 'Brass Mirror Cap', 'madhuram66967461650964268.png'),
          productImg(gh, 'Brass Mirror Cap', 'madhuram72634201650964348.png'),
          productImg(gh, 'Brass Mirror Cap', 'madhuram73771751650964072.png'),
          productImg(gh, 'Brass Mirror Cap', 'madhuram75653131650964318.png'),
          productImg(gh, 'Brass Mirror Cap', 'madhuram83803541650964125.png'),
          productImg(gh, 'Brass Mirror Cap', 'madhuram96325521650964176.png'),
        ],
      },
    ],
  },
  {
    name: 'LUXURY KNOBS',
    image: productImg(lk, 'PM 01', 'madhuram87922021656072688.png'),
    items: [
      {
        name: 'PM 01',
        images: [productImg(lk, 'PM 01', 'madhuram87922021656072688.png'), productImg(lk, 'PM 01', 'Untitled design.png')],
      },
      {
        name: 'PM 02',
        images: [productImg(lk, 'PM 02', 'madhuram62742341656071290.png'), productImg(lk, 'PM 02', 'Untitled design.png')],
      },
      {
        name: 'PM 03',
        images: [productImg(lk, 'PM 03', 'madhuram55263401656072656.png'), productImg(lk, 'PM 03', 'Untitled design.png')],
      },
      {
        name: 'PM 04',
        images: [productImg(lk, 'PM 04', 'madhuram40546241656071093.png'), productImg(lk, 'PM 04', 'Untitled design.png')],
      },
    ],
  },
  {
    name: 'DOOR VIEWERS',
    image: productImg(dv, 'madhuram38265231650545453.png'),
    items: [
      {
        name: 'Door viewers',
        images: [productImg(dv, 'madhuram38265231650545453.png'), productImg(dv, 'Untitled design.png')],
      },
    ],
  },
  {
    name: 'PRESICION TURNED COMPONENTS',
    image: productImg(bc, 'allproducts-banner.jpg'),
    items: [
      {
        name: 'Custom turned components as per drawing',
        images: [
          productImg(bc, '104036962.jpg'),
          productImg(bc, '1048795142.jpg'),
          productImg(bc, '1191073375.jpg'),
          productImg(bc, '1296810293.jpg'),
          productImg(bc, '1322190139.jpg'),
          productImg(bc, '1416268614.jpg'),
          productImg(bc, '1419377307.jpg'),
          productImg(bc, '1468907797.jpg'),
          productImg(bc, '1521916773.jpg'),
          productImg(bc, '1611707436.jpg'),
          productImg(bc, '1619130719.jpg'),
          productImg(bc, '1706064693.jpg'),
          productImg(bc, '1784255515.jpg'),
          productImg(bc, '18131485.jpg'),
          productImg(bc, '1963904078.jpg'),
          productImg(bc, '2024619920.jpg'),
          productImg(bc, '2078763828.jpg'),
          productImg(bc, '252766629.jpg'),
          productImg(bc, '282561829.jpg'),
          productImg(bc, '31811736.jpg'),
          productImg(bc, '318529179.jpg'),
          productImg(bc, '388433070.jpg'),
          productImg(bc, '410931491.jpg'),
          productImg(bc, '461620415.jpg'),
          productImg(bc, '488324460.jpg'),
          productImg(bc, '534638545.jpg'),
          productImg(bc, '627829419.jpg'),
          productImg(bc, '652580974.jpg'),
          productImg(bc, '673934603.jpg'),
          productImg(bc, '748370940.jpg'),
          productImg(bc, '801602477.jpg'),
          productImg(bc, '830820390.jpg'),
        ],
      },
    ],
  },
];

export function getCategoryBySlug(categorySlug: string) {
  return PRODUCT_CATEGORIES.find((c) => toSlug(c.name) === categorySlug);
}

export function findItemBySlug(category: ProductCategory, subSlug: string | undefined): ProductItem | undefined {
  if (!subSlug) return undefined;
  return category.items.find((item) => toSlug(item.name) === subSlug);
}
