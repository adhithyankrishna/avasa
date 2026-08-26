"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

const BoltIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83m-3.75 3.75l-3.75-3.75L3 13.5l6.75 6.75 3.75-3.75zm0 0l-3.75-3.75m3.75 3.75l3.75-3.75M9 10.5l-3.75-3.75L3 6.75l6.75 6.75 3.75-3.75z" />
    </svg>
  </span>
);

const SunIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  </span>
);

const ShieldIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  </span>
);

const GALLERY_PHOTOS = [
  { id: "photo-1526491109672-74740652b963", title: "Dome Interior Design", desc: "Warm lighting and luxury organic linens inside the geodesic dome." },
  { id: "photo-1470770841072-f978cf4d019e", title: "Sunset Viewing Deck", desc: "Private wooden deck overlooking Wayanad's rainforest canopy." },
  { id: "photo-1510312305653-8ed496efae75", title: "Evening Fire Circle", desc: "Silent nights by the crackling central fire hearth." },
  { id: "photo-1519681393784-d120267933ba", title: "Wilderness View", desc: "A view of mountain mist directly through the clear glass window." }
];

export default function DomesClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsapLib.context(() => {
      // Breath scale hero bg
      gsapLib.fromTo(".sub-hero .bg",
        { scale: 1.0 },
        { scale: 1.05, duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut" }
      );

      gsapLib.fromTo(".sub-hero h1",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1 }
      );

      gsapLib.fromTo(".sub-intro p",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sub-intro",
            start: "top 80%"
          }
        }
      );

      document.querySelectorAll(".gallery-card").forEach((card) => {
        gsapLib.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      const safetyCodaItems = document.querySelectorAll(".safety-coda-item");
      if (safetyCodaItems.length > 0) {
        gsapLib.fromTo(safetyCodaItems,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".safety-coda-item",
              start: "top 90%"
            }
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const openEnquiry = () => {
    const event = new CustomEvent("open-enquiry-drawer", {
      detail: { interest: "Geodesic Dome Stay", step: 2 }
    });
    window.dispatchEvent(event);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="subpage-view">
      {/* Cinematic Hero */}
      <section className="sub-hero">
        <div 
          className="bg" 
          style={{ 
            backgroundImage: "url('/assets/images/glowing_dome_tent.webp')",
            filter: "contrast(1.1) brightness(0.85)"
          }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Premium Glamping Stays</span>
          <h1>Luxury Geodesic Dome Stays in Wayanad &mdash; Panoramic Forest Glamping</h1>
        </div>
      </section>

      {/* Intro section */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
            Experience 360-degree nature views in absolute comfort. Sleep in an insulated geodesic glass-front dome stay perched on elevated wooden decks in Wayanad, Kerala.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", margin: "40px 0", textAlign: "center" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Stay Type</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Geodesic Glamping Dome</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Capacity</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Up to 2 Adults</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Pricing Signal</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>From ₹5,500 / night</strong>
            </div>
          </div>

          <div style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(18, 35, 63, 0.85)" }}>
            <p style={{ marginBottom: "20px" }}>
              Our luxury geodesic domes represent the pinnacle of eco-tourism architecture. Nestled securely in private pockets of the Wayanad rainforest, these structures offer an insulated double-walled microclimate. The large, transparent bay window gives you a front-row view of the forest floor, valleys, and early morning mist rolls.
            </p>
            <p>
              Each dome features premium king beds, custom lighting, attached washrooms, and solar exhaustion units. Cozy up on the private wooden deck with hot coffee, or head down to the shared base lodge. It's structural architecture meets untouched wilderness.
            </p>
          </div>
        </div>
      </section>

      {/* Details & What's Included */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>The Stay in Detail</h2>
          <p>
            An architectural masterpiece designed to sit lightly on the earth while providing elite insulation and security.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link href="/habitat" style={{ color: "var(--gold)", textDecoration: "underline", display: "block", marginBottom: "12px" }}>&larr; Back to stays main overview</Link>
            <Link href="/habitat/tree-tents" style={{ color: "var(--gold)", textDecoration: "underline", display: "block" }}>Check out suspended tree tents &rarr;</Link>
          </div>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Geodesic Frame &amp; Foundation</h3>
              <p>Constructed with interlocked structural steel tubing and anchored on elevated heavy timber piling, ensuring absolute stability against high winds and ground moisture.</p>
            </div>
            
            <div className="offer-item">
              <h3>Climate Control &amp; Insulation</h3>
              <p>Fitted with specialized multi-layered thermo-insulation shells, silent cooling units, and solar ventilation systems to keep inside fresh and comfortable.</p>
            </div>

            <div className="offer-item">
              <h3>Attached Luxury Bathroom</h3>
              <p>Features an en-suite eco-bathroom with running hot water, low-flush systems, premium towels, and organic bath amenities.</p>
            </div>

            <div className="offer-item">
              <h3>Blackout curtain privacy</h3>
              <p>Designed with high-density blackout curtains mapped precisely to the dome front window structure, letting you choose between panoramic wilderness or full privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Caught in the Dome</h2>
        <div className="gallery-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-img">
                <img 
                  src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=600&q=80`} 
                  alt={`Geodesic dome stay Wayanad glamping experience — ${photo.title}`} 
                />
              </div>
              <div className="gallery-info">
                <h4>{photo.title}</h4>
                <p>{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Engineering */}
      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">Safety Framework</span>
          <h2 style={{ color: "var(--sand)" }}>Wind-Load Engineering</h2>
          <p style={{ color: "rgba(237, 232, 220, 0.75)" }}>
            Our geodesic domes are engineered to distribute external wind loads evenly across the geometric shell structure, providing the safest architectural stay available in the Ghats. Read more in <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>our safety policies</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(237, 232, 220, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="safety-coda-item">
              <BoltIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>High wind-load ratings</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>The interlinked triangles distribute stress evenly, rated to easily withstand heavy monsoon winds up to 120 km/h.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <SunIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Solar exhaust ventilation</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Fitted with automated smart vents that circulate air constantly, preventing humidity build-up and condensation inside the shell.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <ShieldIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Robust Piled Anchoring</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Anchored on deep concrete piles and structural steel pillars to prevent slide risks during Western Ghats monsoons.</p>
              </div>
            </li>
          </div>
        </div>
      </section>

      {/* Specific FAQ Accordion Section */}
      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "var(--navy)" }}>Geodesic Domes FAQs</h2>
        <div className="faq-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className={`faq-item ${openFaqIndex === 0 ? "open" : ""}`} onClick={() => toggleFaq(0)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Are the geodesic domes air-conditioned and climate-controlled?</span>
              <span className="faq-plus">{openFaqIndex === 0 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 0 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Yes, our luxury geodesic domes feature full insulation layers, solar-powered exhaust vents, and silent climate control systems to stay cool during the day and warm at night.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 1 ? "open" : ""}`} onClick={() => toggleFaq(1)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>What private facilities are included in the dome stays?</span>
              <span className="faq-plus">{openFaqIndex === 1 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 1 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Every dome features an attached, private en-suite bathroom with eco-friendly hot showers, organic toiletries, a private viewing deck, and premium coffee setups.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 2 ? "open" : ""}`} onClick={() => toggleFaq(2)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Are geodesic domes safe during the heavy Kerala monsoon?</span>
              <span className="faq-plus">{openFaqIndex === 2 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 2 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Yes, the geodesic shape is structurally the most robust shape for high winds, and our domes are built using marine-grade PVC shells and steel frames anchored on heavy piling.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('/assets/images/glowing_dome_tent.webp')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Experience panoramic nature luxury.</h2>
          <button onClick={openEnquiry}>Book Dome Stay</button>
        </div>
      </section>
    </div>
  );
}
