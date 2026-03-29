/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Globe, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Cpu,
  Flame,
  DoorOpen,
  Bath,
  Settings,
  CircleDot,
  ShieldCheck,
  Zap,
  Truck,
  Car,
  Building2,
  Monitor,
  Plane
} from 'lucide-react';
import { cn } from './lib/utils';
import { translations, Language } from './translations';

// --- Components ---

const Navbar = ({ lang, toggleLang, t }: { lang: Language, toggleLang: () => void, t: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12",
      scrolled ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-ink flex items-center justify-center rounded-sm">
            <span className="text-gold font-serif text-2xl font-bold">P</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-widest uppercase leading-none">Prisha</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">Metals</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className={cn("text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors", location.pathname === '/' && "text-gold")}>{t.nav.home}</Link>
          <Link to="/products" className={cn("text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors", location.pathname.startsWith('/products') && "text-gold")}>{t.nav.products}</Link>
          <Link to="/about" className={cn("text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors", location.pathname === '/about' && "text-gold")}>{t.nav.about}</Link>
          <Link to="/contact" className={cn("text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors", location.pathname === '/contact' && "text-gold")}>{t.nav.contact}</Link>
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-ink/20 px-3 py-1.5 rounded-full hover:bg-ink hover:text-paper transition-all"
          >
            <Globe size={14} />
            {lang === 'en' ? 'DE' : 'EN'}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-paper z-[60] flex flex-col p-12"
          >
            <button className="self-end mb-12" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              <Link to="/" className="serif text-4xl font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</Link>
              <Link to="/products" className="serif text-4xl font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.products}</Link>
              <Link to="/about" className="serif text-4xl font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</Link>
              <Link to="/contact" className="serif text-4xl font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</Link>
              <button 
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="flex items-center gap-4 serif text-2xl mt-8"
              >
                <Globe size={24} />
                {lang === 'en' ? 'Switch to German' : 'Auf Englisch umstellen'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ t }: { t: any }) => (
  <footer className="py-20 px-6 md:px-12 bg-ink text-paper">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-paper flex items-center justify-center rounded-sm">
            <span className="text-ink serif text-lg font-bold">P</span>
          </div>
          <span className="serif text-xl font-bold tracking-widest uppercase">Prisha Metals</span>
        </div>
        <p className="opacity-50 max-w-sm leading-relaxed text-sm">
          Engineered for Excellence. Premium hardware manufacturing and precision metal components for the global market.
        </p>
      </div>
      <div>
        <h4 className="serif text-lg mb-6 uppercase tracking-widest">Navigation</h4>
        <ul className="space-y-4 text-sm opacity-60">
          <li><Link to="/" className="hover:text-gold transition-colors">{t.nav.home}</Link></li>
          <li><Link to="/products" className="hover:text-gold transition-colors">{t.nav.products}</Link></li>
          <li><Link to="/about" className="hover:text-gold transition-colors">{t.nav.about}</Link></li>
          <li><Link to="/contact" className="hover:text-gold transition-colors">{t.nav.contact}</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="serif text-lg mb-6 uppercase tracking-widest">Contact</h4>
        <ul className="space-y-4 text-sm opacity-60">
          <li className="flex items-center gap-3"><Phone size={14} /> +91 98765 43210</li>
          <li className="flex items-center gap-3"><Mail size={14} /> info@prishametals.com</li>
          <li className="flex items-start gap-3"><MapPin size={14} /> G.I.D.C Phase III, Jamnagar, India</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-12 border-t border-paper/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] uppercase tracking-widest opacity-40">
        © 2026 Prisha Metals. All rights reserved. Precision Crafted in India.
      </p>
      <div className="flex gap-6 opacity-40">
        <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-gold transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ t }: { t: any }) => {
  const categories = [
    { id: 'bath', title: t.categories.bath, icon: Bath, img: 'https://picsum.photos/seed/bath/800/1000' },
    { id: 'hinges', title: t.categories.hinges, icon: Settings, img: 'https://picsum.photos/seed/hinge/800/1000' },
    { id: 'handles', title: t.categories.handles, icon: DoorOpen, img: 'https://picsum.photos/seed/handle/800/1000' },
    { id: 'knobs', title: t.categories.knobs, icon: CircleDot, img: 'https://picsum.photos/seed/knob/800/1000' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/metal-luxury/1920/1080" 
            alt="Luxury Metal" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Engineered for Excellence</span>
            <h1 className="serif text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-8 text-balance">{t.hero.title}</h1>
            <p className="text-lg md:text-xl opacity-70 mb-10 max-w-md leading-relaxed">{t.hero.subtitle}</p>
            <div className="flex flex-wrap gap-6">
              <Link to="/products" className="bg-ink text-paper px-8 py-4 rounded-sm flex items-center gap-3 group hover:bg-gold transition-all duration-500">
                <span className="uppercase tracking-widest text-xs font-bold">{t.hero.cta1}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="border border-ink px-8 py-4 rounded-sm flex items-center gap-3 group hover:bg-ink hover:text-paper transition-all duration-500">
                <span className="uppercase tracking-widest text-xs font-bold">{t.hero.cta2}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Our Collection</span>
            <h2 className="serif text-5xl md:text-7xl font-light">{t.categories.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {categories.map((cat, idx) => (
              <Link to="/products" key={cat.id} className="group relative aspect-[4/5] overflow-hidden bg-white">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <cat.icon size={24} strokeWidth={1} className="opacity-60" />
                  <div>
                    <h3 className="serif text-2xl font-light group-hover:translate-x-2 transition-transform duration-500">{cat.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-32 px-6 md:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif text-5xl md:text-7xl font-light mb-6">{t.materials.title}</h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[t.materials.brass, t.materials.copper, t.materials.stainless, t.materials.aluminum].map((mat, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-square bg-white border border-ink/5 flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-500">
                  <span className="serif text-2xl opacity-40 group-hover:opacity-100 group-hover:text-gold transition-all">{mat[0]}</span>
                </div>
                <span className="uppercase tracking-widest text-xs font-bold opacity-60">{mat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="space-y-6">
            <ShieldCheck size={40} strokeWidth={1} className="text-gold" />
            <h3 className="serif text-3xl">{t.whyChooseUs.quality}</h3>
            <p className="opacity-60 leading-relaxed text-sm">{t.whyChooseUs.qualityDesc}</p>
          </div>
          <div className="space-y-6">
            <Zap size={40} strokeWidth={1} className="text-gold" />
            <h3 className="serif text-3xl">{t.whyChooseUs.precision}</h3>
            <p className="opacity-60 leading-relaxed text-sm">{t.whyChooseUs.precisionDesc}</p>
          </div>
          <div className="space-y-6">
            <Truck size={40} strokeWidth={1} className="text-gold" />
            <h3 className="serif text-3xl">{t.whyChooseUs.export}</h3>
            <p className="opacity-60 leading-relaxed text-sm">{t.whyChooseUs.exportDesc}</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 px-6 md:px-12 bg-ink text-paper">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif text-5xl md:text-7xl font-light mb-20 text-center">{t.industries.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <Car size={48} strokeWidth={0.5} className="text-gold" />
              <span className="serif text-2xl">{t.industries.automotive}</span>
            </div>
            <div className="flex flex-col items-center gap-6 text-center">
              <Building2 size={48} strokeWidth={0.5} className="text-gold" />
              <span className="serif text-2xl">{t.industries.construction}</span>
            </div>
            <div className="flex flex-col items-center gap-6 text-center">
              <Monitor size={48} strokeWidth={0.5} className="text-gold" />
              <span className="serif text-2xl">{t.industries.electronics}</span>
            </div>
            <div className="flex flex-col items-center gap-6 text-center">
              <Plane size={48} strokeWidth={0.5} className="text-gold" />
              <span className="serif text-2xl">{t.industries.aerospace}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 md:px-12 bg-gold text-ink text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="serif text-4xl md:text-6xl mb-10">Ready to start your next project?</h2>
          <Link to="/contact" className="inline-block bg-ink text-paper px-12 py-5 uppercase tracking-widest text-xs font-bold hover:scale-105 transition-transform">
            {t.hero.cta2}
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

const ProductsPage = ({ t }: { t: any }) => {
  const categories = [
    { id: 'bath', title: t.categories.bath, icon: Bath, img: 'https://picsum.photos/seed/bath/800/1000' },
    { id: 'hinges', title: t.categories.hinges, icon: Settings, img: 'https://picsum.photos/seed/hinge/800/1000' },
    { id: 'handles', title: t.categories.handles, icon: DoorOpen, img: 'https://picsum.photos/seed/handle/800/1000' },
    { id: 'knobs', title: t.categories.knobs, icon: CircleDot, img: 'https://picsum.photos/seed/knob/800/1000' },
    { id: 'gas', title: t.categories.gasFittings, icon: Flame, img: 'https://picsum.photos/seed/gas/800/1000', premium: true },
    { id: 'sensor', title: t.categories.sensorComponents, icon: Cpu, img: 'https://picsum.photos/seed/sensor/800/1000', premium: true },
    { id: 'precision', title: t.categories.brassPrecision, icon: Settings, img: 'https://picsum.photos/seed/precision/800/1000' },
    { id: 'custom', title: t.categories.customComponents, icon: Zap, img: 'https://picsum.photos/seed/custom/800/1000' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="serif text-6xl md:text-8xl font-light mb-6">{t.categories.title}</h1>
          <p className="opacity-60 max-w-xl">{t.categories.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link to={`/products/${cat.id}`} key={cat.id} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-paper mb-6 relative">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" referrerPolicy="no-referrer" />
                {cat.premium && (
                  <div className="absolute top-4 right-4 bg-gold text-ink px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Premium Engineering</div>
                )}
              </div>
              <h3 className="serif text-2xl mb-2 group-hover:text-gold transition-colors">{cat.title}</h3>
              <span className="text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-2">View Details <ArrowRight size={10} /></span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProductDetailPage = ({ t }: { t: any }) => {
  const { id } = useParams();
  
  // Mock product data based on ID
  const product = {
    title: t.categories[id as keyof typeof t.categories] || "Product Component",
    material: "High-Grade Brass / Copper Alloy",
    finish: "Polished Chrome / Satin Brass / Antique Copper",
    dimensions: "Customizable based on requirements",
    img: `https://picsum.photos/seed/${id}/1200/1600`
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Link to="/products" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-50 mb-12 hover:text-gold transition-colors">
          <ArrowRight size={12} className="rotate-180" /> Back to Products
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="aspect-[3/4] bg-paper overflow-hidden">
            <img src={product.img} alt={product.title} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Product Detail</span>
            <h1 className="serif text-5xl md:text-7xl font-light mb-10">{product.title}</h1>
            
            <div className="space-y-12 mb-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-4">{t.productDetail.specs}</h4>
                <div className="grid grid-cols-1 gap-4 border-t border-ink/10 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-50">{t.productDetail.material}</span>
                    <span className="font-semibold">{product.material}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="opacity-50">{t.productDetail.finish}</span>
                    <span className="font-semibold">{product.finish}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="opacity-50">{t.productDetail.dimensions}</span>
                    <span className="font-semibold">{product.dimensions}</span>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/contact" className="bg-ink text-paper text-center py-5 uppercase tracking-widest text-xs font-bold hover:bg-gold transition-all duration-500">
              {t.productDetail.requestQuote}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage = ({ t }: { t: any }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <h1 className="serif text-6xl md:text-8xl font-light mb-6">{t.about.title}</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
        <div className="aspect-video bg-paper overflow-hidden">
          <img src="https://picsum.photos/seed/factory-prisha/1200/800" alt="Factory" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="space-y-8">
          <h2 className="serif text-4xl">{t.about.overview}</h2>
          <p className="opacity-70 leading-relaxed">{t.about.overviewContent}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="serif text-4xl">{t.about.process}</h2>
          <p className="opacity-70 leading-relaxed">{t.about.processContent}</p>
        </div>
        <div className="aspect-video bg-paper overflow-hidden order-1 lg:order-2">
          <img src="https://picsum.photos/seed/process/1200/800" alt="Process" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="aspect-video bg-paper overflow-hidden">
          <img src="https://picsum.photos/seed/export/1200/800" alt="Export" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="space-y-8">
          <h2 className="serif text-4xl">{t.about.export}</h2>
          <p className="opacity-70 leading-relaxed">{t.about.exportContent}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactPage = ({ t }: { t: any }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 px-6 md:px-12 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="serif text-6xl md:text-8xl font-light mb-12">{t.contact.title}</h1>
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-full"><Phone size={20} className="text-gold" /></div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-1">Phone</span>
                  <span className="text-sm tracking-widest">+91 98765 43210</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-full"><Mail size={20} className="text-gold" /></div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-1">Email</span>
                  <span className="text-sm tracking-widest">info@prishametals.com</span>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-full"><MapPin size={20} className="text-gold" /></div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-1">Address</span>
                  <span className="text-sm tracking-widest leading-relaxed">G.I.D.C Phase III, Jamnagar,<br />Gujarat, India - 361004</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 border border-ink/5">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <ShieldCheck size={64} className="text-gold mx-auto mb-6" />
                <h3 className="serif text-3xl mb-4">{t.contact.success}</h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50">{t.contact.name}</label>
                  <input required type="text" className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-gold outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50">{t.contact.email}</label>
                  <input required type="email" className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-gold outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50">{t.contact.message}</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-gold outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-ink text-paper py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold transition-all duration-500">
                  {t.contact.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const toggleLang = () => setLang(prev => prev === 'en' ? 'de' : 'en');

  // Scroll to top on route change
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-gold selection:text-white bg-paper">
        <Navbar lang={lang} toggleLang={toggleLang} t={t} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage t={t} />} />
            <Route path="/products" element={<ProductsPage t={t} />} />
            <Route path="/products/:id" element={<ProductDetailPage t={t} />} />
            <Route path="/about" element={<AboutPage t={t} />} />
            <Route path="/contact" element={<ContactPage t={t} />} />
          </Routes>
        </AnimatePresence>

        <Footer t={t} />

        <style>{`
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
          .text-balance {
            text-wrap: balance;
          }
        `}</style>
      </div>
    </Router>
  );
}
