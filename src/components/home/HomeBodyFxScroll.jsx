// HomeBodyFxScroll.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomeBodyFxScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const y1 = prefersReduced ? 0 : 20;
    const y2 = prefersReduced ? 0 : 16;

    const tl1 = gsap.from(".ash-hello", {
      y: y1,
      opacity: 0,
      duration: prefersReduced ? 1 : 0.7,
      ease: "power2.out",
      delay: 2.2,
      scrollTrigger: {
        trigger: ".ash-hello",
        start: "top 75%",
        toggleActions: "play none none none", // 1회 재생
      },
    });

    const tl2 = gsap.from(".ahs-skill-list li", {
      y: y2,
      opacity: 0,
      duration: prefersReduced ? 1 : 1.5,
      ease: "power2.out",
      stagger: 0.5,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".ahs-skill-list",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tl1.kill();
      tl2.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
