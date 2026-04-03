import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PRODUCT_CATEGORIES, toSlug } from '../productCatalog';
import { IMAGE_PATHS } from '../imagePaths';
import { MAIN_NAV } from '../siteContent';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur-sm">
      <div className="flex h-20 w-full items-center justify-between gap-4 px-3 sm:px-4 md:px-6">
        <Link to="/" className="flex min-w-0 max-w-[270px] items-center sm:max-w-[350px] md:max-w-[440px]" aria-label="Prisha Metals home">
          <img src={IMAGE_PATHS.logo} alt="Prisha Metals logo" className="h-11 w-full object-contain object-left sm:h-12 md:h-14" />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 xl:gap-8 lg:flex" aria-label="Primary">
          {MAIN_NAV.map((link) =>
            link.label === 'Products' ? (
              <div key={link.to} className="group relative">
                <Link
                  to={link.to}
                  className={`text-xs font-semibold tracking-[0.2em] transition-colors ${location.pathname.startsWith('/products') ? 'text-gold' : 'hover:text-gold'}`}
                >
                  {link.label.toUpperCase()}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 mt-3 w-[340px] rounded-sm border border-ink/10 bg-white p-4 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="flex flex-col">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <div key={category.name} className="border-b border-ink/10 last:border-b-0">
                        <Link to={`/products/${toSlug(category.name)}`} className="serif block py-2 text-lg hover:text-gold">
                          {category.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-semibold tracking-[0.2em] transition-colors ${location.pathname === link.to ? 'text-gold' : 'hover:text-gold'}`}
              >
                {link.label.toUpperCase()}
              </Link>
            ),
          )}
        </nav>

        <button type="button" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white p-8 lg:hidden">
          <button type="button" className="ml-auto mb-8 block" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          <div className="flex flex-col gap-7">
            {MAIN_NAV.map((link) =>
              link.label === 'Products' ? (
                <div key={link.to} className="space-y-4">
                  <button type="button" className="serif text-left text-4xl" onClick={() => setMobileProductsOpen((prev) => !prev)}>
                    {link.label.toUpperCase()}
                  </button>
                  {mobileProductsOpen && (
                    <div className="space-y-4 border-l border-ink/20 pl-4">
                      <Link to="/products" className="block text-sm tracking-[0.15em] hover:text-gold" onClick={() => setOpen(false)}>
                        VIEW ALL
                      </Link>
                      {PRODUCT_CATEGORIES.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <Link to={`/products/${toSlug(category.name)}`} className="serif block text-2xl hover:text-gold" onClick={() => setOpen(false)}>
                            {category.name}
                          </Link>
                          <div className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                to={`/products/${toSlug(category.name)}/${toSlug(item.name)}`}
                                className="rounded-full border border-ink/20 px-2 py-1 text-[11px]"
                                onClick={() => setOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.to} to={link.to} className="serif text-4xl" onClick={() => setOpen(false)}>
                  {link.label.toUpperCase()}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
