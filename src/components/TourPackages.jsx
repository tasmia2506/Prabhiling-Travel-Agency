import React from 'react';
import { PACKAGES } from '../data/packagesData';
import PaperCard from './scrapbook/PaperCard';

export default function TourPackages({ onOpenPackageModal, onOpenBookingModal }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-sheet)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>CURATED ITINERARIES</span>
          </div>
          <h2 className="section-title">
            SIGNATURE TOUR PACKAGES
          </h2>
          <p className="section-desc">
            Carefully structured itineraries including dedicated bus transport, premium hotel stays, & local guided experiences.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem 1.75rem'
          }}
        >
          {PACKAGES.map((pkg) => (
            <div key={pkg.id}>
              <PaperCard
                paperType="cream"
                padding="0"
                style={{ borderRadius: 'var(--radius-card-lg)' }}
              >
                {/* Hero Package Image */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />

                  <div className="tag-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    {pkg.duration}
                  </div>
                </div>

                {/* Content Sheet */}
                <div style={{ padding: '1.35rem 1.25rem 1.25rem 1.25rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: '700',
                      color: 'var(--color-ink)',
                      lineHeight: '1.25',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {pkg.title}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--color-terracotta)', marginBottom: '0.75rem' }}>
                    "{pkg.destination}"
                  </p>

                  {/* Highlights List */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div style={{ marginBottom: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                      <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.675rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>
                        PACKAGE HIGHLIGHTS:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {pkg.highlights.slice(0, 3).map((hl, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '0.775rem',
                              backgroundColor: '#FFFFFF',
                              border: '1px solid var(--color-border)',
                              padding: '0.25rem 0.7rem',
                              borderRadius: '30px',
                              color: 'var(--color-ink-muted)'
                            }}
                          >
                            ✓ {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer: Divider + Quote / Actions Row */}
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.85rem' }}>
                    <div style={{ marginBottom: '0.9rem' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.775rem', color: 'var(--color-ink-muted)' }}>
                        Custom quote based on group size
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => onOpenPackageModal(pkg)}
                        className="btn btn-outline btn-sm"
                        style={{ flex: 1 }}
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onOpenBookingModal({ service: 'Tour Package', tourName: pkg.title })}
                        className="btn btn-primary btn-sm"
                        style={{ flex: 1 }}
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              </PaperCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

