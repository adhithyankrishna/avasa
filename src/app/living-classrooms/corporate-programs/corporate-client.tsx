"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsapLib from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapLib.registerPlugin(ScrollTrigger);

const ShieldIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  </span>
);

const TrophyIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.75a1.125 1.125 0 01-1.125-1.125V18.75m9 0V18.75M9 10.5h.008v.008H9V10.5zm.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 3v13.5m0-13.5a3 3 0 11-6 0 3 3 0 016 0zm0 0a3 3 0 106 0 3 3 0 00-6 0z" />
    </svg>
  </span>
);

const UserGroupIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.012 19c-.485-.005-.967-.03-1.444-.075L8.25 18.75m3.75-2.7h-1.5m1.5 2.7H9.75m1.5-2.7h-1.5m1.5 2.7H8.25m3.75-2.7a6.002 6.002 0 00-4.75 3.32M10.5 9.75a3 3 0 11-6 0 3 3 0 016 0zm10.5 0a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </span>
);

const GALLERY_PHOTOS = [
  { id: "photo-1770240090990-0653176ee415", title: "Forest Work Session", desc: "Collaborative design think-tanks under the jungle cover." },
  { id: "photo-1544551763-46a013bb70d5", title: "Swift River Kayaking", desc: "Coordinating paddling routes and rapid rescues as a team." },
  { id: "photo-1533588841144-7486a55c13f9", title: "Platform Trust Runs", desc: "Cooperative tree platform obstacle grids led by certified guides." },
  { id: "photo-1510312305653-8ed496efae75", title: "Campfire Debriefs", desc: "Gathering after twilight exercises to review leadership dynamics." }
];

export default function CorporateClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

      gsapLib.fromTo(".sub-intro p",
        { opacity: 0, y: 20 },
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
          { opacity: 0, y: 30 },
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

      const safetyCodaItems = document.querySelectorAll(".safety-coda-item");
      if (safetyCodaItems.length > 0) {
        gsapLib.fromTo(safetyCodaItems,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".safety-coda-item",
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
    const event = new CustomEvent("open-enquiry-drawer", {
      detail: { interest: "Discuss a project or installation", step: 2 }
    });
    window.dispatchEvent(event);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="subpage-view">
      {/* Cinematic Hero */}
      <section className="sub-hero">
        <div 
          className="bg" 
          style={{ 
            backgroundImage: "url('/assets/images/projects_hero.webp')",
            filter: "contrast(1.1) brightness(0.85)"
          }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Corporate Retreats</span>
          <h1>Corporate Team Building &mdash; Wilderness Offsites in Wayanad</h1>
        </div>
      </section>

      {/* Intro section */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
            Break away from the screens. We design and facilitate experiential team building challenges, wilderness survival offsites, and leadership retreats in Wayanad, Kerala.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", margin: "40px 0", textAlign: "center" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Group Size</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>15 - 100 Pax</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Focus</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>Trust &amp; Leadership</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Pricing Signal</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>From ₹3,000 / person</strong>
            </div>
          </div>

          <div style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(18, 35, 63, 0.85)" }}>
            <p style={{ marginBottom: "20px" }}>
              AVASA's corporate offsites shift team dynamics from passive slide presentations to active, hands-on cooperation in wild landscapes. Guided by professional leadership coaches and wilderness experts, our programs build trust, align team goals, and stimulate organic problem solving.
            </p>
            <p>
              Spend your day navigating rapid river crossings on Chaliyar, building functional bamboo rafts, or conquering treetop obstacle grids. In the evenings, gather around the central campfire for facilitated reflection, local organic barbecue dining, and stargazing from our premium glamping domes or tipis.
            </p>
          </div>
        </div>
      </section>

      {/* Details & What's Included */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>The Offsite in Detail</h2>
          <p>
            We merge premium nature hospitality with structured outdoor leadership training to create lasting team cohesion.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link href="/living-classrooms" style={{ color: "var(--gold)", textDecoration: "underline", display: "block", marginBottom: "12px" }}>&larr; Back to Living Classrooms main</Link>
            <Link href="/projects" style={{ color: "var(--gold)", textDecoration: "underline", display: "block" }}>Explore B2B build services &rarr;</Link>
          </div>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Facilitated Leadership Debriefs</h3>
              <p>Programs are structured to translate outdoor challenges into clear office metaphors: communication under pressure, resource allocation, and agile planning.</p>
            </div>
            
            <div className="offer-item">
              <h3>High-Adventure Runs</h3>
              <p>Teams take on India's longest canopy zipline (Eagle's Flight), rapid river kayaking, and steep ridge hikes to stretch personal zones safely.</p>
            </div>

            <div className="offer-item">
              <h3>Custom Glamping Retreats</h3>
              <p>Accommodations in our premium geodesic domes, suspended tree tents, and tipis, offering full comfort amidst wilderness privacy.</p>
            </div>

            <div className="offer-item">
              <h3>End-to-End Coordination</h3>
              <p>We coordinate secure transport, custom local dining menus, meeting spaces in the woods, and complete safety support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Teams in Action</h2>
        <div className="gallery-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-img">
                <img 
                  src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=600&q=80`} 
                  alt={`Corporate group participating in team building Wayanad offsite — ${photo.title}`} 
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

      {/* Safety & Standards */}
      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">Safety Framework</span>
          <h2 style={{ color: "var(--sand)" }}>Safety Assurance</h2>
          <p style={{ color: "rgba(237, 232, 220, 0.75)" }}>
            Our corporate runs maintain absolute insurance and safety parameters, keeping your team completely secure at all heights and water levels. Read more in <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>our safety policies</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(237, 232, 220, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="safety-coda-item">
              <TrophyIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Certified Safety Gear</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Every activity uses CE/UIAA certified harnesses, climbing lines, helmets, and swiftwater flotation jackets.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <ShieldIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Wilderness Rescue Guides</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>All activities are led by trained instructors certified in swiftwater rescue and high-altitude belay work.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <UserGroupIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Continuous Risk Checks</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>We monitor weather, path conditions, and water discharge rates daily, adapting schedules to protect your group.</p>
              </div>
            </li>
          </div>
        </div>
      </section>

      {/* Specific FAQ Accordion Section */}
      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "var(--navy)" }}>Corporate Programs FAQs</h2>
        <div className="faq-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className={`faq-item ${openFaqIndex === 0 ? "open" : ""}`} onClick={() => toggleFaq(0)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>What corporate group sizes can AVASA accommodate?</span>
              <span className="faq-plus">{openFaqIndex === 0 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 0 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                We cater to corporate groups ranging from 15 to 100 participants, offering full-board stays, custom conference nodes, and coordinated activities.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 1 ? "open" : ""}`} onClick={() => toggleFaq(1)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>What team-building activities do you offer?</span>
              <span className="faq-plus">{openFaqIndex === 1 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 1 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Our activities include forest ropes grids, swiftwater kayaking, bamboo raft-building, wilderness navigation, survival bushcraft, and campfire leadership reflection sessions.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 2 ? "open" : ""}`} onClick={() => toggleFaq(2)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Can the program agendas be customized?</span>
              <span className="faq-plus">{openFaqIndex === 2 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 2 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Yes, all programs are customized. We adjust difficulty grades, activity lists, stay setups (domes, tents, tipis), and local menu designs to fit your corporate goals.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('/assets/images/projects_hero.webp')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Inspire your team outside.</h2>
          <button onClick={openEnquiry}>Plan a Corporate Offsite</button>
        </div>
      </section>
    </div>
  );
}
