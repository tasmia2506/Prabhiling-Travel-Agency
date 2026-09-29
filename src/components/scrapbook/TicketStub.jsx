import React from 'react';

export default function TicketStub({
  ticketType = 'PASSENGER BUS PASS #01',
  title,
  subtitle,
  origin = 'Bengaluru',
  destination = 'South India',
  price,
  details = [],
  stampText = 'OPERATED FLEET',
  status = 'OPERATIONAL',
  image,
  onBook,
  onViewDetail,
  style = {}
}) {
  const visibleFeatures = details.slice(0, 3);
  const remainingCount = details.length > 3 ? details.length - 3 : 0;
  const defaultPlaceholder = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80";

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper-sheet)',
        border: '1px solid var(--color-border)',
        borderRadius: '20px',
        boxShadow: '0 4px 18px -2px rgba(34, 31, 29, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 32px -6px rgba(34, 31, 29, 0.14)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 18px -2px rgba(34, 31, 29, 0.06)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* 1. Top Bus Picture Card (Photo Placeholder Container) */}
        <div style={{ position: 'relative', height: '230px', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-paper-cream)' }}>
          <img
            src={image || defaultPlaceholder}
            alt={title || "Luxury Bus Coach"}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', display: 'block', transition: 'transform 0.4s ease' }}
            loading="lazy"
          />

          {/* Top Left Ticket Badge Overlay */}
          <div className="tag-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
            {ticketType}
          </div>

          {/* Top Right Operational Status Overlay */}
          <div className="tag-light" style={{ position: 'absolute', top: '12px', right: '12px', color: 'var(--color-forest)' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'inline-block'
              }}
            />
            {status}
          </div>
        </div>

        {/* 2. Main Content Body */}
        <div
          style={{
            padding: '1.25rem 1.25rem 0.75rem 1.25rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: (details.length === 0 && !origin && !destination) ? 'center' : 'flex-start'
          }}
        >
          {/* Header Title & Fleet Tag */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', minHeight: '72px' }}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: 'var(--color-ink)',
                  lineHeight: '1.3',
                  marginBottom: '0.3rem'
                }}
              >
                {title}
              </h3>

              {subtitle && (
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'var(--color-ink-muted)',
                    fontWeight: '500'
                  }}
                >
                  {subtitle}
                </div>
              )}
            </div>

            {stampText && (
              <span
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.625rem',
                  fontWeight: '700',
                  color: 'var(--color-gold-stamp)',
                  border: '1px solid rgba(179, 143, 0, 0.35)',
                  backgroundColor: 'var(--color-terracotta-soft)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '30px',
                  letterSpacing: '0.06em',
                  whiteSpace: 'nowrap',
                  marginTop: '2px'
                }}
              >
                ✓ {stampText}
              </span>
            )}
          </div>

        </div>
      </div>

      {/* 5. Clean Footer Section */}
      <div style={{ padding: '0 1.25rem 1.25rem 1.25rem' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)', opacity: 0.6, marginBottom: '0.85rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.6rem', color: 'var(--color-ink-light)', display: 'block', letterSpacing: '0.08em' }}>
              FARE / RATE
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-forest)' }}>
              {price || 'Contact for rate'}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            {onViewDetail && (
              <button
                onClick={onViewDetail}
                className="btn btn-outline btn-sm"
                style={{
                  fontSize: '0.825rem',
                  padding: '0.45rem 0.85rem',
                  border: '1px solid var(--color-border-strong)',
                  backgroundColor: 'transparent',
                  boxShadow: 'none'
                }}
              >
                View Specs
              </button>
            )}

            {onBook && (
              <button
                onClick={onBook}
                className="btn btn-primary btn-sm"
                style={{
                  fontSize: '0.85rem',
                  padding: '0.45rem 1rem'
                }}
              >
                Book Pass →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


