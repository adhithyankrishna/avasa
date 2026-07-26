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
            Experience & Beyond. Creating immersive, purposeful, and transformative nature encounters.
          </p>
        </div>
        
        <div className="footer-col">
          <h4>Explore</h4>
          <Link href="/living-classrooms">Living Classrooms</Link>
          <Link href="/adventure">Adventure</Link>
          <Link href="/habitat">Habitat</Link>
          <Link href="/projects">Projects & Consulting</Link>
        </div>
        
        <div className="footer-col">
          <h4>Contact Us</h4>
          <a href="tel:6235800111">6235 800 111</a>
          <a href="tel:6235800222">6235 800 222</a>
          <a href="https://wa.me/918075350104" target="_blank" rel="noopener noreferrer">
            WhatsApp: 8075 350 104
          </a>
        </div>
        
        <div className="footer-col">
          <h4>Follow AVASA</h4>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram — @avasa.experiences</a>
          <a href="#" target="_blank" rel="noopener noreferrer">@eagles__flight</a>
          <a href="#" target="_blank" rel="noopener noreferrer">@tipitribe · @stingraytribe</a>
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
