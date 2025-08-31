import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function TitleFxSweep() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window === "undefined") return;

    const role = document.querySelector(".page-title__about");
    if (!role) return;

    // 1) .stroke 안 텍스트를 .fill로 래핑 (중복 방지)
    const strokes = Array.from(role.querySelectorAll(".stroke"));
    strokes.forEach((el) => {
      const existingFill = el.querySelector(".fill");

      if (existingFill) {
        // 이전 코드로 원문 텍스트가 사라졌다면 복구
        const hasTextNode = Array.from(el.childNodes).some(
          (n) => n.nodeType === 3 && n.textContent.trim().length > 0
        );
        if (!hasTextNode) {
          el.insertBefore(
            document.createTextNode(existingFill.textContent),
            existingFill
          );
        }
      } else {
        // 원문 텍스트는 유지하고, 동일한 내용의 .fill만 추가
        const text = el.textContent;
        const fill = document.createElement("span");
        fill.className = "fill";
        fill.textContent = text;
        el.appendChild(fill);
      }
    });

    const fills = strokes.map((s) => s.querySelector(".fill"));

    // 2) 타임라인
    const tl = gsap.timeline();

    // (선택) 타이틀 컨테이너 살짝 등장
    tl.from(role, { y: 90, opacity: 0, duration: 2, ease: "power2.out" });
    // 바 보이기 (투명→불투명)
    tl.to(
      strokes,
      {
        duration: 0.5,
        opacity: 1,
        onUpdate: () => {}, // 자리 맞춤용 (없어도 됨)
        // 의사요소 opacity를 변수로 제어할 수 없으니, 아래에서 set 사용
      },
      "<"
    );

    // 의사요소(::before) 보이게
    gsap.set(strokes, {
      "--barX": "-12%",
    });
    // bar opacity를 변수로 제어하고 싶으면 ::before에 filter나 box-shadow 등으로 대체 가능
    // 여기선 애니메이션 구간 동안만 보이게: 시작 시 강제 표시 → 종료 시 숨김
    gsap.set(strokes, { "--barWidth": "28%" }); // 필요 시 가변

    // 바 이동 + 채움 지우기 동시 진행
    tl.to(
      fills,
      {
        clipPath: "inset(0 0 0 100%)", // 왼→오로 지워짐
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.07,
      },
      "-=0.1"
    );

    tl.to(
      strokes,
      {
        "--barX": "112%", // 바를 오른쪽 바깥으로 이동
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.07,
        onStart: () => {
          // 바 보여주기: ::before는 직접 제어가 어려워서 클래스 토글로 해결
          strokes.forEach((s) => s.classList.add("show-bar"));
        },
        onComplete: () => {
          // 바 숨기기
          strokes.forEach((s) => s.classList.remove("show-bar"));
        },
      },
      "<"
    );
    // ▶ desc 등장 추가 (아래에서 위로 + 페이드인)
    tl.from(
      ".page-title__about-desc",
      {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7" // 타이틀 마무리 0.5초 전에 겹쳐 시작
    );
    // 프로필 섹션

    tl.from(
      ".about-sec--profile .my-picture",
      {
        y: 60,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      },
      "-=0" // 타이틀 마무리 0.5초 전에 겹쳐 시작
    );

    gsap.from(".about-sec--profile .career-list li", {
      scrollTrigger: {
        trigger: ".about-sec--profile",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    });

    // 2) 업무 이점 섹션
    gsap.from(".about-sec--pros .sec-tit", {
      scrollTrigger: {
        trigger: ".about-sec--pros",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(".about-sec--pros .accordion-wrap", {
      scrollTrigger: {
        trigger: ".about-sec--pros",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // 3) 채용 이점 섹션
    gsap.from(".about-sec--hire .sec-tit", {
      scrollTrigger: {
        trigger: ".about-sec--hire",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(".about-sec--hire .hire-benefits__group", {
      scrollTrigger: {
        trigger: ".about-sec--hire",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
    });
    return () => tl.kill();
  }, []);

  return null;
}
