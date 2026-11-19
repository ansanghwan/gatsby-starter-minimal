import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeGsap() {
  useEffect(() => {
    const root = document.querySelector(".sanghwan-portfolio--home");
    if (!root) return;

    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 992px)", // Matches $breakpoint-lg.
        mobile: "(max-width: 991.98px)",
        reducedMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        // CSS leaves all content visible when reduced motion is requested.
        if (context.conditions.reducedMotion) return;

        const profile = root.querySelector(".home-hero__profile");
        const headline = root.querySelector(".home-hero__headline");
        const intro = root.querySelectorAll(
          ".home-hero__sub, .home-hero__copy p",
        );
        const portfolioHead = root.querySelector(".home-portfolio__head");
        const cards = root.querySelectorAll(".portfolio-card");
        const reveal = { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" };

        if (context.conditions.desktop) {
          // One timeline prevents the portfolio from overtaking the introduction.
          const timeline = gsap.timeline();
          timeline
            .to(profile, { ...reveal, scale: 1 })
            .to(headline, reveal);

          if (intro.length) {
            timeline.to(intro, { ...reveal, duration: 0.55, stagger: 0.15 });
          }

          timeline
            .to(portfolioHead, reveal)
            .to(cards, { ...reveal, stagger: 0.15 });
        } else {
          // Each element waits for its own viewport entry on smaller screens.
          const elements = [profile, headline, ...intro, portfolioHead, ...cards];
          elements.forEach((element) => {
            if (!element) return;
            gsap.to(element, {
              ...reveal,
              ...(element === profile ? { scale: 1 } : {}),
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            });
          });
        }
      },
      root,
    );

    // MatchMedia reverts the old branch on resize and cleans up on navigation.
    return () => media.revert();
  }, []);

  return null;
}
