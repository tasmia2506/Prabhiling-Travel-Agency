import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, Compass, Clock, ExternalLink, ArrowUp } from 'lucide-react';

const LABEL_STYLE = {
  fontFamily: 'var(--font-typewriter)',
  fontSize: '0.775rem',
  fontWeight: '700',
  color: 'var(--color-terracotta)',
  letterSpacing: '0.12em',
  marginBottom: '1.1rem',
  textTransform: 'uppercase'
};

const LINK_STYLE = {
  color: 'rgba(255, 255, 255, 0.72)',
  textDecoration: 'none',
  fontSize: '0.9rem'
};

const CORE_SERVICES = [
  { label: 'Bus Ticket Booking', to: '/buses' },
  { label: 'Flight Ticket Booking', to: '/flight-booking' },
  { label: 'Train Ticket Booking', to: '/train-booking' },
  { label: 'Tour & Holiday Packages', to: '/packages' },
  { label: 'Bus & Vehicle Rental', to: '/buses' },
  { label: 'End-to-End Travel Assistance', to: '/services' }
];

export default function Footer({ config, onToggleConfigDrawer }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const mapsUrl = config?.googleMapsUrl || 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(config.address || 'Prabhuling Travel Agency');

  return (
    <footer
      style={{
        backgroundColor: '#160D08',
        color: '#FFFFFF',
        padding: '4.5rem 0 0 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 1.3fr) repeat(3, minmax(160px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', marginBottom: '1.1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--color-terracotta)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Compass size={22} style={{ color: 'var(--color-terracotta)' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.15' }}>
                  PRABHULING
                </div>
                <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-terracotta)', letterSpacing: '0.1em' }}>
                  TRAVELS & JOURNEYS
                </div>
              </div>
            </Link>

            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Bagalkot's trusted bus fleet & tour operator. Specialising in luxury sleeper coaches, flight & train bookings, & curated multi-day tour packages across South India.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${config.phoneNumber}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '30px',
                  padding: '0.55rem 1.1rem',
                  color: '#FFFFFF',
                  fontSize: '0.825rem',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                <Phone size={15} /> Call Us
              </a>

              <a
                href={`https://wa.me/${(config.whatsappNumber || '').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '30px',
                  padding: '0.55rem 1.1rem',
                  color: '#FFFFFF',
                  fontSize: '0.825rem',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={15} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={LABEL_STYLE}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, margin: 0 }}>
              <li><Link to="/" style={LINK_STYLE}>Home</Link></li>
              <li><Link to="/about" style={LINK_STYLE}>About Us</Link></li>
              <li><Link to="/buses" style={LINK_STYLE}>Our Fleet</Link></li>
              <li><Link to="/services" style={LINK_STYLE}>Services</Link></li>
              <li><Link to="/destinations" style={LINK_STYLE}>Destinations</Link></li>
              <li><Link to="/packages" style={LINK_STYLE}>Tour Packages</Link></li>
              <li><Link to="/contact" style={LINK_STYLE}>Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div>
            <h4 style={LABEL_STYLE}>Core Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, margin: 0 }}>
              {CORE_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link to={service.to} style={LINK_STYLE}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Desk */}
          <div>
            <h4 style={LABEL_STYLE}>Contact Desk</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.72)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={16} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div>{config.address || 'Prabhuling Travel Agency, Karnataka, India'}</div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-terracotta)', fontWeight: '700', textDecoration: 'none', fontSize: '0.825rem', marginTop: '0.3rem' }}
                  >
                    View on Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} style={{ color: 'var(--color-terracotta)', flexShrink: 0 }} />
                <a href={`tel:${config.phoneNumber}`} style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>
                  {config.phoneNumber}
                </a>
              </div>

              {config.workingHours && (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <Clock size={16} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{config.workingHours}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '1.5rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} Prabhuling Travel Agency. All rights reserved.</span>
            <Link to="/privacy-policy" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span>Reliable bus & vehicle rental in Bagalkot, Karnataka</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', padding: '1rem 0 1.5rem 0', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.4)' }}>
          Designed & Developed by{' '}
          <a
            href="https://naazailabs.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: '700', textDecoration: 'none' }}
          >
            Naaz AI Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
