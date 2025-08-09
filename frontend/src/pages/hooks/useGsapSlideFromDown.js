import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapSlideFromDown(options = {}) {
  const elRef = useRef();

  useEffect(() => {
    if (!elRef.current) return;

    const defaultOptions = {
      startY: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      triggerStart: "top 80%",
      toggleActions: "play none none reverse"
    };

    const settings = { ...defaultOptions, ...options };

    // Set initial state
    gsap.set(elRef.current, { y: settings.startY, opacity: settings.opacity });

    // Create animation
    const tween = gsap.to(elRef.current, {
      y: 0,
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
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, [options]);

  return elRef;
}
