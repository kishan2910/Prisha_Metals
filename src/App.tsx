import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Menu, Phone, Mail, MapPin, X } from 'lucide-react';
import { motion } from 'motion/react';

type RevealSectionProps = {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageLeft?: boolean;
};

const IMAGE_PATHS = {
  logo: '/assets/images/logo/logo.svg',
  homeHero: '/assets/images/home/hero.svg',
  productsHero: '/assets/images/products/cover.svg',
  designHero: '/assets/images/design/cover.svg',
  aboutHero: '/assets/images/about/cover.svg',
  contactHero: '/assets/images/contact/cover.svg',
};

const productCards = [
  { name: 'Architectural Handles', image: '/assets/images/products/cover.svg' },
  { name: 'Premium Hinges', image: '/assets/images/products/cover.svg' },
  { name: 'Luxury Knobs', image: '/assets/images/products/cover.svg' },
  { name: 'Custom Metal Components', image: '/assets/images/products/cover.svg' },
];

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/products', label: 'PRODUCTS' },
    { to: '/design', label: 'DESIGN' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link
          to="/"
          className="group flex min-w-0 shrink-0 items-center max-w-[min(100%,min(92vw,440px))] md:max-w-[min(100%,520px)]"
          aria-label="Prisha Metals home"
        >
          <span className="block h-11 w-[min(100%,min(85vw,360px))] min-w-[200px] overflow-hidden sm:h-12 sm:min-w-[240px] md:h-14 md:w-[min(100%,420px)]">
            <img
              src={IMAGE_PATHS.logo}
              alt=""
              className="h-full w-full object-cover object-bottom object-left [image-rendering:-webkit-optimize-contrast]"
              decoding="async"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs font-semibold tracking-[0.2em] transition-colors ${
                location.pathname === link.to ? 'text-gold' : 'hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white p-8 md:hidden">
          <button className="ml-auto mb-8 block" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="serif text-4xl" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section className="relative flex min-h-[86vh] items-center overflow-hidden px-6 pt-28 md:px-12">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl w-full"
      >
        <p className="mb-5 text-xs tracking-[0.35em] text-gold">ENGINEERED FOR EXCELLENCE</p>
        <h1 className="serif mb-6 max-w-4xl text-5xl font-light leading-tight text-white md:text-8xl">{title}</h1>
        <p className="max-w-xl text-base text-white/85 md:text-lg">{subtitle}</p>
      </motion.div>
    </section>
  );
}

function RevealSection({ title, subtitle, body, image, imageLeft = true }: RevealSectionProps) {
  return (
    <section className="px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: imageLeft ? -70 : 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className={imageLeft ? 'order-1' : 'order-2 lg:order-1'}
        >
          <img src={image} alt={title} className="h-[430px] w-full rounded-sm object-cover shadow-2xl shadow-ink/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: imageLeft ? 70 : -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className={imageLeft ? 'order-2' : 'order-1 lg:order-2'}
        >
          <p className="mb-3 text-xs tracking-[0.35em] text-gold">{subtitle}</p>
          <h2 className="serif mb-6 text-4xl md:text-6xl">{title}</h2>
          <p className="max-w-xl leading-relaxed opacity-75">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero
        title="Premium Metal Craftsmanship"
        subtitle="A modern, elegant web presence built for your premium engineering and product story."
        image={IMAGE_PATHS.homeHero}
      />
      <RevealSection
        title="Luxury Presentation"
        subtitle="HOME"
        body="Your home page showcases brand story with cinematic photography. Replace the default image with your own in the images folder."
        image="/assets/images/home/hero.svg"
      />
      <RevealSection
        title="Reliable Manufacturing"
        subtitle="HOME"
        body="Scroll animations reveal photo from left and content from right for a premium feel that works across desktop and mobile."
        image="/assets/images/home/hero.svg"
        imageLeft={false}
      />
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <Hero title="Products" subtitle="Create a dedicated product visual library and update photos anytime." image={IMAGE_PATHS.productsHero} />
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs tracking-[0.35em] text-gold">PRODUCT CATALOG</p>
          <h2 className="serif mb-12 text-5xl font-light">Your Product Range</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {productCards.map((card) => (
              <article key={card.name} className="group">
                <div className="mb-4 aspect-[3/4] overflow-hidden rounded-sm bg-white">
                  <img src={card.image} alt={card.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="serif text-2xl">{card.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DesignPage() {
  return (
    <>
      <Hero
        title="Design"
        subtitle="Present your design process, finishes, and premium styling references."
        image={IMAGE_PATHS.designHero}
      />
      <RevealSection
        title="Concept to Craft"
        subtitle="DESIGN STUDIO"
        body="Use this section for moodboards, finish references, and design inspirations. Replace all design images from the folder."
        image="/assets/images/design/cover.svg"
      />
      <RevealSection
        title="Material & Finish Stories"
        subtitle="DESIGN STUDIO"
        body="Highlight brushed, satin, matte, and polished finishes with your own close-up product photography."
        image="/assets/images/design/cover.svg"
        imageLeft={false}
      />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Hero title="About" subtitle="Share your company journey, manufacturing excellence, and values." image={IMAGE_PATHS.aboutHero} />
      <RevealSection
        title="Who We Are"
        subtitle="ABOUT PRISHA"
        body="Use this page for your origin, factory capability, and quality philosophy. It is designed for storytelling and credibility."
        image="/assets/images/about/cover.svg"
      />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Hero title="Contact" subtitle="Invite buyers, architects, and partners to connect." image={IMAGE_PATHS.contactHero} />
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="serif text-5xl">Let us build with you.</h2>
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> +91 98765 43210</p>
              <p className="flex items-center gap-3"><Mail size={16} className="text-gold" /> info@prishametals.com</p>
              <p className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Jamnagar, Gujarat, India</p>
            </div>
          </div>
          <img src="/assets/images/contact/cover.svg" alt="Contact" className="h-[360px] w-full rounded-sm object-cover" />
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-paper md:px-12">
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
