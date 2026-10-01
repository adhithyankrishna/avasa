"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

const PORTFOLIO_PROJECTS = [
  { image: "/assets/images/projects/chaliyar_zipline.jpg", title: "Chaliyar River Retreat Zipline", desc: "A 450-meter scenic dual-line crossing over the Chaliyar river basin. Built on an 8-acre eco-resort property. Features high-tensile steel anchors and terminal gravity-braking system." },
  { image: "/assets/images/projects/vythiri_canopy.jpg", title: "Vythiri Mist Resort Canopy Village", desc: "Multi-level suspended tree netting and Stingray tree tent village built on a 5.5-acre property in Wayanad. Integrates tree-safe felt wraps and UIAA-certified ratchet strap networks." },
  { image: "/assets/images/projects/munnar_tea_grid.jpg", title: "Munnar Tea Canopy Adventure Grid", desc: "A low-impact high-ropes and stability bridge challenge route built on a 12-acre resort. Includes 5 suspended geodesic dome platforms, canopy walkway bridges, and safety belay cables." },
  { image: "/assets/images/projects/western_ghats_anchors.jpg", title: "Western Ghats Adventure Park Belay Anchors", desc: "Rock face and old-growth pine anchor systems stress-tested up to 50kN for extreme load safety on a 15-acre active outdoor park." },
  { image: "/assets/images/projects/wayanad_tipi_retreat.jpg", title: "Wayanad Tipi Tribe Retreat Master Plan", desc: "Complete eco-zoning, structural site layout, and installation of a 6-tipi glamping village with a central campfire circle on a 4-acre forested private estate." },
  { image: "/assets/images/projects/green_hills_amphitheater.jpg", title: "The Green Hills Academy Forest Amphitheater", desc: "A wooden outdoor classroom and forest learning deck integrated into hills contours on a 3.5-acre campus in Munnar. Includes stability practice ropes and low-height zipline nets." }
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
          <span className="eyebrow" style={{ color: "var(--gold)" }}>The technical engineering behind the experience.</span>
          <h1>Projects</h1>
        </div>
      </section>

      {/* Intro section on Sand */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
          AVASA partners with eco-resorts, educational institutions, government bodies, and destination developers to conceive, engineer, and build turn-key experiential infrastructure that respects the surrounding ecology.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto", textAlign: "center", color: "rgba(14, 67, 60, 0.85)" }}>
          From initial feasibility and ecological survey to precision rigging and full-scale build, we bridge bold architectural vision with rigorous on-ground execution.
        </p>
      </section>

      {/* Pinned List Sections */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>Design &amp; Build Scope</h2>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Suspended Canopy Nets &amp; Walkways</h3>
            </div>
            
            <div className="offer-item">
              <h3>Commercial Ziplines &amp; High-Angle Adventure</h3>
            </div>

            <div className="offer-item">
              <h3>Low-Impact Campgrounds &amp; Glamping Layouts. Parks</h3>
            </div>

            <div className="offer-item">
              <h3>Integrated Campus Learning Spaces &amp; Field Science Pods</h3>
            </div>

            <div className="offer-item">
              <h3>Wilderness Trails, Via Ferrata &amp; Technical Access Routes</h3>
            </div>

            <div className="offer-item">
              <h3>Master Site Planning &amp; Leave-No-Trace Execution</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Portfolio Section */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>Selected Portfolio</h2>
          <p>From raw terrain to iconic spaces.</p>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Eagle&apos;s Flight</h3>
              <p>India&apos;s longest zipline — a 1.8 km mountain zipline experience across the tea valleys of Munnar, combining engineered adventure with an immersive journey through the landscape.</p>
            </div>
            
            <div className="offer-item">
              <h3>Stingray Tribe</h3>
              <p>Suspended canopy camping networks introducing travelers to life in the trees.</p>
            </div>

            <div className="offer-item">
              <h3>Tipi Tribe</h3>
              <p>Modular, heavy-canvas glamping setups optimized for sensitive landscapes.</p>
            </div>

            <div className="offer-item">
              <h3>Living Classrooms</h3>
              <p>Bespoke outdoor school programs blending environmental science, field navigation, and collaborative grit.</p>
            </div>

            <div className="offer-item">
              <h3>Wildside Suspension Net Complex</h3>
              <p>Pioneering ultra-scale, high-tensile tree-net infrastructure set above living wildlife corridors.</p>
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
                  src={photo.image} 
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80')" }}
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
