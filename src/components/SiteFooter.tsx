import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PRODUCT_CATEGORIES, toSlug } from '../productCatalog';
import { COPYRIGHT_YEAR, MAIN_NAV, SITE_CONTACT, SITE_NAME, SITE_TAGLINE } from '../siteContent';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="serif inline-block text-2xl tracking-wide text-white md:text-3xl" aria-label={`${SITE_NAME} home`}>
              {SITE_NAME}
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">{SITE_TAGLINE}.</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Premium architectural hardware and precision components for architects, distributors, and OEM partners worldwide.
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer">
            <h2 className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold">Navigate</h2>
            <ul className="space-y-3 text-sm">
              {MAIN_NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-white/80 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Product categories">
            <h2 className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold">Products</h2>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link to={`/products/${toSlug(cat.name)}`} className="text-white/80 transition-colors hover:text-gold">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold">Contact</h2>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <a href={`tel:${SITE_CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-gold">
                  {SITE_CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <a href={`mailto:${SITE_CONTACT.email}`} className="break-all hover:text-gold">
                  {SITE_CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <span className="leading-relaxed">{SITE_CONTACT.fullAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-white/40">Manufacturing &amp; export inquiries welcome.</p>
        </div>
      </div>
    </footer>
  );
}
