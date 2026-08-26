import { Metadata } from "next";
import TipisClient from "./tipis-client";

export const metadata: Metadata = {
  title: "Luxury Canvas Tipi Stays in Wayanad — Tribe Glamping | AVASA Nature",
  description: "Experience premium canvas tipi stays in Wayanad, Kerala. Sleep in cotton-canvas tipis centered around a communal campfire circle in nature.",
};

export default function Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Canvas Tipi Stay Wayanad",
    "image": "https://avasaexperiences.com/assets/images/habitat_hero.webp",
    "description": "Traditional cotton-canvas tipi stays centered around a communal campfire circle under the stars in Wayanad, Kerala.",
    "brand": {
      "@type": "Brand",
      "name": "AVASA Nature"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://avasaexperiences.com/habitat/tipis",
      "priceCurrency": "INR",
      "price": "3500",
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
        "name": "How do tipis handle rain and monsoon weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tipis are constructed with steep-sloped walls that easily shed heavy monsoon rains, and are fitted with double-layered marine-grade ground flaps sealed at the base to keep interiors completely dry."
        }
      },
      {
        "@type": "Question",
        "name": "Are the tipis hot or stuffy during the day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, natural cotton-canvas is highly breathable. The tipi design includes adjustable top smoke flaps and bottom vents, creating a natural chimney effect that constantly cycles cool air."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to have an open fire inside the tipi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For safety reasons, open fires are strictly prohibited inside the tipis. However, each tipi has direct access to our central, guided communal campfire circle located safely just steps away."
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
      <TipisClient />
    </>
  );
}
