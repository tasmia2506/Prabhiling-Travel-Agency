import React from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import TravelStamp from '../scrapbook/TravelStamp';

export default function PackageDetailModal({ packageData, isOpen, onClose, onEnquirePackage }) {
  if (!isOpen || !packageData) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(30, 25, 20, 0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      className="animate-fade-in"
    >
      <div
        style={{
          backgroundColor: '#FDFBF7',
          borderRadius: '6px',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-stacked)',
          border: '1.5px solid var(--color-border-strong)',
          position: 'relative'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            backgroundColor: 'var(--color-forest)',
            color: '#FFFFFF',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-terracotta)', letterSpacing: '0.1em' }}>
              CURATED TOUR DOSSIER • {packageData.duration || '3D / 2N'}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF', fontSize: '1.4rem' }}>
              {packageData.name || packageData.title}
            </h3>
          </div>
          <button onClick={onClose} style={{ color: '#FFFFFF', padding: '0.25rem', cursor: 'pointer' }}>
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-terracotta)', marginBottom: '0.4rem' }}>
                "{packageData.tagline || packageData.subtitle || 'Custom group itinerary'}"
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
                {packageData.description}
              </p>
            </div>

            <TravelStamp text="CURATED TOUR" size="small" color="var(--color-forest)" rotation="-6deg" />
          </div>

          {/* Highlights */}
          {packageData.highlights && (
            <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', marginBottom: '1.25rem' }}>
              <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-forest)', marginBottom: '0.35rem' }}>
                PACKAGE HIGHLIGHTS:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.4rem' }}>
                {packageData.highlights.map((hl, idx) => (
                  <div key={idx} style={{ fontSize: '0.85rem', color: 'var(--color-ink)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--color-terracotta)' }} /> {hl}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.65rem', color: 'var(--color-ink-light)', display: 'block' }}>STARTING PRICE</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '800', color: 'var(--color-forest)' }}>
                ₹{packageData.startingPrice ? packageData.startingPrice.toLocaleString() : '4,999'}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-outline" onClick={onClose}>
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() => { onClose(); onEnquirePackage({ service: 'Tour Package', tourName: packageData.name || packageData.title }); }}
              >
                Enquire Package →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
