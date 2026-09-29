import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinationsData';
import { X, ChevronLeft, ChevronRight, MapPin, ArrowRight, Clock } from 'lucide-react';

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedGallery, setSelectedGallery] = useState(null); // { name: string, photos: string[], activeIdx: number }

  const categories = ['All', 'Hill Stations', 'Coastal & Beaches', 'Heritage & Pilgrimage', 'Wildlife & Nature'];

  const filteredDestinations = activeCategory === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === activeCategory);

  const fallbackImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

  const openGallery = (dest, initialIdx = 0) => {
    const photos = (dest.gallery && dest.gallery.length > 0) 
      ? dest.gallery 
      : [dest.image || fallbackImage];
    setSelectedGallery({
      name: dest.name,
      photos,
      activeIdx: initialIdx
    });
  };

  const closeGallery = () => setSelectedGallery(null);

  const nextPhoto = (e) => {
    e?.stopPropagation();
    if (!selectedGallery) return;
    setSelectedGallery(prev => ({
      ...prev,
      activeIdx: (prev.activeIdx + 1) % prev.photos.length
    }));
  };

  const prevPhoto = (e) => {
    e?.stopPropagation();
    if (!selectedGallery) return;
    setSelectedGallery(prev => ({
      ...prev,
      activeIdx: (prev.activeIdx - 1 + prev.photos.length) % prev.photos.length
    }));
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>MEMORIES & LANDSCAPES</span>
          </div>
          <h2 className="section-title">
            FEATURED DESTINATIONS
          </h2>
          <p className="section-desc">
            Hand-curated travel destinations across Karnataka & South India's finest sanctuaries.
          </p>
        </div>

        {/* Editorial Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '2rem 1.75rem'
          }}
        >
          {filteredDestinations.map((dest) => {
            return (
              <div
                key={dest.id}
                className="card"
                onClick={() => openGallery(dest, 0)}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-paper)'
                }}
                title="Click to view destination photo gallery"
              >
                <img
                  src={dest.image || fallbackImage}
                  alt={dest.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                  }}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />

                {/* Bottom Gradient for Text Legibility */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 0%, transparent 32%, rgba(10, 10, 8, 0.7) 62%, rgba(10, 10, 8, 0.92) 100%)'
                  }}
                />

                {/* Content Overlay */}
                <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}>
                  {/* Badges Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                    {dest.category && (
                      <span
                        style={{
                          backgroundColor: 'rgba(20, 20, 18, 0.85)',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.7rem',
                          fontWeight: '700',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          padding: '0.4rem 0.85rem',
                          borderRadius: '30px'
                        }}
                      >
                        {dest.category}
                      </span>
                    )}

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '30px'
                      }}
                    >
                      <MapPin size={13} />
                      {dest.distanceFromBase ? `${dest.distanceFromBase} from Hubli` : dest.duration}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      marginBottom: '0.5rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {dest.name}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {dest.description || dest.shortDesc}
                  </p>

                  <div
                    style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      paddingTop: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.85rem' }}>
                      <Clock size={15} />
                      {dest.duration || '2-4 Days'}
                    </span>

                    <Link
                      to={`/destinations/${dest.id}`}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--color-terracotta)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.825rem',
                        fontWeight: '700',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Enquire Cab <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* High-Resolution Photo Gallery Lightbox Modal */}
      {selectedGallery && (
        <div
          onClick={closeGallery}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(10, 14, 12, 0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          {/* Modal Top Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1000px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#FFFFFF'
            }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#FFFFFF', margin: 0 }}>
                {selectedGallery.name}
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#A0B0A5' }}>
                Photo {selectedGallery.activeIdx + 1} of {selectedGallery.photos.length}
              </span>
            </div>

            <button
              onClick={closeGallery}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#FFFFFF',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Close gallery"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Photo Viewing Stage */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1000px',
              maxHeight: '70vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {selectedGallery.photos.length > 1 && (
              <button
                onClick={prevPhoto}
                style={{
                  position: 'absolute',
                  left: '10px',
                  zIndex: 10,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#FFFFFF',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <img
              src={selectedGallery.photos[selectedGallery.activeIdx]}
              alt={`${selectedGallery.name} picture`}
              style={{
                maxHeight: '68vh',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackImage;
              }}
            />

            {selectedGallery.photos.length > 1 && (
              <button
                onClick={nextPhoto}
                style={{
                  position: 'absolute',
                  right: '10px',
                  zIndex: 10,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#FFFFFF',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Selector Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              gap: '10px',
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: '30px',
              maxWidth: '90vw',
              overflowX: 'auto'
            }}
          >
            {selectedGallery.photos.map((pUrl, idx) => (
              <img
                key={idx}
                src={pUrl}
                alt="thumbnail"
                onClick={() => setSelectedGallery(prev => ({ ...prev, activeIdx: idx }))}
                style={{
                  width: '60px',
                  height: '44px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border: selectedGallery.activeIdx === idx ? '2px solid #E29578' : '2px solid transparent',
                  opacity: selectedGallery.activeIdx === idx ? 1 : 0.6,
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
