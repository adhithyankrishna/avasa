"use client";

import React, { useState, useEffect } from "react";

const BUSINESS_WHATSAPP_NUMBER = "918075350104";

// Premium SVGs for Contact Methods
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="connect-icon-svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="connect-icon-svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 5.99 5.99 0 011.002-3.007C3.128 15.602 2.25 13.9 2.25 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="connect-icon-svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.248 1.248 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export default function EnquiryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1); // Steps: 1 (Intent), 2 (Contact Method), 3a (Callback), 3b (WhatsApp), 4 (Callback Success)
  const [exitingStep, setExitingStep] = useState<number | null>(null);
  const [interest, setInterest] = useState("");
  
  // Persisted form inputs within session
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const TIME_SLOTS = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  // Helper for transition animations between steps
  const transitionToStep = (nextStep: number) => {
    setExitingStep(activeStep);
    setTimeout(() => {
      setActiveStep(nextStep);
      setExitingStep(null);
    }, 150);
  };

  useEffect(() => {
    // Listen for custom trigger events to open the drawer
    const handleOpen = (e: Event) => {
      setIsOpen(true);
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.interest) {
        setInterest(customEvent.detail.interest);
        // Pre-selection redirects straight to Step 2 (Contact Method Selection)
        setActiveStep(customEvent.detail.step || 2);
      } else {
        setActiveStep(1);
      }
      setExitingStep(null);
      setError("");
    };

    window.addEventListener("open-enquiry-drawer", handleOpen as EventListener);
    return () => {
      window.removeEventListener("open-enquiry-drawer", handleOpen as EventListener);
    };
  }, []);

  const selectIntent = (intentLabel: string) => {
    setInterest(intentLabel);
    transitionToStep(2);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setTimeout(() => {
      setActiveStep(1);
      setExitingStep(null);
      setError("");
    }, 500);
  };

  // Resets all input states upon completion/Done click
  const handleDone = () => {
    setName("");
    setPhone("");
    setDate("");
    setTimeSlot("");
    closeDrawer();
  };

  // Loose phone validation: checks digits, length between 7-15, optional leading +
  const isPhoneValid = (num: string) => {
    const cleanNum = num.replace(/[\s()-]/g, "");
    return /^\+?[0-9]{7,15}$/.test(cleanNum);
  };

  // Form validator for Step 3a (Callback)
  const isCallbackFormValid = () => {
    return (
      name.trim() !== "" &&
      phone.trim() !== "" &&
      isPhoneValid(phone) &&
      date !== "" &&
      timeSlot !== ""
    );
  };

  // Form validator for Step 3b (WhatsApp Details)
  const isWhatsAppFormValid = () => {
    return (
      name.trim() !== "" &&
      phone.trim() !== "" &&
      isPhoneValid(phone)
    );
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCallbackFormValid()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/callback-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          date,
          time: timeSlot,
          reason: interest
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to schedule callback");
      }

      setLoading(false);
      transitionToStep(4); // Advance to Success Screen
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const handleWhatsAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isWhatsAppFormValid()) return;

    // Fire-and-forget database logging API request
    fetch("/api/whatsapp-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        reason: interest
      })
    }).catch(err => console.error("Failed to log WhatsApp enquiry:", err));

    // Construct WhatsApp message and open in a new tab
    const textMsg = `Hi AVASA, I'd like to enquire.\n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nInterested in: ${interest}`;
    const url = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(textMsg)}`;
    
    window.open(url, "_blank", "noopener,noreferrer");
    
    // Clear inputs on success and close
    setName("");
    setPhone("");
    closeDrawer();
  };

  // Get local date string for 'min' attribute of datepicker
  const getLocalDateString = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Helper to format date display in confirmation view
  const formatConfirmationDate = (dateStr: string) => {
    const parsed = new Date(dateStr);
    if (isNaN(parsed.getTime())) return dateStr;
    return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
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

          {/* STEP 1: Select Topic / Intent */}
          <div className={`chat-step ${activeStep === 1 ? "active" : ""} ${exitingStep === 1 ? "exiting" : ""}`} id="step-1">
            <p className="chat-prompt">What are you looking for?</p>
            <div className="chat-options">
              <button className="chat-btn" onClick={() => selectIntent("Book a stay or experience")}>
                Book a stay or experience
              </button>
              <button className="chat-btn" onClick={() => selectIntent("Plan a school or corporate program")}>
                Plan a school or corporate program
              </button>
              <button className="chat-btn" onClick={() => selectIntent("Discuss a project or installation")}>
                Discuss a project or installation
              </button>
            </div>
          </div>

          {/* STEP 2: Contact Method Selection */}
          <div className={`chat-step ${activeStep === 2 ? "active" : ""} ${exitingStep === 2 ? "exiting" : ""}`} id="step-2">
            <p className="chat-prompt">
              How would you like to connect regarding <strong style={{ color: "var(--gold)" }}>{interest}</strong>?
            </p>
            <div className="chat-options">
              <button className="chat-btn connect-btn" onClick={() => transitionToStep(3)}>
                <CalendarIcon />
                <span>Schedule a callback</span>
              </button>
              <button className="chat-btn connect-btn" onClick={() => transitionToStep(3.5)}>
                <MessageIcon />
                <span>Message on WhatsApp</span>
              </button>
              <a href={`tel:+${BUSINESS_WHATSAPP_NUMBER}`} className="chat-btn connect-btn call-now-link">
                <PhoneIcon />
                <span>Call now</span>
              </a>
            </div>
            <div className="chat-back" onClick={() => transitionToStep(1)}>
              &larr; Back to options
            </div>
          </div>

          {/* STEP 3a: Callback Scheduling Form */}
          <div className={`chat-step ${activeStep === 3 ? "active" : ""} ${exitingStep === 3 ? "exiting" : ""}`} id="step-3a">
            <p className="chat-prompt">Provide your details to schedule a call:</p>
            
            {error && (
              <div className="drawer-error-banner">
                {error}
              </div>
            )}

            <form className="chat-form" onSubmit={handleCallbackSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number (e.g. +918075350104)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              
              <div className="form-field-group">
                <label className="field-label">Preferred Date</label>
                <input
                  type="date"
                  min={getLocalDateString()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="field-label">Preferred Time Slot</label>
                <div className="time-slot-grid">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`time-slot-btn ${timeSlot === slot ? "active" : ""}`}
                      onClick={() => setTimeSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={!isCallbackFormValid() || loading}
              >
                {loading ? "Scheduling..." : "Confirm callback"}
              </button>
            </form>
            <div className="chat-back" onClick={() => transitionToStep(2)}>
              &larr; Back
            </div>
          </div>

          {/* STEP 3b: WhatsApp Details Form */}
          <div className={`chat-step ${activeStep === 3.5 ? "active" : ""} ${exitingStep === 3.5 ? "exiting" : ""}`} id="step-3b">
            <p className="chat-prompt">Please enter your details before redirecting to WhatsApp:</p>
            <form className="chat-form" onSubmit={handleWhatsAppSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number (e.g. +918075350104)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <button
                type="submit"
                className="btn-submit"
                disabled={!isWhatsAppFormValid()}
              >
                Continue to WhatsApp
              </button>
            </form>
            <div className="chat-back" onClick={() => transitionToStep(2)}>
              &larr; Back
            </div>
          </div>

          {/* STEP 4: Success View for Callback */}
          <div className={`chat-step ${activeStep === 4 ? "active" : ""} ${exitingStep === 4 ? "exiting" : ""}`} id="step-4">
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
              <h4>Callback Scheduled</h4>
              <p style={{ marginTop: "15px", fontSize: "15px", lineHeight: "1.6" }}>
                We will call you on <strong style={{ color: "var(--gold)" }}>{formatConfirmationDate(date)}</strong> at <strong style={{ color: "var(--gold)" }}>{timeSlot}</strong>.
              </p>
              <button
                className="btn-submit"
                style={{ marginTop: "40px", width: "100%" }}
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
