import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { Bus, Plane, Train, Compass, Car, Headphones, ArrowRight, ShieldCheck, Layers } from 'lucide-react';

const BAND_COLORS = ['#2C2D27', '#3A3B33', '#2C2D27', '#3A3B33', '#2C2D27', '#3A3B33'];

export default function ServicesSection({ onOpenBookingModal, limit }) {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  const renderIcon = (iconName, size = 40) => {
    switch (iconName) {
      case 'Bus': return <Bus size={size} />;
      case 'Plane': return <Plane size={size} />;
      case 'Train': return <Train size={size} />;
      case 'Compass': return <Compass size={size} />;
      case 'Car': return <Car size={size} />;
      case 'Headphones': return <Headphones size={size} />;
      default: return <Layers size={size} />;
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-sheet)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>FULL SERVICE DESK</span>
          </div>
          <h2 className="section-title">
            TRAVEL DOSSIERS & BOOKING SERVICES
          </h2>
          <p className="section-desc">
            Personalized human assistance for flights, train tickets, vehicle charter rentals, & customized vacation packages.
          </p>

          {limit && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <Link
                to="/services"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.85rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  backgroundColor: 'var(--color-terracotta)',
                  color: 'var(--color-ink)',
                  boxShadow: '0 4px 14px rgba(230, 184, 0, 0.4)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.25s ease'
                }}
              >
                View All Services →
              </Link>
            </div>
          )}
        </div>

        {/* Services Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {displayedServices.map((srv, idx) => (
            <div
              key={srv.id}
              className="card"
              style={{
                position: 'relative',
                minHeight: '540px',
                borderRadius: 'var(--radius-card-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: BAND_COLORS[idx % BAND_COLORS.length]
              }}
            >
              {/* Full-Bleed Background Image / Icon Fallback */}
              {srv.image ? (
                <img
                  src={srv.image}
                  alt={srv.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', zIndex: 0 }}
                />
              ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-terracotta)', zIndex: 0 }}>
                  {renderIcon(srv.iconName, 64)}
                </div>
              )}

              {/* Dark Gradient Overlay for Text Legibility */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(18,15,12,0.15) 0%, rgba(18,15,12,0.55) 55%, rgba(18,15,12,0.92) 100%)',
                  zIndex: 1
                }}
              />

              {/* Top Badges */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', padding: '1rem 1.1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: '0.675rem',
                    fontWeight: '700',
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '30px',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {srv.badge || 'AVAILABLE'}
                </span>

                {srv.features && srv.features.length > 0 && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      color: 'var(--color-ink)',
                      backgroundColor: 'var(--color-terracotta)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '30px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <ShieldCheck size={12} /> {srv.features.length} Features
                  </span>
                )}
              </div>

              {/* Text Content — Overlaid at the Bottom */}
              <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', padding: '1.1rem 1.5rem 1.5rem 1.5rem', color: '#FFFFFF' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    marginBottom: '0.5rem'
                  }}
                >
                  {srv.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.55', marginBottom: '1rem' }}>
                  {srv.description}
                </p>

                {srv.features && srv.features.length > 0 && (
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: '1.25rem' }}>
                    {srv.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.825rem',
                          color: 'rgba(255,255,255,0.85)',
                          marginBottom: '0.35rem'
                        }}
                      >
                        <span style={{ color: 'var(--color-terracotta)', fontWeight: '700' }}>—</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer: Divider + Meta Row */}
                <div style={{ borderTop: '1px dashed rgba(255,255,255,0.3)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>
                    <ShieldCheck size={14} /> Desk Verified
                  </span>

                  <button
                    onClick={() => onOpenBookingModal({ service: srv.title })}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: 'var(--color-terracotta)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Book Service <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
