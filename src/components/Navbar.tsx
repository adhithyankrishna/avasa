"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check initial scroll or route
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Trigger scroll check on mount in case page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Open Enquiry Drawer via event dispatching (modular approach)
  const openEnquiry = () => {
    window.dispatchEvent(new CustomEvent("open-enquiry-drawer"));
  };

  return (
    <>
      <nav className={scrolled ? "nav-scrolled" : "nav-transparent"}>
        {/* Hamburger Menu Toggle (Mobile only) */}
        <button className="nav-menu-btn" aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-hamburger-svg">
            <line x1="3.75" y1="6.75" x2="20.25" y2="6.75" strokeLinecap="round" className={`nav-hamburger-line top-line ${menuOpen ? "open" : ""}`} />
            <line x1="3.75" y1="12" x2="20.25" y2="12" strokeLinecap="round" className={`nav-hamburger-line mid-line ${menuOpen ? "open" : ""}`} />
            <line x1="3.75" y1="17.25" x2="20.25" y2="17.25" strokeLinecap="round" className={`nav-hamburger-line bot-line ${menuOpen ? "open" : ""}`} />
          </svg>
        </button>

        {/* Left Links */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/living-classrooms">Living Classrooms</Link>
          <Link href="/adventure">Adventure</Link>
          <Link href="/habitat">Habitat</Link>
          <Link href="/projects">Projects</Link>
        </div>

        {/* Centered Logo Link */}
        <Link href="/" className="nav-logo-link">
          <Logo className="nav-logo" />
        </Link>

        {/* Right Action Button */}
        <div className="nav-action">
          <button onClick={openEnquiry} className="btn-enquire">
            Enquire Now
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`} onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains("mobile-menu-overlay")) setMenuOpen(false);
      }}>
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-header">
            <h3>AVASA</h3>
            <span className="mobile-menu-close" onClick={() => setMenuOpen(false)}>&times;</span>
          </div>
          <div className="mobile-menu-links">
            <Link href="/" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/living-classrooms" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Living Classrooms</Link>
            <Link href="/adventure" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Adventure</Link>
            <Link href="/habitat" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Habitat</Link>
            <Link href="/projects" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Projects</Link>
          </div>
        </div>
      </div>
    </>
  );
}
