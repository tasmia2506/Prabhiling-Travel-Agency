import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { FLEET } from '../data/fleetData';
import PaperCard from '../components/scrapbook/PaperCard';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';

export default function BusDetailPage({ config, onOpenBookingModal }) {
  const { id } = useParams();
  const bus = FLEET.find(b => b.id === id) || FLEET[0];

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <Seo
        title={`${bus.name} — ${bus.type}`}
        description={`${bus.name} (${bus.type}), ${bus.capacity} seats. ${bus.tagline || 'Directly owned & maintained coach'} — book your seat pass with Prabhuling Travel Agency.`}
        path={`/buses/${bus.id}`}
      />
      <MapFragment opacity={0.06} />

      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-paper-sheet)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <Link to="/buses" style={{ color: 'var(--color-terracotta)', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
            ← Back to All 7 Operated Buses
          </Link>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-tag">
                PASSENGER BUS SPECIFICATION #{bus.id}
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
                {bus.name}
              </h1>

              <p style={{ fontSize: '1.075rem', color: 'var(--color-ink-muted)' }}>
                {bus.type} • Capacity: {bus.capacity} Seats
              </p>
            </div>

            <TravelStamp text="8-BUS FLEET" size="medium" color="var(--color-gold-stamp)" rotation="-6deg" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <PaperCard paperType="sheet" rotation="-0.8deg" padding="2rem">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
                Coach Description & Route
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                {bus.description}
              </p>

              <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-forest)', marginBottom: '0.2rem' }}>PRIMARY OPERATING ROUTE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-ink)' }}>
                  {bus.primaryRoutes ? bus.primaryRoutes.join(' ➔ ') : 'Bengaluru ➔ Gokarna / Coorg'}
                </div>
              </div>
            </PaperCard>
          </div>

          <div>
            <PaperCard paperType="cream" rotation="1deg" padding="2rem" style={{ position: 'sticky', top: '90px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ink)', marginBottom: '0.5rem' }}>
                Reserve Seat Berth
              </h3>

              <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', color: 'var(--color-forest)', marginBottom: '1.25rem' }}>
                FARE RATE: {bus.perKmRate ? `₹${bus.perKmRate}/km` : 'Contact for Rate'}
              </div>

              <button
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                onClick={() => onOpenBookingModal({ service: 'Bus Rental', busId: bus.id, busName: bus.name })}
              >
                Book Seats On This Bus →
              </button>
            </PaperCard>
          </div>
        </div>
      </div>
    </div>
  );
}
