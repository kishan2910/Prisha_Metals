import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { PAGE_MAX } from '../layout/pageLayout';
import { findItemBySlug, getCategoryBySlug, PRODUCT_CATEGORIES, toSlug } from '../productCatalog';
import { findCatalogVariant, getCatalogVariants } from '../productVariants';

type Crumb = { label: string; to?: string };

function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-x-1 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/45">
      {items.map((it, i) => (
        <span key={`${it.label}-${i}`} className="inline-flex items-center gap-1">
          {i > 0 ? <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink/25" aria-hidden /> : null}
          {it.to ? (
            <Link to={it.to} className="text-ink/60 transition hover:text-gold">
              {it.label}
            </Link>
          ) : (
            <span className="max-w-[220px] truncate text-ink sm:max-w-none">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/**
 * Three-level browse: category → sub-line → variant detail.
 * URLs: /products/:cat / :cat/:sub / :cat/:sub/:variantSlug
 */
export function ProductBrowsePage() {
  const { categorySlug, subSlug, productSlug } = useParams<{
    categorySlug: string;
    subSlug?: string;
    productSlug?: string;
  }>();

  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!category) {
    return (
      <section className="bg-mesh-industrial py-24">
        <div className={PAGE_MAX}>
          <h1 className="font-serif text-3xl font-medium">Collection not found</h1>
          <p className="mt-4 font-sans text-sm text-ink/60">Return to the catalogue and choose a collection.</p>
          <Link to="/products" className="mt-8 inline-block text-sm font-semibold uppercase tracking-widest text-gold hover:underline">
            View catalogue
          </Link>
        </div>
      </section>
    );
  }

  const catPath = `/products/${toSlug(category.name)}`;
  const item = subSlug ? findItemBySlug(category, subSlug) : undefined;

  if (subSlug && !item) {
    return (
      <section className="bg-mesh-industrial py-24">
        <div className={PAGE_MAX}>
          <h1 className="font-serif text-3xl font-medium">Line not found</h1>
          <Link to={catPath} className="mt-8 inline-block text-sm font-semibold text-gold">
            Back to {category.name}
          </Link>
        </div>
      </section>
    );
  }

  /* ——— Level 3: single product / variant ——— */
  if (subSlug && item && productSlug) {
    const variant = findCatalogVariant(item, productSlug);
    if (!variant) {
      return (
        <section className="bg-mesh-industrial py-24">
          <div className={PAGE_MAX}>
            <h1 className="font-serif text-3xl font-medium">Product not found</h1>
            <Link to={`${catPath}/${toSlug(item.name)}`} className="mt-8 inline-block text-sm font-semibold text-gold">
              Back to {item.name}
            </Link>
          </div>
        </section>
      );
    }

    const subPath = `${catPath}/${toSlug(item.name)}`;

    return (
      <>
        <PageHero title={variant.label} subtitle="Specifications below are indicative—request formal TDS for your project." image={variant.image} />
        <section className="bg-mesh-industrial pb-20 pt-10">
          <div className={PAGE_MAX}>
            <Breadcrumbs
              items={[
                { label: 'Catalogue', to: '/products' },
                { label: category.name, to: catPath },
                { label: item.name, to: subPath },
                { label: variant.label },
              ]}
            />

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink/8"
              >
                <img src={variant.image} alt="" className="aspect-square w-full object-cover sm:aspect-[4/5]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">Technical summary</p>
                  <h2 className="mt-3 font-serif text-2xl font-medium sm:text-3xl">{variant.label}</h2>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-ink/65">{variant.description}</p>
                </div>

                <dl className="divide-y divide-ink/10 rounded-xl border border-ink/10 bg-white font-sans text-sm shadow-sm">
                  {[
                    ['Dimensions (L × W × H)', variant.dimensions],
                    ['Material', variant.material],
                    ['Finish', variant.finish],
                    ['Weight', variant.weight],
                  ].map(([dt, dd]) => (
                    <div key={dt} className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,160px)_1fr] sm:gap-8">
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink/45">{dt}</dt>
                      <dd className="text-ink/85">{dd}</dd>
                    </div>
                  ))}
                </dl>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gold hover:text-ink"
                  >
                    Request quote
                  </Link>
                  <Link
                    to={subPath}
                    className="inline-flex rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition hover:border-gold hover:text-gold"
                  >
                    More in this line
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ——— Level 2: sub-lines → product grid ——— */
  if (subSlug && item) {
    const variants = getCatalogVariants(item);
    const subPath = `${catPath}/${toSlug(item.name)}`;

    return (
      <>
        <PageHero
          title={item.name}
          subtitle={`${variants.length} piece${variants.length === 1 ? '' : 's'} in this line—select for dimensions and finish notes.`}
          image={item.images[0] ?? category.image}
        />
        <section className="bg-mesh-industrial pb-20 pt-10">
          <div className={PAGE_MAX}>
            <Breadcrumbs items={[{ label: 'Catalogue', to: '/products' }, { label: category.name, to: catPath }, { label: item.name }]} />

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {variants.map((v, index) => (
                <motion.div
                  key={v.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <Link
                    to={`${subPath}/${v.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-premium"
                  >
                    <div className="aspect-square overflow-hidden bg-ink/[0.03]">
                      <img
                        src={v.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-sans text-xs font-semibold uppercase tracking-wide text-gold">View details</p>
                      <p className="mt-1 font-serif text-lg text-ink group-hover:text-gold">{v.label}</p>
                      <p className="mt-1 line-clamp-1 font-sans text-[11px] text-ink/50">{v.finish}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ——— Level 1: category → choose sub-line ——— */
  return (
    <>
      <PageHero
        title={category.name}
        subtitle="Choose a product line to browse individual pieces and specifications."
        image={category.image}
      />
      <section className="bg-mesh-industrial pb-24 pt-10">
        <div className={PAGE_MAX}>
          <Breadcrumbs items={[{ label: 'Catalogue', to: '/products' }, { label: category.name }]} />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
            {category.items.map((line, index) => {
              const thumb = line.images[0];
              const linePath = `${catPath}/${toSlug(line.name)}`;
              return (
                <motion.div
                  key={line.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <Link
                    to={linePath}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-premium sm:flex-row"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:w-[42%] sm:min-h-[200px]">
                      {thumb ? (
                        <img src={thumb} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Product line</p>
                      <h2 className="mt-2 font-serif text-2xl font-medium text-ink group-hover:text-gold">{line.name}</h2>
                      <p className="mt-3 font-sans text-sm text-ink/55">
                        {line.images.length} reference piece{line.images.length === 1 ? '' : 's'} — open to browse and compare.
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink/70 group-hover:text-gold">
                        Browse line
                        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 border-t border-ink/10 pt-10">
            <p className="text-center font-sans text-xs uppercase tracking-widest text-ink/40">Other collections</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {PRODUCT_CATEGORIES.filter((c) => c.name !== category.name).map((c) => (
                <Link
                  key={c.name}
                  to={`/products/${toSlug(c.name)}`}
                  className="rounded-full border border-ink/12 bg-white px-4 py-2 text-[11px] font-medium text-ink/70 transition hover:border-gold/40 hover:text-gold"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
