import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinationsData';
import Seo from '../components/Seo';
import PaperCard from '../components/scrapbook/PaperCard';
import Polaroid from '../components/scrapbook/Polaroid';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';
import HeroCard from '../components/HeroCard';
import { Camera, MapPin, Clock, Calendar, Bus, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function DestinationDetailPage({ onOpenBookingModal }) {
  const { id } = useParams();
  const dest = DESTINATIONS.find(d => d.id === id) || DESTINATIONS[0];
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  const fallbackImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
  const galleryList = (dest.gallery && dest.gallery.length > 0) ? dest.gallery : [dest.image || fallbackImage];

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <Seo
        title={dest.name}
        description={dest.description || `Plan your trip to ${dest.name} with Prabhuling Travel Agency — bus routes, tour packages & travel tips.`}
        path={`/destinations/${dest.id}`}
        image={dest.heroImage || dest.image}
      />
      <MapFragment opacity={0.06} />

      {/* Header Banner with Cover Image */}
      <HeroCard
        image={dest.heroImage || dest.image || fallbackImage}
        imageAlt={dest.name}
        imageStyle={{ opacity: 0.35, filter: 'contrast(1.1) brightness(0.9)' }}
        onImageError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = fallbackImage;
        }}
        overlayGradient="linear-gradient(180deg, rgba(15,22,18,0.7) 0%, rgba(15,22,18,0.9) 100%)"
        minHeight="420px"
        pullUnderHeader={false}
        rounded={0}
      >
        <div style={{ padding: '1rem 0' }}>
          <Link to="/destinations" style={{ color: '#E29578', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            ← Back to All Destinations
          </Link>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ maxWidth: '750px' }}>
              <span className="section-tag" style={{ color: '#FDFBF7', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
                DESTINATION DOSSIER • {dest.category || 'KARNATAKA'}
              </span>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  marginTop: '0.75rem',
                  marginBottom: '0.5rem',
                  lineHeight: '1.1',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                {dest.name}
              </h1>

              <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.45rem', color: '#E29578', marginBottom: '1rem' }}>
                "{dest.subtitle || dest.tagline}"
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', marginTop: '1.25rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={16} style={{ color: '#E29578' }} /> {dest.duration}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={16} style={{ color: '#E29578' }} /> Best: {dest.bestTimeToVisit}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Bus size={16} style={{ color: '#E29578' }} /> {dest.travelTime} ({dest.distanceFromBase})
                </span>
              </div>
            </div>

            <TravelStamp text="VISITED" subtext={dest.category || 'SOUTH INDIA'} size="medium" color="#E29578" rotation="6deg" />
          </div>
        </div>
      </HeroCard>

      {/* Main Details & Photo Gallery */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* Left Column: Primary Photo & Journal Overview */}
          <div>
            <Polaroid
              image={dest.image}
              title={dest.name}
              location={`${dest.category}, South India`}
              rotation="-1deg"
              tape={true}
              tapePosition="top-center"
            />

            <PaperCard paperType="sheet" rotation="1deg" padding="2rem" style={{ marginTop: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
                Journal Overview & Travel Guide
              </h2>
              <p style={{ fontSize: '1.025rem', color: 'var(--color-ink-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {dest.overview || dest.description}
              </p>

              {dest.popularAttractions && dest.popularAttractions.length > 0 && (
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem', marginTop: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
                    Key Attractions & Highlights:
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.65rem' }}>
                    {dest.popularAttractions.map((att, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-forest)', flexShrink: 0 }} />
                        <span>{att}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => onOpenBookingModal({ service: 'Tour Package', destination: dest.name })}
                >
                  Plan Trip to {dest.name} →
                </button>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-forest)' }}>
                  Fare from ₹{dest.startingPrice ? dest.startingPrice.toLocaleString() : '1,999'}
                </div>
              </div>
            </PaperCard>
          </div>

          {/* Right Column: Full Photo Album Gallery */}
          <div>
            <div style={{ backgroundColor: 'var(--color-paper-sheet)', padding: '1.75rem', borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-paper)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', color: 'var(--color-terracotta)', fontWeight: '700' }}>
                    PHOTO ARCHIVE
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ink)' }}>
                    Destination Pictures ({galleryList.length})
                  </h3>
                </div>
                <Camera size={24} style={{ color: 'var(--color-forest)' }} />
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginBottom: '1.5rem' }}>
                Click on any photograph to view in full resolution lightbox preview.
              </p>

              {/* Photo Collage Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {galleryList.map((photoUrl, pIdx) => (
                  <div
                    key={pIdx}
                    onClick={() => setActivePhotoIdx(pIdx)}
                    style={{
                      position: 'relative',
                      height: '160px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: '1px solid rgba(0,0,0,0.1)',
                      boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    className="card"
                  >
                    <img
                      src={photoUrl}
                      alt={`${dest.name} landscape ${pIdx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        inset: 'auto 0 0 0',
                        padding: '0.35rem 0.65rem',
                        background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-typewriter)',
                        fontSize: '0.65rem'
                      }}
                    >
                      Photo #{pIdx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Detail Page */}
      {activePhotoIdx !== null && (
        <div
          onClick={() => setActivePhotoIdx(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(10, 14, 12, 0.93)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#FFFFFF' }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#FFFFFF', margin: 0 }}>
                {dest.name} — Photo Album
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#A0B0A5' }}>
                Photo {activePhotoIdx + 1} of {galleryList.length}
              </span>
            </div>
            <button
              onClick={() => setActivePhotoIdx(null)}
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: 'none', color: '#FFFFFF', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
            >
              <X size={22} />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', maxWidth: '1000px', maxHeight: '70vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {galleryList.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setActivePhotoIdx((activePhotoIdx - 1 + galleryList.length) % galleryList.length); }}
                style={{ position: 'absolute', left: '10px', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', width: '46px', height: '46px', borderRadius: '50%', cursor: 'pointer' }}
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <img
              src={galleryList[activePhotoIdx]}
              alt={`${dest.name} photo`}
              style={{ maxHeight: '68vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImage; }}
            />

            {galleryList.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setActivePhotoIdx((activePhotoIdx + 1) % galleryList.length); }}
                style={{ position: 'absolute', right: '10px', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', width: '46px', height: '46px', borderRadius: '50%', cursor: 'pointer' }}
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ display: 'flex', gap: '10px', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '30px', maxWidth: '90vw', overflowX: 'auto' }}
          >
            {galleryList.map((pUrl, idx) => (
              <img
                key={idx}
                src={pUrl}
                alt="thumbnail"
                onClick={() => setActivePhotoIdx(idx)}
                style={{
                  width: '60px',
                  height: '44px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border: activePhotoIdx === idx ? '2px solid #E29578' : '2px solid transparent',
                  opacity: activePhotoIdx === idx ? 1 : 0.6
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
