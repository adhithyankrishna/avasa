"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

const RopeIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
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

const UserGroupIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.012 19c-.485-.005-.967-.03-1.444-.075L8.25 18.75m3.75-2.7h-1.5m1.5 2.7H9.75m1.5-2.7h-1.5m1.5 2.7H8.25m3.75-2.7a6.002 6.002 0 00-4.75 3.32M10.5 9.75a3 3 0 11-6 0 3 3 0 016 0zm10.5 0a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </span>
);

const GALLERY_PHOTOS = [
  { id: "photo-1522163182402-834f871fd851", title: "Canopy Glide", desc: "Soaring 150 feet above the Wayanad rainforest canopy." },
  { id: "photo-1504917595217-d4dc5ebe6122", title: "Launch Platform", desc: "Guides checking double belay anchors before launch." },
  { id: "photo-1533588841144-7486a55c13f9", title: "Suspended Trails", desc: "Treetop stability bridges connecting canopy nodes." },
  { id: "photo-1501785888041-af3ef285b470", title: "Valley Vistas", desc: "Panoramic view of the misty Western Ghats from the landing zone." }
];

export default function ZiplineClient() {
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
      detail: { interest: "Eagle's Flight Zipline", step: 2 }
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
            backgroundImage: "url('/assets/images/adventure_hero.webp')",
            filter: "contrast(1.15) brightness(0.8)"
          }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Flagship Adventure</span>
          <h1>Eagle's Flight Zipline &mdash; Wayanad's Longest Zip Line</h1>
        </div>
      </section>

      {/* Intro section */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
            Fly high on Eagle's Flight, the longest canopy zipline in Wayanad, Kerala. Glide over 450 meters across treetops, ancient forest valleys, and misty mountain ridgelines in absolute safety.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", margin: "40px 0", textAlign: "center" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Duration</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>45 - 60 Mins</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Difficulty</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Moderate</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Starting From</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>₹1,200 / rider</strong>
            </div>
          </div>

          <div style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(18, 35, 63, 0.85)" }}>
            <p style={{ marginBottom: "20px" }}>
              Perched at an altitude of 150 feet above the valley floor, Eagle's Flight is designed for adventure enthusiasts, active families, corporate groups, and travelers seeking an unforgettable bird's-eye view of Wayanad's evergreen canopy. The experience begins at our base camp with a comprehensive safety briefing by our certified instructors, followed by a short scenic trek to the elevated launch tower.
            </p>
            <p>
              Once harnessed, you'll slide down a double-cable system that delivers smooth, high-speed movement while guaranteeing absolute structural redundancy. Feel the wind rush past as you glide over a massive canyon, witnessing ancient tree ferns, wild streams, and the mist-laden peaks of the Western Ghats stretching out before you.
            </p>
          </div>
        </div>
      </section>

      {/* Details & What's Included */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>The Experience in Detail</h2>
          <p>
            Every ride on Eagle's Flight is an end-to-end coordinated experience built around international outdoor safety guidelines.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link href="/adventure" style={{ color: "var(--gold)", textDecoration: "underline", display: "block", marginBottom: "12px" }}>&larr; View all adventure activities</Link>
            <Link href="/habitat" style={{ color: "var(--gold)", textDecoration: "underline", display: "block" }}>Explore luxury glamping stays &rarr;</Link>
          </div>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Double-Redundant Rigging</h3>
              <p>Riders slide on two parallel aircraft-grade steel cables, each tested to withstand loads exceeding 5,000 kg. If one is active, the other serves as a constant structural backup.</p>
            </div>
            
            <div className="offer-item">
              <h3>Professional Safety Briefing</h3>
              <p>A mandatory 10-minute briefing covers body positioning, brake handling, and emergency signals under the direct guidance of our swiftwater and high-altitude certified instructors.</p>
            </div>

            <div className="offer-item">
              <h3>Premium Harnesses &amp; Pulleys</h3>
              <p>We supply climbing-grade full-body harnesses, Petzl tandem speed pulleys, and lightweight certified helmets checked for micro-fractures before every single ride.</p>
            </div>

            <div className="offer-item">
              <h3>Soft Landing Braking System</h3>
              <p>Our custom zip-line terminal features a progressive gravity-brake and bungee recovery system, ensuring a smooth, gradual decelerating landing rather than a sudden stop.</p>
            </div>

            <div className="offer-item">
              <h3>Canopy Walking Bridge</h3>
              <p>Gain access to the launch platform via a scenic suspension walkway, letting you adjust to the height while stepping through old-growth pine branches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Captured on the Canopy</h2>
        <div className="gallery-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-img">
                <img 
                  src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=600&q=80`} 
                  alt={`Guest ziplining across forest canopy on Eagle's Flight, Wayanad — ${photo.title}`} 
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

      {/* Safety & Care */}
      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">Safety Framework</span>
          <h2 style={{ color: "var(--sand)" }}>Rigorous Safety Protocols</h2>
          <p style={{ color: "rgba(237, 232, 220, 0.75)" }}>
            Our adventure setups are inspected and logged daily. We follow strict international climbing standards to ensure that your flight is thrilling but entirely secure. Read more about <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>our safety and care measures</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(237, 232, 220, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="safety-coda-item">
              <RopeIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Daily Structural Audits</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Every cable span, anchor connection, and platform structure is inspected by engineers before the first rider launches.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <ShieldIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Certified Outdoor Gear</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Every harness, helmet, rope, and pulley carries CE/UIAA safety certificates and is logged for usage tracking.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <UserGroupIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>First Aid Certified Guides</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>All platform instructors are certified in wilderness first aid and rescue techniques to handle any scenario safely.</p>
              </div>
            </li>
          </div>
        </div>
      </section>

      {/* Specific FAQ Accordion Section */}
      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "var(--navy)" }}>Eagle's Flight FAQs</h2>
        <div className="faq-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className={`faq-item ${openFaqIndex === 0 ? "open" : ""}`} onClick={() => toggleFaq(0)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>How long is the Eagle's Flight zipline?</span>
              <span className="faq-plus">{openFaqIndex === 0 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 0 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Eagle's Flight is Wayanad's longest zipline and one of the longest in India, covering a total horizontal distance of 450 meters from launch to landing.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 1 ? "open" : ""}`} onClick={() => toggleFaq(1)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Are there weight or height restrictions?</span>
              <span className="faq-plus">{openFaqIndex === 1 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 1 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Yes, for safety limits: riders must weigh between 35 kg (minimum) and 110 kg (maximum) to maintain correct speeds and ensure the braking mechanism functions properly. Height should be at least 4 feet (120 cm).
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 2 ? "open" : ""}`} onClick={() => toggleFaq(2)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>What should I wear for the activity?</span>
              <span className="faq-plus">{openFaqIndex === 2 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 2 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Wear comfortable athletic clothing and sturdy, closed-toe sports shoes. Avoid loose clothing, skirts, open sandals, and tuck in long hair. Pockets should be empty, and jewelry/glasses secured.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 3 ? "open" : ""}`} onClick={() => toggleFaq(3)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Can we ride in tandem or group?</span>
              <span className="faq-plus">{openFaqIndex === 3 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 3 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                No. While we have dual parallel cables so two riders can fly side-by-side, each cable is strictly single-rider only. Tandem riding (two people on one line) is not permitted.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1600&q=80')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Soar over the rainforest canopy.</h2>
          <button onClick={openEnquiry}>Book Your Flight Now</button>
        </div>
      </section>
    </div>
  );
}
