"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { GuideArticle } from "@/data/guides";
import gsapLib from "gsap";

export default function ArticleClient({ article }: { article: GuideArticle }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsapLib.context(() => {
      // Breath scale hero bg
      gsapLib.fromTo(".article-hero .bg",
        { scale: 1.0 },
        { scale: 1.05, duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut" }
      );

      gsapLib.fromTo(".article-header-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1 }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const openEnquiry = () => {
    const event = new CustomEvent("open-enquiry-drawer", {
      detail: { interest: "General Enquiry", step: 2 }
    });
    window.dispatchEvent(event);
  };

  return (
    <div ref={containerRef} className="subpage-view" style={{ background: "var(--sand)" }}>
      {/* Article Header Hero */}
      <section 
        className="article-hero"
        style={{
          position: "relative",
          height: "60vh",
          minHeight: "450px",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div 
          className="bg" 
          style={{ 
            backgroundImage: `url(${article.image})`,
            position: "absolute",
            inset: 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "contrast(1.1) brightness(0.65)",
            willChange: "transform"
          }}
        ></div>
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(to bottom, rgba(7, 38, 34, 0.4) 0%, rgba(7, 38, 34, 0.88) 100%)",
            pointerEvents: "none"
          }}
        ></div>
        
        <div 
          className="article-header-content"
          style={{ 
            position: "relative", 
            zIndex: 10, 
            textAlign: "center", 
            padding: "0 20px",
            maxWidth: "900px"
          }}
        >
          <span 
            style={{ 
              color: "var(--gold)", 
              fontSize: "11px", 
              textTransform: "uppercase", 
              letterSpacing: "3px", 
              fontWeight: 600,
              display: "block",
              marginBottom: "16px"
            }}
          >
            {article.category}
          </span>
          <h1 
            style={{ 
              fontFamily: "var(--serif-font)", 
              fontSize: "clamp(28px, 4.5vw, 46px)", 
              fontWeight: 300, 
              lineHeight: "1.25", 
              color: "var(--sand)",
              marginBottom: "20px",
              letterSpacing: "-0.5px"
            }}
          >
            {article.title}
          </h1>
          <div 
            style={{ 
              fontSize: "13px", 
              color: "rgba(245, 238, 226, 0.7)", 
              fontFamily: "var(--sans-font)",
              letterSpacing: "1.5px",
              textTransform: "uppercase" 
            }}
          >
            By {article.author} &bull; {article.datePublished} &bull; {article.readingTime}
          </div>
        </div>
      </section>

      {/* Article Body Content */}
      <section 
        className="section-pad" 
        style={{ 
          background: "var(--sand)", 
          color: "var(--navy)",
          paddingTop: "80px",
          paddingBottom: "80px" 
        }}
      >
        <div 
          style={{ 
            maxWidth: "760px", 
            margin: "0 auto",
            fontSize: "17.5px",
            lineHeight: "1.85",
            color: "rgba(14, 67, 60, 0.9)"
          }}
          className="article-rich-text"
        >
          {/* Back button */}
          <div style={{ marginBottom: "40px" }}>
            <Link 
              href="/guides" 
              style={{ 
                color: "var(--navy)", 
                fontSize: "12px", 
                textTransform: "uppercase", 
                letterSpacing: "1.5px",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              &larr; Back to all guides
            </Link>
          </div>

          <div 
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          {/* Related Links */}
          <div 
            style={{ 
              marginTop: "60px", 
              paddingTop: "40px", 
              borderTop: "1px solid rgba(14, 67, 60, 0.12)" 
            }}
          >
            <h4 
              style={{ 
                fontFamily: "var(--sans-font)", 
                fontSize: "12px", 
                textTransform: "uppercase", 
                letterSpacing: "2px", 
                color: "var(--navy)",
                marginBottom: "20px"
              }}
            >
              Related Stays &amp; Activities
            </h4>
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "12px" 
              }}
            >
              <Link 
                href="/adventure/eagles-flight-zipline" 
                style={{ 
                  color: "var(--navy)", 
                  textDecoration: "underline",
                  fontSize: "16px",
                  fontWeight: 500 
                }}
              >
                Eagle's Flight Zipline — Wayanad's Longest Zipline &rarr;
              </Link>
              <Link 
                href="/habitat" 
                style={{ 
                  color: "var(--navy)", 
                  textDecoration: "underline",
                  fontSize: "16px",
                  fontWeight: 500 
                }}
              >
                Luxury Nature Glamping stays (Tree Tents, Geodesic Domes, Tipis) &rarr;
              </Link>
              <Link 
                href="/living-classrooms" 
                style={{ 
                  color: "var(--navy)", 
                  textDecoration: "underline",
                  fontSize: "16px",
                  fontWeight: 500 
                }}
              >
                Living Classrooms Outdoor Education Programs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Call-to-Action */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: `url(${article.image})` }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Ready to write your own adventure?</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto 30px auto", color: "rgba(237, 232, 220, 0.8)", fontSize: "15px" }}>
            Book a stay in our tree tents, geodesic domes, or tipis, and experience Wayanad's thrill of flying on Eagle's Flight.
          </p>
          <button onClick={openEnquiry}>Plan Your Experience</button>
        </div>
      </section>
    </div>
  );
}
