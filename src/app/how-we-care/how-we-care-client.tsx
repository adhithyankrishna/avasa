"use client";

import React, { useEffect, useRef } from "react";
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

const CheckIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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

const TransportIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125a1.125 1.125 0 001.125-1.125V9.75M8.25 18.75a1.5 1.5 0 01-3 0m9 0a1.5 1.5 0 01-3 0M18.75 18.75h1.125A1.125 1.125 0 0021 17.625v-3.375m0 0V9.75m0 4.5H16.5M21 9.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 9.75v4.5m16.5-4.5V9a2.25 2.25 0 00-2.25-2.25H15M3.375 14.25h17.25m-17.25 0V9.75M3.375 14.25v2.25" />
    </svg>
  </span>
);

const MealsIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
    </svg>
  </span>
);

const CameraIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
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

const PlaneIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  </span>
);

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

      // Stagger safety items
      gsapLib.fromTo(".care-block:not(#included-pin) .care-list li",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".care-block:not(#included-pin) .care-list", start: "top 80%" }
        }
      );

      // Apple-style Pinned reveal for Inclusions
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReducedMotion) {
        gsapLib.timeline({
          scrollTrigger: {
            trigger: "#included-pin",
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
          }
        })
        .fromTo("#included-pin .care-list li", { opacity: 0, x: -30 }, { opacity: 1, x: 0, stagger: 0.5 });
      } else {
        gsapLib.fromTo("#included-pin .care-list li",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: { trigger: "#included-pin", start: "top 80%" }
          }
        );
      }

      // Simple fade for text blocks
      document.querySelectorAll(".care-block").forEach((block) => {
        if (block.id !== "included-pin") {
          gsapLib.fromTo(block,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
              scrollTrigger: { trigger: block, start: "top 85%" }
            }
          );
        }
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
        <div className="bg" style={{ backgroundImage: "url('/assets/images/how_we_care_hero.webp')" }}></div>
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
          <li>
            <RopeIcon />
            <div><strong>Certified helmets, harnesses, and ropes</strong></div>
          </li>
          <li>
            <CheckIcon />
            <div><strong>Daily equipment checks, every morning</strong></div>
          </li>
          <li>
            <CompassIcon />
            <div><strong>Trained guides on every activity</strong></div>
          </li>
          <li>
            <FirstAidIcon />
            <div><strong>First aid support on site</strong></div>
          </li>
        </ul>
      </section>

      <section id="included-pin" className="care-block section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <h2>What's Included in Every Trip</h2>
        <p>When you book with AVASA, you're not just booking one activity. Here's everything we manage for you:</p>
        <ul className="care-list">
          <li>
            <TransportIcon />
            <div><strong>Transport</strong> — we help you get to and from the location</div>
          </li>
          <li>
            <MealsIcon />
            <div><strong>Meals</strong> — food and refreshments during your stay or activity</div>
          </li>
          <li>
            <CompassIcon />
            <div><strong>Guides</strong> — trained local guides who know the land and the activity</div>
          </li>
          <li>
            <CameraIcon />
            <div><strong>Photos & videos</strong> — so you can relive the moment later</div>
          </li>
          <li>
            <FirstAidIcon />
            <div><strong>First aid</strong> — on-site support for any small accidents</div>
          </li>
          <li>
            <CalendarIcon />
            <div><strong>Custom plans</strong> — we build the schedule around your group's needs</div>
          </li>
          <li>
            <PlaneIcon />
            <div><strong>Airport pickup</strong> — for guests travelling from outside Kerala</div>
          </li>
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
