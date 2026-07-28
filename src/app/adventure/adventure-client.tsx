"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

// Custom Premium SVG Icons
const RopeIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  </span>
);

const CompassIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m12 0a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </span>
);

const FirstAidIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </span>
);

const GALLERY_PHOTOS = [
  { id: "photo-1544551763-46a013bb70d5", title: "Cutting Spray", desc: "Kayaks slicing through the fast waters of Chaliyar." },
  { id: "photo-1522163182402-834f871fd851", title: "Eagle's Flight Launch", desc: "Launching into India's longest canopy zipline." },
  { id: "photo-1475113548554-5a36f1f523d6", title: "Bamboo Rafting", desc: "Cooperative navigation along ancient riverways." },
  { id: "photo-1501555088652-021faa106b9b", title: "Ridge Hiking", desc: "Trekking through early morning ridge lines in Munnar." },
  { id: "photo-1533588841144-7486a55c13f9", title: "High Canopy Nets", desc: "Exploring suspended high-altitude rope net grids." },
  { id: "photo-1471115853179-bb1d604434e0", title: "Base Camp Dusk", desc: "Settling into the forest clearing camp at golden hour." }
];

export default function Adventure() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsapLib.context(() => {
      // Camera shake/unsteady animation simulation
    gsapLib.fromTo(".sub-hero .bg",
      { x: "-1%", y: "-1%" },
      { 
        x: "1%", 
        y: "1%", 
        duration: 8, 
        repeat: -1, 
        yoyo: true, 
        ease: "rough({template: none, strength: 1, points: 20, taper: none, randomize: true, clamp: false})" 
      }
    );

    gsapLib.fromTo(".sub-hero h1",
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
    );

    gsapLib.fromTo(".sub-intro p",
      { opacity: 0, y: 25 },
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
        { opacity: 0, y: 40 },
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

    // Safety coda items stagger
    const safetyCodaItems = document.querySelectorAll(".safety-coda-item");
    if (safetyCodaItems.length > 0) {
      gsapLib.fromTo(safetyCodaItems,
        { opacity: 0, y: 20 },
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
    window.dispatchEvent(new CustomEvent("open-enquiry-drawer"));
  };

  return (
    <div ref={containerRef} className="subpage-view">
      {/* High-Adrenaline Cinematic Hero */}
      <section className="sub-hero">
        <div 
          className="bg" 
          style={{ 
            backgroundImage: "url('/assets/images/adventure_hero.png')",
            filter: "contrast(1.15) brightness(0.85)"
          }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Pillar 02 &mdash; Adventure</span>
          <h1>Home to Eagle's Flight &mdash; India's longest zipline</h1>
        </div>
      </section>

      {/* Intro section on Sand */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
          Thrills planned with precision. We curate high-adrenaline expeditions and activities for individuals, active families, and corporate squads seeking genuine adventure.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto", textAlign: "center", color: "rgba(18, 35, 63, 0.8)" }}>
          Looking for adventure activities in Kerala? AVASA runs zipline rides, kayaking trips, and guided treks across Wayanad, Munnar, and the Chaliyar river. Our most popular activity is Eagle's Flight, one of the longest ziplines in India. Every activity includes safety gear, a trained guide, and support from start to finish.
        </p>
      </section>

      {/* Pinned List Sections */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>What's Included</h2>
          <p>
            From high-altitude canopy lines to fast rapid runs, every experience is guided by certified professionals and outfitted with safety-first protective gear.
          </p>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Eagle's Flight Zipline</h3>
              <p>Experience India's longest zipline, flying high above the rainforest canopy on double-redundant lines.</p>
            </div>
            
            <div className="offer-item">
              <h3>Kayaking</h3>
              <p>Paddle down scenic rivers and navigate wild rapids under the direction of swiftwater rescue guides.</p>
            </div>

            <div className="offer-item">
              <h3>Bamboo Rafting</h3>
              <p>Build and float traditional rafts on calm stretches of Kerala's lush rivers.</p>
            </div>

            <div className="offer-item">
              <h3>Trekking</h3>
              <p>Guided day treks and multi-day mountain climbs passing through tea hills and remote ridges.</p>
            </div>

            <div className="offer-item">
              <h3>Wilderness Camping</h3>
              <p>Sleep under stars in pristine, low-impact camp sites equipped with solid base-camp systems.</p>
            </div>

            <div className="offer-item">
              <h3>Tree Net Experiences</h3>
              <p>Bounce and lounge on massive rope net bridges suspended high between centuries-old bark.</p>
            </div>

            <div className="offer-item">
              <h3>Adventure Team Building</h3>
              <p>High-ropes, obstacle routes, and team problem-solving challenges in dense forests.</p>
            </div>

            <div className="offer-item">
              <h3>Orienteering &amp; Compass Work</h3>
              <p>Learn compass reading and navigation techniques to locate control points in dense valleys.</p>
            </div>

            <div className="offer-item">
              <h3>Survival &amp; Bushcraft</h3>
              <p>Hands-on training in woodcarving, shelter building, firecraft, and wilderness prep.</p>
            </div>

            <div className="offer-item">
              <h3>Campfire Nights</h3>
              <p>Relax around the embers with acoustic music, local dining, and shared mountain stories.</p>
            </div>

            <div className="offer-item">
              <h3>Sunrise &amp; Sunset Expeditions</h3>
              <p>High-altitude ridge walks timed to capture the early mist and golden hour skyline views.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Caught-in-motion Gallery */}
      <section className="gallery-section">
        <h2>Caught in Motion</h2>
        <div className="gallery-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-img">
                <img 
                  src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=500&q=80`} 
                  alt={photo.title} 
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

      {/* Safety & Gear Coda */}
      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">Safety Framework</span>
          <h2 style={{ color: "var(--sand)" }}>Rigorous Gear Protocols</h2>
          <p style={{ color: "rgba(237, 232, 220, 0.75)" }}>
            Every activity uses certified safety gear and trained guides. We check every harness and anchor point before you start. Read more about <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>how we keep you safe</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(237, 232, 220, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="safety-coda-item">
              <RopeIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Certified safety gear</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Every harness, helmet, and rope carries official climbing certifications.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <CompassIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Trained guides</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Every activity is led by professional guides who watch over the group.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <FirstAidIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>First aid support</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>First aid kit and support are always available on site.</p>
              </div>
            </li>
          </div>
        </div>
      </section>

      {/* Full Width Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1600&q=80')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Ready to fly?</h2>
          <button onClick={openEnquiry}>Book an Experience</button>
        </div>
      </section>
    </div>
  );
}
