import { motion } from 'motion/react';

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  /** Optional eyebrow above the title (defaults to brand line). */
  eyebrow?: string;
  overlayClassName?: string;
  imageClassName?: string;
};

export function Hero({
  title,
  subtitle,
  image,
  eyebrow = 'ENGINEERED FOR EXCELLENCE',
  overlayClassName = 'bg-gradient-to-r from-ink/80 via-ink/45 to-ink/15',
  imageClassName = 'object-cover object-center',
}: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:px-10">
      <img src={image} alt="" className={`absolute inset-0 h-full w-full ${imageClassName}`} />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <p className="mb-4 text-xs tracking-[0.35em] text-gold">{eyebrow}</p>
        <h1 className="serif mb-5 max-w-4xl text-4xl font-light leading-[1.1] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">{subtitle}</p>
      </motion.div>
    </section>
  );
}
