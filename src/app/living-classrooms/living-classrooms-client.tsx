"use client";

import React, { useEffect, useRef } from "react";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

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
        <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: 1.6 }}>
          Living Classrooms moves growth out of the traditional school walls and directly into nature. We deliver custom experiential learning, leadership camps, and survival skill workshops tailored for schools, universities, and corporate teams.
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
