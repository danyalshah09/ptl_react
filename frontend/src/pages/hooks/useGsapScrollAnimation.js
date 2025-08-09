import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Reduce unnecessary refresh storms on mobile rotations
ScrollTrigger.config({ ignoreMobileResize: true });

export function useGsapScrollAnimation(direction = "left", options = {}) {
  const elRef = useRef();

  useLayoutEffect(() => {
    if (!elRef.current) return;

    const defaultOptions = {
      distance: 60,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      triggerStart: "top bottom",
      once: true
    };

    const settings = { ...defaultOptions, ...options };

    const fromVars = { opacity: settings.opacity };
    if (direction === "left") fromVars.x = -settings.distance;
    if (direction === "right") fromVars.x = settings.distance;
    if (direction === "up") fromVars.y = -settings.distance;
    if (direction === "down") fromVars.y = settings.distance;

    gsap.set(elRef.current, fromVars);

    const tween = gsap.to(elRef.current, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: settings.duration,
      ease: settings.ease,
      force3D: true,
      overwrite: "auto",
      onStart: () => {
        elRef.current && (elRef.current.style.willChange = "transform,opacity");
      },
      onComplete: () => {
        if (elRef.current) elRef.current.style.willChange = "auto";
      },
      scrollTrigger: {
        trigger: elRef.current,
        start: settings.triggerStart,
        once: settings.once,
        invalidateOnRefresh: true,
      }
    });

    // If element is already visible on mount, play immediately
    if (ScrollTrigger.isInViewport(elRef.current)) {
      tween.progress(0).play();
    }

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [direction, options]);

  return elRef;
}
