import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeGsap() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const baseDuration = prefersReduced ? 0.8 : 0.9;
    const baseY = prefersReduced ? 0 : 18;

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-hero",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    heroTl
      .from(".home-hero__profile", {
        opacity: 0,
        scale: prefersReduced ? 1 : 0.9,
        duration: baseDuration,
        ease: "power2.out",
      })
      .from(
        [".home-hero__headline", ".home-hero__sub"],
        {
          opacity: 0,
          y: baseY,
          duration: baseDuration,
          ease: "power2.out",
          stagger: prefersReduced ? 0 : 0.12,
        },
        "-=0.4",
      )
      .from(
        ".home-hero__copy p",
        {
          opacity: 0,
          y: baseY,
          duration: prefersReduced ? 0.6 : 0.7,
          ease: "power2.out",
          stagger: prefersReduced ? 0 : 0.1,
        },
        "-=0.3",
      );

    const cards = gsap.utils.toArray(".portfolio-card");
    const cardsTween = gsap.from(cards, {
      opacity: 0,
      y: baseY,
      duration: prefersReduced ? 0.6 : 0.8,
      ease: "power2.out",
      stagger: prefersReduced ? 0 : 0.15,
      scrollTrigger: {
        trigger: ".portfolio-list",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      heroTl.kill();
      cardsTween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
