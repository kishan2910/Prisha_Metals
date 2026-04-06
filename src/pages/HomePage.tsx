import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { RevealSection } from '../components/RevealSection';
import { PremiumCategoryShowcase } from '../components/PremiumCategoryShowcase';
import { IMAGE_PATHS } from '../imagePaths';
import { PAGE_MAX } from '../layout/pageLayout';
import { PRODUCT_CATEGORIES } from '../productCatalog';

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Landing hero: showcase image on a light industrial tray (fully visible), then headline + CTAs on ink—no sidebar list.
 */
function HomeHero() {
  return (
    <section className="overflow-hidden pt-20">
      <div
        className="relative bg-gradient-to-b from-[#f3f1ea] to-[#ebe7dc] pb-8 pt-8 sm:pb-10 sm:pt-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className={PAGE_MAX}>
          <div className="overflow-hidden rounded-lg bg-[#ddd9cf] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] ring-1 ring-ink/10">
            <div className="relative max-h-[62vh] min-h-[280px] w-full sm:min-h-[360px]">
              <motion.img
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                src={IMAGE_PATHS.homeHero}
                alt=""
                className="h-full w-full object-contain object-center"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-4 rounded-t-[1.75rem] bg-ink bg-gradient-to-b from-[#1f1f1f] to-ink pb-16 pt-14 shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.15)] sm:-mt-6 sm:rounded-t-[2rem] sm:pb-20 sm:pt-16 md:pb-24">
        <div className={PAGE_MAX}>
          <div className="mx-auto max-w-5xl text-center md:text-justify">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold sm:text-xs"
          >
            Engineered for excellence
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Architectural brass &amp; precision hardware
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:mx-0 md:text-base [text-align:justify]"
          >
            Premium handles, locks, hinges, bath fittings, glass hardware, and made-to-drawing components—finished and supplied with industrial consistency.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center md:justify-start"
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
        body="We believe small fittings shape how people move through homes, hotels, and workplaces. By supplying dependable, beautiful hardware and precision components, we help customers elevate interiors and installations, supporting safer, more comfortable, and more inspiring spaces."
        image={IMAGE_PATHS.aboutHero}
        imageLeft={false}
      />
    </>
  );
}
