import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.prabhulingtravels.com';
const DEFAULT_IMAGE = `${SITE_URL}/home2.jfif`;

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  noindex = false
}) {
  const fullTitle = title
    ? `${title} | Prabhuling Travel Agency`
    : 'Prabhuling Travel Agency | Bus, Flight, Train Bookings & Tour Packages';

  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
