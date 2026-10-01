"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "@/components/Logo";
import { useScrollLogoTransition } from "@/hooks/useScrollLogoTransition";

gsap.registerPlugin(ScrollTrigger);


const PHOTO_IDS = [
  "photo-1522163182402-834f871fd851", // Ziplines/climbing
  "photo-1501555088652-021faa106b9b", // Mountain path
  "photo-1473448912268-2022ce9509d8", // Misty trees
  "photo-1476514525535-07fb3b4ae5f1", // Kayak lake
  "photo-1504280390367-361c6d9f38f4", // Cozy glamping
  "photo-1448375240586-882707db888b", // Sunlit forest
  "photo-1526491109672-74740652b963", // Geodesic dome
  "photo-1775806577969-660831c6b273", // Bushcraft shelter
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
  "photo-1770240090990-0653176ee415", // Forest classroom group
  "photo-1645013283313-944128f03045", // Forest navigation map
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

  // Smooth dynamic-bounding-rect logo transition between hero and navbar
  useScrollLogoTransition({
    heroLogoId: "hero-logo-traveler",
    navLogoId: "nav-logo-target",
    taglineId: "hero-tagline-text",
    transitionDistance: 240,
  });

  useEffect(() => {
    // --- Passive Scroll Listener for Hero Section ---
    const heroWrap = document.getElementById("hero-wrap");
    const handleScroll = () => {
      if (!heroWrap) return;
      const rect = heroWrap.getBoundingClientRect();
      const runwayHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const maxScroll = runwayHeight - viewportHeight;

      let progress = 0;
      if (rect.top < 0) {
        progress = Math.min(1, Math.max(0, -rect.top / maxScroll));
      }
      heroWrap.style.setProperty("--scroll", progress.toFixed(4));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to handle initial scrolled state
    handleScroll();



    const mouseMoveHandlers: { el: any; move: any; leave: any }[] = [];
    const mm = gsap.matchMedia(containerRef);

    mm.add({
      isDesktop: "(min-width: 901px)",
      isMobile: "(max-width: 900px)"
    }, (context) => {
      const { isDesktop, isMobile } = context.conditions as { isDesktop: boolean; isMobile: boolean };

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
          );

          if (num) {
            tl.fromTo(num, { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3");
            tl.fromTo(title, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.35");
          } else {
            tl.fromTo(title, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3");
          }

          tl.fromTo(rest, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }, "-=0.3");
        });
      }

      // ----------------------------------------------------
      // 1. Vision Fade In
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
          "/assets/images/living_classrooms_hero.webp",
          "/assets/images/adventure_hero.webp",
          "/assets/images/habitat_hero.webp",
          "/assets/images/projects_hero.webp",
          "/assets/images/safety_gear.webp",
          "/assets/images/safety_inspect.webp",
          "/assets/images/misty_tea_hills.webp"
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
      window.removeEventListener("scroll", handleScroll);
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
      {/* Preload only the correct responsive assets based on device breakpoint */}
      <link rel="preload" href="/images/hero/background-desktop.webp" as="image" media="(min-width: 769px)" />
      <link rel="preload" href="/images/hero/background-mobile.webp" as="image" media="(max-width: 768px)" />
      <link rel="preload" href="/images/hero/tent-frame-desktop.webp" as="image" media="(min-width: 769px)" />
      <link rel="preload" href="/images/hero/tent-frame-mobile.webp" as="image" media="(max-width: 768px)" />

      {/* Combined Scroll-Driven Hero and Welcome Section */}
      <div id="hero-wrap">
        <section id="hero-container">
          {/* 1. Background scene */}
          <div className="layer tent-hero__background"></div>

          {/* 2. Tent frame */}
          <div className="layer tent-hero__frame"></div>

          {/* 3. Hero content */}
          <div className="layer hero-content-layer">
            <div className="hero-brand-center">
              <div id="hero-logo-traveler" className="hero-brand-logo-wrap">
                <Logo className="hero-brand-logo" />
              </div>
              <h1 id="hero-tagline-text" className="serif-title hero-brand-tagline">
                Designing Experiences. Shaping Possibilities.
              </h1>
            </div>

            {/* Bottom quick navigation bar */}


            <div className="scroll-cue">Scroll ↓</div>
          </div>

          {/* 4. Welcome content layer */}
          <div className="layer welcome-content-layer">
            <div className="hw__welcome-content">
              <span className="eyebrow">The AVASA Story</span>
              <p>
                AVASA creates experiences that bring people closer to nature, learning, adventure and one another.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* The AVASA Story & What We Do Intro Section */}
      <section className="section-pad" style={{ background: "var(--sand)", color: "var(--navy)", textAlign: "center" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <span className="eyebrow" style={{ color: "var(--gold)" }}>The AVASA Story</span>
          <h2 className="serif-title" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.25, marginBottom: "28px", color: "var(--navy)" }}>
            Experiences that stay with you.
          </h2>
          <p style={{ fontSize: "20px", fontStyle: "normal", fontWeight: 300, lineHeight: 1.6, marginBottom: "20px", color: "var(--navy)" }}>
            AVASA creates experiences that bring people closer to nature, learning, adventure and one another.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.75", color: "rgba(14, 67, 60, 0.85)", marginBottom: "20px" }}>
            From outdoor learning and adventure experiences to nature-based stays and experiential infrastructure, we design experiences that are immersive, purposeful and built to create lasting memories.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.75", color: "rgba(14, 67, 60, 0.85)", marginBottom: "64px" }}>
            Our work spans destinations, institutions, hospitality and communities, bringing together experience design, outdoor environments and thoughtful execution.
          </p>

          <span className="eyebrow" style={{ color: "var(--gold)" }}>What We Do</span>
          <h2 className="serif-title" style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.25, marginBottom: "20px", color: "var(--navy)" }}>
            Four ways we create experiences
          </h2>
          <p style={{ fontSize: "16.5px", lineHeight: "1.75", color: "rgba(14, 67, 60, 0.85)" }}>
            AVASA operates across four interconnected verticals, bridging education, wilderness immersion, sustainable hospitality, and bespoke spatial design.
          </p>
        </div>
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

          <h2 className="showcase-title serif-title">What We Do</h2>

          {/* Floating Cards (Shift to right side dynamically on scroll) */}
          <div className="cards-row">
            <div className="pillar-card card-living" onClick={() => router.push("/living-classrooms")} onTouchStart={() => { }}>
              <div className="card-bg" style={{ backgroundImage: "url('/assets/images/living_classrooms_hero.webp')" }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3 className="card-title">Living Classrooms</h3>
              </div>
            </div>

            <div className="pillar-card card-adventure" onClick={() => router.push("/adventure")} onTouchStart={() => { }}>
              <div className="card-bg" style={{ backgroundImage: "url('/assets/images/adventure_hero.webp')" }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3 className="card-title">Adventure</h3>
              </div>
            </div>

            <div className="pillar-card card-habitat" onClick={() => router.push("/habitat")} onTouchStart={() => { }}>
              <div className="card-bg" style={{ backgroundImage: "url('/assets/images/habitat_hero.webp')" }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3 className="card-title">Habitat</h3>
              </div>
            </div>

            <div className="pillar-card card-projects" onClick={() => router.push("/projects")} onTouchStart={() => { }}>
              <div className="card-bg" style={{ backgroundImage: "url('/assets/images/projects_hero.webp')" }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3 className="card-title">Projects</h3>
              </div>
            </div>
          </div>

          {/* Sequential Text Blocks (Fades in on the left side) */}
          <div className="showcase-content-blocks">
            <div className="pillar-content block-living">
              <span className="eyebrow" style={{ color: "var(--sand)" }}>Living Classrooms</span>
              <h2>The outdoors, as the curriculum</h2>
              <p>Experiential, curriculum-linked learning outdoors through field studies, challenge, and direct engagement with the wild.</p>
              <p className="pillar-audience">For progressive schools, universities and institutions.</p>
              <div className="pillar-highlights">
                <span>Field science, conservation and habitat studies</span>
                <span>Applied STEM &amp; Field Studies</span>
                <span>Leadership &amp; Problem-Solving</span>
              </div>
              <Link href="/living-classrooms" className="pillar-link">
                Explore Living Classrooms &rarr;
              </Link>
            </div>

            <div className="pillar-content block-adventure">
              <span className="eyebrow">Adventure</span>
              <h2>Adventure begins beyond the familiar</h2>
              <p>Active expeditions and backcountry journeys designed to build resilience, perspective, and deep ecological connection.</p>
              <div className="pillar-highlights">
                <span>Canopy Flight &amp; High Ropes</span>
                <span>Water Sports</span>
                <span>Backcountry Trekking &amp; Navigation</span>
              </div>
              <Link href="/adventure" className="pillar-link">
                Explore Adventure &rarr;
              </Link>
            </div>

            <div className="pillar-content block-habitat">
              <span className="eyebrow">Habitat</span>
              <h2>Live closer to the landscape</h2>
              <p>Low-impact stays and eco-retreats embedded directly into the landscape, balancing elemental comfort with authentic character.</p>
              <div className="pillar-highlights">
                <span>Canopy Living</span>
                <span>Modular Ground Stays</span>
                <span>Elemental Eco-Sanctuaries</span>
              </div>
              <Link href="/habitat" className="pillar-link">
                Explore Habitat &rarr;
              </Link>
            </div>

            <div className="pillar-content block-projects">
              <span className="eyebrow">Projects</span>
              <h2>We build what experience demands.</h2>
              <p>Turnkey design and build of eco-experiential infrastructure for campuses, hospitality brands, and nature destinations.</p>
              <div className="pillar-highlights">
                <span>Suspended Canopy Nets &amp; Walkways</span>
                <span>Commercial Ziplines &amp; High-Angle Adventure</span>
                <span>Master Site Planning &amp; Leave-No-Trace Execution</span>
              </div>
              <Link href="/projects" className="pillar-link">
                Explore Projects &rarr;
              </Link>
            </div>
          </div>

          {/* Mobile-only merged pillar cards — desktop uses .cards-row + .showcase-content-blocks above */}
          <div className="pillars-mobile-list">
            <div className="pillar-merged-card" onClick={() => router.push("/living-classrooms")}>
              <div className="merged-card-img" style={{ backgroundImage: "url('/assets/images/living_classrooms_hero.webp')" }}></div>
              <div className="merged-card-body">
                <h3>Living Classrooms</h3>
                <p>Experiential, curriculum-linked learning outdoors through field studies, challenge, and direct engagement with the wild.</p>
                <p className="pillar-audience">For progressive schools, universities and institutions.</p>
                <div className="pillar-highlights">
                  <span>Field science, conservation and habitat studies</span>
                  <span>Applied STEM &amp; Field Studies</span>
                  <span>Leadership &amp; Problem-Solving</span>
                </div>
                <Link href="/living-classrooms" className="pillar-link">Explore Living Classrooms &rarr;</Link>
              </div>
            </div>

            <div className="pillar-merged-card" onClick={() => router.push("/adventure")}>
              <div className="merged-card-img" style={{ backgroundImage: "url('/assets/images/adventure_hero.webp')" }}></div>
              <div className="merged-card-body">
                <h3>Adventure</h3>
                <p>Active expeditions and backcountry journeys designed to build resilience, perspective, and deep ecological connection.</p>
                <div className="pillar-highlights">
                  <span>Canopy Flight &amp; High Ropes</span>
                  <span>Water Sports</span>
                  <span>Backcountry Trekking &amp; Navigation</span>
                </div>
                <Link href="/adventure" className="pillar-link">Explore Adventure &rarr;</Link>
              </div>
            </div>

            <div className="pillar-merged-card" onClick={() => router.push("/habitat")}>
              <div className="merged-card-img" style={{ backgroundImage: "url('/assets/images/habitat_hero.webp')" }}></div>
              <div className="merged-card-body">
                <h3>Habitat</h3>
                <p>Low-impact stays and eco-retreats embedded directly into the landscape, balancing elemental comfort with authentic character.</p>
                <div className="pillar-highlights">
                  <span>Canopy Living</span>
                  <span>Modular Ground Stays</span>
                  <span>Elemental Eco-Sanctuaries</span>
                </div>
                <Link href="/habitat" className="pillar-link">Explore Habitat &rarr;</Link>
              </div>
            </div>

            <div className="pillar-merged-card" onClick={() => router.push("/projects")}>
              <div className="merged-card-img" style={{ backgroundImage: "url('/assets/images/projects_hero.webp')" }}></div>
              <div className="merged-card-body">
                <h3>Projects</h3>
                <p>Turnkey design and build of eco-experiential infrastructure for campuses, hospitality brands, and nature destinations.</p>
                <div className="pillar-highlights">
                  <span>Suspended Canopy Nets &amp; Walkways</span>
                  <span>Commercial Ziplines &amp; High-Angle Adventure</span>
                  <span>Master Site Planning &amp; Leave-No-Trace Execution</span>
                </div>
                <Link href="/projects" className="pillar-link">Explore Projects &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision C closing title card / Our Philosophy */}
      <section id="vision" className="section-pad">
        <span className="eyebrow">Our Philosophy</span>
        <h2>We believe the best experiences are lived, not explained.</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "800px", margin: "32px auto 0", color: "rgba(245, 238, 226, 0.85)" }}>
          AVASA operates at the intersection of nature, human curiosity, and low-impact spatial design. We create living environments where people disconnect from noise to truly observe, participate, and adapt.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "800px", margin: "20px auto 0", color: "rgba(245, 238, 226, 0.85)" }}>
          Whether it is a student navigating a raw backcountry trail, a guest waking up suspended within the canopy, or a destination brand reimagining its ecological identity, our principle is unyielding.
        </p>
        <p style={{ fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, color: "var(--gold)", margin: "40px auto 0", lineHeight: 2.2 }}>
          MAKE IT MEANINGFUL.<br />
          MAKE IT IMMERSIVE.<br />
          MAKE IT MEMORABLE.
        </p>
      </section>

      {/* Exploding Cascading Photo Mosaic Section */}
      <section id="image-break">
        <div className="pin-stage">
          <div className="stage-label">Adventure &middot; Habitat &middot; Living Classrooms &middot; Projects</div>
          <div className="center-caption">
            <h3 className="serif-title">From ideas to experiences.</h3>
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "30px", height: "30px", color: "var(--gold)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </span>
              <p>Certified safety gear, checked daily</p>
            </div>
            <div className="care-teaser-item">
              <span className="care-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "30px", height: "30px", color: "var(--gold)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.948c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V14.25m0 0h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                </svg>
              </span>
              <p>Transport to and from every location</p>
            </div>
            <div className="care-teaser-item">
              <span className="care-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "30px", height: "30px", color: "var(--gold)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v1.5m0 0a7.5 7.5 0 0 1 7.5 7.5v1.5H4.5V13.5A7.5 7.5 0 0 1 12 6zm-9 10.5h18a1.5 1.5 0 0 1 1.5 1.5v.75a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-.75A1.5 1.5 0 0 1 3 15z" />
                </svg>
              </span>
              <p>Meals and refreshments included</p>
            </div>
            <div className="care-teaser-item">
              <span className="care-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "30px", height: "30px", color: "var(--gold)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
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
