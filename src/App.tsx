import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { GalleryModal } from './components/GalleryModal';
import { LegalModal } from './components/LegalModal';
import { ProductItem, GalleryItem } from './data/brickData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProductId, setQuoteProductId] = useState<string>('red-clay-bricks');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'products', 'why-us', 'about', 'gallery', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = (productId = 'red-clay-bricks') => {
    setQuoteProductId(productId);
    setIsQuoteOpen(true);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f6] text-[#1a1b1e] flex flex-col font-sans">
      {/* 1. Header / Navigation */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreProducts={handleExploreProducts}
        />

        {/* 3. Products Section */}
        <ProductsSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onViewAllProducts={handleViewAllProducts}
        />

        {/* 4. Feature / Benefits Section */}
        <FeaturesSection />

        {/* 5. About Section + Statistics */}
        <AboutSection onLearnMore={handleLearnMoreAbout} />

        {/* 6. Customer Testimonial Section */}
        <TestimonialsSection />

        {/* 7. Gallery / Projects Section */}
        <GallerySection
          onSelectImage={(item) => setSelectedGalleryItem(item)}
          onViewAllGallery={handleViewAllGallery}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProductId={quoteProductId}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(prodId) => handleOpenQuote(prodId)}
      />

      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onRequestQuote={() => handleOpenQuote()}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
