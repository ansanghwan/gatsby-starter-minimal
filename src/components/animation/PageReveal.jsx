import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// CSS owns the initial state; GSAP only animates toward the visible state.
export default function PageReveal({ pageSelector, targetSelector, animationKey }) {
  useEffect(() => {
    const root = document.querySelector(pageSelector);
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

        // querySelectorAll preserves reading order across the supplied selectors.
        const elements = Array.from(root.querySelectorAll(targetSelector));
        const entered = new Set();
        const tweens = [];
        let next = 0;
        const desktop = context.conditions.desktop;
        const playNext = () => {
          if (next < tweens.length && entered.has(next)) tweens[next].play();
        };

        elements.forEach((element, index) => {
          tweens.push(gsap.to(element, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            paused: true,
            onComplete: () => {
              if (desktop) {
                next = index + 1;
                playNext();
              }
            },
          }));
        });

        elements.forEach((element, index) => {
          ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            once: true,
            onEnter: () => {
              entered.add(index);
              if (desktop) playNext();
              else tweens[index].play();
            },
          });
        });
      },
      root,
    );

    // Rebuild on breakpoint changes; clean up only this page on navigation.
    return () => media.revert();
  }, [pageSelector, targetSelector, animationKey]);

  return null;
}
