import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: "How do I book a bus ticket with Prabhuling Travel Agency?",
    a: "You can book directly through our website's booking form, call our agency desk, or message us on WhatsApp. Our team confirms your seat instantly with zero hidden charges."
  },
  {
    q: "Do you operate your own buses or resell third-party tickets?",
    a: "We directly own & operate our 7-bus luxury fleet across AC/Non-AC sleeper & seater coaches, so you always deal with the fleet owner, not a reseller."
  },
  {
    q: "Can I book flights & train tickets through the same agency?",
    a: "Yes. Alongside our bus fleet, our desk team assists with domestic & international flight bookings, railway reservations, Tatkal guidance, & PNR status tracking."
  },
  {
    q: "Do you offer custom holiday packages for groups & families?",
    a: "Yes, we curate all-inclusive tour packages with dedicated bus transfers, hotel stays, & guided sightseeing across South India's heritage, coastal, & hill-station destinations."
  },
  {
    q: "What if I need to cancel or reschedule my booking?",
    a: "Contact our support desk via phone or WhatsApp with your booking reference. Our human team will guide you through rescheduling or refund options directly — no automated bots."
  },
  {
    q: "Can I hire a full bus for a private event or corporate trip?",
    a: "Absolutely. Our fleet is available for private charter — weddings, corporate retreats, school trips, & pilgrimages — with flexible hour/km hire & verified drivers."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-sheet)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>QUESTIONS ANSWERED</span>
          </div>
          <h2 className="section-title">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="section-desc">
            Everything travelers usually ask before booking with our agency desk.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                style={{
                  backgroundColor: 'var(--color-paper-cream)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? 'var(--shadow-paper)' : 'none',
                  transition: 'box-shadow 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.1rem 1.35rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      color: 'var(--color-ink)'
                    }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      flexShrink: 0,
                      color: 'var(--color-terracotta)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{ padding: '0 1.35rem 1.25rem 1.35rem' }}>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)', lineHeight: '1.65', margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
