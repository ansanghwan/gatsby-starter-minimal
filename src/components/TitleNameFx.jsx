// components/TitleNameFx.jsx
import { useEffect } from "react";
import gsap from "gsap";

export default function TitleNameFx() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = document.querySelector(".page-title__name");
    const txt = el?.querySelector(".my-name");
    if (!el || !txt) return;

    const play = () => {
      const tl = gsap.timeline();
      tl.to(el, { "--barX": "0", duration: 0.7, ease: "power2.inOut" }); // 바: 왼→오
      tl.to(
        txt,
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "+=0.4"
      ); // 텍스트 업/페이드
      tl.to(
        txt,
        { color: "#000", duration: 0.14, yoyo: true, repeat: 1 },
        "-=0.05"
      ); // 한 번 깜빡
    };

    // role 애니 끝나면 1회 재생
    window.addEventListener("roleFx:done", play, { once: true });
    return () => window.removeEventListener("roleFx:done", play);
  }, []);

  return null;
}
