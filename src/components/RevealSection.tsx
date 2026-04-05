import { motion } from 'motion/react';
import { PAGE_MAX } from '../layout/pageLayout';

export type RevealSectionProps = {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageLeft?: boolean;
};

export function RevealSection({ title, subtitle, body, image, imageLeft = true }: RevealSectionProps) {
  return (
    <section className="bg-mesh-industrial py-16 sm:py-20 md:py-28">
      <div className={`grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 ${PAGE_MAX}`}>
        <motion.div
          initial={{ opacity: 0, x: imageLeft ? -48 : 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={imageLeft ? 'order-1' : 'order-2 lg:order-1'}
        >
          <div className="group relative overflow-hidden rounded-2xl bg-ink/5 shadow-card ring-1 ring-ink/5">
            <img
              src={image}
              alt=""
              className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[360px] lg:h-[440px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: imageLeft ? 48 : -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={imageLeft ? 'order-2' : 'order-1 lg:order-2'}
        >
          <div className="h-px w-12 bg-gold/80" aria-hidden />
          <p className="mb-4 mt-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-xs">{subtitle}</p>
          <h2 className="serif mb-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-ink/70 sm:text-base">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}
