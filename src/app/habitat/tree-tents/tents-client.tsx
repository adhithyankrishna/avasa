"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

const RopeIcon = ({ style }: { style?: React.CSSProperties }) => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={style || { width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  </span>
);

const ShieldIcon = ({ style }: { style?: React.CSSProperties }) => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={style || { width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  </span>
);

const TreeIcon = ({ style }: { style?: React.CSSProperties }) => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={style || { width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18L6.75 8.25M12 3l5.25 5.25M12 21l-4-4m4 4l4-4" />
    </svg>
  </span>
);

const SparklesIcon = ({ style }: { style?: React.CSSProperties }) => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={style || { width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
    </svg>
  </span>
);

const CheckCircleIcon = ({ style }: { style?: React.CSSProperties }) => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={style || { width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  </span>
);

const GALLERY_PHOTOS = [
  { id: "photo-1520250497591-112f2f40a3f4", title: "Canopy Hammock", desc: "Suspended tree tent floating high above the forest floor." },
  { id: "photo-1513694203232-719a280e022f", title: "Tent Interiors", desc: "Climbing-grade double tension floor with sleeping pads." },
  { id: "photo-1510312305653-8ed496efae75", title: "Fireside Stories", desc: "Gathering at the communal hearth down below at night." },
  { id: "photo-1519681393784-d120267933ba", title: "Under the Stars", desc: "A view of the clear night sky through the tree tent mesh." }
];

export default function TentsClient() {
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
      detail: { interest: "Tree Tent Stay", step: 2 }
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
            backgroundImage: "url('/assets/images/habitat_hero.webp')",
            filter: "contrast(1.1) brightness(0.85)"
          }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Luxury Nature Stays</span>
          <h1>Luxury Tree Tent Stays in Wayanad &mdash; Suspended Glamping</h1>
        </div>
      </section>

      {/* Intro section */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
            Sleep suspended in the treetops of Wayanad, Kerala. Experience the world's most unique glamping concept, combining climbing-grade safety rigging with cozy forest comfort.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", margin: "40px 0", textAlign: "center" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Stay Type</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Suspended Tree Tent</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Capacity</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Up to 3 Adults</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(14, 67, 60, 0.12)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--teal)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 600 }}>Pricing Signal</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>From ₹2,500 / night</strong>
            </div>
          </div>

          <div style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(14, 67, 60, 0.85)" }}>
            <p style={{ marginBottom: "20px" }}>
              Our luxury tree tents (modeled on Stingray tensile systems) are rigged between three strong, old-growth forest trunks, floating gracefully above the lush rainforest floor of Wayanad, Kerala. Here, the floor is literally a soft, tensioned trampoline structure that supports you perfectly while giving you the sensation of weightless floating.
            </p>
            <p>
              Listen to the midnight chirping of crickets, feel the gentle morning breeze sway your tent, and wake up directly inside the green canopy level. Every stay includes complete base camp support, fresh organic meals cooked by locals, and outdoor campfire access. It is the ultimate low-impact, ecologically responsible stay designed to bring you closer to nature.
            </p>
          </div>
        </div>
      </section>

      <section className="pinned-split">
        <div className="pinned-left">
          <h2>The Stay in Detail</h2>
          <p>
            We merge wilderness adventure with soft organic stays, using low-impact structures that respect tree growth.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link href="/habitat" style={{ color: "var(--navy)", textDecoration: "underline", display: "block", marginBottom: "12px" }}>&larr; Back to Habitat main</Link>
            <Link href="/habitat/domes" style={{ color: "var(--navy)", textDecoration: "underline", display: "block" }}>Explore Geodesic Domes &rarr;</Link>
          </div>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Triple-Point Tensile Suspension</h3>
              <p>Engineered using tree-wrap straps and high-load ratchets to suspend the tent securely without piercing or damaging the tree bark.</p>
            </div>
            
            <div className="offer-item">
              <h3>360-Degree Canopy Views</h3>
              <p>Unobstructed panoramic forest vistas from canopy height, with rollable rainfly flaps and insect-proof micro-mesh panels.</p>
            </div>

            <div className="offer-item">
              <h3>Private Ground Lounge &amp; Firepit</h3>
              <p>Each tree tent site includes a private forest floor clearing with outdoor seating, a hammock deck, and a dedicated campfire ring.</p>
            </div>

            <div className="offer-item">
              <h3>Base Camp Amenities</h3>
              <p>Access to modern eco-washrooms with hot water, charging lockers, luggage storage, and our organic farm dining pavilion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Stay Amenities &amp; Guidelines</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            <div style={{ background: "rgba(14, 67, 60, 0.04)", padding: "30px", borderRadius: "6px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "var(--navy)" }}>Included with Your Stay</h3>
              <ul style={{ paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.8", color: "rgba(14, 67, 60, 0.85)" }}>
                <li>Sleeping mats, thermal sleeping bags &amp; pillows</li>
                <li>Traditional Kerala breakfast &amp; dinner buffet</li>
                <li>Evening campfire &amp; guided night forest walk</li>
                <li>Eco-washroom access with hot showers</li>
                <li>Dedicated site caretaker &amp; safety briefing</li>
              </ul>
            </div>
            <div style={{ background: "rgba(14, 67, 60, 0.04)", padding: "30px", borderRadius: "6px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "var(--navy)" }}>Good to Know</h3>
              <ul style={{ paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.8", color: "rgba(14, 67, 60, 0.85)" }}>
                <li>Check-in: 2:00 PM / Check-out: 11:00 AM</li>
                <li>Weight limit: 400 kg combined capacity</li>
                <li>Access via webbing rope ladder with safety assist</li>
                <li>Carry headlamp, warm layers &amp; power bank</li>
                <li>Alcohol &amp; smoking prohibited in tents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Canopy Living Moments</h2>
        <div className="gallery-grid">
          <div className="gallery-card visible">
            <div className="gallery-img">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80" alt="Tree tent suspension in forest" />
            </div>
            <div className="gallery-info">
              <h4>Suspended Serenity</h4>
              <p>Wake up floating among morning mist and forest birds.</p>
            </div>
          </div>
          <div className="gallery-card visible">
            <div className="gallery-img">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Canopy foliage and tree trunks" />
            </div>
            <div className="gallery-info">
              <h4>Ancient Forest Setting</h4>
              <p>Rigged only on certified, healthy mature trees.</p>
            </div>
          </div>
          <div className="gallery-card visible">
            <div className="gallery-img">
              <img src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80" alt="Evening glamping campfire" />
            </div>
            <div className="gallery-info">
              <h4>Campfire Evenings</h4>
              <p>Gather around the warm hearth under clear night skies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">Safety &amp; Rigging</span>
          <h2 style={{ color: "var(--sand)" }}>Engineered for Total Trust</h2>
          <p style={{ color: "rgba(245, 238, 226, 0.75)" }}>
            Every tree tent installation is planned by certified arborists and rigged using CE-rated climbing gear. We test tension points before every check-in. Read more in <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>our safety policies</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(245, 238, 226, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="safety-coda-item">
              <ShieldIcon style={{ width: "24px", height: "24px", color: "var(--gold)" }} />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Certified Tree Selection</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>Every tree is surveyed by arborists for trunk diameter, root health, and load-bearing strength.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <SparklesIcon style={{ width: "24px", height: "24px", color: "var(--gold)" }} />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Tree-Protection Webbing</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>Wide protective pads distribute load evenly across bark, leaving zero scars on living trees.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <CheckCircleIcon style={{ width: "24px", height: "24px", color: "var(--gold)" }} />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Daily Tension Audits</h3>
                <p style={{ color: "rgba(245, 238, 226, 0.75)", fontSize: "14.5px", margin: 0 }}>Ratchet lines and anchor points are inspected and re-calibrated prior to every guest arrival.</p>
              </div>
            </li>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "var(--navy)" }}>Tree Tents Stays FAQs</h2>
        <div className="faq-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className={`faq-item ${openFaqIndex === 0 ? "open" : ""}`} onClick={() => toggleFaq(0)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>How do guests enter and exit the suspended tree tents?</span>
              <span className="faq-plus">{openFaqIndex === 0 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 0 && (
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
                Tents are equipped with roll-up floor hatches and drop-down safety web ladders or custom steps. Guests can climb in and out easily and safely.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 1 ? "open" : ""}`} onClick={() => toggleFaq(1)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Are tree tents stable and safe during high winds?</span>
              <span className="faq-plus">{openFaqIndex === 1 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 1 && (
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
                Yes, our tree tents are tensioned using high-strength industrial ratchets and tree-protection webbing to three separate anchors, keeping it level and stable.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 2 ? "open" : ""}`} onClick={() => toggleFaq(2)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Do tree tents protect against rain and insects?</span>
              <span className="faq-plus">{openFaqIndex === 2 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 2 && (
              <div className="faq-a" style={{ color: "rgba(14, 67, 60, 0.85)", paddingTop: "15px" }}>
                Yes, the tents feature a heavy-duty insect mesh inner layer and an overlapping waterproof double-layered rainfly that keeps you completely dry during Wayanad's showers.
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Sleep suspended in the canopy.</h2>
          <button onClick={openEnquiry}>Book Tree Tent Stay</button>
        </div>
      </section>
    </div>
  );
}
