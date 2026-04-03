import { encodeAssetPath, productImg } from './productCatalog';

export const IMAGE_PATHS = {
  logo: '/assets/images/logo/logo.png',
  homeHero: encodeAssetPath('assets/images/home/Untitled design.png'),
  productsHero: productImg('brass components', 'allproducts-banner.jpg'),
  designHero: '/assets/images/design/cover.svg',
  aboutHero: encodeAssetPath('assets/images/about/PRISHA METALS (2).png'),
  contactHero: encodeAssetPath('assets/images/contact/PRISHA METALS.png'),
};
