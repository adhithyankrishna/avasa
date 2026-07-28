"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Curated list of 40 cinematic nature/adventure photos from Unsplash for the photo scatter
const PHOTO_IDS = [
  "photo-1522163182402-834f871fd851", // Ziplines/climbing
  "photo-1501555088652-021faa106b9b", // Mountain path
  "photo-1473448912268-2022ce9509d8", // Misty trees
  "photo-1476514525535-07fb3b4ae5f1", // Kayak lake
  "photo-1504280390367-361c6d9f38f4", // Cozy glamping
  "photo-1448375240586-882707db888b", // Sunlit forest
  "photo-1526491109672-74740652b963", // Geodesic dome
  "photo-1508873696983-2df519f0397e", // Guide checking ropes
  "photo-1464822759023-fed622ff2c3b", // Peak view
  "photo-1544551763-46a013bb70d5", // Kayak close up
  "photo-1434064511983-18c6dae20ed5", // Rising valley fog
  "photo-1470246973918-29a93221c455", // Forest pathway
  "photo-1510312305653-8ed496efae75", // Dappled fire night
  "photo-1496080174650-637e3f24fa03", // Tree net suspension
  "photo-1475113548554-5a36f1f523d6", // River rafting
  "photo-1533240332313-0db49b439ad3", // Pine light beams
  "photo-1504917595217-d4dc5ebe6122", // Anchors & ropes
  "photo-1581094288338-2314dddb7ecc", // Detailing steel
  "photo-1486406146926-c627a92ad1ab", // Raw engineering
  "photo-1506744038136-46273834b3fb", // Wilderness hills
  "photo-1518495973542-4542c06a5843", // Rainforest green
  "photo-1478131148053-7667689d3112", // Cozy tipi yurt
  "photo-1454496522488-7a8e488e8606", // Snowy ridgeline
  "photo-1470770841072-f978cf4d019e", // Morning wooden deck
  "photo-1520250497591-112f2f40a3f4", // Treetop platform
  "photo-1530866495561-507c9faab2ed", // Canoe reflections
  "photo-1519681393784-d120267933ba", // Starry sky camp
  "photo-1522071820081-009f0129c71c", // Forest classroom group
  "photo-1516259762381-22954d7d3ad2", // Clearing trail
  "photo-1501785888041-af3ef285b470", // Misty lake deck
  "photo-1472289065668-ce650ac443d2", // Mapping wood bark
  "photo-1471115853179-bb1d604434e0", // Sunset camp chair
  "photo-1517824806704-9040b037703b", // Morning kayak river
  "photo-1542601906990-b4d3fb778b09", // Architectural eco lodges
  "photo-1533588841144-7486a55c13f9", // Rope harness knot
  "photo-1508193638397-1c4234db14d8", // High walk bridge
  "photo-1513694203232-719a280e022f", // Tent light interior
  "photo-1549558549-415fa4bc3586", // River waves splash
  "photo-1426604966848-d7adac402bff", // Clear mountain pool
  "photo-1527853787696-f7be74f2e39a"  // Pine needles close-up
];

