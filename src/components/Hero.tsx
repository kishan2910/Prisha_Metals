import { motion } from 'motion/react';

type HeroProps = {
  title?: string;
  subtitle?: string;
  image: string;
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
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden pb-10 pt-28">
      <img src={image} alt="" className={`absolute inset-0 h-full w-full ${imageClassName}`} />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {eyebrow ? (
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-xs">{eyebrow}</p>
        ) : null}
        {title ? (
          <h1 className="font-sans mb-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
        ) : null}
        {subtitle ? (
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">{subtitle}</p>
        ) : null}
      </motion.div>
    </section>
  );
}
