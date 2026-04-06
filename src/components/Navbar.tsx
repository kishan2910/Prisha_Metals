import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { IMAGE_PATHS } from '../imagePaths';
import { MAIN_NAV } from '../siteContent';
import { PAGE_MAX } from '../layout/pageLayout';

/**
 * Simple primary nav: no deep product trees in the menu—catalogue lives under /products (better UX, less cognitive load).
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : 'shadow-none'
      }`}
    >
      <div className={PAGE_MAX}>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link to="/" className="flex h-10 shrink-0 items-center" aria-label="Prisha Metal home">
            <img
              src={IMAGE_PATHS.logo}
              alt=""
              className="h-9 w-auto max-h-9 max-w-[min(100%,200px)] object-contain object-left sm:h-10 sm:max-h-10"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-8 lg:flex" aria-label="Primary">
            {MAIN_NAV.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[11px] font-semibold tracking-[0.22em] transition-colors ${
                  link.to === '/products'
                    ? location.pathname.startsWith('/products')
                      ? 'text-gold'
                      : 'hover:text-gold'
                    : location.pathname === link.to
                      ? 'text-gold'
                      : 'hover:text-gold'
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <button type="button" className="flex h-10 w-10 items-center justify-center lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl shadow-2xl lg:hidden">
          <div className={PAGE_MAX}>
            <div className="flex h-[4.5rem] items-center justify-end border-b border-ink/10">
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
          </div>
          <nav className="flex flex-col gap-1 px-4 pb-10 pt-4" aria-label="Mobile primary">
            {MAIN_NAV.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="border-b border-ink/10 py-5 font-serif text-2xl text-ink transition hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <p className="pt-8 text-xs uppercase tracking-widest text-ink/40">Full catalogue</p>
            <Link to="/products" className="mt-2 text-sm font-medium text-gold" onClick={() => setOpen(false)}>
              Browse all collections →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
