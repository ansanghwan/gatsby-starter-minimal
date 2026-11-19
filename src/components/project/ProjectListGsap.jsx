import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectListGsap() {
  useEffect(() => {
    const root = document.querySelector(".sanghwan-portfolio--project");
    if (!root) return;

    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 992px)",
        mobile: "(max-width: 991.98px)",
        reducedMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions.reducedMotion) return;

        const reveal = {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        };
        const titleTween = gsap.to(
          root.querySelector(".page-title__about-desc"),
          reveal,
        );
        const cards = root.querySelectorAll(".project-card");

        // Register delayed ScrollTrigger callbacks so their tweens also revert.
        context.add("revealCards", (batch) => {
          gsap.to(batch, {
            ...reveal,
            delay: Math.max(0, titleTween.duration() - titleTween.time()),
            stagger: context.conditions.desktop ? 0.05 : 0,
          });
        });

        if (context.conditions.desktop) {
          ScrollTrigger.batch(cards, {
            start: "top 85%",
            interval: 0.08,
            batchMax: 2, // The desktop grid has two columns.
            once: true,
            onEnter: (batch) => context.revealCards(batch),
          });
        } else {
          cards.forEach((card) => {
            ScrollTrigger.create({
              trigger: card,
              start: "top 85%",
              once: true,
              onEnter: () => context.revealCards(card),
            });
          });
        }
      },
      root,
    );

    return () => media.revert();
  }, []);

  return null;
}
