import React from 'react';
import Seo from '../components/Seo';
import AboutSection from '../components/AboutSection';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';
import MapFragment from '../components/scrapbook/MapFragment';
import HeroCard from '../components/HeroCard';
import { Bus, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function AboutPage({ config, onOpenBookingModal }) {
  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '4.5rem', minHeight: '100vh' }}>
      <Seo
        title="About Us"
        description="A decade of dependable journeys. Learn about Prabhuling Travel Agency's direct bus fleet ownership, transparent fares, and 24/7 human assistance across South India."
        path="/about"
      />
      <MapFragment opacity={0.06} />

      {/* Hero Banner Section with Full Background Picture (/about.jfif) */}
      <HeroCard
        image="/about-hero-map.jpg"
        imageAlt="Prabhuling Travels — Route Map Across Karnataka"
        aspectRatio="1376 / 768"
        overlayGradient="linear-gradient(135deg, rgba(10, 20, 15, 0.4) 0%, rgba(10, 10, 10, 0.35) 100%)"
        imageStyle={{ objectPosition: 'center 65%' }}
        contentStyle={{ maxWidth: 'none', margin: 0, padding: `0 1.25rem 0 clamp(2rem, 8vw, 6rem)` }}
        rounded={0}
      >
        <div style={{ padding: '1rem 0' }}>
          <div style={{ maxWidth: '480px' }}>
            {/* Section Tag — short line + tracked uppercase label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.7rem',
                color: 'rgba(255, 255, 255, 0.85)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.18em',
                marginBottom: '1.5rem',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              <span style={{ width: '26px', height: '2px', backgroundColor: 'var(--color-terracotta)', display: 'inline-block' }} />
              AGENCY HISTORY & MANIFESTO
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6.5vw, 5rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                textShadow: '0 4px 18px rgba(0,0,0,0.4)'
              }}
            >
              About Prabhuling Travels
            </h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', color: 'var(--color-terracotta)', marginBottom: '1.1rem' }}>
              A decade of dependable journeys.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.65', marginBottom: '2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Building trust through direct bus fleet ownership, transparent fare structures, & dedicated 24/7 human assistance across South India for over a decade.
            </p>
          </div>

          {/* Key Trust Points — outlined icons, layered text, one row with dividers */}
          <div style={{ maxWidth: 'none', width: 'fit-content' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingRight: '1.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bus size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: '#FFFFFF', fontWeight: '800', whiteSpace: 'nowrap' }}>7+ Luxury Buses</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', whiteSpace: 'nowrap' }}>Direct Fleet Operators</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0 1.75rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: '#FFFFFF', fontWeight: '800', whiteSpace: 'nowrap' }}>100% Personal Care</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', whiteSpace: 'nowrap' }}>WhatsApp & Phone Support</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingLeft: '1.75rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: '#FFFFFF', fontWeight: '800', whiteSpace: 'nowrap' }}>Guaranteed Berths</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', whiteSpace: 'nowrap' }}>No Third-Party Markup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroCard>

      {/* Story & About Component */}
      <AboutSection config={config} onOpenBookingModal={onOpenBookingModal} />

      {/* Why Choose Us Engine */}
      <WhyUs config={config} />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CtaSection onOpenBookingModal={onOpenBookingModal} />
    </div>
  );
}
