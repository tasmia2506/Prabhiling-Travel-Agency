import React from 'react';
import ServicesSection from '../components/ServicesSection';
import HeroCard from '../components/HeroCard';
import { Headphones, ShieldCheck, Star } from 'lucide-react';

export default function ServicesPage({ onOpenBookingModal }) {
  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      {/* Hero Banner */}
      <HeroCard
        image="/services-hero.jpg"
        imageAlt="Prabhuling Travel Agency — Full Service Desk"
        aspectRatio="1600 / 899"
        overlayGradient="linear-gradient(180deg, rgba(20, 30, 24, 0.55) 0%, rgba(20, 30, 24, 0.35) 45%, rgba(20, 30, 24, 0.75) 100%)"
        rounded={0}
      >
        <div style={{ padding: '1rem 0', textAlign: 'center', marginTop: '-9rem' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                color: 'var(--color-terracotta)',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                marginBottom: '1rem',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              <span style={{ width: '28px', height: '2px', backgroundColor: 'var(--color-terracotta)', display: 'inline-block' }} />
              FULL SERVICE DESK
              <span style={{ width: '28px', height: '2px', backgroundColor: 'var(--color-terracotta)', display: 'inline-block' }} />
            </div>

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
              Our Services
            </h1>

            <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--color-terracotta)', marginBottom: '1.1rem' }}>
              Every booking, handled by a human.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(253, 251, 247, 0.85)',
                lineHeight: '1.7',
                marginBottom: '2rem',
                maxWidth: '740px',
                margin: '0 auto 2rem auto',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              From bus & flight tickets to full holiday packages & private vehicle charters — Prabhuling Travel Agency's desk team handles every booking directly, with zero hidden charges.
            </p>

            <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingRight: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Headphones size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>Human Support,</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>Not Bots</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 1.25rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>Zero Hidden</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>Charges</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1.25rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Star size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>6 Core</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroCard>

      {/* Full Services Grid */}
      <ServicesSection onOpenBookingModal={onOpenBookingModal} />
    </div>
  );
}
