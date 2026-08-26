import { Metadata } from "next";
import ZiplineClient from "./zipline-client";

export const metadata: Metadata = {
  title: "Eagle's Flight Zipline — Wayanad's Longest Canopy Zipline | AVASA Nature",
  description: "Fly high on Eagle's Flight, India's longest canopy zipline in Wayanad, Kerala. Experience double-redundant certified safety lines and professional guides.",
};

export default function Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Eagle's Flight Zipline Wayanad",
    "image": "https://avasaexperiences.com/assets/images/adventure_hero.webp",
    "description": "Eagle's Flight is one of the longest canopy ziplines in India, flying high above the rainforest canopy in Wayanad, Kerala.",
    "brand": {
      "@type": "Brand",
      "name": "AVASA Nature"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://avasaexperiences.com/adventure/eagles-flight-zipline",
      "priceCurrency": "INR",
      "price": "1200",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long is the Eagle's Flight zipline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eagle's Flight is India's longest canopy zipline, stretching over 450 meters across the lush rainforest canopy of Wayanad."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a weight or age limit for ziplining?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum age is 8 years, and the weight limit is between 35 kg and 110 kg for safety reasons."
        }
      },
      {
        "@type": "Question",
        "name": "What safety certifications do you have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use double-redundant steel cables, Petzl pulleys, and high-altitude climbing harnesses checked daily by certified guides."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ZiplineClient />
    </>
  );
}
