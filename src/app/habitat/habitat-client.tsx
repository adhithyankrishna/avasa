"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

// Custom Premium SVG Icons
const MealsIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
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

const CalendarIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  </span>
);

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

    // Habitat care items stagger
    const habitatCareItems = document.querySelectorAll(".habitat-care-item");
    if (habitatCareItems.length > 0) {
      gsapLib.fromTo(habitatCareItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".habitat-care-item",
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
        <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
          Habitat replaces traditional hotel stays with low-impact, design-forward structures. Experience a deep, immersive stay directly inside the canopy without leaving comfort behind.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto", textAlign: "center", color: "rgba(18, 35, 63, 0.8)" }}>
          Want a glamping stay in Kerala? Choose from tree tents, glass domes, or tipi camps at AVASA's Stingray Tribe and Tipi Tribe locations. Each stay includes meals, guide support, and a comfortable setup close to nature — without giving up basic comforts.
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

      {/* How We Care Slice Section */}
      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">How We Take Care of You</span>
          <h2 style={{ color: "var(--sand)" }}>Included In Your Stay</h2>
          <p style={{ color: "rgba(237, 232, 220, 0.75)" }}>
            We handle the details so you can fully enjoy your forest retreat. <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>Read about what's included</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(237, 232, 220, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="habitat-care-item">
              <MealsIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Meals Included</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Fresh, healthy local meals and hot refreshments served daily.</p>
              </div>
            </li>
            <li className="habitat-care-item">
              <CompassIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Guide Support</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Trained local guides available for walks and wilderness advice.</p>
              </div>
            </li>
            <li className="habitat-care-item">
              <CalendarIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Custom Plans</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>We help shape your schedule and activities around your group's goals.</p>
              </div>
            </li>
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
