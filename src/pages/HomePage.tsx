import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { RevealSection } from '../components/RevealSection';
import { IMAGE_PATHS } from '../imagePaths';
import { PRODUCT_CATEGORIES, toSlug } from '../productCatalog';

const SHOWCASE_CATEGORY_ORDER = [
  'PREMIUM HANDLES',
  'LUXURY KNOBS',
  'DOOR LOCKS',
  'CLASSIC HINGES',
  'BATH FITTINGS',
  'PRESICION TURNED COMPONENTS',
] as const;

function ShowcaseZones() {
  const zones = SHOWCASE_CATEGORY_ORDER.map((name) => PRODUCT_CATEGORIES.find((c) => c.name === name)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c),
  );

  return (
    <section className="border-t border-ink/10 bg-ink/[0.02] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs tracking-[0.35em] text-gold">COLLECTION ZONES</p>
          <h2 className="serif text-3xl font-light sm:text-4xl md:text-5xl">One catalogue, six focal lines</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-75 sm:text-base">
            From entrance hardware to wash spaces and CNC-grade turned parts, each family is developed for specification-led projects and long-term performance in the Russian market.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Link
                to={`/products/${toSlug(category.name)}`}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink/10 bg-white shadow-sm transition-all hover:border-gold/40 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                  <img
                    src={category.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition group-hover:bg-gold group-hover:text-ink">
                    <ArrowUpRight size={18} aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="serif text-xl tracking-tight group-hover:text-gold">{category.name}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed opacity-65">Explore the full line and finishes in this category.</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero
        eyebrow="PREMIUM MANUFACTURING · RUSSIA & EXPORT"
        title="Architectural hardware with a quiet, gallery-grade presence"
        subtitle="We manufacture premium door handles, luxury knobs, locks, hinges, bath fittings, and precision turned components—engineered for architects, distributors, and OEM partners serving Russia, with export-ready consistency and finish discipline."
        image={IMAGE_PATHS.homeHero}
        overlayClassName="bg-gradient-to-r from-ink/85 via-ink/50 to-ink/25"
        imageClassName="object-cover object-center"
      />

      <RevealSection
        subtitle="MATERIAL & LIGHT"
        title="Refined surfaces, readable silhouettes"
        body="Our presentation follows a restrained luxury palette: brushed and polished metals, deep gunmetal tones, warm wood accents, and stone-like neutrals. Lighting is soft and directional so every edge, thread, and reflection reads clearly—like a curated exhibition, not a crowded shelf."
        image={IMAGE_PATHS.productsHero}
      />

      <RevealSection
        subtitle="RUSSIA MARKET"
        title="Built for specification and repeat supply"
        body="Whether you are tendering a residential tower, a hospitality rollout, or a retail network, we align on documentation, sampling, and batch stability. The same precision that shows in our handles and fittings extends to turned components made to your drawings—so your supply chain stays predictable from first mock-up to serial delivery."
        image={IMAGE_PATHS.homeHero}
        imageLeft={false}
      />

      <ShowcaseZones />
    </>
  );
}
