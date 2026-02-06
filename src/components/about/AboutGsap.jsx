import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutGsap() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const baseY = prefersReduced ? 0 : 18;
    const baseDuration = prefersReduced ? 0.7 : 0.9;

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-sec--profile",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    heroTl
      .from(".about-sec__head", {
        opacity: 0,
        y: baseY,
        duration: baseDuration,
        ease: "power2.out",
      })
      .from(
        ".about-profile__left",
        {
          opacity: 0,
          scale: prefersReduced ? 1 : 0.96,
          duration: baseDuration,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        [".about-profile__desc", ".about-profile__btns", ".about-profile__note", ".about-skill-badges"],
        {
          opacity: 0,
          y: baseY,
          duration: prefersReduced ? 0.6 : 0.7,
          ease: "power2.out",
          stagger: prefersReduced ? 0 : 0.08,
        },
        "-=0.4"
      )
      .from(
        ".about-intro p",
        {
          opacity: 0,
          y: baseY,
          duration: prefersReduced ? 0.6 : 0.7,
          ease: "power2.out",
          stagger: prefersReduced ? 0 : 0.08,
        },
        "-=0.3"
      );

    const expTween = gsap.from(".experience-item", {
      opacity: 0,
      y: baseY,
      duration: prefersReduced ? 0.6 : 0.8,
      ease: "power2.out",
      stagger: prefersReduced ? 0 : 0.12,
      scrollTrigger: {
        trigger: ".about-sec--experience",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const benefitsTween = gsap.from(".about-sec--pros .accordion__item", {
      opacity: 0,
      y: baseY,
      duration: prefersReduced ? 0.6 : 0.8,
      ease: "power2.out",
      stagger: prefersReduced ? 0 : 0.1,
      scrollTrigger: {
        trigger: ".about-sec--pros",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      heroTl.kill();
      expTween.kill();
      benefitsTween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
