import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const CHECKLIST = [
  'Instant Quotations',
  'No Hidden Charges',
  '24/7 Human Support',
  'Verified Fleet & Drivers'
];

export default function CtaSection({ onOpenBookingModal }) {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-ink)',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Photo */}
      <img
        src="/karnataka-map-hero-wide.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.4
        }}
      />

      {/* Dark Overlay for Text Legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(18, 15, 12, 0.45) 0%, rgba(18, 15, 12, 0.6) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Radial Glow Accent */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(230, 184, 0, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
        {/* Dash-Flanked Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.85rem',
            marginBottom: '1.25rem'
          }}
        >
          <span style={{ width: '28px', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)'
            }}
          >
            Postal Invitation
          </span>
          <span style={{ width: '28px', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
        </div>

        {/* Two-Tone Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            lineHeight: '1.15',
            marginBottom: '1rem'
          }}
        >
          Ready to Plan Your <span style={{ color: 'var(--color-terracotta)' }}>Bespoke Escape?</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '540px',
            lineHeight: '1.65',
            margin: '0 auto 2.25rem auto'
          }}
        >
          Leave the schedules, tickets, & routes to us. You just pack your bags & collect memories.
        </p>

        {/* Action Row */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
          <Link to="/booking" className="btn btn-primary btn-lg">
            Start Bespoke Booking Form →
          </Link>
          <Link
            to="/contact"
            className="btn btn-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            Visit Agency Desk
          </Link>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.12)', marginBottom: '1.75rem' }} />

        {/* Trust Checklist */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem 1.75rem',
            justifyContent: 'center'
          }}
        >
          {CHECKLIST.map((item) => (
            <span
              key={item}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              <CheckCircle2 size={15} style={{ color: 'var(--color-terracotta)' }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
