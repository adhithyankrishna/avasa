"use client";

import React, { useEffect, useRef } from "react";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

export default function HowWeCareClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsapLib.context(() => {
      gsapLib.fromTo(".sub-hero .bg",
        { scale: 1.05 },
        { scale: 1.15, duration: 20, repeat: -1, yoyo: true, ease: "sine.inOut" }
      );

      gsapLib.fromTo(".sub-hero h1",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1 }
      );

      gsapLib.fromTo(".sub-intro p",
        { opacity: 0, y: 25 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: ".sub-intro", start: "top 80%" }
        }
      );

      document.querySelectorAll(".care-block").forEach((block) => {
        gsapLib.fromTo(block,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: block, start: "top 85%" }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const openEnquiry = () => {
    window.dispatchEvent(new CustomEvent("open-enquiry-drawer"));
  };

  return (
    <div ref={containerRef} className="subpage-view">
      <section className="sub-hero">
        <div className="bg" style={{ backgroundImage: "url('/assets/images/how_we_care_hero.png')" }}></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow">How We Take Care of You</span>
          <h1>You focus on the adventure. We handle the rest.</h1>
        </div>
      </section>

      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, maxWidth: "800px", margin: "0 auto", textAlign: "center", lineHeight: 1.6 }}>
          Every AVASA experience comes with more than just the activity. We take care of the small things — so you don't have to think about them. Here's what's always included.
        </p>
      </section>

      <section className="care-block section-pad">
        <h2>Your Safety Comes First</h2>
        <p>Before any activity starts, our team checks every rope, harness, and anchor point by hand. All our safety gear is certified and tested. Every activity is led by a trained guide who watches over the group from start to finish.</p>
        <ul className="care-list">
          <li>Certified helmets, harnesses, and ropes</li>
          <li>Daily equipment checks, every morning</li>
          <li>Trained guides on every activity</li>
          <li>First aid support on site</li>
        </ul>
      </section>

      <section className="care-block section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <h2>What's Included in Every Trip</h2>
        <p>When you book with AVASA, you're not just booking one activity. Here's everything we manage for you:</p>
        <ul className="care-list">
          <li><strong>Transport</strong> — we help you get to and from the location</li>
          <li><strong>Meals</strong> — food and refreshments during your stay or activity</li>
          <li><strong>Guides</strong> — trained local guides who know the land and the activity</li>
          <li><strong>Photos & videos</strong> — so you can relive the moment later</li>
          <li><strong>First aid</strong> — on-site support for any small accidents</li>
          <li><strong>Custom plans</strong> — we build the schedule around your group's needs</li>
          <li><strong>Airport pickup</strong> — for guests travelling from outside Kerala</li>
        </ul>
      </section>

      <section className="care-block section-pad">
        <h2>Why This Matters</h2>
        <p>Most adventure companies handle one thing — just the activity, or just the stay. AVASA plans the whole day (or the whole trip) for you: how you get there, what you eat, who guides you, and how you get home. One team, one plan, nothing left for you to organize.</p>
        <button onClick={openEnquiry}>Ask a Question</button>
      </section>
    </div>
  );
}
