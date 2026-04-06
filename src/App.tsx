import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RevealSection } from './components/RevealSection';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { ProductBrowsePage } from './pages/ProductBrowsePage';
import { IMAGE_PATHS } from './imagePaths';
import { encodeAssetPath } from './productCatalog';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
}

function DesignPage() {
  return (
    <>
      <Hero
        title="Design"
        subtitle="Form, proportion, and surface—developed as a coherent system across collections."
        image={IMAGE_PATHS.designHero}
        overlayClassName="bg-gradient-to-r from-ink/88 via-ink/50 to-ink/25"
      />
      <RevealSection
        title="Signature collection"
        subtitle="Aesthetic & function"
        body="Our signature lines balance visual quiet with confident detail. Profiles are tuned for the hand and the eye—whether the setting is contemporary minimal or richly traditional—so hardware reads as part of the architecture, not an afterthought."
        image={IMAGE_PATHS.designHero}
      />
      <RevealSection
        title="Precision in every stage"
        subtitle="From concept to finishing"
        body="Design intent is preserved through tooling, casting or forging, machining, and final finishing. We prototype quickly, lock tolerances for production, and control surface quality so what you approve in sample is what ships in bulk."
        image={IMAGE_PATHS.designFeature}
        imageLeft={false}
      />
    </>
  );
}

function AboutPage() {
  const facilityImage = encodeAssetPath('assets/images/about/Untitled design (1).png');
  return (
    <>
      <Hero
        title="About Prisha Metal"
        subtitle="Craftsmanship, finishing discipline, and engineering precision."
        image={IMAGE_PATHS.aboutHero}
        overlayClassName="bg-gradient-to-r from-ink/88 via-ink/50 to-ink/25"
      />
      <RevealSection
        title="Engineering with character"
        subtitle="Who we are"
        body="Our strength is in repeatable processes: stable alloys, controlled machining, and inspection before dispatch—so what you specify is what arrives on site. We work with architects, distributors, and OEM partners who need both catalogue consistency and custom execution."
        image={IMAGE_PATHS.aboutHero}
      />
      <RevealSection
        title="Facility, capacity, and quality mindset"
        subtitle="Manufacturing"
        body="From Jamnagar we run batch production across handles, locks, hinges, bath fittings, glass hardware, knobs, viewers, and precision turned parts. Lines are organised for clear routing, measurement, and packing—reducing variance and protecting finishes in transit. We welcome audits, sample rounds, and drawing-based projects as part of a long-term supply relationship."
        image={facilityImage}
        imageLeft={false}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-ink">
        <Navbar />
        <main className="pt-[4.5rem]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:categorySlug/:subSlug/:productSlug" element={<ProductBrowsePage />} />
            <Route path="/products/:categorySlug/:subSlug" element={<ProductBrowsePage />} />
            <Route path="/products/:categorySlug" element={<ProductBrowsePage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
