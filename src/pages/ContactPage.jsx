import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageCircle, MapPin, Clock, ArrowUpRight, Zap, Star } from 'lucide-react';
import Seo from '../components/Seo';
import MapFragment from '../components/scrapbook/MapFragment';

const SERVICE_OPTIONS = ['Advise Best Option', 'Bus Booking', 'Flight Booking', 'Train Booking', 'Tour Package', 'Vehicle Rental'];

const INPUT_STYLE = {
  width: '100%',
  padding: '0.75rem 0.9rem',
  borderRadius: '8px',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-paper-bg)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9rem',
  color: 'var(--color-ink)'
};

const LABEL_STYLE = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.7rem',
  fontWeight: '700',
  color: 'var(--color-ink-light)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: '0.4rem'
};

export default function ContactPage({ config }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Advise Best Option',
    pickupPoint: config?.location || 'Terdal, Bagalkot District',
    travelDate: '',
    returnDate: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneDigits = (config?.phoneNumber || '+91 80501 72818').replace(/[^0-9]/g, '');
  const whatsappDigits = (config?.whatsappNumber || '+918050172818').replace(/[^0-9]/g, '');
  const address = config?.address || 'Terdal–Shegunasi Road, near Nivaragi Textile, Terdal, Bagalkot District, Karnataka – 587315';
  const mapsQuery = encodeURIComponent(address);

  const handleSubmit = (e) => {
    e.preventDefault();

    let messageText = `*PRABHULING TRAVEL AGENCY — TRAVEL QUOTE*\n`;
    messageText += `--------------------------------------\n`;
    messageText += `👤 *NAME*: ${formData.name}\n`;
    messageText += `📞 *PHONE / WHATSAPP*: ${formData.phone}\n`;
    messageText += `🚌 *SERVICE*: ${formData.service}\n`;
    messageText += `📍 *PICKUP POINT*: ${formData.pickupPoint}\n`;
    messageText += `📅 *TRAVEL DATE*: ${formData.travelDate}\n`;
    if (formData.returnDate) messageText += `🔄 *RETURN DATE*: ${formData.returnDate}\n`;
    if (formData.details) messageText += `💬 *DESTINATION & REQUIREMENTS*: ${formData.details}\n`;
    messageText += `--------------------------------------\n`;
    messageText += `*Sent via Website Contact Form*`;

    const waUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <Seo
        title="Contact Us"
        description="Contact Prabhuling Travel Agency for bus, flight & train bookings or tour packages. Call, WhatsApp, or send an instant travel quote request — we're here around the clock."
        path="/contact"
      />
      <MapFragment opacity={0.06} />

      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-terracotta)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <span className="section-tag">
              DIRECT WHATSAPP ENQUIRY DESK
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: 'var(--color-ink)',
                marginTop: '0.75rem',
                marginBottom: '0.85rem'
              }}
            >
              Contact Our Agency Desk
            </h1>

            <p style={{ fontSize: '1.075rem', color: 'var(--color-ink-muted)', lineHeight: '1.65' }}>
              Fill in your travel details below to send an enquiry directly to our WhatsApp support ({config?.phoneNumber || '+91 80501 72818'}).
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div className="contact-two-col" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)', gap: '2.5rem', alignItems: 'start' }}>

          {/* LEFT COLUMN: Intro + Contact Cards + Hours */}
          <div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-ink-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Quick Communication
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: 'var(--color-ink)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
              We're Here <span style={{ color: 'var(--color-gold-stamp)' }}>Around the Clock</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)', lineHeight: '1.65', marginBottom: '2rem' }}>
              Call or WhatsApp our dispatch team anytime for instant quotes, seat availability, or booking confirmations.
            </p>

            {/* Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <a
                href={`tel:+${phoneDigits}`}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.25rem', border: '1px solid var(--color-border)', borderRadius: '12px', backgroundColor: 'var(--color-paper-sheet)', textDecoration: 'none', position: 'relative' }}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} style={{ color: 'var(--color-ink)' }} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-ink-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Phone Hotline</span>
                  <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-ink)' }}>{config?.phoneNumber || '+91 80501 72818'}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}>Direct line to our operations desk in Bagalkot</span>
                </div>
                <ArrowUpRight size={16} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--color-ink-light)' }} />
              </a>

              <a
                href={`https://wa.me/${whatsappDigits}`}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.25rem', border: '1px solid var(--color-border)', borderRadius: '12px', backgroundColor: 'var(--color-paper-sheet)', textDecoration: 'none', position: 'relative' }}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageCircle size={20} style={{ color: 'var(--color-ink)' }} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-ink-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>WhatsApp Chat Desk</span>
                  <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-ink)' }}>Chat on WhatsApp</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}>Fast quotations & seat availability in minutes</span>
                </div>
                <ArrowUpRight size={16} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--color-ink-light)' }} />
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.25rem', border: '1px solid var(--color-border)', borderRadius: '12px', backgroundColor: 'var(--color-paper-sheet)' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-paper-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} style={{ color: 'var(--color-ink-muted)' }} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-ink-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Office & Terdal Counter</span>
                  <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-ink)', lineHeight: '1.3' }}>{address}</strong>
                </div>
              </div>
            </div>

            {/* Operating Hours Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.25rem', borderRadius: '12px', backgroundColor: '#1B140D', color: '#FFFFFF' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
                <Clock size={18} />
                <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4ADE80', border: '2px solid #1B140D' }} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.9rem', letterSpacing: '0.03em' }}>
                  OPERATING HOURS: {config?.workingHours || '24/7 AVAILABLE'}
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Dispatchers on duty for early morning & late night departures</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Quote Form + Map */}
          <div>
            {/* Quote Form Card */}
            <div style={{ border: '1px solid var(--color-border)', borderRadius: '16px', backgroundColor: 'var(--color-paper-sheet)', padding: '2rem', marginBottom: '2rem' }}>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={46} style={{ color: 'var(--color-gold-stamp)', margin: '0 auto 0.75rem auto' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)', fontSize: '1.5rem', marginBottom: '0.35rem' }}>
                    Enquiry Sent to WhatsApp!
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', marginBottom: '1.25rem' }}>
                    Thank you, <strong>{formData.name}</strong>. WhatsApp has opened with your structured enquiry details for <strong>{config?.phoneNumber || '+91 80501 72818'}</strong>.
                  </p>
                  <button type="button" onClick={() => setIsSubmitted(false)} className="btn btn-outline">
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: '700', color: 'var(--color-ink-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Instant WhatsApp Quotation
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '800', color: 'var(--color-ink)', marginTop: '0.35rem' }}>
                        Get a Free <span style={{ color: 'var(--color-gold-stamp)' }}>Travel Quote</span>
                      </h3>
                    </div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', border: '1px solid var(--color-border)', borderRadius: '30px', padding: '0.4rem 0.85rem', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-ink-muted)', whiteSpace: 'nowrap' }}>
                      <Zap size={13} style={{ color: 'var(--color-gold-stamp)' }} /> Quick Dispatch Response
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={LABEL_STYLE}>Your Name *</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Ramesh Kulkarni" style={INPUT_STYLE} />
                      </div>
                      <div>
                        <label style={LABEL_STYLE}>Phone / WhatsApp *</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98XXX XXXXX" style={INPUT_STYLE} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={LABEL_STYLE}>Select Service</label>
                        <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} style={INPUT_STYLE}>
                          {SERVICE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={LABEL_STYLE}>Pickup Point</label>
                        <input type="text" value={formData.pickupPoint} onChange={(e) => setFormData({ ...formData, pickupPoint: e.target.value })} placeholder="e.g. Bengaluru / Terdal" style={INPUT_STYLE} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={LABEL_STYLE}>Travel Date *</label>
                        <input type="date" required value={formData.travelDate} onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })} style={INPUT_STYLE} />
                      </div>
                      <div>
                        <label style={LABEL_STYLE}>Return Date (if round-trip)</label>
                        <input type="date" value={formData.returnDate} onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })} style={INPUT_STYLE} />
                      </div>
                    </div>

                    <div>
                      <label style={LABEL_STYLE}>Destination & Specific Travel Requirements</label>
                      <textarea rows={3} value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} placeholder="e.g. Round trip to Coorg with 6 family members, AC sleeper preferred..." style={{ ...INPUT_STYLE, resize: 'vertical' }} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                      <button
                        type="submit"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          backgroundColor: 'var(--color-gold-stamp)',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.85rem',
                          fontWeight: '700',
                          border: 'none',
                          borderRadius: '30px',
                          padding: '0.85rem 1.5rem',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <Send size={16} /> Get a Quote via WhatsApp
                      </button>
                      <span style={{ fontSize: '0.775rem', color: 'var(--color-ink-light)' }}>
                        Transparent per-seat & package pricing · No hidden charges
                      </span>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Map Card */}
            <div style={{ border: '1px solid var(--color-border)', borderRadius: '16px', backgroundColor: 'var(--color-paper-sheet)', padding: '1.5rem', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-ink)' }}>
                  <MapPin size={16} style={{ color: 'var(--color-gold-stamp)' }} /> Terdal & Bagalkot Service Area
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-ink-muted)', border: '1px solid var(--color-border)', borderRadius: '30px', padding: '0.3rem 0.75rem' }}>
                  KARNATAKA 587315
                </span>
              </div>

              <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <iframe
                  title="Prabhuling Travel Agency Location"
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  width="100%"
                  height="320"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-gold-stamp)', textDecoration: 'none' }}
              >
                <Star size={14} /> Find Us & Leave a Review on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
