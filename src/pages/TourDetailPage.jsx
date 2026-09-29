import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PACKAGES } from '../data/packagesData';
import PaperCard from '../components/scrapbook/PaperCard';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';

export default function TourDetailPage({ config, onOpenBookingModal }) {
  const { id } = useParams();
  const pkg = PACKAGES.find(p => p.id === id) || PACKAGES[0];

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-paper-sheet)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <Link to="/packages" style={{ color: 'var(--color-terracotta)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
            ← Back to All Tour Packages
          </Link>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-tag">
                CURATED TOUR DOSSIER • {pkg.duration}
              </span>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  color: 'var(--color-ink)',
                  marginTop: '0.75rem',
                  marginBottom: '0.5rem'
                }}
              >
                {pkg.title}
              </h1>

              <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--color-terracotta)' }}>
                "{pkg.destination}"
              </p>
            </div>

            <TravelStamp text="APPROVED TOUR" size="medium" color="var(--color-forest)" rotation="-6deg" />
          </div>
        </div>
      </section>

      {/* Details Container */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          <div>
            <PaperCard paperType="sheet" rotation="-0.8deg" padding="2rem" style={{ borderLeft: '4px solid var(--color-terracotta)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
                Tour Overview & Itinerary
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                {pkg.description}
              </p>

              <button
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                onClick={() => onOpenBookingModal({ service: 'Tour Package', tourName: pkg.title })}
              >
                Enquire Tour Package →
              </button>
            </PaperCard>
          </div>
        </div>
      </div>
    </div>
  );
}
