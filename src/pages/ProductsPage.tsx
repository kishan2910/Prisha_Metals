import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { IMAGE_PATHS } from '../imagePaths';
import { PRODUCT_CATEGORIES, toSlug } from '../productCatalog';

/**
 * Full catalogue: compact hero + enhanced cards (no duplicate sidebar list).
 */
export function ProductsPage() {
  return (
    <>
      <PageHero title="Product catalogue" subtitle="Eight families. Sub-lines, photography, and specs inside each category." image={IMAGE_PATHS.productsHero} />

      <section className="bg-mesh-industrial px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 border-b border-ink/10 pb-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-xs">Browse</p>
              <h2 className="serif text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">Categories</h2>
            </div>
            <p className="max-w-md font-sans text-sm text-ink/60">Hover a card for depth; open for the full product tree.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink/8 transition duration-300 hover:-translate-y-0.5 hover:shadow-premium hover:ring-gold/20"
              >
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  <img
                    src={category.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
                  <Link
                    to={`/products/${toSlug(category.name)}`}
                    className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 pr-1"
                  >
                    <span className="font-sans text-xl font-semibold tracking-tight text-white transition group-hover:text-gold sm:text-2xl">
                      {category.name}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition group-hover:bg-gold group-hover:text-ink">
                      <ArrowUpRight size={20} aria-hidden />
                    </span>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 p-5">
                  {category.items.slice(0, 6).map((item) => (
                    <Link
                      key={item.name}
                      to={`/products/${toSlug(category.name)}/${toSlug(item.name)}`}
                      className="rounded-full border border-ink/12 bg-ink/[0.02] px-3 py-1.5 text-[11px] font-medium tracking-wide text-ink/75 transition hover:border-gold/50 hover:bg-gold/5 hover:text-gold sm:text-xs"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {category.items.length > 6 ? (
                    <Link
                      to={`/products/${toSlug(category.name)}`}
                      className="rounded-full border border-dashed border-ink/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink/45 transition hover:border-gold/40 hover:text-gold sm:text-xs"
                    >
                      +{category.items.length - 6} more
                    </Link>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
