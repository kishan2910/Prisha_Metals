import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RevealSection } from './components/RevealSection';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { IMAGE_PATHS } from './imagePaths';
import { PRODUCT_CATEGORIES, findItemBySlug, getCategoryBySlug, toSlug } from './productCatalog';
import { SITE_CONTACT } from './siteContent';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
}

function ProductsPage() {
  return (
    <>
      <Hero title="Product Categories" subtitle="Browse every category and subcategory with full product photography." image={IMAGE_PATHS.productsHero} />
      <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto max-w-7xl space-y-10">
          <div>
            <p className="mb-3 text-xs tracking-[0.35em] text-gold">FULL CATALOG</p>
            <h2 className="serif text-3xl font-light sm:text-4xl md:text-5xl">Premium Engineered Sections</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="overflow-hidden rounded-sm border border-ink/10 bg-white"
              >
                <div className="relative h-52 w-full overflow-hidden sm:h-64">
                  <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
                  <Link to={`/products/${toSlug(category.name)}`} className="serif absolute bottom-4 left-4 pr-3 text-2xl text-white hover:text-gold sm:text-3xl">
                    {category.name}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 p-4 sm:p-5">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      to={`/products/${toSlug(category.name)}/${toSlug(item.name)}`}
                      className="rounded-full border border-ink/20 px-3 py-1.5 text-xs tracking-wide transition-colors hover:border-gold hover:text-gold sm:text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCategoryPage() {
  const { categorySlug, subSlug } = useParams();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!category) {
    return (
      <section className="px-4 py-24 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="serif text-4xl">Category Not Found</h1>
          <p className="mt-4 opacity-70">Please select a category from Products menu.</p>
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
        subtitle={selectedItem ? selectedItem.name : 'Explore all subcategories and product lines in this category.'}
        image={heroImage}
      />
      <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-wrap gap-3">
            <Link to="/products" className="rounded-full border border-ink/20 px-4 py-2 text-xs tracking-[0.15em] hover:border-gold hover:text-gold">
              ALL CATEGORIES
            </Link>
            {PRODUCT_CATEGORIES.map((itemCategory) => (
              <Link
                key={itemCategory.name}
                to={`/products/${toSlug(itemCategory.name)}`}
                className={`rounded-full border px-4 py-2 text-xs tracking-[0.15em] ${itemCategory.name === category.name ? 'border-gold text-gold' : 'border-ink/20 hover:border-gold hover:text-gold'}`}
              >
                {itemCategory.name}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => {
              const active = selectedItem?.name === item.name;
              const thumb = item.images[0];
              return (
                <Link
                  key={item.name}
                  to={`/products/${toSlug(category.name)}/${toSlug(item.name)}`}
                  className={`overflow-hidden rounded-sm border transition-all ${active ? 'border-gold bg-gold/5' : 'border-ink/10 hover:-translate-y-1 hover:border-gold'}`}
                >
                  {thumb && (
                    <div className="aspect-[4/3] w-full overflow-hidden bg-ink/5">
                      <img src={thumb} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <p className="p-4 text-sm tracking-wide">{item.name}</p>
                </Link>
              );
            })}
          </div>

          {selectedItem && selectedItem.images.length > 0 && (
            <div className="border-t border-ink/10 pt-10">
              <h3 className="serif mb-6 text-2xl sm:text-3xl">{selectedItem.name}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
                {selectedItem.images.map((src) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="aspect-square overflow-hidden rounded-sm bg-ink/5"
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
      <Hero title="Design Language" subtitle="Clean luxury composition, rich typography, and modern motion for premium branding." image={IMAGE_PATHS.designHero} />
      <RevealSection title="Text + Image Motion" subtitle="DESIGN SYSTEM" body="Content uses high-end split layout animations. On scroll, image enters from one side and copy from the other side for visual drama." image={IMAGE_PATHS.designHero} />
      <RevealSection title="Device-First Layout" subtitle="DESIGN SYSTEM" body="This design is responsive by default, with optimized spacing, font sizes, and image heights for mobile, tablet, and desktop." image={IMAGE_PATHS.productsHero} imageLeft={false} />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Hero title="About Prisha Metals" subtitle="Trusted craftsmanship, premium finishing, and engineering precision." image={IMAGE_PATHS.aboutHero} />
      <RevealSection title="Engineering with Character" subtitle="ABOUT" body="Show your manufacturing capability, quality standards, and journey with large full-width visuals and polished storytelling sections." image={IMAGE_PATHS.aboutHero} />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Hero title="Contact Us" subtitle="For business inquiries and product requirements, reach out directly." image={IMAGE_PATHS.contactHero} />
      <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="space-y-7">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl">Let us build with you.</h2>
            <div className="space-y-4 text-sm sm:text-base">
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-gold" /> {SITE_CONTACT.phone}
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-gold" /> {SITE_CONTACT.email}
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-gold" /> {SITE_CONTACT.fullAddress}
              </p>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            src={IMAGE_PATHS.contactHero}
            alt=""
            className="h-[280px] w-full rounded-sm object-cover sm:h-[360px]"
          />
        </div>
      </section>
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
