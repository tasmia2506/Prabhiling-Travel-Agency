import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Stack positions & rotations for the paper pile effect
  const pileStyles = [
    { transform: 'translate(0px, 0px) rotate(0deg) scale(1)', opacity: 1, zIndex: 10, shadow: 'var(--shadow-stacked)' },
    { transform: 'translate(14px, 12px) rotate(3.5deg) scale(0.97)', opacity: 0.92, zIndex: 9, shadow: 'var(--shadow-photo)' },
    { transform: 'translate(-16px, 22px) rotate(-4deg) scale(0.94)', opacity: 0.82, zIndex: 8, shadow: 'var(--shadow-paper)' },
    { transform: 'translate(6px, 30px) rotate(2deg) scale(0.91)', opacity: 0.6, zIndex: 7, shadow: 'var(--shadow-paper)' },
  ];

  const paperTypes = ['#F1F0E7', '#E3E2D8', '#D2D1C6', '#C1C0B5'];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-bg)', borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>VERIFIED REVIEWS</span>
          </div>
          <h2 className="section-title">
            WORDS FROM OUR TRAVELERS
          </h2>
          <p className="section-desc">
            Authentic experiences shared by families, group bus charters, & holiday travelers.
          </p>
        </div>

        {/* Outer Layout: Left Button -- Centered Stack Deck -- Right Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            position: 'relative'
          }}
        >
          {/* Far Left Scroll Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="paper-nav-btn"
            style={{ zIndex: 30, flexShrink: 0 }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Piled Review Cards Deck */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              margin: '0 auto',
              padding: '1rem 0 3.5rem 0'
            }}
          >
            {/* Card Stack Container */}
            <div
              style={{
                position: 'relative',
                minHeight: '340px',
                width: '100%'
              }}
            >
              {TESTIMONIALS.map((t, idx) => {
                // Calculate index relative to current active card
                const stackIndex = (idx - currentIndex + total) % total;

                // Only render top 4 cards in the stack pile
                if (stackIndex > 3) return null;

                const styleConfig = pileStyles[stackIndex];
                const isTop = stackIndex === 0;

                return (
                  <div
                    key={t.id}
                    onClick={() => !isTop && setCurrentIndex(idx)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      minHeight: '300px',
                      backgroundColor: paperTypes[idx % paperTypes.length],
                      border: '1.5px solid var(--color-border-strong)',
                      borderRadius: '12px',
                      padding: '2rem 2.25rem',
                      boxShadow: styleConfig.shadow,
                      transform: styleConfig.transform,
                      opacity: styleConfig.opacity,
                      zIndex: styleConfig.zIndex,
                      transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: isTop ? 'default' : 'pointer',
                      userSelect: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Card Content */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                        <div style={{ display: 'flex', gap: '4px', color: '#EAB308' }}>
                          {[...Array(t.rating || 5)].map((_, i) => (
                            <Star key={i} size={18} fill="#EAB308" stroke="none" />
                          ))}
                        </div>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.725rem', color: 'var(--color-forest)', fontWeight: '700', letterSpacing: '0.08em' }}>
                          VERIFIED TRAVELER
                        </span>
                      </div>

                      <p
                        style={{
                          fontFamily: 'var(--font-handwriting)', fontStyle: 'italic',
                          fontSize: '1.45rem',
                          color: 'var(--color-ink)',
                          lineHeight: '1.4',
                          marginBottom: '1.5rem',
                          fontStyle: 'italic'
                        }}
                      >
                        "{t.comment}"
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div
                      style={{
                        borderTop: '1px solid var(--color-border)',
                        paddingTop: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        gap: '0.75rem',
                        flexWrap: 'wrap'
                      }}
                    >
                      <div>
                        <strong style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--color-forest)', display: 'block', fontWeight: '700' }}>
                          {t.name}
                        </strong>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-ink-light)' }}>
                          {t.location} • {t.date}
                        </span>
                      </div>

                      {t.tripType && (
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.7rem',
                            backgroundColor: 'var(--color-terracotta-soft)',
                            border: '1px solid rgba(230, 184, 0, 0.4)',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '6px',
                            color: 'var(--color-terracotta-hover)',
                            fontWeight: '700'
                          }}
                        >
                          {t.tripType}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stack Counter & Dots Pagination */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                marginTop: '3rem'
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: idx === currentIndex ? '28px' : '9px',
                      height: '9px',
                      borderRadius: '5px',
                      backgroundColor: idx === currentIndex ? 'var(--color-terracotta)' : 'var(--color-border-strong)',
                      opacity: idx === currentIndex ? 1 : 0.5,
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: 'var(--color-ink-muted)',
                  letterSpacing: '0.06em'
                }}
              >
                {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Far Right Scroll Button */}
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="paper-nav-btn"
            style={{ zIndex: 30, flexShrink: 0 }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
