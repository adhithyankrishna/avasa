"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

const CampfireIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
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
  { id: "photo-1504280390367-361c6d9f38f4", title: "Tipi Tribe Sunset", desc: "Canvas tipis casting long silhouettes at sunset in Wayanad." },
  { id: "photo-1478131148053-7667689d3112", title: "Cozy Tipi Interiors", desc: "Premium rugs, low cushions, and insulated layout inside the tipi." },
  { id: "photo-1510312305653-8ed496efae75", title: "Fireside Stargazing", desc: "Communal hearth circle centered directly between the tipis." },
  { id: "photo-1519681393784-d120267933ba", title: "Starry Night Sky", desc: "A view of clear constellations hovering over the canvas camp." }
];

export default function TipisClient() {
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
      detail: { interest: "Tipi Tribe Stay", step: 2 }
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
            backgroundImage: "url('/assets/images/misty_tea_hills.webp')",
            filter: "contrast(1.1) brightness(0.8)"
          }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Tribe Glamping Stays</span>
          <h1>Luxury Canvas Tipi Stays in Wayanad &mdash; Traditional Glamping Tribe</h1>
        </div>
      </section>

      {/* Intro section */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
            Gather around the embers under Wayanad's stars. Sleep in premium cotton-canvas tipis centered around a communal campfire circle in Wayanad, Kerala.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", margin: "40px 0", textAlign: "center" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Stay Type</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Canvas Tipi Stay</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Capacity</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Up to 4 Adults</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Pricing Signal</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>From ₹3,500 / night</strong>
            </div>
          </div>

          <div style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(14, 67, 60, 0.85)" }}>
            <p style={{ marginBottom: "20px" }}>
              Our tipi stay villages (known as the Tipi Tribe) are arranged in a circular format, fostering a sense of shared community and connection. Built using heavy local timber poles and thick, fire-retardant cotton canvas, these structures are rugged yet extremely inviting. 
            </p>
            <p>
              Decorated with warm hand-woven rugs, low bolsters, and organic sleeping platforms, the tipi interiors reflect a rustic, cozy charm. Step outside to join the central campfire circle, where acoustic music, storytelling, and local hot dinner are served daily under the clear night sky.
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
            <Link href="/habitat/tree-tents" style={{ color: "var(--navy)", textDecoration: "underline", display: "block" }}>Explore Suspended Tree Tents &rarr;</Link>
          </div>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Traditional Pole-Supported Geometry</h3>
              <p>Crafted using sustainable eucalyptus timber poles and heavy-duty 450 GSM canvas for high durability and natural charm.</p>
            </div>
            
            <div className="offer-item">
              <h3>Central Hearth Community</h3>
              <p>Arranged around an open-air central stone campfire with log seating, acoustic music nodes, and stargazing platforms.</p>
            </div>

            <div className="offer-item">
              <h3>Custom Interior Furnishings</h3>
              <p>Fitted with hand-knotted dhurries, low wooden bedding platforms, organic cotton bolsters, and ambient copper hurricane lamps.</p>
            </div>

            <div className="offer-item">
              <h3>Base Camp Lodge Support</h3>
              <p>Full access to clean eco-showers, luggage lockers, device charging stations, and hot local buffet meals.</p>
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
                <li>Comfortable bedding platforms with organic cotton linens</li>
                <li>Traditional Kerala home-style dinner and breakfast</li>
                <li>Night campfire gathering with hot spiced tea</li>
                <li>Modern eco-washrooms with hot water facilities</li>
                <li>Resident campsite host and overnight security</li>
              </ul>
            </div>
            <div style={{ background: "rgba(14, 67, 60, 0.04)", padding: "30px", borderRadius: "6px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "var(--navy)" }}>Good to Know</h3>
              <ul style={{ paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.8", color: "rgba(14, 67, 60, 0.85)" }}>
                <li>Check-in: 2:00 PM / Check-out: 11:00 AM</li>
                <li>Capacity: Up to 4 adults per tipi unit</li>
                <li>Natural ventilation with top draft smoke flaps</li>
                <li>Lanterns provided; power outlets available in base lodge</li>
                <li>Open flame strictly prohibited inside sleeping tipis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Tipi Tribe Moments</h2>
        <div className="gallery-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-img">
                <img 
                  src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=600&q=80`} 
                  alt={`Tipi glamping Wayanad campfire stay experience — ${photo.title}`} 
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
          <span className="eyebrow">Safety Framework</span>
          <h2 style={{ color: "var(--sand)" }}>Crafted for Natural Safety</h2>
          <p style={{ color: "rgba(245, 238, 226, 0.75)" }}>
            Our tipis use fire-retardant treated canvas and deep earth anchors, creating a safe, weather-sealed sanctuary. Read more in <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>our safety policies</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(245, 238, 226, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="safety-coda-item">
              <ShieldIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Fire-Treated Canvas Shells</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>Every canvas panel is treated with non-toxic, eco-friendly fire-retardant solution tested to high safety norms.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <CheckCircleIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Deep Earth Pegging</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>Heavy steel stakes driven 45cm into dense ground securely anchor all guy-lines against monsoon gusts.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <SparklesIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Natural Draft Ventilation</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>Vented top cowls continuously exhaust warm air, maintaining optimal oxygen flow and zero stuffiness.</p>
              </div>
            </li>
          </div>
        </div>
      </section>

      {/* Specific FAQ Accordion Section */}
      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "var(--navy)" }}>Canvas Tipis FAQs</h2>
        <div className="faq-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className={`faq-item ${openFaqIndex === 0 ? "open" : ""}`} onClick={() => toggleFaq(0)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>How do tipis handle rain and monsoon weather?</span>
              <span className="faq-plus">{openFaqIndex === 0 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 0 && (
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
                Our tipis are constructed with steep-sloped walls that easily shed heavy monsoon rains, and are fitted with double-layered marine-grade ground flaps sealed at the base to keep interiors completely dry.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 1 ? "open" : ""}`} onClick={() => toggleFaq(1)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Are the tipis hot or stuffy during the day?</span>
              <span className="faq-plus">{openFaqIndex === 1 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 1 && (
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
                No, natural cotton-canvas is highly breathable. The tipi design includes adjustable top smoke flaps and bottom vents, creating a natural chimney effect that constantly cycles cool air.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 2 ? "open" : ""}`} onClick={() => toggleFaq(2)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Is it safe to have an open fire inside the tipi?</span>
              <span className="faq-plus">{openFaqIndex === 2 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 2 && (
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
                For safety reasons, open fires are strictly prohibited inside the tipis. However, each tipi has direct access to our central, guided communal campfire circle located safely just steps away.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('/assets/images/misty_tea_hills.webp')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Reconnect around the fireside.</h2>
          <button onClick={openEnquiry}>Book Tipi Stay</button>
        </div>
      </section>
    </div>
  );
}
