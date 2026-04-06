import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { RevealSection } from '../components/RevealSection';
import { ContactForm } from '../components/ContactForm';
import { PremiumCategoryShowcase } from '../components/PremiumCategoryShowcase';
import { IMAGE_PATHS } from '../imagePaths';
import { PAGE_MAX } from '../layout/pageLayout';
import { PRODUCT_CATEGORIES } from '../productCatalog';
import { SITE_CONTACT } from '../siteContent';

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Landing hero: showcase image on a light industrial tray (fully visible), then headline + CTAs on ink—no sidebar list.
 */
function HomeHero() {
  return (
    <section className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 w-full h-full">
        <div className="overflow-hidden h-full">
          <motion.img
            initial={{ scale: 1.02 }}       // only animate scale if you want subtle motion
            animate={{ scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            src={IMAGE_PATHS.homeHero}
            alt=""
            className="h-full w-full object-cover object-center opacity-90" // 20% visibility
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/30 to-ink pointer-events-none" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className={PAGE_MAX}>
          <div className="mx-auto max-w-4xl">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.4em] text-gold sm:text-xs"
          >
            Engineered for excellence
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="text-center font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-6xl"
          >
            Architectural brass &amp; precision hardware
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mx-auto mt-5 text-center text-sm leading-relaxed text-white/80 sm:text-base"
          >
            Premium handles, locks, hinges, bath fittings, glass hardware, and made-to-drawing components—finished and supplied with industrial consistency.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="mt-9 flex flex-col items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-lg shadow-gold/25 transition hover:bg-gold/90"
              >
                Browse catalogue
                <ArrowRight size={18} aria-hidden />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition hover:border-gold/60 hover:bg-white/10"
              >
                Request a quote
              </Link>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <PremiumCategoryShowcase
      categories={PRODUCT_CATEGORIES}
      layout="home"
      eyebrow="Collection zones"
      sectionTitle="Eight product families"
      sectionSubtitle="Discover a complete portfolio designed to meet diverse needs across applications and environments. Each product family represents an innovation and design excellence."
    />
  );
}

function HomeContactBand() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24 md:py-28">
      <div className={`grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start ${PAGE_MAX}`}>
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-12 bg-gold" aria-hidden />
          <p className="mb-4 mt-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-xs">Contact</p>
          <h2 className="serif text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">Talk to Our Team</h2>
          <p className="mt-5 font-sans text-sm leading-relaxed text-white/65 text-justify">
          Tell us about your requirements. Send drawings, finishes or quantities, and our team will guide you through timelines and next steps.
          </p>
          <ul className="mt-10 space-y-5 font-sans text-sm text-white/85">
            <li className="flex gap-4">
              <Phone size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60 mb-1">India</p>
                <a href={`tel:${SITE_CONTACT.phone.replace(/\s/g, '')}`} className="transition hover:text-gold">
                  {SITE_CONTACT.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60 mb-1">Germany (Sales Executive)</p>
                <a href={`tel:${SITE_CONTACT.germanySalesExec.replace(/\s/g, '')}`} className="transition hover:text-gold">
                  {SITE_CONTACT.germanySalesExec}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${SITE_CONTACT.email}`} className="break-all transition hover:text-gold">
                {SITE_CONTACT.email}
              </a>
            </li>
            <li className="flex gap-4">
              <MapPin size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <span className="leading-relaxed text-white/80">{SITE_CONTACT.fullAddress}</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-premium backdrop-blur-sm sm:p-8"
        >
          <ContactForm variant="dark" />
        </motion.div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HomeHero />

      <ProductShowcase />

      <RevealSection
        subtitle="Design & innovation"
        title="Engineered details, distinctive experience"
        body="We invest in proportion, ergonomics, and surface character so every piece feels considered in the hand and calm on the door. Our design process pairs traditional metalcraft with modern tooling—prototypes evolve quickly, and what reaches your project is refined, repeatable, and quietly memorable."
        image={IMAGE_PATHS.designHero}
      />

      <RevealSection
        subtitle="Our purpose"
        title="Redefining everyday living through thoughtful hardware"
        body="We believe small fittings shape how people move through homes, hotels, and workplaces. By supplying dependable, beautiful hardware and precision components, we help customers elevate interiors and installations—supporting safer, more comfortable, and more inspiring spaces."
        image={IMAGE_PATHS.aboutHero}
        imageLeft={false}
      />

      <HomeContactBand />
    </>
  );
}
