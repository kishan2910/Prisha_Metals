import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { ProductCategory } from '../productCatalog';
import { toSlug } from '../productCatalog';
import { getLuxuryCategoryCopy } from '../categoryLuxuryMeta';
import { PAGE_MAX } from '../layout/pageLayout';

type Layout = 'catalog' | 'home';

type PremiumCategoryShowcaseProps = {
  categories: ProductCategory[];
  layout?: Layout;
  /** Small caps line above the section title */
  eyebrow?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  className?: string;
};

/**
 * Luxury product-category grid: editorial photography, gold accents (#C9A14A), deep void (#0D0D0D).
 *
 * Animations (Motion):
 * - Scroll: each card fades in + slides up with staggered delay (catalog pacing).
 * - Hover: slow image scale, deeper overlay, brass inset frame, outer gold glow, centered CTA fade-in.
 * - Card lift: light `y` nudge on hover for a tactile micro-interaction.
 *
 * Styling notes:
 * - `ease-[cubic-bezier(0.16,1,0.3,1)]` = luxury “slow stop” (common in high-end retail).
 * - Tall `aspect-[3/4]` on catalog layout mimics lookbook / jewellery presentation.
 */
function LuxuryCategoryCard({
  category,
  layout,
  index,
}: {
  category: ProductCategory;
  layout: Layout;
  index: number;
}) {
  const { displayTitle, blurb } = getLuxuryCategoryCopy(category);
  const href = `/products/${toSlug(category.name)}`;

  const isCatalog = layout === 'catalog';
  const aspect = isCatalog ? 'aspect-[3/4] sm:aspect-[3/4]' : 'aspect-[4/5] sm:aspect-[3/4]';

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
    >
      <Link
        to={href}
        className="group relative block h-full overflow-hidden rounded-sm bg-luxury-void shadow-[0_8px_40px_-12px_rgba(13,13,13,0.45)] ring-1 ring-white/5 transition-[box-shadow] duration-500 ease-out hover:shadow-[0_28px_64px_-16px_rgba(201,161,74,0.22),0_24px_48px_-20px_rgba(13,13,13,0.55)] hover:ring-luxury-gold/35"
      >
        {/* Photography */}
        <div className={`relative ${aspect} w-full overflow-hidden`}>
          <img
            src={category.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-[transform,filter] duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07] group-hover:brightness-[1.03]"
          />

          {/* Permanent bottom read for title legibility */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-void via-luxury-void/25 to-transparent opacity-90"
            aria-hidden
          />

          {/* Hover veil — deepens like a salon spotlight */}
          <div className="pointer-events-none absolute inset-0 bg-luxury-void/0 transition-[background-color] duration-500 group-hover:bg-luxury-void/45" />

          {/* Inset brass hairline on hover */}
          <div
            className="pointer-events-none absolute inset-3 rounded-sm border border-luxury-gold/0 transition-[border-color] duration-500 group-hover:border-luxury-gold/45"
            aria-hidden
          />

          {/* Center CTA — appears only on hover to keep tiles calm at rest */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover:opacity-100">
            <span className="rounded-full border border-luxury-gold/90 bg-luxury-void/35 px-7 py-2.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white backdrop-blur-md">
              View collection
            </span>
          </div>

          {/* Typography block */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.38em] text-luxury-gold sm:text-[11px]">Collection</p>
            <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">{displayTitle}</h3>
            <p
              className={`mt-3 font-sans leading-relaxed text-white/72 ${isCatalog ? 'line-clamp-3 text-sm sm:text-[15px]' : 'line-clamp-2 text-xs sm:text-sm'}`}
            >
              {blurb}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/**
 * Full-width luxury “collections” section — use on `/products` (layout=catalog) or home (layout=home).
 */
export function PremiumCategoryShowcase({
  categories,
  layout = 'catalog',
  eyebrow,
  sectionTitle,
  sectionSubtitle,
  className = '',
}: PremiumCategoryShowcaseProps) {
  const isCatalog = layout === 'catalog';

  const defaultEyebrow = isCatalog ? 'Collections' : 'Collection zones';
  const defaultTitle = isCatalog ? 'Eight signature collections' : 'Eight product families';
  const defaultSubtitle = isCatalog
    ? 'Architectural brass and precision hardware—presented as discrete lines, each with its own photography and specification depth.'
    : 'Open any tile to explore sub-lines, finishes, and imagery.';

  return (
    <section className={`relative border-y border-luxury-void/8 bg-luxury-cream py-20 sm:py-24 md:py-32 ${className}`}>
      {/* Soft champagne wash + corner glow for depth without noise */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,161,74,0.09),transparent_55%),radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(13,13,13,0.04),transparent_50%)]"
        aria-hidden
      />

      <div className={`relative ${PAGE_MAX}`}>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className={`mx-auto text-center ${isCatalog ? 'mb-20 max-w-2xl' : 'mb-14 max-w-3xl'}`}
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.42em] text-luxury-gold sm:text-xs">{eyebrow ?? defaultEyebrow}</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-luxury-void sm:text-4xl md:text-5xl">{sectionTitle ?? defaultTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-luxury-void/58 sm:text-base">{sectionSubtitle ?? defaultSubtitle}</p>
          <div className="mx-auto mt-10 h-px w-16 bg-gradient-to-r from-transparent via-luxury-gold/80 to-transparent" aria-hidden />
        </motion.header>

        {/*
          Catalog: two columns of tall editorial cards (breathing room).
          Home: denser grid for above-the-fold scan; still the same card language.
        */}
        <div
          className={
            isCatalog
              ? 'grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:gap-x-14 lg:gap-y-20'
              : 'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'
          }
        >
          {categories.map((category, index) => (
            <div key={category.name}>
              <LuxuryCategoryCard category={category} layout={layout} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
