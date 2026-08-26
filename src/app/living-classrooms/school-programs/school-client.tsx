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

const AcademicCapIcon = () => (
  <span className="care-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 017.218 5.84c-.808.236-1.693.509-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
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
  { id: "photo-1770240090990-0653176ee415", title: "Forest Classroom", desc: "Interactive nature study module under Wayanad's rainforest canopy." },
  { id: "photo-1533588841144-7486a55c13f9", title: "Ropes Safety Check", desc: "Instructors securing safety harnesses before the canopy net grid." },
  { id: "photo-1544551763-46a013bb70d5", title: "Water Cohesion", desc: "Guided bamboo rafting build and river navigation challenge." },
  { id: "photo-1472289065668-ce650ac443d2", title: "Leaf & Soil Mapping", desc: "Scientific field logging and ecology experiments by students." }
];

export default function SchoolClient() {
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
      detail: { interest: "Living Classrooms — School Programs", step: 2 }
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
            backgroundImage: "url('/assets/images/living_classrooms_hero.webp')",
            filter: "contrast(1.1) brightness(0.85)"
          }}
        ></div>
        <div className="overlay" style={{ backgroundColor: "var(--theme-overlay)" }}></div>
        <div className="content">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Living Classrooms</span>
          <h1>School Adventure Camps &mdash; Outdoor Learning in Wayanad</h1>
        </div>
      </section>

      {/* Intro section */}
      <section className="sub-intro section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "22px", fontStyle: "normal", fontWeight: 300, textAlign: "center", lineHeight: 1.6, marginBottom: "40px" }}>
            The outdoors, as the curriculum. We design and deliver safety-first school adventure camps, wilderness science field studies, and character-building expeditions in Wayanad, Kerala.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", margin: "40px 0", textAlign: "center" }}>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Safety Ratio</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>1 Guide : 8 Students</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Duration</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>2 - 5 Days</strong>
            </div>
            <div style={{ padding: "20px", border: "1px solid rgba(18, 35, 63, 0.1)", borderRadius: "4px" }}>
              <span style={{ display: "block", color: "var(--gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Pricing Signal</span>
              <strong style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 500 }}>From ₹1,500 / student</strong>
            </div>
          </div>

          <div style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(18, 35, 63, 0.85)" }}>
            <p style={{ marginBottom: "20px" }}>
              AVASA's Living Classrooms programs take learning outside the traditional four walls, placing students directly inside Kerala's natural ecosystems. Our programs are designed in partnership with experienced educators to combine physical adventure with curricular modules. Through hands-on activities, students explore forest biology, geography, and resource sustainability.
            </p>
            <p>
              Beyond science, our wilderness camps emphasize leadership development, cooperative problem solving, and resilience. Students sleep under canvas tents, build rafts, manage campfire cooking, and navigate jungle paths under the direct guidance of certified wilderness first responders.
            </p>
          </div>
        </div>
      </section>

      {/* Details & What's Included */}
      <section className="pinned-split">
        <div className="pinned-left">
          <h2>The Program in Detail</h2>
          <p>
            An integrated program combining physical safety, structured lesson plans, and memorable wilderness experiences.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link href="/living-classrooms" style={{ color: "var(--gold)", textDecoration: "underline", display: "block", marginBottom: "12px" }}>&larr; Back to Living Classrooms main</Link>
            <Link href="/living-classrooms/corporate-programs" style={{ color: "var(--gold)", textDecoration: "underline", display: "block" }}>Check out Corporate programs &rarr;</Link>
          </div>
        </div>
        
        <div className="pinned-right">
          <div className="offer-list">
            <div className="offer-item">
              <h3>Curricular Integration</h3>
              <p>Practical forest field study modules addressing environmental science, geology, and biodiversity, mapping directly to ICSE, CBSE, and IB curriculums.</p>
            </div>
            
            <div className="offer-item">
              <h3>Wilderness Survival &amp; Bushcraft</h3>
              <p>Students learn practical skills like shelter design, safety knotting, orienteering, clean firecraft, and water filtration protocols.</p>
            </div>

            <div className="offer-item">
              <h3>Cooperative Team Runs</h3>
              <p>Collaborative exercises including bamboo rafting, stability ropes courses, and navigation maps designed to build mutual trust and leadership.</p>
            </div>

            <div className="offer-item">
              <h3>Full-Board Camping Setup</h3>
              <p>Safe tent accommodations, healthy locally-cooked meals, and private, gender-segregated toilets staffed with round-the-clock safety coordinators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Caught in the Field</h2>
        <div className="gallery-grid">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-img">
                <img 
                  src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=600&q=80`} 
                  alt={`Students participating in outdoor learning camp Kerala — ${photo.title}`} 
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

      {/* Safety & Ratios */}
      <section className="pinned-split" style={{ background: "var(--navy-deep)", color: "var(--sand)" }}>
        <div className="pinned-left" style={{ color: "var(--sand)" }}>
          <span className="eyebrow">Safety Framework</span>
          <h2 style={{ color: "var(--sand)" }}>Uncompromised Care</h2>
          <p style={{ color: "rgba(237, 232, 220, 0.75)" }}>
            Our school programs follow strict risk mitigation strategies, maintaining the highest safety ratios and medical setups in the country. Read more in <Link href="/how-we-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>our safety policies</Link>.
          </p>
        </div>
        
        <div className="pinned-right" style={{ borderColor: "rgba(237, 232, 220, 0.1)" }}>
          <div className="care-list" style={{ color: "var(--sand)" }}>
            <li className="safety-coda-item">
              <UserGroupIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>1:8 Guide-to-Student Ratio</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Small group structures ensure each student receives direct supervision and guidance during outdoor runs.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <ShieldIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Wilderness First Aid Support</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>Every campsite features a fully stocked medical kit, oxygen support, and certified WFA instructors ready to act.</p>
              </div>
            </li>
            <li className="safety-coda-item">
              <AcademicCapIcon />
              <div>
                <h3 style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0" }}>Risk Assessment Logs</h3>
                <p style={{ color: "rgba(237, 232, 220, 0.7)", fontSize: "14.5px", margin: 0 }}>We survey weather reports, trail conditions, and water levels daily, adapting schedules immediately for safety.</p>
              </div>
            </li>
          </div>
        </div>
      </section>

      {/* Specific FAQ Accordion Section */}
      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "var(--navy)" }}>School Programs FAQs</h2>
        <div className="faq-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className={`faq-item ${openFaqIndex === 0 ? "open" : ""}`} onClick={() => toggleFaq(0)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>What age groups are eligible for the Living Classrooms program?</span>
              <span className="faq-plus">{openFaqIndex === 0 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 0 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Programs are open to students from Grade 5 up to undergraduate level, with safety protocols, difficulty grades, and curriculum modules tailored to each age group.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 1 ? "open" : ""}`} onClick={() => toggleFaq(1)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>What safety precautions are in place for student groups?</span>
              <span className="faq-plus">{openFaqIndex === 1 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 1 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Every program maintains a strict 1:8 guide-to-student safety ratio. Instructors are certified in wilderness first aid (WFA) and swiftwater rescue, and we use certified CE/UIAA safety gear.
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaqIndex === 2 ? "open" : ""}`} onClick={() => toggleFaq(2)}>
            <div className="faq-q" style={{ color: "var(--navy)" }}>
              <span>Can AVASA deliver programs on our school campus?</span>
              <span className="faq-plus">{openFaqIndex === 2 ? "-" : "+"}</span>
            </div>
            {openFaqIndex === 2 && (
              <div className="faq-a" style={{ color: "rgba(18, 35, 63, 0.8)", paddingTop: "15px" }}>
                Yes, we run both on-campus challenge installations (ropes courses, climbing nets) and off-site expeditions at our Wayanad or Munnar base camps.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <div 
          className="bg" 
          style={{ backgroundImage: "url('/assets/images/living_classrooms_hero.webp')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h2>Transform learning outside.</h2>
          <button onClick={openEnquiry}>Plan a School Camp</button>
        </div>
      </section>
    </div>
  );
}
