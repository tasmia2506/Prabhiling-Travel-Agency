import React from 'react';
import { Bus, ShieldCheck, Users, Clock, BadgeCheck, MapPin, MessageCircle, Star } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Bus, label: '8+ LUXURY BUSES', desc: 'Modern, well-maintained fleet' },
  { icon: BadgeCheck, label: 'TRANSPARENT PRICING', desc: 'Zero hidden fees & honest billing' },
  { icon: Clock, label: '24/7 HUMAN SUPPORT', desc: 'Instant booking via call & WhatsApp' },
  { icon: ShieldCheck, label: '10+ YEARS OF TRUST', desc: 'Verified drivers, safe journeys' },
  { icon: Users, label: '5,000+ HAPPY TRAVELERS', desc: 'Word-of-mouth referral base' },
  { icon: MapPin, label: 'SOUTH INDIA COVERAGE', desc: 'Routes across Karnataka & beyond' },
  { icon: Star, label: '4.9/5 RATED SERVICE', desc: 'Consistently high traveler ratings' },
];

function MarqueeTrack() {
  return (
    <div className="trust-marquee-track">
      {TRUST_ITEMS.map((item, idx) => (
        <span className="trust-marquee-item" key={idx}>
          <item.icon size={16} style={{ color: 'var(--color-ink)', flexShrink: 0 }} />
          <span className="trust-marquee-label">{item.label}</span>
          <span className="trust-marquee-desc">&ndash; {item.desc}</span>
          <span className="trust-marquee-dot" />
        </span>
      ))}
    </div>
  );
}

export default function TrustMarquee() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-terracotta)',
        borderBottom: '1px solid rgba(44, 45, 39, 0.12)',
        overflow: 'hidden',
        position: 'relative',
        marginTop: '0.85rem'
      }}
      aria-label="Why travelers trust Prabhuling Travels"
    >
      <div className="trust-marquee-viewport">
        <MarqueeTrack />
        <MarqueeTrack aria-hidden="true" />
      </div>

      {/* Soft edge fades so items don't hard-cut at the viewport edge */}
      <div className="trust-marquee-fade trust-marquee-fade-left" />
      <div className="trust-marquee-fade trust-marquee-fade-right" />

      <style>{`
        .trust-marquee-viewport {
          display: flex;
          width: max-content;
          animation: trust-marquee-scroll 32s linear infinite;
        }
        .trust-marquee-viewport:hover {
          animation-play-state: paused;
        }
        .trust-marquee-track {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .trust-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          white-space: nowrap;
          padding: 1rem 2.1rem;
        }
        .trust-marquee-label {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--color-ink);
        }
        .trust-marquee-desc {
          font-size: 0.8rem;
          font-weight: 400;
          color: rgba(44, 45, 39, 0.65);
        }
        .trust-marquee-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(44, 45, 39, 0.3);
          margin-left: 1.75rem;
        }
        .trust-marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 90px;
          pointer-events: none;
          z-index: 2;
        }
        .trust-marquee-fade-left {
          left: 0;
          background: linear-gradient(90deg, var(--color-terracotta) 0%, transparent 100%);
        }
        .trust-marquee-fade-right {
          right: 0;
          background: linear-gradient(270deg, var(--color-terracotta) 0%, transparent 100%);
        }
        @keyframes trust-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-marquee-viewport {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
