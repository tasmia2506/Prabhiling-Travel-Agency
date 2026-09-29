import React, { useState } from 'react';
import { PACKAGES } from '../data/packagesData';
import PaperCard from '../components/scrapbook/PaperCard';
import MapFragment from '../components/scrapbook/MapFragment';
import HeroCard from '../components/HeroCard';
import { Palmtree, Mountain, Bus, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function ToursPage({ onOpenBookingModal }) {
  const [filterDest, setFilterDest] = useState('All');

  const filteredPackages = PACKAGES.filter(pkg => {
    if (filterDest === 'Heritage') return pkg.title.includes('Heritage') || pkg.title.includes('Temple') || pkg.title.includes('Pilgrimage');
    if (filterDest === 'Beach') return pkg.title.includes('Beach') || pkg.title.includes('Goa') || pkg.title.includes('Gokarna');
    if (filterDest === 'Hills') return pkg.title.includes('Coorg') || pkg.title.includes('Chikmagalur') || pkg.title.includes('Wayanad');
    return true;
  });

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Hero Banner with HD Background Image & Left-Aligned Content */}
      <HeroCard
        image="/karnataka-map-hero-wide.jpg"
        imageAlt="Illustrated Karnataka Map — Signature Tour Packages"
        aspectRatio="1584 / 672"
        overlayGradient="linear-gradient(90deg, rgba(15, 22, 18, 0.75) 0%, rgba(15, 22, 18, 0.5) 40%, rgba(15, 22, 18, 0.1) 75%)"
        imageStyle={{ filter: 'contrast(1.06) brightness(1.05)' }}
        contentStyle={{ maxWidth: 'none', margin: 0, padding: `0 1.25rem 0 clamp(2rem, 8vw, 6rem)` }}
        rounded={0}
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
              HANDCRAFTED ITINERARIES &nbsp;•&nbsp; GROUP & FAMILY HOLIDAYS
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
              Signature Tour Packages
            </h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '1.1rem' }}>
              Handcrafted escapes, curated with care.
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(253, 251, 247, 0.85)',
                lineHeight: '1.7',
                marginBottom: '2rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              All-inclusive holiday packages featuring luxury Prabhuling bus transfers, hotel stays, guided sightseeing, & dedicated human agency escorts across South India's top landscapes.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingRight: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Palmtree size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>Heritage & Coastal</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>Tours</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 1.25rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mountain size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>Coffee Hill</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>Stations</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1.25rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bus size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>Luxury Fleet</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>Sightseeing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroCard>

      {/* Tour Folders Catalog */}
      <div className="container" style={{ marginTop: '3rem' }}>
        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ink)' }}>
              CURATED TOUR FOLDERS ({filteredPackages.length})
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
              Select any tour dossier to request custom dates or group fare breakdowns.
            </p>
          </div>
        </div>

        {/* Tour Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem 1.75rem' }}>
          {filteredPackages.map((pkg, idx) => {
            return (
              <PaperCard
                key={pkg.id}
                paperType="cream"
                padding="0"
                style={{ borderRadius: '18px' }}
              >
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                  <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                  {pkg.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(20, 20, 18, 0.85)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '30px'
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      color: 'var(--color-ink)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      padding: '0.4rem 0.75rem',
                      borderRadius: '30px'
                    }}
                  >
                    <Clock size={13} />
                    {pkg.duration}
                  </span>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.4rem' }}>
                    {pkg.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.75rem' }}>
                    <MapPin size={14} style={{ color: 'var(--color-ink-light)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                      {pkg.destination}
                    </span>
                  </div>

                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.6' }}>
                    {pkg.description}
                  </p>

                  <div style={{ paddingTop: '1rem', marginTop: '1.1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                    <div>
                      <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-ink-light)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        Starting from
                      </span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-ink)' }}>
                        ₹{pkg.startingPrice ? pkg.startingPrice.toLocaleString() : '4,999'}
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenBookingModal({ service: 'Tour Package', tourName: pkg.title })}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: 'var(--color-terracotta)',
                        color: '#2C2D27',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.825rem',
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '30px',
                        padding: '0.65rem 1.25rem',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Get a Quote <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </PaperCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
