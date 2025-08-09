import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapSlideFromLeft(options = {}) {
  const elRef = useRef();

  useEffect(() => {
    if (!elRef.current) return;

    const defaultOptions = {
      startX: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      triggerStart: "top 80%",
      toggleActions: "play none none reverse"
    };

    const settings = { ...defaultOptions, ...options };

    // Set initial state
    gsap.set(elRef.current, { x: settings.startX, opacity: settings.opacity });

    // Create animation
    const tween = gsap.to(elRef.current, {
      x: 0,
      opacity: 1,
      duration: settings.duration,
      ease: settings.ease,
      scrollTrigger: {
        trigger: elRef.current,
        start: settings.triggerStart,
        toggleActions: settings.toggleActions
      }
    });

    return () => {
      // Kill the specific ScrollTrigger tied to this tween
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, [options]);

  return elRef;
}
