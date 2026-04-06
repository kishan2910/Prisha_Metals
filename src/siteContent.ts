export const SITE_NAME = 'Prisha Metal';

export const SITE_TAGLINE = 'Engineered for excellence';

export const SITE_CONTACT = {
  phone: '+91 8799051826',
  germanySalesExec: '+49 1575 8170716',
  email: 'sales@prishametalint.com',
  addressLines: [
    'Plot No 7, R S No 42/P1, Sadguru Industrial Park',
    'Kansumra Road, Jamnagar, Gujarat (India) 361 004',
  ],
  fullAddress:
    'Plot No 7, R S No 42/P1, Sadguru Industrial Park, Kansumra Road, Jamnagar, Gujarat (India) 361 004',
} as const;

/** Primary routes shown in the header and footer. */
export const MAIN_NAV = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/design', label: 'Design' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const;

export const COPYRIGHT_YEAR = 2026;
