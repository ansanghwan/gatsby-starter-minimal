import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGsap() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const baseY = prefersReduced ? 0 : 18;
    const baseDuration = prefersReduced ? 0.7 : 0.9;

    const titleTween = gsap.from(".page-title__about-desc", {
      opacity: 0,
      y: baseY,
      duration: baseDuration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page-title__about-desc",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const imageTween = gsap.from(".project-detail__img", {
      opacity: 0,
      y: baseY,
      duration: baseDuration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".project-detail__img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const contentTween = gsap.from(".project-detail__cont > *", {
      opacity: 0,
      y: baseY,
      duration: prefersReduced ? 0.6 : 0.8,
      ease: "power2.out",
      stagger: prefersReduced ? 0 : 0.08,
      scrollTrigger: {
        trigger: ".project-detail__cont",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      titleTween.kill();
      imageTween.kill();
      contentTween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
