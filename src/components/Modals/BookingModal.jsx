import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import TravelStamp from '../scrapbook/TravelStamp';

export default function BookingModal({ isOpen, onClose, initialData, config }) {
  const [serviceType, setServiceType] = useState(initialData?.serviceType || 'Bus');
  const [selectedBus, setSelectedBus] = useState(initialData?.selectedBus || '');
  const [packageTitle, setPackageTitle] = useState(initialData?.packageTitle || '');
  const [from, setFrom] = useState(initialData?.from || '');
  const [to, setTo] = useState(initialData?.to || '');
  const [date, setDate] = useState(initialData?.date || '');
  const [passengers, setPassengers] = useState(initialData?.passengers || '1');
  const [preference, setPreference] = useState(initialData?.preference || '');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setServiceType(initialData.serviceType || 'Bus');
      setSelectedBus(initialData.selectedBus || '');
      setPackageTitle(initialData.packageTitle || '');
      setFrom(initialData.from || '');
      setTo(initialData.to || '');
      setDate(initialData.date || '');
      setPassengers(initialData.passengers || '1');
      setPreference(initialData.preference || '');
    }
  }, [initialData]);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const url = buildWhatsAppLink(config.whatsappNumber, {
      serviceType,
      selectedBus,
      packageTitle,
      from,
      to,
      date,
      passengers,
      name,
      phone,
      message
    });
    
    setIsSubmitted(true);
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

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
          maxWidth: '600px',
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
            <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-terracotta)', letterSpacing: '0.1em' }}>
              OFFICIAL TRAVEL MANIFESTO
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF', fontSize: '1.35rem' }}>
              {selectedBus ? `Book ${selectedBus}` : packageTitle ? `Enquire ${packageTitle}` : `${serviceType === 'TourPackage' ? 'Tour Package' : serviceType === 'BusRental' ? 'Bus Rental' : serviceType} Reservation Dossier`}
            </h3>
          </div>
          <button onClick={onClose} style={{ color: '#FFFFFF', padding: '0.25rem', cursor: 'pointer' }}>
            <X size={22} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.5rem' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle2 size={46} style={{ color: 'var(--color-forest)', margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', marginBottom: '0.5rem' }}>
                WhatsApp Enquiry Launched!
              </h3>
              <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Your booking details have been prepared for WhatsApp. Our agency desk will confirm availability directly.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button className="btn btn-outline" onClick={() => setIsSubmitted(false)}>
                  Edit Details
                </button>
                <button className="btn btn-primary" onClick={onClose}>
                  Close Dossier
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendWhatsApp}>
              {/* Service Type Switcher */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.4rem' }}>
                  SELECT SERVICE TYPE
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Bus', 'Flight', 'Train', 'TourPackage', 'BusRental'].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setServiceType(st)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '3px',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-typewriter)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: serviceType === st ? 'var(--color-terracotta)' : 'var(--color-paper-cream)',
                        color: 'var(--color-ink)',
                        cursor: 'pointer'
                      }}
                    >
                      {st === 'TourPackage' ? 'Tour Package' : st === 'BusRental' ? 'Bus Rental' : st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.3rem' }}>FROM / PICKUP</label>
                  <input type="text" required placeholder="e.g. Bengaluru" value={from} onChange={(e) => setFrom(e.target.value)} style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1.5px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.3rem' }}>TO / DESTINATION</label>
                  <input type="text" required placeholder="e.g. Gokarna / Coorg" value={to} onChange={(e) => setTo(e.target.value)} style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1.5px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.3rem' }}>JOURNEY DATE</label>
                  <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1.5px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.3rem' }}>PASSENGERS</label>
                  <select value={passengers} onChange={(e) => setPassengers(e.target.value)} style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1.5px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Group Booking</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', marginBottom: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', color: 'var(--color-forest)', marginBottom: '0.65rem' }}>YOUR DETAILS</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <input type="text" required placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                  <input type="tel" required placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                </div>

                <textarea placeholder="Special requests, berth preference..." rows={2} value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
              </div>

              {/* Action */}
              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '0.85rem 1rem', fontSize: '1rem', gap: '0.6rem' }}>
                <MessageSquare size={20} /> Launch WhatsApp Booking →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
