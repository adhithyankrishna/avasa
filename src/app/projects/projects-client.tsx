"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

const PORTFOLIO_PROJECTS = [
  { id: "photo-1508873696983-2df519f0397e", title: "Chaliyar River Crossing Zipline", desc: "A 450-meter scenic zipline span over the Chaliyar river basin." },
  { id: "photo-1542601906990-b4d3fb778b09", title: "Wayanad Tensile Canopy Village", desc: "Multi-level suspended tree netting and Stingray tree tent village." },
  { id: "photo-1533588841144-7486a55c13f9", title: "Munnar Eco-Resort Obstacle Grid", desc: "A low-impact high-ropes and stability bridge challenge route." },
  { id: "photo-1504917595217-d4dc5ebe6122", title: "High Altitude Belay Anchor Works", desc: "Rock face and old-growth pine anchors stress-tested for extreme loads." },
  { id: "photo-1472289065668-ce650ac443d2", title: "Western Ghats Glamping master plan", desc: "Design and zoning for a low-impact canvas tipi retreat." },
  { id: "photo-1486406146926-c627a92ad1ab", title: "Outdoor Learning Circle Structure", desc: "Amphitheater learning decks integrated into forest contours." }
];

export default function ProjectsAndConsulting() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsapLib.context(() => {
      // Deliberate, steady establishing shot scale
    gsapLib.fromTo(".sub-hero .bg",
      { scale: 1.05 },
      { scale: 1.0, duration: 1.5, ease: "power2.out" }
    );

    gsapLib.fromTo(".sub-hero h1",
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1 }
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

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const openEnquiry = () => {
    // Route to details input, pre-selecting Discuss a project path
    const event = new CustomEvent("open-enquiry-drawer", {
      detail: { interest: "Discuss a project or installation", step: 2 }
    });
    window.dispatchEvent(event);
  };

  return (
    <div ref={containerRef} className="subpage-view">
      {/* Composed, Precise Hero */}
      <section className="sub-hero">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('/assets/images/projects_hero.webp')" }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Pillar 04 &mdash; Engineering</span>
          <h1>We build the infrastructure others dream in</h1>
        </div>
      </section>

      {/* Intro section on Sand */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
          AVASA is an end-to-end partner for landowners, eco-resorts, schools, and corporate campuses across India. We plan, engineer, and construct high-performance adventure and eco-tourism installations.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto", textAlign: "center", color: "rgba(18, 35, 63, 0.8)" }}>
          AVASA designs and builds adventure infrastructure — ziplines, tree tents, tree nets, and adventure parks — for resorts, schools, and tourism developments across India. We handle safety consulting, site design, and installation from planning to opening day.
        </p>
      </section>

      {/* Pinned List Sections */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>Our Services</h2>
          <p>
            From initial site zoning and environmental impact planning to final stress logs and certification, we build structures that endure.
          </p>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Adventure Park Design</h3>
              <p>Zoning and layout designs for high-ropes courses, forest obstacle networks, and climbing decks.</p>
            </div>
            
            <div className="offer-item">
              <h3>Zipline Design &amp; Installation</h3>
              <p>Turnkey engineering of structural cable spans, launcher towers, and brake recovery networks.</p>
            </div>

            <div className="offer-item">
              <h3>Tree Tent &amp; Tree Net Installation</h3>
              <p>Safe rigging of suspended hammock hubs and tree tent villages without harming old-growth bark.</p>
            </div>

            <div className="offer-item">
              <h3>Landscape Transformation</h3>
              <p>Shaping outdoor sites into interactive spaces while maintaining biological integrity.</p>
            </div>

            <div className="offer-item">
              <h3>Eco-Tourism Development</h3>
              <p>Complete master planning and infrastructure setup for low-impact adventure destinations.</p>
            </div>

            <div className="offer-item">
              <h3>Destination Planning</h3>
              <p>Land zoning, safety routing, and visitor experience flow charting for public and private estates.</p>
            </div>

            <div className="offer-item">
              <h3>Safety Consulting &amp; Inspections</h3>
              <p>Rigorous structural audits, anchor pull-testing, and gear certifications for existing parks. Learn more about <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>how we care for safety</Link>.</p>
            </div>

            <div className="offer-item">
              <h3>Experience Design Consulting</h3>
              <p>Helping brands shape outdoor programs, guest pathways, and custom hospitality concepts.</p>
            </div>

            <div className="offer-item">
              <h3>Outdoor Learning Space Design</h3>
              <p>Building wooden forest circles, campsites, and amphitheaters optimized for wilderness education.</p>
            </div>

            <div className="offer-item">
              <h3>Equipment Supply &amp; Commissioning</h3>
              <p>Sourcing and certifying climbing-grade cables, harnesses, pulleys, and rescue hardware.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="gallery-section">
        <h2>Completed Work</h2>
        <div className="gallery-grid">
          {PORTFOLIO_PROJECTS.map((photo, idx) => (
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

      {/* 5-Step Process Sequence */}
      <section className="pinned-split" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div className="pinned-left">
          <h2>Engineering Process</h2>
          <p>
            Our delivery pipeline coordinates strict safety standards and precise execution from day one.
          </p>
        </div>
        
        <div className="pinned-right">
          <div className="process-list">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-details">
                <h3>Initial Enquiry</h3>
                <p>We consult on your property specifications, zoning rules, goals, and rough budget lines.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-details">
                <h3>Site Proposal &amp; Survey</h3>
                <p>Our engineers perform site layouts, inspect target trees/rock faces, and propose structural paths.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-details">
                <h3>Quotation &amp; Confirmation</h3>
                <p>We deliver an itemized structural quote, bill of materials, safety specs, and schedule lines.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-details">
                <h3>Delivery &amp; Build</h3>
                <p>Our certified rigging crew conducts anchor installs, cable stress tests, and safety tests on site.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-num">05</div>
              <div className="step-details">
                <h3>Auditing &amp; Handover</h3>
                <p>We run load tests, certify all anchor points, train your crew, and coordinate regular safety checks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1600&q=80')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Have an installation in mind?</h2>
          <button onClick={openEnquiry}>Request a Consultation</button>
        </div>
      </section>
    </div>
  );
}
