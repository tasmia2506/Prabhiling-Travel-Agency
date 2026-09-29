import React from 'react';
import { MessageCircle, Briefcase, Headphones } from 'lucide-react';

const FEATURES = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'WHATSAPP & CALL BOOKING',
    desc: 'Message or call our team directly for availability, bookings and trip assistance.'
  },
  {
    num: '02',
    icon: Briefcase,
    title: 'ONE TRAVEL DESK',
    desc: 'Bus bookings, flights, train reservations and customised group travel handled in one place.'
  },
  {
    num: '03',
    icon: Headphones,
    title: 'REAL HUMAN SUPPORT',
    desc: 'Speak directly with our travel team instead of navigating automated systems.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding" style={{ backgroundColor: 'var(--color-terracotta)' }}>
      <div className="container">
        {/* Intro Row — Heading + Image Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3rem'
          }}
          className="whyus-intro"
        >
          {/* Left: Heading */}
          <div style={{ gridColumn: 'span 12 / span 12' }} className="whyus-heading">
            <span
              style={{
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                color: 'var(--color-ink)',
                display: 'block',
                marginBottom: '0.75rem'
              }}
            >
              WHY PRABHULING?
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                fontWeight: '800',
                color: 'var(--color-ink)',
                lineHeight: '1.25'
              }}
            >
              Everything you need for a smoother journey,{' '}
              <span style={{ fontWeight: '400' }}>
                handled by one local travel team.
              </span>
            </h2>
          </div>

          {/* Right: Route Map Image Card */}
          <div style={{ gridColumn: 'span 12 / span 12' }} className="whyus-image">
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: 'var(--radius-card-lg)',
                overflow: 'hidden',
                border: '3px solid var(--color-paper-sheet)',
                boxShadow: '0 10px 28px -4px rgba(44, 45, 39, 0.35)',
                position: 'relative',
                backgroundColor: '#F3D9A4'
              }}
            >
              <img
                src="/bagalkot-route-map-wide.jpg"
                alt="Prabhuling Travels & Journey — Bagalkot District Route Map"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0.85rem 1.1rem',
                  background: 'linear-gradient(0deg, rgba(18,15,12,0.82) 0%, rgba(18,15,12,0) 100%)',
                  color: '#FDFBF7'
                }}
              >
                <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
                  BAGALKOT DISTRICT ROUTE NETWORK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards — No Dividers, White Cards for Contrast & Readability */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.num}
                style={{
                  backgroundColor: 'var(--color-paper-sheet)',
                  borderRadius: 'var(--radius-card-lg)',
                  boxShadow: '0 6px 18px -4px rgba(44, 45, 39, 0.2)',
                  padding: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-terracotta-soft)',
                      color: 'var(--color-terracotta-hover)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: '800',
                      fontSize: '1.5rem',
                      color: 'var(--color-terracotta-hover)'
                    }}
                  >
                    {feat.num}
                  </span>
                </div>

                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '800', letterSpacing: '0.03em', color: 'var(--color-ink)', marginBottom: '0.4rem' }}>
                  {feat.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .whyus-heading { grid-column: span 6 / span 6 !important; }
          .whyus-image { grid-column: span 6 / span 6 !important; }
        }
      `}</style>
    </section>
  );
}
