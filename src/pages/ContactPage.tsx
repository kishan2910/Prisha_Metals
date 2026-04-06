import { motion } from 'motion/react';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ContactForm } from '../components/ContactForm';
import { IMAGE_PATHS } from '../imagePaths';
import { PAGE_MAX } from '../layout/pageLayout';
import { SITE_CONTACT } from '../siteContent';

export function ContactPage() {
  return (
    <>
      <Hero
        image={IMAGE_PATHS.contactHero}
        eyebrow=""
        overlayClassName="bg-transparent"
        imageClassName="object-cover object-center"
      />

      {/* Section 1 — form first (task-focused), full width band */}
      <section className="border-b border-ink/10 bg-white py-16 sm:py-20">
        <div className={PAGE_MAX}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl"
          >
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">Write to us</p>
            <h2 className="mt-3 text-center font-serif text-3xl font-medium tracking-tight sm:text-4xl">Send an inquiry</h2>
            <p className="mx-auto mt-4 max-w-md text-center font-sans text-sm text-ink/60">
              Share scope, finishes, quantities, or drawings. We will route your message to the right team.
            </p>
            <div className="mt-10 rounded-2xl border border-ink/10 bg-mesh-industrial p-6 shadow-card sm:p-8">
              <ContactForm variant="light" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — company & direct channels */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className={PAGE_MAX}>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-gold" aria-hidden />
                <h2 className="font-serif text-2xl font-medium sm:text-3xl">About Prisha Metal</h2>
              </div>
              <p className="mt-6 font-sans text-sm leading-relaxed text-white/75">
                We specialize in manufacturing premium brass hardware and fittings designed to meet the demands of international wholesalers and distributors.
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/65">
                With a focus on consistency and efficiency, we deliver reliable bulk solutions at competitive value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">Direct contact</p>
              <h3 className="mt-3 font-serif text-xl font-medium">Reach the team</h3>
              <ul className="mt-8 space-y-6 font-sans text-sm">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <Phone size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">Phone (India)</p>
                    <a href={`tel:${SITE_CONTACT.phone.replace(/\s/g, '')}`} className="mt-1 block text-white/90 transition hover:text-gold">
                      {SITE_CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <Phone size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">Phone (Germany - Sales)</p>
                    <a href={`tel:${SITE_CONTACT.germanySalesExec.replace(/\s/g, '')}`} className="mt-1 block text-white/90 transition hover:text-gold">
                      {SITE_CONTACT.germanySalesExec}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <Mail size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">Email</p>
                    <a href={`mailto:${SITE_CONTACT.email}`} className="mt-1 block break-all text-white/90 transition hover:text-gold">
                      {SITE_CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <MapPin size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">Address</p>
                    <p className="mt-1 leading-relaxed text-white/80">{SITE_CONTACT.fullAddress}</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
