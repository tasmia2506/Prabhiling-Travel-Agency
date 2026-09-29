import React from 'react';

export default function StatusBar({ config }) {
  return (
    <div
      style={{
        backgroundColor: '#2C2D27',
        color: 'rgba(255, 255, 255, 0.8)',
        padding: '0.7rem 0',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontFamily: 'var(--font-typewriter)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          <span>16&deg;31'N 75&deg;04'E</span>
          <span style={{ color: 'var(--color-terracotta)' }}>&bull;</span>
          <span>TERDAL, BAGALKOT DISTRICT BASE</span>
          <span style={{ color: 'var(--color-terracotta)' }}>&bull;</span>
          <span>ALL ROUTES OPERATIONAL</span>
        </div>

        <div>
          <span>INSTANT DISPATCH: {config?.phoneNumber || '+91 80501 72818'}</span>
        </div>
      </div>
    </div>
  );
}
