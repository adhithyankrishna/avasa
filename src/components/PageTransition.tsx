"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Logo from "./Logo";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [themeClass, setThemeClass] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Map routes to visual themes
  useEffect(() => {
    if (pathname.includes("living-classrooms")) {
      setThemeClass("theme-sage");
    } else if (pathname.includes("how-we-care")) {
      setThemeClass("theme-sage");
    } else if (pathname.includes("adventure")) {
      setThemeClass("theme-navy-dark");
    } else if (pathname.includes("habitat")) {
      setThemeClass("theme-teal");
    } else if (pathname.includes("projects")) {
      setThemeClass("theme-gold-navy");
    } else {
      setThemeClass("");
    }
  }, [pathname]);

  // Run mist-clearing transition on route changes
  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay || !logo) return;

    // Reset scroll to top
    window.scrollTo(0, 0);

    // Initial state: overlay covers screen, logo visible
    gsap.set(overlay, { y: "0%", pointerEvents: "auto" });
    gsap.set(logo, { opacity: 1, scale: 1 });
    document.body.style.overflow = "hidden";

    // Animate mist clearing away upwards
    const tl = gsap.timeline({
      delay: 0.2,
      onComplete: () => {
        document.body.style.overflow = "auto";
        gsap.set(overlay, { pointerEvents: "none" });
      }
    });

    tl.to(logo, {
      opacity: 0,
      scale: 1.1,
      duration: 0.4,
      ease: "power2.in"
    })
    .to(overlay, {
      y: "-100%",
      duration: 0.8,
      ease: "power3.inOut"
    }, "-=0.2");

  }, [pathname]);

  return (
    <div className={themeClass}>
      {/* Cinematic Mist Page Transition Overlay */}
      <div ref={overlayRef} id="mist-transition">
        <div ref={logoRef} className="mist-logo">
          <Logo />
        </div>
      </div>
      
      {/* Page Content */}
      <div className="page-content-wrapper">
        {children}
      </div>
    </div>
  );
}
