import { Metadata } from "next";
import TentsClient from "./tents-client";

export const metadata: Metadata = {
  title: "Luxury Tree Tent Stays in Wayanad — Suspended Glamping | AVASA Nature",
  description: "Experience premium tree tent stays in Wayanad, Kerala. Sleep suspended in the rainforest canopy with tree-safe rigging and cozy glamping amenities.",
};

export default function Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Tree Tent Stay Wayanad",
    "image": "https://avasaexperiences.com/assets/images/habitat_hero.webp",
    "description": "Suspended tree tent stay floating between old-growth trees in the Wayanad rainforest canopy, offering a unique low-impact glamping stay.",
    "brand": {
      "@type": "Brand",
      "name": "AVASA Nature"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://avasaexperiences.com/habitat/tree-tents",
      "priceCurrency": "INR",
      "price": "2500",
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
        "name": "How do guests enter and exit the suspended tree tents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tents are equipped with roll-up floor hatches and drop-down safety web ladders or custom steps. Guests can climb in and out easily and safely."
        }
      },
      {
        "@type": "Question",
        "name": "Are tree tents stable and safe during high winds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our tree tents are tensioned using high-strength industrial ratchets and tree-protection webbing to three separate anchors, keeping it level and stable."
        }
      },
      {
        "@type": "Question",
        "name": "Do tree tents protect against rain and insects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the tents feature a heavy-duty insect mesh inner layer and an overlapping waterproof double-layered rainfly that keeps you completely dry during Wayanad's showers."
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
      <TentsClient />
    </>
  );
}
