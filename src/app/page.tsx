import { Metadata } from "next";
import HomepageClient from "./home-client";

export const metadata: Metadata = {
  title: "AVASA Nature | Premium Glamping & Adventure Experiences in Kerala",
  description: "Premium glamping stays, India's longest zipline, and adventure camps in Wayanad, Kerala. Book tree tents, domes, and outdoor learning trips.",
};

export default function Page() {
  const resortSchema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": "AVASA Nature",
    "description": "Premium glamping stays, India's longest zipline, and adventure camps in Wayanad, Kerala. Sleep in luxury tree tents, geodesic domes, and safari-style tipis.",
    "telephone": "+91-6235-800-111",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wayanad, Kerala, India",
      "addressLocality": "Wayanad",
      "addressRegion": "Kerala",
      "postalCode": "673121",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.6854,
      "longitude": 76.1320
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/avasa.experiences/",
      "https://www.instagram.com/eagles__flight/",
      "https://www.instagram.com/tipitribe/",
      "https://www.instagram.com/stingraytribe/"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the activity or program safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every activity uses certified safety gear, and every session is led by a trained guide. See everything we do to keep you safe."
        }
      },
      {
        "@type": "Question",
        "name": "Can the experience be customized for our group, school, or company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — program agendas, location trails, group sizes, difficulty levels, and stay setups can be fully customized to meet your goals and budget."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum age or fitness requirement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Requirements vary by activity — our booking team will recommend the right stay or adventure grade once we know your group's details."
        }
      },
      {
        "@type": "Question",
        "name": "Do you conduct programs at our school or location?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — Living Classrooms programs can be delivered directly on-campus, or as off-site expeditions at an AVASA wilderness destination."
        }
      },
      {
        "@type": "Question",
        "name": "What are the available dates and destinations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Experiences and stays run across Wayanad, Munnar, and Chaliyar. Infrastructure design and installation are delivered all across India."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resortSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomepageClient />
    </>
  );
}
