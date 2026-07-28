import { Metadata } from "next";
import HomepageClient from "./home-client";

export const metadata: Metadata = {
  title: "AVASA Nature — Experiences & Beyond",
  description: "Adventure, glamping stays, and outdoor learning across Kerala. Zipline, kayak, and sleep among the treetops with AVASA Nature.",
};

export default function Page() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomepageClient />
    </>
  );
}
