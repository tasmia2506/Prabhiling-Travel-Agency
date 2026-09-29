import React from 'react';
import { Link } from 'react-router-dom';
import { FLEET } from '../data/fleetData';
import TicketStub from './scrapbook/TicketStub';

export default function FleetShowcase({ onOpenBusDetailModal, onOpenBookingModal, limit }) {
  const displayedFleet = limit ? FLEET.slice(0, limit) : FLEET;

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>OFFICIAL TRANSPORTATION</span>
          </div>
          <h2 className="section-title">
            OUR 8-BUS LUXURY FLEET
          </h2>
          <p className="section-desc">
            Directly operated by Prabhuling Travel Agency. Verified luxury Sleeper & Seater coaches with pushback seats, air conditioning, charging ports, & experienced drivers.
          </p>

          {limit && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <Link
                to="/buses"
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
                View All Buses →
              </Link>
            </div>
          )}
        </div>

        {/* Fleet Ticket Stubs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2.25rem 2.5rem'
          }}
        >
          {displayedFleet.map((bus, idx) => (
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
              onViewDetail={() => onOpenBusDetailModal(bus)}
              onBook={() => onOpenBookingModal({ service: 'Bus Rental', busId: bus.id, busName: bus.name })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
