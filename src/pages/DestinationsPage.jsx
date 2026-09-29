import React from 'react';
import Seo from '../components/Seo';
import Destinations from '../components/Destinations';
import MapFragment from '../components/scrapbook/MapFragment';
import HeroCard from '../components/HeroCard';

export default function DestinationsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', minHeight: '100vh' }}>
      <Seo
        title="Destinations"
        description="Explore UNESCO World Heritage ruins, coastal sanctuaries, misty coffee estates & sacred temple shrines across Karnataka & South India, connected by Prabhuling bus routes."
        path="/destinations"
      />
      <MapFragment opacity={0.06} />

      {/* Hero Banner with HD Background Image & Left-Aligned Content */}
      <HeroCard
        image="/karnataka-map-hero-wide.jpg"
        imageAlt="Illustrated Karnataka Map — Featured Destinations"
        aspectRatio="1584 / 672"
        overlayGradient="linear-gradient(90deg, rgba(15, 22, 18, 0.75) 0%, rgba(15, 22, 18, 0.5) 40%, rgba(15, 22, 18, 0.1) 75%)"
        imageStyle={{ filter: 'contrast(1.06) brightness(1.05)' }}
        rounded={0}
        contentStyle={{ maxWidth: 'none', margin: 0, padding: `0 1.25rem 0 clamp(2rem, 8vw, 6rem)` }}
      >
        <div style={{ padding: '1rem 0' }}>
          <div style={{ maxWidth: '620px' }}>
            <span
              style={{
                display: 'inline-block',
                color: 'var(--color-terracotta)',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                marginBottom: '1rem',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              TRAVEL MEMORIES & LANDSCAPES
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 6vw, 4.4rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                marginBottom: '1.1rem',
                lineHeight: '1.08',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              Featured Destinations
            </h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '1.1rem' }}>
              Landscapes worth the detour.
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(253, 251, 247, 0.85)',
                lineHeight: '1.7',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              Explore UNESCO World Heritage ruins, coastal sanctuaries, misty coffee estates, & sacred temple shrines connected by Prabhuling bus routes.
            </p>
          </div>
        </div>
      </HeroCard>

      {/* Main Destinations Collage */}
      <Destinations />
    </div>
  );
}
