import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RevealSection } from './components/RevealSection';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { IMAGE_PATHS } from './imagePaths';
import { PRODUCT_CATEGORIES, findItemBySlug, getCategoryBySlug, toSlug } from './productCatalog';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
}

function ProductCategoryPage() {
  const { categorySlug, subSlug } = useParams();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!category) {
    return (
      <section className="bg-mesh-industrial px-4 py-24 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="serif text-4xl font-medium">Category not found</h1>
          <p className="mt-4 font-sans text-ink/65">Choose a category from the Products menu.</p>
        </div>
      </section>
    );
  }

  const selectedItem = findItemBySlug(category, subSlug);
  const heroImage = selectedItem?.images[0] ?? category.image;

  return (
    <>
      <Hero
        title={category.name}
        subtitle={selectedItem ? selectedItem.name : 'Sub-lines and photography in this category.'}
        image={heroImage}
        overlayClassName="bg-gradient-to-r from-ink/88 via-ink/50 to-ink/22"
      />
      <section className="bg-mesh-industrial px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-wrap gap-2">
            <Link
              to="/products"
              className="rounded-full border border-ink/15 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-ink/70 transition hover:border-gold/50 hover:text-gold"
            >
              All categories
            </Link>
            {PRODUCT_CATEGORIES.map((itemCategory) => (
              <Link
                key={itemCategory.name}
                to={`/products/${toSlug(itemCategory.name)}`}
                className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-widest transition ${
                  itemCategory.name === category.name
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-ink/15 bg-white text-ink/65 hover:border-gold/40 hover:text-gold'
                }`}
              >
                {itemCategory.name}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => {
              const active = selectedItem?.name === item.name;
              const thumb = item.images[0];
              return (
                <Link
                  key={item.name}
                  to={`/products/${toSlug(category.name)}/${toSlug(item.name)}`}
                  className={`group overflow-hidden rounded-2xl border bg-white shadow-card transition duration-300 ${
                    active ? 'border-gold ring-2 ring-gold/30' : 'border-ink/10 hover:-translate-y-1 hover:border-gold/35 hover:shadow-premium'
                  }`}
                >
                  {thumb && (
                    <div className="aspect-[4/3] w-full overflow-hidden bg-ink/5">
                      <img src={thumb} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                    </div>
                  )}
                  <p className="p-4 font-sans text-sm font-medium tracking-wide text-ink group-hover:text-gold">{item.name}</p>
                </Link>
              );
            })}
          </div>

          {selectedItem && selectedItem.images.length > 0 && (
            <div className="border-t border-ink/10 pt-12">
              <h3 className="serif text-2xl font-medium sm:text-3xl">{selectedItem.name}</h3>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
                {selectedItem.images.map((src) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.45 }}
                    className="aspect-square overflow-hidden rounded-xl bg-ink/5 ring-1 ring-ink/5"
                  >
                    <img src={src} alt={selectedItem.name} className="h-full w-full object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function DesignPage() {
  return (
    <>
      <Hero title="Design language" subtitle="Composition, typography, and motion aligned with premium industrial branding." image={IMAGE_PATHS.designHero} />
      <RevealSection
        title="Text + image rhythm"
        subtitle="Design system"
        body="Split layouts and scroll-driven reveals keep photography and specification copy in balance—clear hierarchy on every breakpoint."
        image={IMAGE_PATHS.designHero}
      />
      <RevealSection
        title="Responsive by default"
        subtitle="Design system"
        body="Spacing, type scale, and image ratios adapt from phone to desktop so specifiers can review comfortably in the field or at the desk."
        image={IMAGE_PATHS.productsHero}
        imageLeft={false}
      />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Hero title="About Prisha Metals" subtitle="Craftsmanship, finishing discipline, and engineering precision." image={IMAGE_PATHS.aboutHero} />
      <RevealSection
        title="Engineering with character"
        subtitle="About"
        body="Our strength is in repeatable processes: stable alloys, controlled machining, and inspection before dispatch—so what you specify is what arrives on site."
        image={IMAGE_PATHS.aboutHero}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-ink">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
            <Route path="/products/:categorySlug/:subSlug" element={<ProductCategoryPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
