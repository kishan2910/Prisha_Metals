import { motion } from 'motion/react';

export type RevealSectionProps = {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageLeft?: boolean;
};

export function RevealSection({ title, subtitle, body, image, imageLeft = true }: RevealSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: imageLeft ? -70 : 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75 }}
          className={imageLeft ? 'order-1' : 'order-2 lg:order-1'}
        >
          <img src={image} alt="" className="h-[280px] w-full rounded-sm object-cover shadow-2xl shadow-ink/20 sm:h-[360px] lg:h-[430px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: imageLeft ? 70 : -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className={imageLeft ? 'order-2' : 'order-1 lg:order-2'}
        >
          <p className="mb-3 text-xs tracking-[0.35em] text-gold">{subtitle}</p>
          <h2 className="serif mb-4 text-3xl sm:text-4xl md:text-5xl">{title}</h2>
          <p className="max-w-xl text-sm leading-relaxed opacity-75 sm:text-base">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}
