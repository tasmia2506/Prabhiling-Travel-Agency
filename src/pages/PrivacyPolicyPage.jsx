import React from 'react';
import MapFragment from '../components/scrapbook/MapFragment';

const SECTION_HEADING_STYLE = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.35rem',
  fontWeight: '800',
  color: 'var(--color-ink)',
  marginTop: '2.25rem',
  marginBottom: '0.85rem'
};

const PARAGRAPH_STYLE = {
  fontSize: '1rem',
  color: 'var(--color-ink-muted)',
  lineHeight: '1.75',
  marginBottom: '1rem'
};

const LIST_STYLE = {
  ...PARAGRAPH_STYLE,
  paddingLeft: '1.25rem',
  margin: '0 0 1rem 0'
};

export default function PrivacyPolicyPage({ config }) {
  const businessName = config?.businessName || 'Prabhuling Travel Agency';
  const address = config?.address || 'Terdal, Bagalkot District, Karnataka, India';
  const phone = config?.phoneNumber || '+91 80501 72818';

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <MapFragment opacity={0.06} />

      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-paper-sheet)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <span className="section-tag">
              PRIVACY
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
              Privacy Policy
            </h1>

            <p style={{ fontSize: '1.075rem', color: 'var(--color-ink-muted)', lineHeight: '1.65' }}>
              How {businessName} collects, uses, shares & protects your personal data, and the rights you have under India's Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 (with the SPDI Rules, 2011).
            </p>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-light)', marginTop: '0.75rem' }}>
              Last updated: 7 September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div style={{ maxWidth: '780px' }}>

          <h2 style={{ ...SECTION_HEADING_STYLE, marginTop: 0 }}>1. Who we are</h2>
          <p style={PARAGRAPH_STYLE}>
            {businessName} (“we”, “us”, “our”) is a vehicle-rental and tour operator based in Bagalkot District, Karnataka, India. Our registered address is {address}. For the purpose of the Digital Personal Data Protection Act, 2023, we act as the “Data Fiduciary” for the personal data described below.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>2. What we collect</h2>
          <p style={PARAGRAPH_STYLE}>
            Information you give us when you use the booking form, send a WhatsApp enquiry, or call us: your name, phone number, pickup and drop locations, travel and return dates, passenger count, vehicle preference and any notes or requirements you share.
          </p>
          <p style={PARAGRAPH_STYLE}>
            Information collected automatically when analytics cookies are allowed (see section 5): your device and browser type, approximate region, the pages you view and how you reached the site. If you choose “Reject” on the cookie notice, only cookies strictly necessary for the site to work are used.
          </p>
          <p style={PARAGRAPH_STYLE}>
            We do not ask for, and request that you do not send us, sensitive data such as government ID numbers, financial account details, health information or passwords through the website. Payment is arranged separately, offline.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>3. How we use your data</h2>
          <p style={PARAGRAPH_STYLE}>We use the data you provide only to:</p>
          <ul style={LIST_STYLE}>
            <li>respond to your enquiry and prepare an itemised quotation;</li>
            <li>confirm, schedule and operate your booking, including assigning a driver and vehicle;</li>
            <li>contact you about your trip (pickup timing, changes, support);</li>
            <li>keep records required for accounting, tax and legal compliance;</li>
            <li>understand aggregate site usage so we can improve the service (analytics only, and only with your consent).</li>
          </ul>
          <p style={PARAGRAPH_STYLE}>
            We do not use your data for automated decision-making that has a legal or similarly significant effect on you, and we do not sell your personal data.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>4. Consent and legal basis</h2>
          <p style={PARAGRAPH_STYLE}>
            We collect and process your personal data on the basis of the consent you give when you submit an enquiry or accept cookies, and, where applicable, for the legitimate purposes permitted under the DPDP Act (such as responding to a request you have made and meeting legal obligations). You may withdraw your consent at any time by contacting us (section 10); withdrawing consent does not affect processing already carried out, and may mean we can no longer provide a quote or booking.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>5. Cookies</h2>
          <p style={PARAGRAPH_STYLE}>
            Essential cookies / local storage keep the site working — for example remembering your cookie choice and preventing a pop-up from repeating. These are always active and store data only in your browser.
          </p>
          <p style={PARAGRAPH_STYLE}>
            Analytics cookies are used only after you select “Accept” on the cookie notice. You can change your mind at any time by clearing this site's data in your browser settings, which removes the stored choice and shows the notice again.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>6. Who we share it with</h2>
          <p style={PARAGRAPH_STYLE}>We share personal data only as needed to run the service:</p>
          <ul style={LIST_STYLE}>
            <li>Drivers assigned to your trip receive the details needed to carry it out (name, contact number, pickup/drop, timing).</li>
            <li>Service providers that operate the website and messaging — our hosting provider and the messaging platform you choose to contact us on (WhatsApp / Meta) — process data strictly to deliver those functions and under their own terms and safeguards.</li>
            <li>Authorities, where disclosure is required by law, court order, or to protect our rights, safety or property.</li>
          </ul>
          <p style={PARAGRAPH_STYLE}>
            If you contact us over WhatsApp, that conversation is also governed by WhatsApp's / Meta's privacy terms, and may be processed on their infrastructure outside India.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>7. How long we keep it</h2>
          <p style={PARAGRAPH_STYLE}>
            We keep enquiry and booking data only for as long as needed to serve you and to meet accounting, tax and legal requirements — typically up to eight years for records with a financial or tax element, and a shorter period for enquiries that do not lead to a booking. After that it is deleted or anonymised.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>8. How we protect it</h2>
          <p style={PARAGRAPH_STYLE}>
            We follow reasonable security practices and procedures as required under the IT Act, 2000 and the SPDI Rules, 2011 — the site is served over HTTPS, access to enquiry data is limited to staff who need it, and we review our practices periodically. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>9. Your rights</h2>
          <p style={PARAGRAPH_STYLE}>Under the Digital Personal Data Protection Act, 2023 you may:</p>
          <ul style={LIST_STYLE}>
            <li>ask for a summary of the personal data we hold about you and how it is processed;</li>
            <li>ask us to correct, complete or update inaccurate or incomplete data;</li>
            <li>ask us to erase your data where it is no longer needed;</li>
            <li>withdraw consent you have given;</li>
            <li>nominate another person to exercise these rights on your behalf in the event of death or incapacity;</li>
            <li>raise a grievance with us, and escalate to the Data Protection Board of India if unresolved.</li>
          </ul>
          <p style={PARAGRAPH_STYLE}>
            To exercise any of these, contact us using the details in section 10. We may need to verify your identity before acting on a request, and we will respond within the timelines prescribed under applicable law.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>10. Contact / Grievance Officer</h2>
          <p style={PARAGRAPH_STYLE}>
            For any question, request or complaint about your personal data, contact our Grievance Officer:
          </p>
          <p style={{ ...PARAGRAPH_STYLE, fontWeight: '700', color: 'var(--color-ink)' }}>
            {businessName}<br />
            {address}<br />
            Phone / WhatsApp: {phone}
          </p>
          <p style={PARAGRAPH_STYLE}>
            If you are not satisfied with our response, you may complain to the Data Protection Board of India under the DPDP Act, 2023.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>11. Children</h2>
          <p style={PARAGRAPH_STYLE}>
            Our services are intended for adults arranging travel. We do not knowingly collect the personal data of a child (under 18) without the consent of a parent or lawful guardian. If you believe a child has given us data, contact us and we will delete it.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>12. Changes to this policy</h2>
          <p style={PARAGRAPH_STYLE}>
            We may update this policy from time to time. The “Last updated” date at the top shows the current version. Significant changes will be reflected here; please review the page periodically.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>13. Governing law</h2>
          <p style={PARAGRAPH_STYLE}>
            This policy is governed by the laws of India. Any dispute relating to it is subject to the exclusive jurisdiction of the courts at Bagalkot, Karnataka.
          </p>
        </div>
      </div>
    </div>
  );
}
