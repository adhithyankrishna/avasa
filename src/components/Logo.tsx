import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={`logo-img ${className}`}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
