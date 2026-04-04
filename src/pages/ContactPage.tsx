import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ContactForm } from '../components/ContactForm';
import { IMAGE_PATHS } from '../imagePaths';
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

      <section className="bg-mesh-industrial px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            <div>
              <div className="h-px w-12 bg-gold" aria-hidden />
              <h2 className="serif mt-8 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">Let us build with you.</h2>
              <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-ink/65">
                Direct lines to our sales team and factory coordination. Use the form or reach out by phone or email.
              </p>
            </div>
            <ul className="space-y-6 font-sans text-sm">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Phone size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/45">Phone</p>
                  <a href={`tel:${SITE_CONTACT.phone.replace(/\s/g, '')}`} className="mt-1 block font-medium text-ink transition hover:text-gold">
                    {SITE_CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Mail size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/45">Email</p>
                  <a href={`mailto:${SITE_CONTACT.email}`} className="mt-1 block break-all font-medium text-ink transition hover:text-gold">
                    {SITE_CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <MapPin size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/45">Address</p>
                  <p className="mt-1 font-medium leading-relaxed text-ink/80">{SITE_CONTACT.fullAddress}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card sm:p-8"
          >
            <ContactForm variant="light" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
