// hooks/useGsapScroll.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll(ref, animation, deps = []) {
  useLayoutEffect(() => {
    if (!ref?.current) return;

    const element = ref.current;

    const ctx = gsap.context(() => {
      gsap.set(element, animation.from || {}); // Ensure starting state is applied immediately

      gsap.to(element, {
        ...(animation.to || {}),
        immediateRender: false,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
          once: false, // allow rerun if it was missed
        },
      });
    }, element);

    // Refresh ScrollTrigger after images load
    const refreshOnLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", refreshOnLoad);

    return () => {
      window.removeEventListener("load", refreshOnLoad);
      ctx.revert();
    };
  }, deps);
}
