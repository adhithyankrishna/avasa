"use client";

import React, { useState, useEffect } from "react";

export default function EnquiryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    details: ""
  });

  useEffect(() => {
    // Listen for custom events to open the drawer from navbar
    const handleOpen = (e: Event) => {
      setIsOpen(true);
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.interest) {
        setInterest(customEvent.detail.interest);
        setStep(customEvent.detail.step || 2);
      } else {
        setStep(1);
      }
    };

    window.addEventListener("open-enquiry-drawer", handleOpen as EventListener);
    return () => {
      window.removeEventListener("open-enquiry-drawer", handleOpen as EventListener);
    };
  }, []);

  const selectOption = (opt: string) => {
    setInterest(opt);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending enquiry data...
    setStep(3);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  // Determine custom placeholder based on selected option
  const getDetailsPlaceholder = () => {
    if (interest.includes("stay")) {
      return "Which stays (Tipi Tribe, Stingray Tribe) and dates are you planning?";
    }
    if (interest.includes("program")) {
      return "Tell us about your school, college, or corporate group size and goals...";
    }
    return "What kind of zipline, adventure net, or eco-infrastructure project do you need scoped?";
  };

  return (
    <>
      {/* Floating CTA Button (Bottom Right) */}
      <button id="sticky-cta" onClick={() => { setIsOpen(true); setStep(1); }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 10.742a3 3 0 114.12 4.12m0 0l2.34 2.34m-2.34-2.34l3.14-3.14m-5.8-1.95L3.3 5.684a3 3 0 114.12-4.12l3.14 3.14M5.684 3.3l5.8 5.8m0 0a3 3 0 104.12 4.12"
          />
        </svg>
        <span>Let's talk</span>
      </button>

      {/* Slide-out Drawer Overlay */}
      <div className={`drawer-overlay-wrapper ${isOpen ? "active" : ""}`} id="drawer-overlay" onClick={(e) => {
        if ((e.target as HTMLElement).id === "drawer-overlay") closeDrawer();
      }}>
        <div id="drawer">
          <div className="drawer-header">
            <h3>AVASA Enquiry</h3>
            <span className="drawer-close" onClick={closeDrawer}>&times;</span>
          </div>

          {/* STEP 1: Select Topic */}
          <div className={`chat-step ${step === 1 ? "active" : ""}`} id="step-1">
            <p className="chat-prompt">What are you looking for?</p>
            <div className="chat-options">
              <button className="chat-btn" onClick={() => selectOption("Book a stay or experience")}>
                Book a stay or experience
              </button>
              <button className="chat-btn" onClick={() => selectOption("Plan a school or corporate program")}>
                Plan a school or corporate program
              </button>
              <button className="chat-btn" onClick={() => selectOption("Discuss a project or installation")}>
                Discuss a project or installation
              </button>
            </div>
          </div>

          {/* STEP 2: Input Details */}
          <div className={`chat-step ${step === 2 ? "active" : ""}`} id="step-2">
            <p className="chat-prompt">
              Tell us more about <strong id="selected-type-label" style={{ color: "var(--gold)" }}>{interest}</strong>:
            </p>
            <form className="chat-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Contact Number"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
              />
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                id="enquiry-details"
                placeholder={getDetailsPlaceholder()}
                rows={4}
                required
              />
              
              <button type="submit" className="btn-submit">
                Submit Enquiry
              </button>
            </form>
            <div className="chat-back" onClick={() => setStep(1)}>
              &larr; Back to options
            </div>
          </div>

          {/* STEP 3: Success Confirmation */}
          <div className={`chat-step ${step === 3 ? "active" : ""}`} id="step-3">
            <div className="chat-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h4>Thank you</h4>
              <p>
                An AVASA experience designer will reach out to you within 24 hours to review options and details.
              </p>
              <button
                className="btn-submit"
                style={{ marginTop: "30px", width: "100%" }}
                onClick={closeDrawer}
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
