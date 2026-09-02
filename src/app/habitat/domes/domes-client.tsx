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

const EyeIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  </span>
);

const SparklesIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
    </svg>
  </span>
);

const HomeIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
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
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Stay Type</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Geodesic Glamping Dome</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Capacity</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Up to 2 Adults</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Pricing Signal</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>From ₹5,500 / night</strong>
            </div>
          </div>

          <div style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(14, 67, 60, 0.85)" }}>
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
            We merge wilderness adventure with soft organic stays, using low-impact structures that respect tree growth.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link href="/habitat" style={{ color: "var(--navy)", textDecoration: "underline", display: "block", marginBottom: "12px" }}>&larr; Back to stays main overview</Link>
            <Link href="/habitat/tipis" style={{ color: "var(--navy)", textDecoration: "underline", display: "block" }}>Explore Nordic Tipis &rarr;</Link>
          </div>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Insulated Geodesic Framework</h3>
              <p>Constructed with galvanized steel triangular struts and multi-layer thermal insulation to maintain a comfortable temperature year-round.</p>
            </div>
            
            <div className="offer-item">
              <h3>Panoramic Bay Window</h3>
              <p>A massive curved front viewing panel offering uninterrupted 180-degree sightlines into the misty rainforest canopy and star-filled skies.</p>
            </div>

            <div className="offer-item">
              <h3>En-Suite Eco Bathroom</h3>
              <p>Private attached washroom with solar-heated shower, ceramic plumbing fixtures, and locally-sourced organic toiletries.</p>
            </div>

            <div className="offer-item">
              <h3>Private Cantilever Deck</h3>
              <p>Step out onto a teak-finished deck with lounge chairs and coffee table, floating out over the sloped terrain for supreme privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & What's Included */}
      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Stay Amenities &amp; Guidelines</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            <div style={{ background: "rgba(14, 67, 60, 0.04)", padding: "30px", borderRadius: "6px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "var(--navy)" }}>Included with Your Stay</h3>
              <ul style={{ paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.8", color: "rgba(14, 67, 60, 0.85)" }}>
                <li>King-size luxury bed &amp; premium linens</li>
                <li>Full-board farm-fresh Kerala dining</li>
                <li>Private en-suite with hot water &amp; toiletries</li>
                <li>High-speed Wi-Fi and USB power docks</li>
                <li>Guided morning nature walk and evening campfire</li>
              </ul>
            </div>
            <div style={{ background: "rgba(14, 67, 60, 0.04)", padding: "30px", borderRadius: "6px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "var(--navy)" }}>Good to Know</h3>
              <ul style={{ paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.8", color: "rgba(14, 67, 60, 0.85)" }}>
                <li>Check-in: 2:00 PM / Check-out: 11:00 AM</li>
                <li>Maximum occupancy: 2 adults + 1 child</li>
                <li>100% solar and silent battery backup</li>
                <li>Curtains provided for complete window privacy</li>
                <li>No loud music permitted after 10:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Dome Living in Wayanad</h2>
        <div className="gallery-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-img">
                <img 
                  src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=600&q=80`} 
                  alt={`Geodesic dome glamping Kerala luxury stay — ${photo.title}`} 
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

      {/* Safety & Rigging */}
      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">Safety &amp; Architecture</span>
          <h2 style={{ color: "var(--sand)" }}>Engineered for Total Comfort</h2>
          <p style={{ color: "rgba(245, 238, 226, 0.75)" }}>
            Our geodesic domes are engineered to withstand the extreme monsoon conditions of the Western Ghats while leaving zero permanent footprint on the soil. Read more in <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>our safety policies</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(245, 238, 226, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="safety-coda-item">
              <HomeIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Steel Geodesic Lattice</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>The triangular truss design distributes wind and rain loads uniformly, creating unmatched structural stability.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <EyeIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>UV-Treated Membrane</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>Flame-retardant, anti-mildew, and UV-stabilized PVC outer covers keep the interior dry and fresh year-round.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <SparklesIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Elevated Post Foundations</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>Decks sit on localized post piers, allowing natural rainwater runoff and animal pathways underneath.</p>
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
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
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
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
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
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
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
