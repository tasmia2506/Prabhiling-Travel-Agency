import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, MapPin } from 'lucide-react';
import HeroCard from './HeroCard';

export default function Hero() {
  return (
    <HeroCard
      video="/landing page.mp4"
      overlay
      overlayGradient="linear-gradient(180deg, rgba(18, 25, 20, 0.45) 0%, rgba(18, 25, 20, 0.25) 45%, rgba(18, 25, 20, 0.85) 100%)"
      minHeight="620px"
      wave={false}
      rounded={0}
      style={{ height: '100vh' }}
    >
      {/* 3. Minimal Coordinates / Location Tag (Top Right) */}
      <div
        style={{
          position: 'absolute',
          top: '28px',
          right: '5%',
          zIndex: 10,
          color: 'rgba(255, 255, 255, 0.85)',
          fontFamily: 'var(--font-typewriter)',
          fontSize: '0.725rem',
          letterSpacing: '0.15em',
        }}
        className="hero-location-tag"
      >
        <MapPin size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px', color: 'var(--color-terracotta)' }} /> 12°25'N 75°44'E • WESTERN GHATS
      </div>

      {/* 4. Left-Aligned Hero Copy & Actions */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '3.5rem',
          textAlign: 'left',
          color: '#FFFFFF'
        }}
      >
        {/* Subtle Brand Tagline */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            fontFamily: 'var(--font-typewriter)',
            fontSize: '0.775rem',
            color: '#FDFBF7',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            padding: '0.45rem 1.25rem',
            borderRadius: '30px',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(4px)'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)', display: 'inline-block' }} />
          Every Journey Has A Story
        </div>

        {/* Large Editorial Headline — Mixed Case with Accent Word */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 5vw, 4.25rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            lineHeight: '1.08',
            letterSpacing: '-0.02em',
            marginBottom: '1.1rem',
            maxWidth: '650px',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}
        >
          Your Next<br />
          Adventure <span style={{ color: 'var(--color-terracotta)' }}>Awaits.</span>
        </h1>

        {/* Italic Accent Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)',
            color: '#FDFBF7',
            marginBottom: '1.1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.4)'
          }}
        >
          Where comfort meets the freedom to explore.
        </p>

        {/* Short Concise Supporting Statement */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(255, 255, 255, 0.88)',
            fontWeight: '400',
            lineHeight: '1.6',
            maxWidth: '620px',
            marginBottom: '2.25rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}
        >
          Curated journeys across Karnataka & South India, designed around the way you love to travel.
        </p>

        {/* Primary CTA & Secondary Action */}
        <div style={{ display: 'flex', gap: '1.1rem', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/packages"
            className="btn"
            style={{
              backgroundColor: 'var(--color-terracotta)',
              color: '#2C2D27',
              padding: '1rem 2.2rem',
              fontSize: '0.95rem',
              fontWeight: '700',
              letterSpacing: '0.03em',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 6px 20px rgba(230, 184, 0, 0.35)',
              textDecoration: 'none'
            }}
          >
            Start Your Journey <ArrowRight size={18} />
          </Link>

          <a
            href="#destinations-intro"
            style={{
              color: 'rgba(255, 255, 255, 0.92)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: '600',
              letterSpacing: '0.01em',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease'
            }}
          >
            Explore Destinations <ArrowDown size={14} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }
        .hero-location-tag { display: none; }
        @media (min-width: 768px) {
          .hero-location-tag { display: block !important; }
        }
      `}</style>
    </HeroCard>
  );
}
