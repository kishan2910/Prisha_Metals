import { motion } from 'motion/react';

type PageHeroProps = {
  title: string;
  /** Keep short — this replaces a tall narrative hero on listing pages */
  subtitle?: string;
  image: string;
};

/**
 * Compact, image-first band for inner pages (e.g. full catalog).
 * Avoids a second “wall of text” above the product grid.
 */
export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[min(42vh,400px)] min-h-[200px] w-full overflow-hidden md:h-[min(40vh,460px)]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/55 to-ink/25" />
      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-10 pt-24 sm:px-6 md:px-10 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-7xl"
        >
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-xs">Prisha Metals</p>
          <h1 className="max-w-3xl font-sans text-3xl font-semibold tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">{subtitle}</p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
