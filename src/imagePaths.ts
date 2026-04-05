import { encodeAssetPath, productImg } from './productCatalog';

export const IMAGE_PATHS = {
  logo: '/assets/images/logo/logo.png',
  homeHero: encodeAssetPath('assets/images/home/catalog.png'),
  productsHero: productImg('brass components', 'brass main.png'),
  /** Design page — primary hero visual */
  designHero: encodeAssetPath('assets/images/design/a.png'),
  /** Design page — second feature image */
  designFeature: encodeAssetPath('assets/images/design/design.png'),
  aboutHero: encodeAssetPath('assets/images/about/home black.png'),
  contactHero: encodeAssetPath('assets/images/contact/PRISHA METALS.png'),
};
