import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const CHECKLIST = [
  "Transparent per-seat fare sheets shared upfront, no hidden charges",
  "Licensed, experienced drivers trained for highway & ghat routes",
  "Clean, sanitized & air-conditioned coaches across every seating class"
];

const STATS = [
  { num: '01', label: 'TRACK RECORD', value: '15+ Yrs' },
  { num: '02', label: 'TRAVELERS', value: '50,000+' },
  { num: '03', label: 'DISPATCH', value: '24/7' }
];

export default function AboutSection({ onOpenBookingModal }) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper-bg)',
        padding: '5rem 0',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Landmark Photo with Coordinate Caption */}
          <div style={{ gridColumn: 'span 12 / span 12' }} className="about-left">
            <div style={{ position: 'relative', border: '1px solid var(--color-border)' }}>
              <img
                src="/terdal-gate.jpg"
                alt="Shirol Agasi Gateway, Terdal"
                style={{
                  width: '100%',
                  height: '560px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Coordinate & Location Caption Bar */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(18, 15, 12, 0.82)',
                  backdropFilter: 'blur(4px)',
                  color: '#FDFBF7',
                  padding: '0.9rem 1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', letterSpacing: '0.06em', color: '#D8CBBA' }}>
                    16.5138° N, 75.0672° E · TERDAL
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: '700', marginTop: '0.15rem' }}>
                    Terdal, Bagalkot District Operations
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    color: 'var(--color-terracotta)',
                    border: '1px solid var(--color-terracotta)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  EST. 2011
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Story */}
          <div style={{ gridColumn: 'span 12 / span 12' }} className="about-right">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '0.75rem'
              }}
            >
              <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-border-strong)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', letterSpacing: '0.14em', color: 'var(--color-ink-light)' }}>
                ABOUT US
              </span>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--color-forest)',
                display: 'block',
                marginBottom: '0.75rem'
              }}
            >
              ESTABLISHED 2011 · TERDAL FLEET OPERATORS
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: '800',
                color: 'var(--color-ink)',
                lineHeight: '1.15',
                marginBottom: '1.1rem'
              }}
            >
              Your Journey Starts With The{' '}
              <span style={{ color: 'var(--color-terracotta)', fontStyle: 'italic' }}>Right Fleet.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Prabhuling Travel Agency was founded to provide reliable, stress-free bus travel, ticketing, & holiday planning across Karnataka & South India. Whether it's a pilgrim charter for 40 passengers, a family retreat to Coorg, or a flight booking across India, our human team manages every detail — with a focus on safety, transparency, & dependable service.
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {CHECKLIST.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-forest-soft)',
                      color: 'var(--color-forest)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px'
                    }}
                  >
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span style={{ fontSize: '0.975rem', color: 'var(--color-ink)', lineHeight: '1.5' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Numbered Stat Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                borderTop: '1px solid var(--color-border)',
                paddingTop: '1.5rem',
                marginBottom: '2rem'
              }}
            >
              {STATS.map((stat) => (
                <div key={stat.num}>
                  <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>
                    {stat.num} / {stat.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '800', color: 'var(--color-ink)' }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary">
                Read Full Story →
              </Link>
              <button
                onClick={() => onOpenBookingModal()}
                className="btn btn-outline"
              >
                Contact Desk
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-left { grid-column: span 6 / span 6 !important; }
          .about-right { grid-column: span 6 / span 6 !important; }
        }
      `}</style>
    </section>
  );
}
