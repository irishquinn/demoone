import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { PortfolioDetailPage } from './components/PortfolioDetailPage';
import { SpeedComparison } from './components/SpeedComparison';
import { RoiEstimator } from './components/RoiEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { PortfolioItem } from './types';
import { portfolioItems } from './data/portfolioData';

export default function App() {
  // Navigation state: either home sales page or a dedicated individual portfolio case study page
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefillService, setBookingPrefillService] = useState<string | undefined>(undefined);
  const [bookingPrefillEstimate, setBookingPrefillEstimate] = useState<string | undefined>(undefined);

  // Synchronize with URL hash for individual portfolio item page direct linking (e.g. #case-study-aura-health)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#case-study-')) {
        const slug = hash.replace('#case-study-', '');
        const matched = portfolioItems.find((p) => p.slug === slug);
        if (matched) {
          setSelectedPortfolioItem(matched);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '' || hash === '#' || hash === '#portfolio' || hash === '#services') {
        setSelectedPortfolioItem(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectPortfolioItem = (item: PortfolioItem) => {
    setSelectedPortfolioItem(item);
    window.location.hash = `#case-study-${item.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSalesPage = () => {
    setSelectedPortfolioItem(null);
    window.history.pushState(null, '', '#portfolio');
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceName?: string, estimateNotes?: string) => {
    setBookingPrefillService(serviceName);
    setBookingPrefillEstimate(estimateNotes);
    setIsBookingOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    if (selectedPortfolioItem) {
      setSelectedPortfolioItem(null);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If a portfolio item is active, render its dedicated full case study page view!
  if (selectedPortfolioItem) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
        <Header 
          onOpenBooking={() => handleOpenBooking(`Project: ${selectedPortfolioItem.title}`)} 
          onNavigateHome={handleBackToSalesPage}
        />
        <main className="flex-1">
          <PortfolioDetailPage
            item={selectedPortfolioItem}
            onBack={handleBackToSalesPage}
            onSelectItem={handleSelectPortfolioItem}
            onOpenBooking={(customService) => handleOpenBooking(customService)}
          />
        </main>
        <Footer onOpenBooking={() => handleOpenBooking(`Project: ${selectedPortfolioItem.title}`)} />
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialService={bookingPrefillService}
          initialEstimate={bookingPrefillEstimate}
        />
      </div>
    );
  }

  // Otherwise, render the primary high-converting sales page
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      <Header 
        onOpenBooking={() => handleOpenBooking()} 
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Value Proposition and CTAs */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplorePortfolio={() => scrollToSection('portfolio')}
          onOpenCalculator={() => scrollToSection('calculator')}
        />

        {/* Verified Credentials Trust Bar */}
        <TrustBar />

        {/* 2. Services Section featuring at least 6 top searched WordPress services */}
        <ServicesSection
          onSelectServiceForBooking={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* 3. Portfolio Section: 9 300x300 images, 3 at a time, hover + arrows, linking to individual pages */}
        <PortfolioCarousel
          onSelectItem={handleSelectPortfolioItem}
        />

        {/* Core Web Vitals Benchmark Simulator */}
        <SpeedComparison
          onOpenBooking={() => handleOpenBooking('Core Web Vitals Speed Optimization')}
        />

        {/* Interactive Scope & ROI Estimator */}
        <RoiEstimator
          onBookWithEstimate={(summary) => handleOpenBooking('Custom WordPress Project', summary)}
        />

        {/* Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Objection Crushing FAQ */}
        <FaqSection />
      </main>

      {/* Professional Quiet Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Discovery Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingPrefillService}
        initialEstimate={bookingPrefillEstimate}
      />
    </div>
  );
}
