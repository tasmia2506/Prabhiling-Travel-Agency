import React, { useState } from 'react';
import Seo from '../components/Seo';
import { FLEET } from '../data/fleetData';
import TicketStub from '../components/scrapbook/TicketStub';
import HeroCard from '../components/HeroCard';
import { Bus, ShieldCheck, Star } from 'lucide-react';

export default function BusesPage({ onOpenBookingModal }) {
  const [filterType, setFilterType] = useState('All');

  const filteredBuses = FLEET.filter(bus => {
    if (filterType === 'Sleeper') return bus.type.includes('Sleeper');
    if (filterType === 'Seater') return bus.type.includes('Seater');
    if (filterType === 'AC') return bus.type.includes('AC');
    return true;
  });

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <Seo
        title="Our Bus Fleet"
        description="Prabhuling Travel Agency directly operates 8 modern AC & Non-AC sleeper & seater buses across Karnataka & South India. View specs, fares & reserve your seat pass online."
        path="/buses"
      />

      {/* Hero Banner with Fleet Image Background & Centered Content */}
      <HeroCard
        image="/buses-fleet-hero.jpg"
        imageAlt="Prabhuling Travel Agency — Our Luxury Bus Fleet"
        imageStyle={{ objectPosition: 'center 100%' }}
        overlayGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.45) 100%)"
        minHeight="640px"
        pullUnderHeader={false}
        rounded={0}
        contentStyle={{ maxWidth: 'none', margin: 0, padding: `0 1.25rem 0 clamp(2rem, 8vw, 6rem)` }}
      >
        <div style={{ padding: '1rem 0' }}>
          <div style={{ maxWidth: '620px' }}>
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
              OFFICIAL FLEET DOSSIER • 7 OPERATED BUSES
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
              Our 8-Bus Luxury Fleet
            </h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '1.1rem' }}>
              Eight coaches, one promise of comfort.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(253, 251, 247, 0.85)',
                lineHeight: '1.7',
                marginBottom: '2rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              Prabhuling Travel Agency directly operates <strong>7 modern AC & Non-AC sleeper & executive seater buses</strong>. Every coach is inspected daily, sanitised, & assigned to experienced long-distance highway drivers.
            </p>
          </div>

          <div style={{ maxWidth: 'none', width: 'fit-content' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingRight: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bus size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>7 Owned</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>Luxury Coaches</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 1.25rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>Daily Mechanical</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>& Safety Check</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1.25rem', borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Star size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700', whiteSpace: 'nowrap' }}>AC Sleeper &</strong>
                  <span style={{ display: 'block', fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)' }}>Seater Berths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroCard>

      {/* Fleet Catalog */}
      <div className="container" style={{ marginTop: '3rem' }}>
        {/* Section Heading */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ink)' }}>
            AVAILABLE BUS PASSES & CHARTERS
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
            Select any bus ticket pass below to reserve seat berths or book full private charter.
          </p>
        </div>

        {/* Fleet Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '3rem 1.75rem' }}>
          {filteredBuses.map((bus, idx) => (
            <TicketStub
              key={bus.id}
              ticketType={`PASSENGER BUS PASS #${idx + 1}`}
              title={bus.name}
              subtitle={bus.specLine || `${bus.type} (${bus.capacity} Seats)`}
              origin={['bus-1', 'bus-8'].includes(bus.id) ? '' : (bus.primaryRoute ? bus.primaryRoute.split('↔')[0].trim() : 'Bengaluru')}
              destination={['bus-1', 'bus-8'].includes(bus.id) ? '' : (bus.primaryRoute ? bus.primaryRoute.split('↔')[1]?.split('(')[0].trim() : 'South India')}
              price={bus.startingPrice ? `₹${bus.startingPrice}/seat` : 'Contact for rate'}
              details={bus.amenities || bus.features || ['AC Sleeper', 'Pushback Seats', 'Charging Ports', 'GPS Tracking']}
              stampText="OPERATED FLEET"
              status="OPERATIONAL"
              image={bus.image}
              onBook={() => onOpenBookingModal({ service: 'Bus Rental', busId: bus.id, busName: bus.name })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

