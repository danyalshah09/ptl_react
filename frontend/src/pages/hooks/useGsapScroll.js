// hooks/useGsapScroll.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll(ref, animation, deps = []) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, animation.from, {
        ...animation.to,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reset", // <-- resets on re-enter
        },
      });
    }, ref);

    return () => ctx.revert();
  }, deps);
}
