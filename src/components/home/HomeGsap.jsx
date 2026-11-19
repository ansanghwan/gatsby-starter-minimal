import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeGsap() {
  useEffect(() => {
    const root = document.querySelector(".sanghwan-portfolio--home");
    if (!root) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      // CSS supplies the initial hidden state before hydration.
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-hero",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      heroTl
        .to(".home-hero__profile", {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
        })
        .to(
          [".home-hero__headline", ".home-hero__sub"],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.12,
          },
          "-=0.4",
        );

      if (root.querySelector(".home-hero__copy p")) {
        heroTl.to(
          ".home-hero__copy p",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.3",
        );
      }

      gsap.to(".portfolio-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".portfolio-list",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, root);

    // Revert only this page's animations and ScrollTriggers on navigation.
    return () => media.revert();
  }, []);

  return null;
}
