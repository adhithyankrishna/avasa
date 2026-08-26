import { Metadata } from "next";
import DomesClient from "./domes-client";

export const metadata: Metadata = {
  title: "Luxury Geodesic Dome Stays in Wayanad — Panoramic Glamping | AVASA Nature",
  description: "Book premium geodesic dome stays in Wayanad, Kerala. Sleep in insulated luxury glass-front domes on elevated decks with private washrooms.",
};

export default function Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Geodesic Dome Stay Wayanad",
    "image": "https://avasaexperiences.com/assets/images/glowing_dome_tent.webp",
    "description": "Premium geodesic dome glamping stays with insulated walls, panoramic forest windows, private washroom, and sunrise decks in Wayanad, Kerala.",
    "brand": {
      "@type": "Brand",
      "name": "AVASA Nature"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://avasaexperiences.com/habitat/domes",
      "priceCurrency": "INR",
      "price": "5500",
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
        "name": "Are the geodesic domes air-conditioned and climate-controlled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our luxury geodesic domes feature full insulation layers, solar-powered exhaust vents, and silent climate control systems to stay cool during the day and warm at night."
        }
      },
      {
        "@type": "Question",
        "name": "What private facilities are included in the dome stays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every dome features an attached, private en-suite bathroom with eco-friendly hot showers, organic toiletries, a private viewing deck, and premium coffee setups."
        }
      },
      {
        "@type": "Question",
        "name": "Are geodesic domes safe during the heavy Kerala monsoon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the geodesic shape is structurally the most robust shape for high winds, and our domes are built using marine-grade PVC shells and steel frames anchored on heavy piling."
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
      <DomesClient />
    </>
  );
}