export default function Homepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const mouseMoveHandlers: { el: any; move: any; leave: any }[] = [];
    const mm = gsap.matchMedia(containerRef);

    mm.add({
      isDesktop: "(min-width: 901px)",
      isMobile: "(max-width: 900px)"
    }, (context) => {
      const { isDesktop, isMobile } = context.conditions as { isDesktop: boolean; isMobile: boolean };

      // ----------------------------------------------------
      // 1. Homepage Hero Parallax Timeline
      // ----------------------------------------------------
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-wrap",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      if (isDesktop) {
        heroTimeline.to("#hero-container .layer.hill-back", {
          scale: 1.25,
          y: "5%",
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .layer.bridge-mid", {
          scale: 1.3,
          x: "15%",
          y: "8%",
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .layer.dome-tent", {
          scale: 2.4,
          x: "-35%",
          y: "30%",
          opacity: 0,
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .hero-content", {
          y: "-100px",
          opacity: 0,
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .hero-quick-nav", {
          y: "80px",
          opacity: 0,
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .layer.mist-fog", {
          opacity: 1,
          scale: 1.8,
          ease: "none"
        }, 0.25);

        heroTimeline.to("#hero-container .layer.vignette-overlay", {
          opacity: 0,
          ease: "none"
        }, 0.4);
      } else {
        // Mobile simplified parallax (smooth and GPU friendly)
        heroTimeline.to("#hero-container .layer.hill-back", {
          scale: 1.1,
          y: "2%",
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .layer.bridge-mid", {
          scale: 1.1,
          x: "5%",
          y: "3%",
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .layer.dome-tent", {
          scale: 1.25,
          x: "-5%",
          y: "5%",
          opacity: 0,
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .hero-content", {
          y: "-30px",
          opacity: 0,
          ease: "none"
        }, 0);

        heroTimeline.to("#hero-container .layer.mist-fog", {
          opacity: 1,
          scale: 1.3,
          ease: "none"
        }, 0.2);
      }

      // ----------------------------------------------------
      // 2. Welcome Page Fade In
      // ----------------------------------------------------
      gsap.fromTo("#welcome p",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#welcome",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // ----------------------------------------------------
      // 3. Unified Pillars Showcase
      // ----------------------------------------------------
      if (isDesktop) {
        const showcaseTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#pillars-showcase-pin",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        // Showcase Title drifts right and fades
        showcaseTimeline.to("#pillars-showcase-pin .showcase-title", {
          x: 350,
          opacity: 0,
          ease: "power1.inOut",
          duration: 1
        }, 0);

        // Cards fly in like a train from Z-depth
        showcaseTimeline.fromTo("#pillars-showcase-pin .pillar-card",
          {
            z: -1200,
            rotateY: -45,
            y: 150,
            opacity: 0
          },
          {
            z: 0,
            rotateY: 0,
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 1,
            ease: "power2.out"
          },
          0
        );

        showcaseTimeline.to({}, { duration: 0.4 });

        // --- STEP 1: Living Classrooms ---
        showcaseTimeline.to(".showcase-bg-layer.bg-living", { opacity: 1, duration: 0.8 }, ">");
        showcaseTimeline.to(".cards-row .card-living", { scale: 2.2, opacity: 0, duration: 0.8 }, "<");
        showcaseTimeline.to(".cards-row .card-adventure, .cards-row .card-habitat, .cards-row .card-projects", {
          x: "16vw",
          scale: 0.72,
          duration: 0.8
        }, "<");
        showcaseTimeline.to(".block-living", { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.8 }, "-=0.4");
        showcaseTimeline.to({}, { duration: 0.8 });

        // --- STEP 2: Adventure ---
        showcaseTimeline.to(".block-living", { opacity: 0, y: -30, pointerEvents: "none", duration: 0.6 }, ">");
        showcaseTimeline.to(".showcase-bg-layer.bg-living", { opacity: 0, duration: 0.8 }, "<");
        showcaseTimeline.to(".showcase-bg-layer.bg-adventure", { opacity: 1, duration: 0.8 }, "<");
        showcaseTimeline.to(".cards-row .card-adventure", { scale: 2.2, opacity: 0, x: "0vw", duration: 0.8 }, "<");
        showcaseTimeline.to(".block-adventure", { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.8 }, "-=0.4");
        showcaseTimeline.to({}, { duration: 0.8 });

        // --- STEP 3: Habitat ---
        showcaseTimeline.to(".block-adventure", { opacity: 0, y: -30, pointerEvents: "none", duration: 0.6 }, ">");
        showcaseTimeline.to(".showcase-bg-layer.bg-adventure", { opacity: 0, duration: 0.8 }, "<");
        showcaseTimeline.to(".showcase-bg-layer.bg-habitat", { opacity: 1, duration: 0.8 }, "<");
        showcaseTimeline.to(".cards-row .card-habitat", { scale: 2.2, opacity: 0, x: "0vw", duration: 0.8 }, "<");
        showcaseTimeline.to(".block-habitat", { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.8 }, "-=0.4");
        showcaseTimeline.to({}, { duration: 0.8 });

        // --- STEP 4: Projects ---
        showcaseTimeline.to(".block-habitat", { opacity: 0, y: -30, pointerEvents: "none", duration: 0.6 }, ">");
        showcaseTimeline.to(".showcase-bg-layer.bg-habitat", { opacity: 0, duration: 0.8 }, "<");
        showcaseTimeline.to(".showcase-bg-layer.bg-projects", { opacity: 1, duration: 0.8 }, "<");
        showcaseTimeline.to(".cards-row .card-projects", { scale: 2.2, opacity: 0, x: "0vw", duration: 0.8 }, "<");
        showcaseTimeline.to(".block-projects", { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.8 }, "-=0.4");
        showcaseTimeline.to({}, { duration: 3.0 });
      } else {
        // Mobile: merged card per pillar — image wipe reveal + staggered text, no pin/3D
        gsap.utils.toArray(".pillar-merged-card").forEach((card: any) => {
          const img = card.querySelector(".merged-card-img");
          const num = card.querySelector(".merged-card-num");
          const title = card.querySelector("h3");
          const rest = card.querySelectorAll(".merged-card-body p, .merged-card-body .pillar-link");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });

          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          tl.fromTo(img,
            reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" },
            reduce ? { opacity: 1, duration: 0.4 } : { clipPath: "inset(0 0 0% 0)", duration: 0.9, ease: "power3.out" }
          )
            .fromTo(num, { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
            .fromTo(title, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.35")
            .fromTo(rest, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }, "-=0.3");
        });
      }

      // ----------------------------------------------------
      // 4. Vision Fade In
      // ----------------------------------------------------
      gsap.fromTo("#vision h2",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#vision",
            start: "top 70%"
          }
        }
      );

      // ----------------------------------------------------
      // 5. 20-Photo Scatter Collage (Image Break)
      // ----------------------------------------------------
      const tilesContainer = document.getElementById("tile-container");
      if (tilesContainer) {
        tilesContainer.innerHTML = "";
        const tiles: HTMLDivElement[] = [];

        const localFallbacks = [
          "/assets/images/living_classrooms_hero.png",
          "/assets/images/adventure_hero.png",
          "/assets/images/habitat_hero.png",
          "/assets/images/projects_hero.png",
          "/assets/images/safety_gear.png",
          "/assets/images/safety_inspect.png",
          "/assets/images/misty_tea_hills.png"
        ];

        const totalTiles = 20;
        for (let i = 0; i < totalTiles; i++) {
          const tile = document.createElement("div");
          tile.className = "img-tile";
          const img = document.createElement("img");
          img.src = `https://images.unsplash.com/${PHOTO_IDS[i % PHOTO_IDS.length]}?auto=format&fit=crop&w=420&q=80`;
          img.loading = "lazy";
          img.alt = "AVASA Nature Scene";
          img.onerror = () => {
            img.src = localFallbacks[(i + 3) % localFallbacks.length];
          };
          tile.appendChild(img);
          tilesContainer.appendChild(tile);
          tiles.push(tile);
        }

        const cols = 6;
        const rows = 5;
        const cellW = 100 / cols;
        const cellH = 100 / rows;
        
        const cells: { r: number; c: number }[] = [];
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            cells.push({ r, c });
          }
        }

        // Shuffle cells
        for (let i = cells.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cells[i], cells[j]] = [cells[j], cells[i]];
        }

        const collageTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#image-break",
            start: "top top",
            end: "bottom bottom",
            scrub: true
          }
        });

        const startScale = isMobile ? 2.5 : 4.8;
        const finalScaleBase = isMobile ? 0.35 : 0.5;
        const finalScaleRange = isMobile ? 0.2 : 0.35;

        tiles.forEach((tile, i) => {
          const cell = cells[i % cells.length];
          let gridCol = cell.c;
          let gridRow = cell.r;

          // Displace tiles from absolute center to leave space for caption
          if (gridCol >= 2 && gridCol <= 3 && gridRow >= 1 && gridRow <= 3) {
            gridCol = gridCol < 3 ? gridCol - 2 : gridCol + 2;
          }

          const jitterX = (Math.random() - 0.5) * cellW * 0.4;
          const jitterY = (Math.random() - 0.5) * cellH * 0.4;
          const finalXPercent = (gridCol * cellW + cellW / 2 + jitterX - 50);
          const finalYPercent = (gridRow * cellH + cellH / 2 + jitterY - 50);

          const finalX = `${finalXPercent}vw`;
          const finalY = `${finalYPercent}vh`;

          const rotation = (Math.random() - 0.5) * 22;
          const scaleVal = finalScaleBase + Math.random() * finalScaleRange;

          const startProgress = (i / totalTiles) * 0.55;

          collageTimeline.fromTo(tile,
            {
              x: 0,
              y: 0,
              scale: startScale,
              opacity: 0,
              rotation: (Math.random() - 0.5) * 90
            },
            {
              x: finalX,
              y: finalY,
              scale: scaleVal,
              opacity: 1,
              rotation: rotation,
              ease: "none"
            },
            startProgress
          );
        });
      }

      // Center caption fade
      gsap.fromTo(".center-caption",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: "#image-break",
            start: "20% top",
            end: "70% top",
            scrub: true
          }
        }
      );

      // Care Teaser Section Fade In
      gsap.fromTo(".care-teaser-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".care-teaser-grid",
            start: "top 85%"
          }
        }
      );

      // 3D Tilt Effect on Care Teaser Items (Desktop only)
      if (isDesktop) {
        const teaserItems = gsap.utils.toArray(".care-teaser-item");
        teaserItems.forEach((item: any) => {
          const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;
            
            const maxRotation = 12; // Gentle and premium 3D rotation
            
            gsap.to(item, {
              duration: 0.35,
              transformPerspective: 800,
              rotateY: percentX * maxRotation,
              rotateX: -percentY * maxRotation,
              scale: 1.05, // Subtle size increase
              ease: "power2.out",
              overwrite: "auto"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(item, {
              duration: 0.5,
              transformPerspective: 800,
              rotateY: 0,
              rotateX: 0,
              scale: 1,
              ease: "power2.out",
              overwrite: "auto"
            });
          };

          item.addEventListener("mousemove", handleMouseMove);
          item.addEventListener("mouseleave", handleMouseLeave);
          mouseMoveHandlers.push({ el: item, move: handleMouseMove, leave: handleMouseLeave });
        });
      }

    });

    return () => {
      mm.revert();
      mouseMoveHandlers.forEach(({ el, move, leave }) => {
        if (el) {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        }
      });
    };
  }, []);

  // Simple local FAQ Accordion state handling
  const toggleFaq = (e: React.MouseEvent) => {
    const item = (e.currentTarget as HTMLElement).closest(".faq-item");
    if (!item) return;
    
    // Close other items
    const allItems = document.querySelectorAll(".faq-item");
    allItems.forEach(i => {
      if (i !== item && i.classList.contains("open")) {
        i.classList.remove("open");
      }
    });

    item.classList.toggle("open");
  };

  return (
    <div ref={containerRef}>
      {/* Page 1 — Homepage Hero (3D layered parallax) */}
      <div id="hero-wrap">
        <section id="hero-container">
          <div className="layer hill-back"></div>
          <div className="layer bridge-mid"></div>
          <div className="layer mist-fog"></div>
          <div className="layer dome-tent"></div>
          <div className="layer vignette-overlay"></div>
          
          <div className="hero-content">
            <h1 className="serif-title">Experiences &amp; Beyond</h1>
            <p>Immersive &middot; Purposeful &middot; Transformative</p>
          </div>
          
          <div className="scroll-cue">Scroll ↓</div>
          
          {/* Bottom quick navigation bar */}
          <div className="hero-quick-nav">
            <div className="quick-nav-bar">
              <Link href="/adventure" className="quick-nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l4.03 3.359a.75.75 0 01.272.575v12.122a.75.75 0 01-.75.75h-3.75a.75.75 0 01-.75-.75v-3.75a.75.75 0 00-.75-.75H9.75a.75.75 0 00-.75.75v3.75a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75V8.397a.75.75 0 01.273-.575l4.029-3.36a1.125 1.125 0 01.608-.263v-.568c0-.621.504-1.125 1.125-1.125h1.125c.621 0 1.125.504 1.125 1.125z" />
                </svg>
                <span>Adventure</span>
              </Link>
              <Link href="/habitat" className="quick-nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Stay</span>
              </Link>
              <Link href="/adventure" className="quick-nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 10.5h19.5M2.25 13.5h19.5m-16.5-9h13.5M3 19.5h18" />
                </svg>
                <span>Water</span>
              </Link>
              <Link href="/living-classrooms" className="quick-nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 017.218 5.84c-.808.236-1.693.509-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <span>School</span>
              </Link>
              <Link href="/projects" className="quick-nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span>Cooperate</span>
              </Link>
            </div>
            <div className="quick-nav-fade" />
          </div>
        </section>
      </div>

      {/* Brand Statement / Welcome */}
      <section id="welcome" className="section-pad">
        <span className="eyebrow">Experience &amp; Beyond</span>
        <p>
          Welcome to AVASA — where the world gets a little quieter, and life gives you real moments back.
        </p>
      </section>

      {/* Unified Pillars Showcase (Sequential Background Blending & Floating Right Previews) */}
      <section id="pillars-showcase-pin">
        <div className="showcase-pin-stage">
          {/* Layered Background Canvas */}
          <div className="showcase-bg-layers">
            <div className="showcase-bg-layer bg-living"></div>
            <div className="showcase-bg-layer bg-adventure"></div>
            <div className="showcase-bg-layer bg-habitat"></div>
            <div className="showcase-bg-layer bg-projects"></div>
            <div className="showcase-bg-overlay"></div>
          </div>

          <h2 className="showcase-title serif-title">The Four Pillars</h2>

          {/* Floating Cards (Shift to right side dynamically on scroll) */}
          <div className="cards-row">
            <div className="pillar-card card-living" onClick={() => router.push("/living-classrooms")} onTouchStart={() => {}}>
              <div className="card-bg" style={{ backgroundImage: "url('/assets/images/living_classrooms_hero.png')" }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <span className="card-num">01</span>
                <h3 className="card-title">Living Classrooms</h3>
                <p className="card-desc">Outdoor classes, camps, and team activities for schools and companies. Real learning, outside.</p>
              </div>
            </div>
            
            <div className="pillar-card card-adventure" onClick={() => router.push("/adventure")} onTouchStart={() => {}}>
              <div className="card-bg" style={{ backgroundImage: "url('/assets/images/adventure_hero.png')" }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <span className="card-num">02</span>
                <h3 className="card-title">Adventure</h3>
                <p className="card-desc">Zipline, kayaking, and trekking in Kerala's forests. Try Eagle's Flight, our longest zipline.</p>
              </div>
            </div>

            <div className="pillar-card card-habitat" onClick={() => router.push("/habitat")} onTouchStart={() => {}}>
              <div className="card-bg" style={{ backgroundImage: "url('/assets/images/habitat_hero.png')" }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <span className="card-num">03</span>
                <h3 className="card-title">Habitat</h3>
                <p className="card-desc">Sleep in a tree tent, dome, or tipi. Comfortable stays, close to nature.</p>
              </div>
            </div>

            <div className="pillar-card card-projects" onClick={() => router.push("/projects")} onTouchStart={() => {}}>
              <div className="card-bg" style={{ backgroundImage: "url('/assets/images/projects_hero.png')" }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <span className="card-num">04</span>
                <h3 className="card-title">Projects</h3>
                <p className="card-desc">We build ziplines, tree tents, and adventure parks for resorts and schools across India.</p>
              </div>
            </div>
          </div>

          {/* Sequential Text Blocks (Fades in on the left side) */}
          <div className="showcase-content-blocks">
            <div className="pillar-content block-living">
              <span className="eyebrow" style={{ color: "var(--sand)" }}>01 &mdash; Living Classrooms</span>
              <h2>The outdoors, as the curriculum.</h2>
              <p>Learning outside a classroom, in real forests and open land. We run outdoor camps and team programs for schools, colleges, and companies — hands-on, not just lectures.</p>
              <Link href="/living-classrooms" className="pillar-link">
                Explore Living Classrooms &rarr;
              </Link>
            </div>

            <div className="pillar-content block-adventure">
              <span className="eyebrow">02 &mdash; Adventure</span>
              <h2>Home to Eagle's Flight &mdash; India's longest zipline.</h2>
              <p>Home to Eagle's Flight, one of the longest ziplines in India. Try ziplining, kayaking, bamboo rafting, and guided treks across Kerala's forests and rivers.</p>
              <Link href="/adventure" className="pillar-link">
                Explore Adventure &rarr;
              </Link>
            </div>

            <div className="pillar-content block-habitat">
              <span className="eyebrow">03 &mdash; Habitat</span>
              <h2>Sleep among the treetops.</h2>
              <p>Sleep among the trees. Choose a tree tent, a glass dome, or a tipi — comfortable stays deep in nature, without giving up comfort.</p>
              <Link href="/habitat" className="pillar-link">
                Explore Habitat &rarr;
              </Link>
            </div>

            <div className="pillar-content block-projects">
              <span className="eyebrow">04 &mdash; Projects &amp; Consulting</span>
              <h2>We build the infrastructure others dream in.</h2>
              <p>We design and build adventure parks — ziplines, tree tents, and nature trails — for resorts, schools, and tourism projects across India.</p>
              <Link href="/projects" className="pillar-link">
                Explore Projects &rarr;
              </Link>
            </div>
          </div>

          {/* Mobile-only merged pillar cards — desktop uses .cards-row + .showcase-content-blocks above */}
          <div className="pillars-mobile-list">
            <div className="pillar-merged-card" onClick={() => router.push("/living-classrooms")}>
              <div className="merged-card-img" style={{ backgroundImage: "url('/assets/images/living_classrooms_hero.png')" }}></div>
              <div className="merged-card-body">
                <span className="merged-card-num">01</span>
                <h3>Living Classrooms</h3>
                <p>Learning outside a classroom, in real forests and open land. We run outdoor camps and team programs for schools, colleges, and companies — hands-on, not just lectures.</p>
                <Link href="/living-classrooms" className="pillar-link">Explore Living Classrooms &rarr;</Link>
              </div>
            </div>

            <div className="pillar-merged-card" onClick={() => router.push("/adventure")}>
              <div className="merged-card-img" style={{ backgroundImage: "url('/assets/images/adventure_hero.png')" }}></div>
              <div className="merged-card-body">
                <span className="merged-card-num">02</span>
                <h3>Adventure</h3>
                <p>Home to Eagle's Flight, one of the longest ziplines in India. Try ziplining, kayaking, bamboo rafting, and guided treks across Kerala's forests and rivers.</p>
                <Link href="/adventure" className="pillar-link">Explore Adventure &rarr;</Link>
              </div>
            </div>

            <div className="pillar-merged-card" onClick={() => router.push("/habitat")}>
              <div className="merged-card-img" style={{ backgroundImage: "url('/assets/images/habitat_hero.png')" }}></div>
              <div className="merged-card-body">
                <span className="merged-card-num">03</span>
                <h3>Habitat</h3>
                <p>Sleep among the trees. Choose a tree tent, a glass dome, or a tipi — comfortable stays deep in nature, without giving up comfort.</p>
                <Link href="/habitat" className="pillar-link">Explore Habitat &rarr;</Link>
              </div>
            </div>

            <div className="pillar-merged-card" onClick={() => router.push("/projects")}>
              <div className="merged-card-img" style={{ backgroundImage: "url('/assets/images/projects_hero.png')" }}></div>
              <div className="merged-card-body">
                <span className="merged-card-num">04</span>
                <h3>Projects</h3>
                <p>We design and build adventure parks — ziplines, tree tents, and nature trails — for resorts, schools, and tourism projects across India.</p>
                <Link href="/projects" className="pillar-link">Explore Projects &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision C closing title card */}
      <section id="vision" className="section-pad">
        <span className="eyebrow">Decade Ten</span>
        <h2>
          Over the next decade, AVASA aims to become a leading experience design company across South Asia and the Middle East — building a globally recognised brand that inspires curiosity and leaves a lasting positive impact.
        </h2>
      </section>

      {/* Exploding Cascading Photo Mosaic Section */}
      <section id="image-break">
        <div className="pin-stage">
          <div className="stage-label">Adventure &middot; Habitat &middot; Living Classrooms &middot; Projects</div>
          <div className="center-caption">
            <h3 className="serif-title">Every experience, one story</h3>
            <span>Scroll to Settle</span>
          </div>
          <div id="tile-container">
            {/* 40 photo tiles will dynamically scatter here via JS on scroll */}
          </div>
        </div>
      </section>

      {/* Care Teaser Section */}
      <section className="care-teaser section-pad" style={{ background: "var(--navy-deep)", color: "var(--sand)", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span className="eyebrow">How We Take Care of You</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, fontFamily: "var(--serif-font)", marginBottom: "40px" }}>You focus on the adventure. We handle the rest.</h2>
          <div className="care-teaser-grid">
            <div className="care-teaser-item">
              <span className="care-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </span>
              <p>Certified safety gear, checked daily</p>
            </div>
            <div className="care-teaser-item">
              <span className="care-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125a1.125 1.125 0 001.125-1.125V9.75M8.25 18.75a1.5 1.5 0 01-3 0m9 0a1.5 1.5 0 01-3 0M18.75 18.75h1.125A1.125 1.125 0 0021 17.625v-3.375m0 0V9.75m0 4.5H16.5M21 9.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 9.75v4.5m16.5-4.5V9a2.25 2.25 0 00-2.25-2.25H15M3.375 14.25h17.25m-17.25 0V9.75M3.375 14.25v2.25" />
                </svg>
              </span>
              <p>Transport to and from every location</p>
            </div>
            <div className="care-teaser-item">
              <span className="care-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </span>
              <p>Meals and refreshments included</p>
            </div>
            <div className="care-teaser-item">
              <span className="care-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px", color: "var(--gold)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25H4.5a2.25 2.25 0 00-2.25-2.25z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </span>
              <p>Photos and videos of your experience</p>
            </div>
          </div>
          <Link href="/how-we-care" className="pillar-link" style={{ display: "inline-block", marginTop: "20px" }}>See everything that's included &rarr;</Link>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="section-pad">
        <h2>Common Questions</h2>
        <div className="faq-container">
          <div className="faq-item" onClick={toggleFaq}>
            <div className="faq-q">
              <span>Is the activity or program safe?</span>
              <span className="faq-plus">+</span>
            </div>
            <div className="faq-a">
              Yes. Every activity uses certified safety gear, and every session is led by a trained guide. <Link href="/how-we-care">See everything we do to keep you safe.</Link>
            </div>
          </div>
          
          <div className="faq-item" onClick={toggleFaq}>
            <div className="faq-q">
              <span>Can the experience be customized for our group, school, or company?</span>
              <span className="faq-plus">+</span>
            </div>
            <div className="faq-a">
              Yes — program agendas, location trails, group sizes, difficulty levels, and stay setups can be fully customized to meet your goals and budget.
            </div>
          </div>
          
          <div className="faq-item" onClick={toggleFaq}>
            <div className="faq-q">
              <span>What is the minimum age or fitness requirement?</span>
              <span className="faq-plus">+</span>
            </div>
            <div className="faq-a">
              Requirements vary by activity — our booking team will recommend the right stay or adventure grade once we know your group's details.
            </div>
          </div>
          
          <div className="faq-item" onClick={toggleFaq}>
            <div className="faq-q">
              <span>Do you conduct programs at our school or location?</span>
              <span className="faq-plus">+</span>
            </div>
            <div className="faq-a">
              Yes — Living Classrooms programs can be delivered directly on-campus, or as off-site expeditions at an AVASA wilderness destination.
            </div>
          </div>
          
          <div className="faq-item" onClick={toggleFaq}>
            <div className="faq-q">
              <span>What are the available dates and destinations?</span>
              <span className="faq-plus">+</span>
            </div>
            <div className="faq-a">
              Experiences and stays run across Wayanad, Munnar, and Chaliyar. Infrastructure design and installation are delivered all across India.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
