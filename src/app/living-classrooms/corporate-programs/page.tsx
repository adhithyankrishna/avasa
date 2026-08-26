import { Metadata } from "next";
import CorporateClient from "./corporate-client";

export const metadata: Metadata = {
  title: "Corporate Team Building & Wilderness Offsites in Wayanad | AVASA Nature",
  description: "Plan your next corporate team building offsite in Wayanad, Kerala. We design customized wilderness challenges, high-ropes, and glamping team retreats.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Team Building & Outdoor Offsites",
    "image": "https://avasaexperiences.com/assets/images/living_classrooms_hero.webp",
    "description": "Premium corporate offsites, experiential team building challenges, wilderness survival, and leadership retreats in Wayanad, Kerala.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AVASA Nature",
      "telephone": "+91-6235-800-111",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wayanad, Kerala, India"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "3000"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What corporate group sizes can AVASA accommodate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cater to corporate groups ranging from 15 to 100 participants, offering full-board stays, custom conference nodes, and coordinated activities."
        }
      },
      {
        "@type": "Question",
        "name": "What team-building activities do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our activities include forest ropes grids, swiftwater kayaking, bamboo raft-building, wilderness navigation, survival bushcraft, and campfire leadership reflection sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Can the program agendas be customized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all programs are customized. We adjust difficulty grades, activity lists, stay setups (domes, tents, tipis), and local menu designs to fit your corporate goals."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CorporateClient />
    </>
  );
}
