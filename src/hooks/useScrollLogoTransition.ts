"use client";

import { useEffect, useState } from "react";

interface TransitionOptions {
  heroLogoId: string;
  navLogoId: string;
  taglineId?: string;
  transitionDistance?: number; // Total scroll distance in pixels over which the logo travels
  onStateChange?: (state: { isDocked: boolean; progress: number }) => void;
}

/**
 * useScrollLogoTransition
 * Smoothly interpolates the hero logo's transform, position, scale, and opacity
 * to land precisely onto the navbar logo's dynamic bounding rectangle.
 */
export function useScrollLogoTransition({
  heroLogoId,
  navLogoId,
  taglineId,
  transitionDistance = 240,
  onStateChange,
}: TransitionOptions) {
  const [isDocked, setIsDocked] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let targetScale = 0.35;

    const heroEl = document.getElementById(heroLogoId);
    const navEl = document.getElementById(navLogoId);
    const taglineEl = taglineId ? document.getElementById(taglineId) : null;

    if (!heroEl || !navEl) return;

    // Smooth cubic ease-in-out curve for luxury travel aesthetic
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // Dynamically measures resting bounding rectangles and computes translation delta
    const measureAndRecalibrate = () => {
      const prevTransform = heroEl.style.transform;
      heroEl.style.transform = "none";

      const heroRect = heroEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();

      heroEl.style.transform = prevTransform;

      // Calculate translation required to center hero logo on nav logo target
      const heroCenterX = heroRect.left + heroRect.width / 2;
      const heroCenterY = heroRect.top + heroRect.height / 2;
      const navCenterX = navRect.left + navRect.width / 2;
      const navCenterY = navRect.top + navRect.height / 2;

      targetX = navCenterX - heroCenterX;
      targetY = navCenterY - heroCenterY;
      targetScale = heroRect.width > 0 ? navRect.width / heroRect.width : 0.35;
    };

    const update = () => {
      const scrollY = window.scrollY;
      const rawProgress = Math.min(1, Math.max(0, scrollY / transitionDistance));
      const eased = easeInOutCubic(rawProgress);

      const currentX = targetX * eased;
      const currentY = targetY * eased;
      const currentScale = 1 + (targetScale - 1) * eased;
      const currentOpacity = rawProgress >= 1 ? 0 : 1;
      const taglineOpacity = Math.max(0, 1 - rawProgress * 2.8);
      const taglineTranslateY = rawProgress * 30;

      // Apply GPU-accelerated transforms to the traveling hero logo
      heroEl.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) scale(${currentScale.toFixed(4)})`;
      heroEl.style.opacity = currentOpacity.toString();
      heroEl.style.color = rawProgress >= 0.7 ? "var(--gold)" : "var(--sand)";

      // Interpolate tagline opacity and subtle drift
      if (taglineEl) {
        taglineEl.style.opacity = taglineOpacity.toFixed(3);
        taglineEl.style.transform = `translate3d(0, ${taglineTranslateY.toFixed(2)}px, 0)`;
      }

      // Manage seamless handoff with the fixed navbar logo
      if (rawProgress >= 1) {
        navEl.style.opacity = "1";
        navEl.style.pointerEvents = "auto";
      } else {
        navEl.style.opacity = "0";
        navEl.style.pointerEvents = "none";
      }

      const currentlyDocked = rawProgress >= 1;
      setIsDocked(currentlyDocked);
      setProgress(rawProgress);

      if (onStateChange) {
        onStateChange({ isDocked: currentlyDocked, progress: rawProgress });
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(update);
    };

    const onResize = () => {
      measureAndRecalibrate();
      update();
    };

    // Run measurement and initial render
    measureAndRecalibrate();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [heroLogoId, navLogoId, taglineId, transitionDistance]);

  return { isDocked, progress };
}
