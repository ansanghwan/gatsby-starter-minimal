// components/TitleFxSweep.jsx
import { useEffect } from "react";
import gsap from "gsap";

export default function TitleFxSweep() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const role = document.querySelector(".page-title__role");
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
    tl.addLabel("roleLiftDone");
    tl.call(
      () => window.dispatchEvent(new Event("roleFx:done")),
      null,
      "roleLiftDone-=1.2"
    );
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
      // opacity는 요소가 아니라 ::before라 변수로 제어가 편해요:
      // 간단히 요소 자체 opacity는 건드리지 말고, 아래처럼 변수 대신 class 토글도 가능.
    });
    // bar opacity를 변수로 제어하고 싶으면 ::before에 filter나 box-shadow 등으로 대체 가능
    // 여기선 애니메이션 구간 동안만 보이게: 시작 시 강제 표시 → 종료 시 숨김
    gsap.set(strokes, { "--barWidth": "28%" }); // 필요 시 가변

    // 바 이동 + 채움 지우기 동시 진행
    tl.to(
      fills,
      {
        clipPath: "inset(0 0 0 100%)", // 왼→오로 지워짐
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.08,
      },
      "-=0.1"
    );

    tl.to(
      strokes,
      {
        "--barX": "112%", // 바를 오른쪽 바깥으로 이동
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.08,
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
    // tl.call(() => window.dispatchEvent(new Event("roleFx:done")));
    return () => tl.kill();
  }, []);

  return null;
}
