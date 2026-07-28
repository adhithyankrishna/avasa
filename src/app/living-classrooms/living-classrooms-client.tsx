"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

// Custom Premium SVG Icons
const TransportIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125a1.125 1.125 0 001.125-1.125V9.75M8.25 18.75a1.5 1.5 0 01-3 0m9 0a1.5 1.5 0 01-3 0M18.75 18.75h1.125A1.125 1.125 0 0021 17.625v-3.375m0 0V9.75m0 4.5H16.5M21 9.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 9.75v4.5m16.5-4.5V9a2.25 2.25 0 00-2.25-2.25H15M3.375 14.25h17.25m-17.25 0V9.75M3.375 14.25v2.25" />
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
  { id: "photo-1522071820081-009f0129c71c", title: "Outdoor Discussion", desc: "A group sharing reflections under a canopy of trees." },
  { id: "photo-1516259762381-22954d7d3ad2", title: "Forest Navigation", desc: "Learning orienteering and map skills in dense trails." },
  { id: "photo-1473448912268-2022ce9509d8", title: "Wilderness Habitat Study", desc: "Identifying species during an environmental science walk." },
  { id: "photo-1448375240586-882707db888b", title: "Canopy Observations", desc: "Exploring forest layers from safety-rigged platforms." },
  { id: "photo-1510312305653-8ed496efae75", title: "Campfire Debriefs", desc: "Reviewing team dynamics and leadership lessons around the fire." },
  { id: "photo-1508873696983-2df519f0397e", title: "Survival Craft", desc: "Hands-on instruction in shelters and clean water sourcing." }
];

export default function LivingClassrooms() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsapLib.context(() => {
      // Breathing hero scaling
    gsapLib.fromTo(".sub-hero .bg", 
      { scale: 1.05 },
      { scale: 1.15, duration: 20, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    // Headline scroll trigger entrance
    gsapLib.fromTo(".sub-hero h1",
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1 }
    );

    // Intro paragraph fade
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

    // Gallery cards cascading fade-in on scroll
    document.querySelectorAll(".gallery-card").forEach((card, idx) => {
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

    // LC care items stagger
    const lcCareItems = document.querySelectorAll(".lc-care-item");
    if (lcCareItems.length > 0) {
      gsapLib.fromTo(lcCareItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".lc-care-item",
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
      {/* 2/3 Height Cinematic Hero with Breathing Scale */}
      <section className="sub-hero">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('/assets/images/living_classrooms_hero.png')" }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow">Pillar 01 &mdash; Living Classrooms</span>
          <h1>The outdoors, as the curriculum</h1>
        </div>
      </section>

      {/* Intro section on Sand */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
          Living Classrooms moves growth out of the traditional school walls and directly into nature. We deliver custom experiential learning, leadership camps, and survival skill workshops tailored for schools, universities, and corporate teams.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto", textAlign: "center", color: "rgba(18, 35, 63, 0.8)" }}>
          AVASA runs outdoor learning programs for schools, colleges, and companies across Kerala. Programs include leadership camps, survival skills, and environmental education — all led outside a classroom, in real forests and open land. Transport and trained facilitators are included with every program.
        </p>
      </section>

      {/* Pinned List Sections */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>Outdoors Curriculum</h2>
          <p>
            Nature is our textbook. We design programs that challenge teams and students physically and mentally, fostering resilience, unity, and environmental stewardship.
          </p>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Campus Experiential Learning</h3>
              <p>Curriculum-linked nature programs integrated directly onto your school grounds or campus area.</p>
            </div>
            
            <div className="offer-item">
              <h3>Outdoor Adventure Camps</h3>
              <p>Multi-day wilderness immersions focused on teamwork, campcraft, and outdoor living protocols.</p>
            </div>

            <div className="offer-item">
              <h3>Leadership Development</h3>
              <p>Action-based leadership drills designed to test decision-making and project communication under pressure.</p>
            </div>

            <div className="offer-item">
              <h3>Survival &amp; Life Skills</h3>
              <p>Practical bushcraft, including rope knots, shelter construction, navigation, and foraging basics.</p>
            </div>

            <div className="offer-item">
              <h3>Environmental Education</h3>
              <p>Field science covering forest canopy biology, wildlife ecology, and local ecosystem conservation.</p>
            </div>

            <div className="offer-item">
              <h3>Leave No Trace Workshops</h3>
              <p>Instilling outdoor ethics and sustainable recreation protocols to protect wilderness spaces.</p>
            </div>

            <div className="offer-item">
              <h3>Nature Interpretation Walks</h3>
              <p>Slow-paced, guide-led ecology studies designed to spark environmental curiosity and awareness.</p>
            </div>

            <div className="offer-item">
              <h3>Outdoor First Aid Training</h3>
              <p>Practical wilderness medicine and response training for guides, educators, and explorers.</p>
            </div>

            <div className="offer-item">
              <h3>School Expeditions</h3>
              <p>Custom educational adventures designed for academic cohorts seeking real-world wilderness testing.</p>
            </div>

            <div className="offer-item">
              <h3>Custom Programs</h3>
              <p>Bespoke programs built around your specific educational goals, scheduling, and accommodation preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Care Slice Section */}
      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">How We Take Care of You</span>
          <h2 style={{ color: "var(--sand)" }}>Logistics &amp; Facilitation</h2>
          <p style={{ color: "rgba(237, 232, 220, 0.75)" }}>
            We handle the setup, coordination, and guiding from start to finish so your team can focus on learning. <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>Read about what's included</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(237, 232, 220, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="lc-care-item">
              <TransportIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Transport Coordination</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Safe transit planning and support to transport groups to and from Wayanad and Munnar.</p>
              </div>
            </li>
            <li className="lc-care-item">
              <CompassIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Trained Facilitators</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Every activity is run by professional coaches skilled in group safety and learning outcomes.</p>
              </div>
            </li>
            <li className="lc-care-item">
              <CalendarIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Customized Schedules</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Bespoke curriculum matching to align with your school's or corporate objectives.</p>
              </div>
            </li>
          </div>
        </div>
      </section>

      {/* Scrapbook Photo Gallery */}
      <section className="gallery-section">
        <h2>Pillar Scrapbook</h2>
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

      {/* Full Width Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Ready to shift boundaries?</h2>
          <button onClick={openEnquiry}>Plan a School Program</button>
        </div>
      </section>
    </div>
  );
}
