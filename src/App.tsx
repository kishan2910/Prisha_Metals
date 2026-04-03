import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_CATEGORIES, findItemBySlug, getCategoryBySlug, productImg, toSlug } from './productCatalog';

type RevealSectionProps = {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageLeft?: boolean;
};

const IMAGE_PATHS = {
  logo: '/assets/images/logo/logo.png',
  homeHero: '/assets/images/home/hero.svg',
  productsHero: productImg('brass components', 'allproducts-banner.jpg'),
  designHero: '/assets/images/design/cover.svg',
  aboutHero: '/assets/images/about/PRISHA METALS (2).png',
  contactHero: '/assets/images/contact/PRISHA METALS.png',
};

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/products', label: 'PRODUCTS' },
    { to: '/design', label: 'DESIGN' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white">
      <div className="flex h-20 w-full items-center justify-between gap-4 px-3 sm:px-4 md:px-6">
        <Link to="/" className="flex min-w-0 max-w-[270px] items-center sm:max-w-[350px] md:max-w-[440px]" aria-label="Prisha Metals home">
          <img src={IMAGE_PATHS.logo} alt="Prisha Metals logo" className="h-11 w-full object-contain object-left sm:h-12 md:h-14" />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            link.label === 'PRODUCTS' ? (
              <div key={link.to} className="group relative">
                <Link
                  to={link.to}
                  className={`text-xs font-semibold tracking-[0.2em] transition-colors ${location.pathname.startsWith('/products') ? 'text-gold' : 'hover:text-gold'}`}
                >
                  {link.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 mt-3 w-[340px] rounded-sm border border-ink/10 bg-white p-4 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="flex flex-col">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <div key={category.name} className="border-b border-ink/10 last:border-b-0">
                        <Link to={`/products/${toSlug(category.name)}`} className="serif block py-2 text-lg hover:text-gold">
                          {category.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-semibold tracking-[0.2em] transition-colors ${location.pathname === link.to ? 'text-gold' : 'hover:text-gold'}`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white p-8 lg:hidden">
          <button className="ml-auto mb-8 block" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          <div className="flex flex-col gap-7">
            {navLinks.map((link) => (
              link.label === 'PRODUCTS' ? (
                <div key={link.to} className="space-y-4">
                  <button className="serif text-left text-4xl" onClick={() => setMobileProductsOpen((prev) => !prev)}>
                    {link.label}
                  </button>
                  {mobileProductsOpen && (
                    <div className="space-y-4 border-l border-ink/20 pl-4">
                      <Link to="/products" className="block text-sm tracking-[0.15em] hover:text-gold" onClick={() => setOpen(false)}>
                        VIEW ALL
                      </Link>
                      {PRODUCT_CATEGORIES.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <Link to={`/products/${toSlug(category.name)}`} className="serif block text-2xl hover:text-gold" onClick={() => setOpen(false)}>
                            {category.name}
                          </Link>
                          <div className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                to={`/products/${toSlug(category.name)}/${toSlug(item.name)}`}
                                className="rounded-full border border-ink/20 px-2 py-1 text-[11px]"
                                onClick={() => setOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.to} to={link.to} className="serif text-4xl" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:px-10">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/15" />
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-4 text-xs tracking-[0.35em] text-gold">ENGINEERED FOR EXCELLENCE</p>
        <h1 className="serif mb-5 max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl md:text-7xl">{title}</h1>
        <p className="max-w-xl text-sm text-white/90 sm:text-base md:text-lg">{subtitle}</p>
      </motion.div>
    </section>
  );
}

function RevealSection({ title, subtitle, body, image, imageLeft = true }: RevealSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: imageLeft ? -70 : 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75 }}
          className={imageLeft ? 'order-1' : 'order-2 lg:order-1'}
        >
          <img src={image} alt={title} className="h-[280px] w-full rounded-sm object-cover shadow-2xl shadow-ink/20 sm:h-[360px] lg:h-[430px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: imageLeft ? 70 : -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className={imageLeft ? 'order-2' : 'order-1 lg:order-2'}
        >
          <p className="mb-3 text-xs tracking-[0.35em] text-gold">{subtitle}</p>
          <h2 className="serif mb-4 text-3xl sm:text-4xl md:text-5xl">{title}</h2>
          <p className="max-w-xl text-sm leading-relaxed opacity-75 sm:text-base">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero title="Premium Metal Craftsmanship for Modern Spaces" subtitle="A luxury visual experience with responsive design and smooth animations for every device." image={IMAGE_PATHS.homeHero} />
      <RevealSection title="Elegant First Impression" subtitle="HOME" body="Your viewers always see clear branding because the top header stays in a white strip. Hero images automatically fit the browser width and height." image={IMAGE_PATHS.homeHero} />
      <RevealSection title="Strong Product Storytelling" subtitle="HOME" body="Image and content reveal from opposite sides while scrolling to create a premium feel on phone, tablet, MacBook, and desktop." image={IMAGE_PATHS.productsHero} imageLeft={false} />
    </>
  );
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
              <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> +91 8799051826</p>
              <p className="flex items-center gap-3"><Mail size={16} className="text-gold" /> sales@prishametalint.com</p>
              <p className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Plot No 7, R S No 42/P1, Sadguru Industrial Park, Kansumra Road, Jamnagar, Gujarat (India) 361 004</p>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            src={IMAGE_PATHS.contactHero}
            alt="Contact"
            className="h-[280px] w-full rounded-sm object-cover sm:h-[360px]"
          />
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 text-paper sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-xs tracking-[0.2em]">PRISHA METALS - ENGINEERED FOR EXCELLENCE</p>
      </div>
    </footer>
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}
