"use client";

import React, { useEffect, useRef } from "react";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

const GALLERY_PHOTOS = [
  { id: "photo-1526491109672-74740652b963", title: "Dome Interiors", desc: "Warm lighting and luxury organic linens inside the geodesic dome." },
  { id: "photo-1504280390367-361c6d9f38f4", title: "Tipi Tribe Golden Hour", desc: "Canvas tipis casting long silhouettes at sunset in Wayanad." },
  { id: "photo-1520250497591-112f2f40a3f4", title: "Suspended Stingray", desc: "Tensile tree tents floating high above the forest floor." },
  { id: "photo-1510312305653-8ed496efae75", title: "Campfire Fireside", desc: "Stargazing and quiet storytelling around the common hearth." },
  { id: "photo-1470770841072-f978cf4d019e", title: "Misty Sunrise Views", desc: "The view from a tipi door opening into the cloud-filled valley." },
  { id: "photo-1513694203232-719a280e022f", title: "Canopy Hammock", desc: "Unwinding with a book, suspended directly inside the green canopy." }
];

export default function Habitat() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsapLib.context(() => {
      // Very slow breathing scale (calm, luxury)
    gsapLib.fromTo(".sub-hero .bg",
      { scale: 1.0 },
      { scale: 1.06, duration: 25, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    gsapLib.fromTo(".sub-hero h1",
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.1 }
    );

    gsapLib.fromTo(".sub-intro p",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
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
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

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
      {/* Calmest Hero - Deep Teal & Slow Breathing */}
      <section className="sub-hero">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('/assets/images/habitat_hero.png')" }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--sand)" }}>Pillar 03 &mdash; Habitat</span>
          <h1>Sleep among the treetops</h1>
        </div>
      </section>

      {/* Intro section on Sand */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: 1.6 }}>
          Habitat replaces traditional hotel stays with low-impact, design-forward structures. Experience a deep, immersive stay directly inside the canopy without leaving comfort behind.
        </p>
      </section>

      {/* Pinned List Sections */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>Stays &amp; Shelters</h2>
          <p>
            Each structure is engineered to interact with the landscape gently, offering panoramic views, clean airflow, and quiet isolation.
          </p>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Stingray Tribe Tensile Tree Tents</h3>
              <p>Sleep suspended between old-growth trees inside triple-tensile hammock tents offering 360 canopy views.</p>
            </div>
            
            <div className="offer-item">
              <h3>Tipi Tribe Glamping</h3>
              <p>Spacious, premium canvas tipis mounted on elevated wooden platforms with warm lighting and comfortable layouts.</p>
            </div>

            <div className="offer-item">
              <h3>Suspended Tree Tents</h3>
              <p>Lightweight tensile setups for multi-day expeditions that elevate your sleeping deck off the damp forest floor.</p>
            </div>

            <div className="offer-item">
              <h3>Geodesic Dome Eco-Lodges</h3>
              <p>Premium insulated dome stays featuring glass window panels, ensuite baths, and sunrise mountain decks.</p>
            </div>

            <div className="offer-item">
              <h3>Stargazing &amp; Campfire Spaces</h3>
              <p>Dedicated common spaces built for astronomical viewing, fireplace conversations, and evening dining.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric Gallery */}
      <section className="gallery-section">
        <h2>Atmospheric Spaces</h2>
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

      {/* Amenities Section (Unhurried lines) */}
      <section className="pinned-split" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div className="pinned-left">
          <h2>Comfort, Curated</h2>
          <p>
            We believe luxury lies in peace and simplicity. Our Stays are fully outfitted with premium, eco-friendly amenities.
          </p>
        </div>
        
        <div className="pinned-right">
          <div className="amenities-lines">
            <div className="amenity-line">Premium organic linen &amp; pillows</div>
            <div className="amenity-line">Private detached eco-washrooms</div>
            <div className="amenity-line">Hot water on request</div>
            <div className="amenity-line">Locally-sourced regional organic dining</div>
            <div className="amenity-line">Round-the-clock safety &amp; guide support</div>
            <div className="amenity-line">Solar power charging stations</div>
          </div>
        </div>
      </section>

      {/* Full Width Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&w=1600&q=80')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Ready to sleep under the stars?</h2>
          <button onClick={openEnquiry}>Book Your Stay</button>
        </div>
      </section>
    </div>
  );
}
