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
        title="Contact"
        subtitle="Manufacturing, export, and custom component inquiries."
        image={IMAGE_PATHS.contactHero}
        overlayClassName="bg-gradient-to-r from-ink/88 via-ink/55 to-ink/30"
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
                <h2 className="font-serif text-2xl font-medium sm:text-3xl">About Prisha Metals</h2>
              </div>
              <p className="mt-6 font-sans text-sm leading-relaxed text-white/75">
                We manufacture architectural brass hardware, bath fittings, glass fittings, and precision turned components from our facility in Jamnagar, Gujarat. Our focus is repeatable finishing,
                dimensional control, and documentation that supports specifier and export workflows.
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/65">
                Whether you need catalogue finishes, OEM labelling, or parts made strictly to drawing, we align sampling, batch consistency, and dispatch with your project timeline.
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
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">Phone</p>
                    <a href={`tel:${SITE_CONTACT.phone.replace(/\s/g, '')}`} className="mt-1 block text-white/90 transition hover:text-gold">
                      {SITE_CONTACT.phone}
                    </a>
                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-white/45">Germany Sales Executive</p>
                    <a href={`tel:${SITE_CONTACT.germanySalesPhone.replace(/\s/g, '')}`} className="mt-1 block text-white/90 transition hover:text-gold">
                      {SITE_CONTACT.germanySalesPhone}
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
