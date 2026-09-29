import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Compass, Phone, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';
import { PearlButton } from './ui/pearl-button';

export default function Header({ config, onOpenBookingModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const HERO_IMAGE_PAGES = ['/', '/services', '/buses', '/destinations', '/about', '/packages'];
  const isHome = HERO_IMAGE_PAGES.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Packages', path: '/packages' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Our Buses', path: '/buses' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const headerBg = isHome && !scrolled
    ? 'rgba(18, 25, 20, 0.25)'
    : 'rgba(253, 251, 247, 0.96)';

  const textColor = isHome && !scrolled ? '#FFFFFF' : 'var(--color-ink)';
  const tagColor = isHome && !scrolled ? '#FDFBF7' : 'var(--color-terracotta)';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: headerBg,
        borderBottom: isHome && !scrolled ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid var(--color-border)',
        boxShadow: scrolled ? 'var(--shadow-paper)' : 'none',
        transition: 'all 0.35s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px', position: 'relative' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'var(--color-forest)',
              color: '#FFFFFF',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <Compass size={22} style={{ color: 'var(--color-terracotta)' }} />
          </div>
          <div>
            <div
              className="font-display"
              style={{
                fontSize: '1.4rem',
                fontWeight: '800',
                color: textColor,
                lineHeight: '1',
                letterSpacing: '-0.01em'
              }}
            >
              PRABHULING
            </div>
            <div
              className="font-typewriter"
              style={{
                fontSize: '0.65rem',
                color: tagColor,
                lineHeight: '1',
                letterSpacing: '0.12em',
                marginTop: '2px'
              }}
            >
              TRAVELS & JOURNEYS
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', lgDisplay: 'flex', gap: '1.25rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontWeight: isActive ? '700' : '600',
                color: isActive
                  ? 'var(--color-terracotta)'
                  : isHome && !scrolled ? '#FDFBF7' : 'var(--color-ink)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '0.25rem 0',
                borderBottom: isActive ? '2px solid var(--color-terracotta)' : '2px solid transparent'
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Primary CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link to="/booking" style={{ textDecoration: 'none' }} className="header-cta-btn">
            <PearlButton label="BOOK A TRIP" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'inline-flex',
              padding: '0.5rem',
              borderRadius: '4px',
              border: `1px solid ${isHome && !scrolled ? 'rgba(255,255,255,0.3)' : 'var(--color-border)'}`,
              backgroundColor: isHome && !scrolled ? 'rgba(0,0,0,0.2)' : 'var(--color-paper-sheet)',
              color: textColor
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-paper-sheet)',
            borderTop: '1px solid var(--color-border)',
            padding: '1.25rem 1.5rem',
            boxShadow: 'var(--shadow-stacked)',
            position: 'relative'
          }}
          className="animate-fade-in"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '1rem',
                  fontWeight: isActive ? '700' : '600',
                  color: isActive ? 'var(--color-terracotta)' : 'var(--color-ink)',
                  padding: '0.5rem 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid var(--color-border)',
                  textDecoration: 'none'
                })}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} style={{ color: 'var(--color-ink-light)' }} />
              </NavLink>
            ))}
          </div>


          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <Link
              to="/booking"
              style={{ textDecoration: 'none', width: '100%' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <PearlButton label="BOOK A TRIP" style={{ width: '100%' }} />
            </Link>
            <a
              className="btn btn-whatsapp"
              href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              style={{ width: '100%', textDecoration: 'none' }}
            >
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Inline Responsive Helper */}
      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 1079px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
        @media (max-width: 480px) {
          .header-cta-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
