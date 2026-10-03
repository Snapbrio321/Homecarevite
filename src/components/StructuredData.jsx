import React from 'react'

const structuredData = [
  // ── 1. Local Medical Business ──
  {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": "https://homecarevite.vercel.app/#business",
    "name": "Home Care Vite",
    "alternateName": "HomeCareVite",
    "description": "Home Care Vite provides certified, compassionate home nursing services in Visakhapatnam including post-surgery care, elderly care, cardiac monitoring, wound care, medication management, palliative care, physiotherapy, and mother & baby care.",
    "url": "https://homecarevite.vercel.app/",
    "logo": "https://homecarevite.vercel.app/logo.jpeg",
    "image": "https://homecarevite.vercel.app/og-image.jpg",
    "telephone": "+919110581825",
    "email": "homecarevite@gmail.com",
    "foundingDate": "2023",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer, Credit Card, Debit Card",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN",
      "postalCode": "530001"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.6868",
      "longitude": "83.2185"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Visakhapatnam",
        "sameAs": "https://en.wikipedia.org/wiki/Visakhapatnam"
      },
      { "@type": "City", "name": "Vizag" },
      { "@type": "City", "name": "Gajuwaka" },
      { "@type": "City", "name": "Rushikonda" },
      { "@type": "City", "name": "MVP Colony" },
      { "@type": "City", "name": "Dwaraka Nagar" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "hasMap": "https://maps.google.com/?q=Visakhapatnam,Andhra+Pradesh",
    "sameAs": [
      "https://github.com/Snapbrio321/Homecarevite"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "412",
      "bestRating": "5",
      "worstRating": "1"
    },
    "medicalSpecialty": [
      "Nursing",
      "Post-Surgical Care",
      "Geriatrics",
      "Cardiology",
      "Wound Care",
      "Palliative Care",
      "Physical Therapy"
    ]
  },

  // ── 2. Services offered ──
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Nursing Services",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://homecarevite.vercel.app/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Visakhapatnam"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Nursing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-Surgery Care", "description": "Expert wound care, medication management, and rehabilitation support after surgical procedures at home." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elderly Care", "description": "Compassionate daily assistance for seniors including personal hygiene, mobility support, and chronic disease management." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cardiac Care", "description": "Ongoing monitoring for heart patients including vital signs tracking and medication adherence." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wound Care", "description": "Professional sterile dressing changes, wound assessment, and infection prevention." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medication Management", "description": "Safe administration and monitoring of prescribed medications ensuring correct dosage and timing." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Palliative Care", "description": "Sensitive dignity-centred care focused on comfort and quality of life during serious illness." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Physiotherapy", "description": "In-home physiotherapy sessions to restore mobility and rebuild strength after injury or surgery." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mother and Baby Care", "description": "Dedicated postnatal nursing for new mothers and newborns including lactation support and newborn health checks." } }
      ]
    }
  },

  // ── 3. FAQ Page ──
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What home nursing services does Home Care Vite provide in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Home Care Vite provides post-surgery care, elderly care, cardiac monitoring, wound care, medication management, palliative care, physiotherapy, and mother & baby postnatal care — all delivered at your home in Visakhapatnam."
        }
      },
      {
        "@type": "Question",
        "name": "Are your nurses licensed and certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every nurse at Home Care Vite holds a valid RN, LPN, or CNA licence, undergoes thorough background verification, and is trained to our clinical care standards before being assigned to patients."
        }
      },
      {
        "@type": "Question",
        "name": "Is home nursing care available 24 hours in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Home Care Vite is available 24 hours a day, 7 days a week including public holidays. You can reach us at any time by calling +91 91105 81825."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a home nurse in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a home nurse by calling us at +91 91105 81825, filling out the online request form on our website, or emailing homecarevite@gmail.com. A care coordinator will contact you within one hour."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of home nursing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on the type of service and duration of care. Home Care Vite offers transparent pricing with no hidden fees. Contact us for a free assessment and personalised quote."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas of Visakhapatnam do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all areas of Greater Visakhapatnam including MVP Colony, Dwaraka Nagar, Gajuwaka, Rushikonda, Madhurawada, Seethammadhara, Siripuram, and surrounding localities."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-surgery home care after hospital discharge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our post-surgery care service includes wound dressing, pain management, medication administration, mobility rehabilitation, and coordination with your treating physician during your recovery at home."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a free consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Home Care Vite offers a free home assessment with no commitment required. A care coordinator visits your home, assesses the patient's needs, and creates a personalised care plan."
        }
      }
    ]
  },

  // ── 4. Website / WebPage ──
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://homecarevite.vercel.app/#website",
    "url": "https://homecarevite.vercel.app/",
    "name": "Home Care Vite",
    "description": "Professional home nursing services in Visakhapatnam, Andhra Pradesh",
    "publisher": {
      "@type": "Organization",
      "@id": "https://homecarevite.vercel.app/#business"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://homecarevite.vercel.app/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },

  // ── 5. BreadcrumbList ──
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homecarevite.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://homecarevite.vercel.app/#services" },
      { "@type": "ListItem", "position": 3, "name": "About Us", "item": "https://homecarevite.vercel.app/#about" },
      { "@type": "ListItem", "position": 4, "name": "Contact", "item": "https://homecarevite.vercel.app/#contact" }
    ]
  }
]

export default function StructuredData() {
  return (
    <>
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
