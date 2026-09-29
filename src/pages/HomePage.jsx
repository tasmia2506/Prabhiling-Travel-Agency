import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import StatusBar from '../components/StatusBar';
import TrustMarquee from '../components/TrustMarquee';
import FleetShowcase from '../components/FleetShowcase';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';
import ServicesSection from '../components/ServicesSection';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import CtaSection from '../components/CtaSection';

export default function HomePage({ config, onOpenBookingModal, onOpenBusDetailModal }) {
  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', minHeight: '100vh' }}>
      <Seo
        title="Home"
        description="Prabhuling Travel Agency operates a fleet of 8 modern buses across Karnataka & South India, plus flight, train ticket bookings, and curated tour packages with 100% personalized human assistance."
        path="/"
      />

      {/* 1. Full-Screen Cinematic Adventure Hero (90-100vh) */}
      <Hero config={config} onOpenBookingModal={onOpenBookingModal} />

      {/* Dark Coordinate & Dispatch Status Bar */}
      <StatusBar config={config} />

      {/* 2. Trust Marquee — Continuous Scrolling Trust Signals */}
      <TrustMarquee />

      {/* 3. Our Fleet / Buses Showcase */}
      <FleetShowcase
        onOpenBusDetailModal={onOpenBusDetailModal}
        onOpenBookingModal={onOpenBookingModal}
        limit={3}
      />

      {/* 4. About Section */}
      <AboutSection onOpenBookingModal={onOpenBookingModal} />

      {/* 6. Workflow Steps */}
      <HowItWorks />

      {/* 7. Full Service Desk — Booking Services List */}
      <ServicesSection onOpenBookingModal={onOpenBookingModal} limit={3} />

      {/* 8. Direct Fleet Operator Manifesto */}
      <WhyUs config={config} />

      {/* 9. Handwritten Customer Postcards */}
      <Testimonials />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Booking Invitation Postcard */}
      <CtaSection onOpenBookingModal={onOpenBookingModal} />
    </div>
  );
}
