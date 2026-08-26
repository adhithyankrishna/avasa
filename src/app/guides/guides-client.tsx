"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { GUIDE_ARTICLES } from "@/data/guides";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

export default function GuidesClient() {
  const containerRef = useRef<HTMLDivElement>(null);

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

      document.querySelectorAll(".guide-card").forEach((card) => {
        gsapLib.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
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

  return (
    <div ref={containerRef} className="subpage-view">
      {/* Cinematic Hero */}
      <section className="sub-hero">
        <div 
          className="bg" 
          style={{ 
            backgroundImage: "url('/assets/images/misty_tea_hills.webp')",
            filter: "contrast(1.1) brightness(0.75)"
          }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>AVASA Library</span>
          <h1>Travel &amp; Adventure Guides</h1>
        </div>
      </section>

      {/* Intro section */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, lineHeight: 1.6, marginBottom: "20px" }}>
            Wilderness wisdom, seasonal checklists, and destination insights.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(18, 35, 63, 0.8)" }}>
            Explore our curated articles designed to help you prepare for your stays, select the right outdoor programs, and discover all the adventures waiting for you in Wayanad and Munnar, Kerala.
          </p>
        </div>
      </section>

      {/* Guides Grid List */}
      <section style={{ background: "var(--sand)", padding: "0 10vw 160px 10vw" }}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          {GUIDE_ARTICLES.map((article, idx) => (
            <div 
              key={idx} 
              className="guide-card"
              style={{
                background: "var(--navy-deep)",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.3s ease"
              }}
            >
              <div 
                style={{ 
                  height: "220px", 
                  width: "100%", 
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <img 
                  src={article.image} 
                  alt={article.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                  className="guide-img-hover"
                />
                <span 
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "var(--gold)",
                    color: "var(--navy-deep)",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: "4px 10px",
                    borderRadius: "20px"
                  }}
                >
                  {article.category}
                </span>
              </div>
              <div 
                style={{ 
                  padding: "28px", 
                  display: "flex", 
                  flexDirection: "column", 
                  flexGrow: 1 
                }}
              >
                <span 
                  style={{ 
                    fontSize: "12px", 
                    color: "rgba(237, 232, 220, 0.4)", 
                    marginBottom: "10px", 
                    display: "block" 
                  }}
                >
                  {article.datePublished} &middot; {article.readingTime}
                </span>
                <h3 
                  style={{ 
                    fontFamily: "var(--serif-font)", 
                    fontSize: "20px", 
                    fontWeight: 300, 
                    lineHeight: "1.3", 
                    marginBottom: "14px",
                    color: "var(--sand)"
                  }}
                >
                  {article.title}
                </h3>
                <p 
                  style={{ 
                    fontSize: "14px", 
                    lineHeight: "1.6", 
                    color: "rgba(237, 232, 220, 0.7)", 
                    marginBottom: "24px",
                    flexGrow: 1
                  }}
                >
                  {article.excerpt}
                </p>
                <Link 
                  href={`/guides/${article.slug}`}
                  style={{
                    color: "var(--gold)",
                    fontSize: "13px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "auto"
                  }}
                  className="guide-link-btn"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
