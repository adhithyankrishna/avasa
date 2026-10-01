import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo-container">
            <Logo />
          </div>
          <p>
            Designing Experiences. Shaping Possibilities.
          </p>
        </div>
        
        <div className="footer-col">
          <h4>Explore</h4>
          <Link href="/living-classrooms">Living Classrooms</Link>
          <Link href="/adventure">Adventure</Link>
          <Link href="/habitat">Habitat</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/guides">Travel Guides</Link>
          <Link href="/how-we-care">Safety &amp; Care</Link>
        </div>
        
        <div className="footer-col">
          <h4>Contact Us</h4>
          <a href="tel:+916235800111">+91 6235 800 111</a>
          <a href="tel:+916235800222">+91 6235 800 222</a>
          <a href="https://wa.me/918075350104" target="_blank" rel="noopener noreferrer">
            WhatsApp: 8075 350 104
          </a>
        </div>
        
        <div className="footer-col">
          <h4>Follow AVASA</h4>
          <a href="https://www.instagram.com/avasa.experiences/" target="_blank" rel="noopener noreferrer">Instagram — @avasa.experiences</a>
          <a href="https://www.instagram.com/eagles__flight/" target="_blank" rel="noopener noreferrer">@eagles__flight</a>
          <div className="social-sub-links" style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
            <a href="https://www.instagram.com/tipitribe/" target="_blank" rel="noopener noreferrer" style={{ margin: 0 }}>@tipitribe</a>
            <span style={{ color: "rgba(245, 238, 226, 0.4)" }}>·</span>
            <a href="https://www.instagram.com/stingraytribe/" target="_blank" rel="noopener noreferrer" style={{ margin: 0 }}>@stingraytribe</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} AVASA Nature. All rights reserved.</span>
        <span>
          Experiences delivered across destinations. Projects delivered across India. Learning delivered wherever it's needed.
        </span>
      </div>
    </footer>
  );
}
