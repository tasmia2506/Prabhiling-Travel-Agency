import React from 'react';
import { Link } from 'react-router-dom';

/**
 * HeroCard — shared premium hero shape used across every page.
 *
 * Renders a full-bleed image/video hero with rounded top corners and a
 * large organic wave along the bottom edge that flows into the page
 * background. Only the SHAPE is standardized here — page-specific hero
 * copy, badges, trust chips, etc. keep working exactly as before by being
 * passed in as `children` (or via the simple title/description/badge/cta
 * props for basic cases).
 */
export default function HeroCard({
  image,
  video,
  imageAlt = '',
  badge,
  title,
  description,
  cta,
  align = 'left',
  overlay = true,
  overlayGradient,
  children,
  minHeight = '560px',
  aspectRatio,
  pullUnderHeader = true,
  rounded = 28,
  wave = true,
  waveHeight = 90,
  className = '',
  contentClassName = '',
  style,
  imageStyle,
  onImageError,
  contentStyle,
}) {
  const defaultOverlay =
    'linear-gradient(180deg, rgba(18, 25, 20, 0.5) 0%, rgba(18, 25, 20, 0.28) 45%, rgba(18, 25, 20, 0.8) 100%)';

  const alignStyles =
    align === 'right'
      ? { marginLeft: 'auto', marginRight: 0, textAlign: 'right', alignItems: 'flex-end' }
      : align === 'center'
      ? { marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', alignItems: 'center' }
      : { marginLeft: 0, marginRight: 'auto', textAlign: 'left', alignItems: 'flex-start' };

  return (
    <section
      className={`hero-card ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginTop: pullUnderHeader ? '-72px' : 0,
        minHeight,
        ...(aspectRatio ? { aspectRatio } : {}),
        display: 'flex',
        alignItems: 'center',
        borderRadius: `${rounded}px ${rounded}px 0 0`,
        backgroundColor: 'var(--color-paper-bg)',
        color: '#FFFFFF',
        ...style,
      }}
    >
      {/* Background media — image or video, always full-bleed object-cover */}
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      ) : image ? (
        <img
          src={image}
          alt={imageAlt}
          onError={onImageError}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            ...imageStyle,
          }}
        />
      ) : null}

      {/* Optional gradient overlay, only for text readability */}
      {overlay && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: overlayGradient || defaultOverlay,
            zIndex: 1,
          }}
        />
      )}

      {/* Content, above image + overlay + wave */}
      <div
        className={`container hero-card-content ${contentClassName}`}
        style={{ position: 'relative', zIndex: 3, width: '100%', ...contentStyle }}
      >
        {children ? (
          children
        ) : (
          <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', ...alignStyles }}>
            {badge && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#FDFBF7',
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  padding: '0.4rem 1.15rem',
                  borderRadius: '30px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(6px)',
                  marginBottom: '1.25rem',
                }}
              >
                {badge}
              </span>
            )}

            {title && (
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: '1.1',
                  marginBottom: '1rem',
                  textShadow: '0 4px 20px rgba(0,0,0,0.45)',
                }}
              >
                {title}
              </h1>
            )}

            {description && (
              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'rgba(253, 251, 247, 0.92)',
                  lineHeight: '1.7',
                  marginBottom: cta ? '1.75rem' : 0,
                  maxWidth: '720px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                {description}
              </p>
            )}

            {cta && (
              <Link
                to={cta.to}
                className="btn"
                style={{
                  backgroundColor: 'var(--color-terracotta)',
                  color: '#2C2D27',
                  padding: '1rem 2.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  borderRadius: '50px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 6px 20px rgba(230, 184, 0, 0.35)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {cta.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Large organic wave — flows the image into the page background */}
      {wave && (
        <svg
          aria-hidden="true"
          className="hero-card-wave"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '-2px',
            width: '100%',
            height: `clamp(36px, ${waveHeight}px, 12vw)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <path
            d="M0,130 C220,40 320,190 560,120 C800,50 900,180 1150,110 C1300,70 1380,110 1440,90 L1440,220 L0,220 Z"
            fill="var(--color-paper-bg)"
          />
        </svg>
      )}
    </section>
  );
}
