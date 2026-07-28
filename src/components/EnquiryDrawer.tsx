"use client";

import React, { useState, useEffect } from "react";

export default function EnquiryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [exitingStep, setExitingStep] = useState<number | null>(null);
  const [interest, setInterest] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    details: ""
  });

  const transitionToStep = (nextStep: number) => {
    setExitingStep(activeStep);
    setTimeout(() => {
      setActiveStep(nextStep);
      setExitingStep(null);
    }, 150);
  };

  useEffect(() => {
    // Listen for custom events to open the drawer from navbar
    const handleOpen = (e: Event) => {
      setIsOpen(true);
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.interest) {
        setInterest(customEvent.detail.interest);
        setActiveStep(customEvent.detail.step || 2);
      } else {
        setActiveStep(1);
      }
      setExitingStep(null);
    };

    window.addEventListener("open-enquiry-drawer", handleOpen as EventListener);
    return () => {
      window.removeEventListener("open-enquiry-drawer", handleOpen as EventListener);
    };
  }, []);

  const selectOption = (opt: string) => {
    setInterest(opt);
    transitionToStep(2);
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
    transitionToStep(3);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setTimeout(() => {
      setActiveStep(1);
      setExitingStep(null);
    }, 500);
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
      <button id="sticky-cta" onClick={() => { setIsOpen(true); setActiveStep(1); setExitingStep(null); }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          style={{ width: "20px", height: "20px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
          <div className={`chat-step ${activeStep === 1 ? "active" : ""} ${exitingStep === 1 ? "exiting" : ""}`} id="step-1">
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
          <div className={`chat-step ${activeStep === 2 ? "active" : ""} ${exitingStep === 2 ? "exiting" : ""}`} id="step-2">
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
            <div className="chat-back" onClick={() => transitionToStep(1)}>
              &larr; Back to options
            </div>
          </div>

          {/* STEP 3: Success Confirmation */}
          <div className={`chat-step ${activeStep === 3 ? "active" : ""} ${exitingStep === 3 ? "exiting" : ""}`} id="step-3">
            <div className="chat-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="chat-success-icon"
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
