import React, { useState } from 'react';
import { Plane, Calendar, MapPin, Users, Send, CheckCircle2, ShieldCheck, Zap, Award, Globe, Tag, Briefcase } from 'lucide-react';
import PaperCard from '../components/scrapbook/PaperCard';
import TicketCard from '../components/scrapbook/TicketCard';
import TravelStamp from '../components/scrapbook/TravelStamp';
import MapFragment from '../components/scrapbook/MapFragment';
import HeroCard from '../components/HeroCard';

export default function FlightBookingPage({ config, onOpenBookingModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromCity: '',
    toCity: '',
    departDate: '',
    returnDate: '',
    flightClass: 'Economy',
    passengers: '1',
    preferredAirline: 'Any Airline',
    requests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNum = '8050172818';

    let msg = `*PRABHULING TRAVEL AGENCY — FLIGHT TICKET ENQUIRY*\n`;
    msg += `--------------------------------------\n`;
    msg += `👤 *PASSENGER NAME*: ${formData.name}\n`;
    msg += `📞 *MOBILE*: ${formData.phone}\n`;
    msg += `✈️ *FROM CITY/AIRPORT*: ${formData.fromCity}\n`;
    msg += `✈️ *TO CITY/AIRPORT*: ${formData.toCity}\n`;
    msg += `📅 *DEPARTURE DATE*: ${formData.departDate}\n`;
    if (formData.returnDate) msg += `🔄 *RETURN DATE*: ${formData.returnDate}\n`;
    msg += `🛋️ *CLASS*: ${formData.flightClass}\n`;
    msg += `👥 *PASSENGERS*: ${formData.passengers}\n`;
    msg += `🛫 *AIRLINE PREFERENCE*: ${formData.preferredAirline}\n`;
    if (formData.requests) msg += `💬 *NOTES*: ${formData.requests}\n`;
    msg += `--------------------------------------\n`;
    msg += `*Sent via Flight Desk*`;

    const waUrl = `https://wa.me/91${whatsappNum}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Hero Banner with Video Background & Centered Content */}
      <HeroCard
        video="/flight.mp4"
        overlayGradient="linear-gradient(180deg, rgba(10, 21, 32, 0.45) 0%, rgba(10, 21, 32, 0.25) 50%, rgba(10, 21, 32, 0.60) 100%)"
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
              DOMESTIC & OVERSEAS FLIGHT DESK
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
              Flight Ticket Assistance
            </h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '1.1rem' }}>
              Skies made simple, fares made fair.
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
              Instant domestic & international flight reservations for IndiGo, Air India, SpiceJet, Akasa Air, Vistara, & overseas airlines with human ticketing assistance & zero booking fee traps.
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
                <Plane size={18} style={{ color: '#38BDF8' }} /> All Routes Covered
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', }}>
                <Tag size={18} style={{ color: '#FACC15' }} /> Fare Comparison
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', }}>
                <Briefcase size={18} style={{ color: '#4ADE80' }} /> Baggage & Seat Help
              </span>
            </div>
          </div>
        </div>
      </HeroCard>

      {/* Main Form Container */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <TicketCard
          ticketType="flight"
          accentColor="var(--color-ocean-blue)"
          ticketNumber="PRB-FLT-8050"
          badgeText="BOARDING & FLIGHT REQUISITION TICKET"
          notchBgColor="var(--color-paper-bg)"
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', color: 'var(--color-ocean-blue)', letterSpacing: '0.1em' }}>
                FLIGHT REQUISITION DESK
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: '800', color: 'var(--color-ink)', lineHeight: '1.15' }}>
                RESERVE ANY FLIGHT TICKET
              </h2>
            </div>
            <TravelStamp text="FLIGHT ASSISTANCE" size="small" color="var(--color-ocean-blue)" rotation="-4deg" />
          </div>

          {isSubmitted ? (
            <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--color-ocean-blue)', textAlign: 'center' }}>
              <CheckCircle2 size={46} style={{ color: 'var(--color-ocean-blue)', margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)', fontSize: '1.5rem', marginBottom: '0.35rem' }}>
                Flight Requisition Dispatched!
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', marginBottom: '1.25rem' }}>
                Thank you, <strong>{formData.name}</strong>. WhatsApp has opened with your flight requisition details for WhatsApp Support.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="btn btn-outline"
              >
                Submit Another Flight Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Row 1: Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>PASSENGER FULL NAME *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Ananya Sharma" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>MOBILE NUMBER *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="10-digit mobile number" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              {/* Row 2: From & To City */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>FROM CITY / AIRPORT *</label>
                  <input type="text" required value={formData.fromCity} onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })} placeholder="Enter Origin City or Airport Code (e.g. BLR)" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>TO CITY / AIRPORT *</label>
                  <input type="text" required value={formData.toCity} onChange={(e) => setFormData({ ...formData, toCity: e.target.value })} placeholder="Enter Destination City or Airport Code (e.g. GOI, DEL, BOM)" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              {/* Row 3: Depart Date & Return Date */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>DEPARTURE DATE *</label>
                  <input type="date" required value={formData.departDate} onChange={(e) => setFormData({ ...formData, departDate: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>RETURN DATE (OPTIONAL FOR ROUND-TRIP)</label>
                  <input type="date" value={formData.returnDate} onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
                </div>
              </div>

              {/* Row 4: Class, Passengers & Airline */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>CABIN CLASS</label>
                  <select value={formData.flightClass} onChange={(e) => setFormData({ ...formData, flightClass: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="Economy">Economy Class</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business Class</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>PASSENGER COUNT</label>
                  <select value={formData.passengers} onChange={(e) => setFormData({ ...formData, passengers: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3-4">3-4 Passengers</option>
                    <option value="Group 5+">Group (5+ Passengers)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>AIRLINE PREFERENCE</label>
                  <select value={formData.preferredAirline} onChange={(e) => setFormData({ ...formData, preferredAirline: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }}>
                    <option value="Any Airline">Any Airline (Lowest Fare)</option>
                    <option value="IndiGo">IndiGo Airlines</option>
                    <option value="Air India">Air India</option>
                    <option value="SpiceJet">SpiceJet</option>
                    <option value="Akasa Air">Akasa Air</option>
                    <option value="International Airline">International Airline</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem' }}>SPECIAL REQUESTS / BAGGAGE PREFERENCES</label>
                <textarea rows={3} value={formData.requests} onChange={(e) => setFormData({ ...formData, requests: e.target.value })} placeholder="Extra baggage allowance, meal preference, window seat, timing preferences..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-cream)' }} />
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', backgroundColor: '#1E6B4B', color: '#FFFFFF', fontWeight: '700' }}
              >
                <Plane size={20} /> SEND FLIGHT ENQUIRY VIA WHATSAPP →
              </button>
            </form>
          )}
        </TicketCard>

        {/* Feature Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
          <PaperCard paperType="sheet" padding="1.75rem">
            <Plane size={28} style={{ color: 'var(--color-ocean-blue)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              Domestic & Overseas Flights
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              Book flights connecting all major Indian airports & international destinations seamlessly.
            </p>
          </PaperCard>

          <PaperCard paperType="cream" padding="1.75rem">
            <Zap size={28} style={{ color: 'var(--color-terracotta)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              Lowest Fare Comparison
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              We compare fares across all major domestic & international carriers to get you transparent rates with no hidden fees.
            </p>
          </PaperCard>

          <PaperCard paperType="sheet" padding="1.75rem">
            <Award size={28} style={{ color: 'var(--color-forest)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              Seat & Baggage Assistance
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              Web check-in help, window/aisle seat selection, & extra baggage addon guidance for stress-free travel.
            </p>
          </PaperCard>

          <PaperCard paperType="cream" padding="1.75rem">
            <Globe size={28} style={{ color: 'var(--color-ocean-blue)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
              Human Agency Support
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
              Need flight schedule modifications, cancellations, or refund support? Speak directly with our dedicated travel desk.
            </p>
          </PaperCard>
        </div>
      </div>
    </div>
  );
}
