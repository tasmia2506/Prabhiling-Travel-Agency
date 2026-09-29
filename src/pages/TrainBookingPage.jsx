import React, { useState } from 'react';
import { Train, Calendar, MapPin, Users, Send, CheckCircle2, ShieldCheck, Zap, Award, Clock, ArrowRight } from 'lucide-react';
import PaperCard from '../components/scrapbook/PaperCard';
import TicketCard from '../components/scrapbook/TicketCard';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';
import HeroCard from '../components/HeroCard';

export default function TrainBookingPage({ config, onOpenBookingModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromStation: '',
    toStation: '',
    journeyDate: '',
    trainClass: '3AC',
    quota: 'General',
    passengers: '1',
    berthPreference: 'Any Berth',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNum = '8050172818';

    let msg = `*PRABHULING TRAVEL AGENCY — TRAIN TICKET ENQUIRY*\n`;
    msg += `--------------------------------------\n`;
    msg += `👤 *PASSENGER NAME*: ${formData.name}\n`;
    msg += `📞 *MOBILE*: ${formData.phone}\n`;
    msg += `🚉 *FROM STATION*: ${formData.fromStation}\n`;
    msg += `🚉 *TO STATION*: ${formData.toStation}\n`;
    msg += `📅 *JOURNEY DATE*: ${formData.journeyDate}\n`;
    msg += `🛋️ *CLASS*: ${formData.trainClass}\n`;
    msg += `🎟️ *QUOTA*: ${formData.quota}\n`;
    msg += `👥 *PASSENGERS*: ${formData.passengers}\n`;
    msg += `💺 *BERTH PREFERENCE*: ${formData.berthPreference}\n`;
    if (formData.notes) msg += `💬 *NOTES*: ${formData.notes}\n`;
    msg += `--------------------------------------\n`;
    msg += `*Sent via All-India Railway Desk*`;

    const waUrl = `https://wa.me/91${whatsappNum}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Hero Banner with Video Background & Centered Content */}
      <HeroCard
        video="/train2.mp4"
        overlayGradient="linear-gradient(180deg, rgba(15, 22, 18, 0.45) 0%, rgba(15, 22, 18, 0.25) 50%, rgba(15, 22, 18, 0.60) 100%)"
        minHeight="640px"
        pullUnderHeader={false}
        rounded={0}
      >
        <div style={{ padding: '1rem 0', textAlign: 'center' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-block',
                color: '#FDFBF7',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                marginBottom: '1rem',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              PAN-INDIA RAILWAY TICKET ASSISTANCE
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                marginTop: '0.5rem',
                marginBottom: '1rem',
                lineHeight: '1.1',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              All-India Train Ticket Reservation Desk
            </h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '1.1rem' }}>
              Every berth, booked with heart.
            </p>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'rgba(253, 251, 247, 0.92)',
                lineHeight: '1.7',
                marginBottom: '1.75rem',
                maxWidth: '740px',
                margin: '0 auto 1.75rem auto',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              We assist with train ticket reservations across all Indian Railways zones. Book Vande Bharat, Rajdhani, Shatabdi, Superfast, Tatkal quota tickets, berth preferences, & PNR status tracking with 100% human agency support.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#FDFBF7'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', }}>
                <CheckCircle2 size={18} style={{ color: '#4ADE80' }} /> All Zones Covered
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', }}>
                <Zap size={18} style={{ color: '#FACC15' }} /> Tatkal Assistance
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', }}>
                <Train size={18} style={{ color: '#38BDF8' }} /> Lower Berth Preference
              </span>
            </div>
          </div>
        </div>
      </HeroCard>

      {/* Main Container */}
      <div className="container" style={{ marginTop: '3rem' }}>
        {/* All-India Train Booking Form in Authentic Ticket Stub Shape */}
        <TicketCard
          ticketType="train"
          accentColor="var(--color-terracotta)"
          ticketNumber="PRB-RAIL-8050"
          badgeText="INDIAN RAILWAYS RESERVATION TICKET"
          notchBgColor="var(--color-paper-bg)"
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', color: 'var(--color-terracotta)', letterSpacing: '0.1em' }}>
                INDIAN RAILWAYS RESERVATION REQUISITION
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: '800', color: 'var(--color-ink)', lineHeight: '1.15' }}>
                RESERVE ANY TRAIN TICKET IN INDIA
              </h2>
            </div>
            <TravelStamp text="ALL-INDIA RAILWAY" size="small" color="var(--color-forest)" rotation="-4deg" />
          </div>

          {isSubmitted ? (
            <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--color-forest)', textAlign: 'center' }}>
              <CheckCircle2 size={46} style={{ color: 'var(--color-forest)', margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)', fontSize: '1.5rem', marginBottom: '0.35rem' }}>
                Train Requisition Dispatched!
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', marginBottom: '1.25rem' }}>
                Thank you, <strong>{formData.name}</strong>. WhatsApp has opened with your journey requisition ({formData.fromStation || 'Origin'} ➔ {formData.toStation || 'Destination'}) for WhatsApp Desk.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="btn btn-outline"
              >
                Submit Another Railway Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Row 1: Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>PASSENGER FULL NAME *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Suresh Kumar" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>MOBILE NUMBER *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="10-digit phone number" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              {/* Row 2: From & To Station */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>FROM STATION (ORIGIN) *</label>
                  <input type="text" required value={formData.fromStation} onChange={(e) => setFormData({ ...formData, fromStation: e.target.value })} placeholder="Enter Origin Station / City" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>TO STATION (DESTINATION) *</label>
                  <input type="text" required value={formData.toStation} onChange={(e) => setFormData({ ...formData, toStation: e.target.value })} placeholder="Enter Destination Station / City" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              {/* Row 3: Date, Class & Quota */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>JOURNEY DATE *</label>
                  <input type="date" required value={formData.journeyDate} onChange={(e) => setFormData({ ...formData, journeyDate: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>CLASS PREFERENCE</label>
                  <select value={formData.trainClass} onChange={(e) => setFormData({ ...formData, trainClass: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="3AC">3AC - 3-Tier AC</option>
                    <option value="2AC">2AC - 2-Tier AC</option>
                    <option value="1AC">1AC - First AC / Executive</option>
                    <option value="3E">3E - AC 3 Economy</option>
                    <option value="CC">CC - AC Chair Car</option>
                    <option value="SL">SL - Sleeper Class</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>BOOKING QUOTA</label>
                  <select value={formData.quota} onChange={(e) => setFormData({ ...formData, quota: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="General">General Quota</option>
                    <option value="Tatkal">Tatkal Quota Assistance</option>
                    <option value="Premium Tatkal">Premium Tatkal</option>
                    <option value="Ladies">Ladies Quota</option>
                    <option value="Senior Citizen">Senior Citizen Quota</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Passengers & Berth Preference */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>NUMBER OF PASSENGERS</label>
                  <select value={formData.passengers} onChange={(e) => setFormData({ ...formData, passengers: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5-6">5-6 Passengers</option>
                    <option value="Group 6+">Group (6+ Passengers)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>BERTH / SEAT PREFERENCE</label>
                  <select value={formData.berthPreference} onChange={(e) => setFormData({ ...formData, berthPreference: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="Any Berth">No Preference (Any Berth)</option>
                    <option value="Lower Berth">Lower Berth (Seniors/Family)</option>
                    <option value="Side Lower">Side Lower Berth</option>
                    <option value="Upper / Side Upper">Upper / Side Upper Berth</option>
                    <option value="Window Seat">Window Seat (Chair Car)</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>TRAIN NAME / SPECIFIC NUMBER (OPTIONAL)</label>
                <input type="text" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="e.g. Vande Bharat Express, Rajdhani Express, preferred time..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', backgroundColor: '#1E6B4B', color: '#FFFFFF', fontWeight: '700' }}
              >
                <Train size={20} /> SEND TRAIN ENQUIRY VIA WHATSAPP →
              </button>
            </form>
          )}
        </TicketCard>

        {/* Feature Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
          <PaperCard paperType="sheet" padding="1.75rem">
            <Train size={28} style={{ color: 'var(--color-forest)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              All Indian Railways Zones Covered
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              From Southern Railway & South Western Railway to Northern, Western, Central & Eastern Rail networks across India.
            </p>
          </PaperCard>

          <PaperCard paperType="cream" padding="1.75rem">
            <Zap size={28} style={{ color: 'var(--color-terracotta)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              Tatkal & Premium Tatkal Support
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              Urgent last-minute journey? Our agency team assists with Tatkal opening windows for AC & Sleeper classes.
            </p>
          </PaperCard>

          <PaperCard paperType="sheet" padding="1.75rem">
            <Award size={28} style={{ color: 'var(--color-forest)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              Berth & Senior Citizen Care
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              Special care for elderly travelers & families — prioritizing Lower Berth requests & contiguous seat allocation.
            </p>
          </PaperCard>

          <PaperCard paperType="cream" padding="1.75rem">
            <ShieldCheck size={28} style={{ color: 'var(--color-terracotta)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              PNR Status & Charting Assistance
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              Receive direct human updates on waitlist clearance status, chart preparation, coach positioning, & platform info.
            </p>
          </PaperCard>
        </div>
      </div>
    </div>
  );
}
