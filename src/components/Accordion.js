import React, { useEffect, useRef, useState } from "react";

/**
 * 사용법:
 * <Accordion
 *   items={[
 *     { id: "a1", title: "프로젝트 긴급 투입 & 빠른 적응", content: <ul><li>…</li></ul> },
 *     { id: "a2", title: "운영 및 유지보수 경험", content: <ul><li>…</li></ul> },
 *   ]}
 *   allowMultiple={false}
 *   defaultOpenIds={[]} // 모두 닫힘 시작
 *   duration={500}
 *   easing="cubic-bezier(.2,.8,.2,1)"
 * />
 */
export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  duration = 420,
  easing = "cubic-bezier(.2,.8,.2,1)",
}) {
  const [openIds, setOpenIds] = useState(defaultOpenIds);

  const toggle = (id) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (allowMultiple)
        return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
      return isOpen ? [] : [id];
    });
  };

  return (
    <ul className="accordion" role="list">
      {items.map((it, idx) => (
        <AccordionItem
          key={it.id ?? idx}
          id={String(it.id ?? idx)}
          index={idx}
          title={it.title}
          open={openIds.includes(String(it.id ?? idx))}
          onToggle={() => toggle(String(it.id ?? idx))}
          duration={duration}
          easing={easing}
        >
          {it.content}
        </AccordionItem>
      ))}
    </ul>
  );
}

function AccordionItem({
  id,
  index,
  title,
  open,
  onToggle,
  duration,
  easing,
  children,
}) {
  const panelRef = useRef(null);
  const [animating, setAnimating] = useState(false);

  const btnId = `acc-btn-${id || index}`;
  const panelId = `acc-panel-${id || index}`;

  // 열림/닫힘 애니메이션을 DOM 스타일로 제어(React onClick만 사용 → StrictMode 안전)
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    el.style.transitionProperty = "max-height, opacity";
    el.style.transitionDuration = `${duration}ms`;
    el.style.transitionTimingFunction = easing;

    if (open) {
      // 열기
      setAnimating(true);
      el.style.display = "block";
      el.style.overflow = "hidden";
      el.style.opacity = "0";
      el.style.maxHeight = "0px";
      // 첫 프레임 강제 인지
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      const target = el.scrollHeight;
      el.style.maxHeight = `${target}px`;
      el.style.opacity = "1";

      const onEnd = (e) => {
        if (e.target !== el || e.propertyName !== "max-height") return;
        el.removeEventListener("transitionend", onEnd);
        // 스냅 방지: 열린 뒤엔 자연 높이
        el.style.maxHeight = "none";
        el.style.overflow = "visible";
        setAnimating(false);
      };
      el.addEventListener("transitionend", onEnd);
    } else {
      // 닫기
      if (getComputedStyle(el).display === "none") return; // 이미 닫힘
      setAnimating(true);
      // 열린 상태에서 none일 수 있으니 현재 높이로 세팅
      const current = el.scrollHeight;
      el.style.overflow = "hidden";
      el.style.maxHeight = `${current}px`;
      el.style.opacity = getComputedStyle(el).opacity || "1";
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      el.style.maxHeight = "0px";
      el.style.opacity = "0";

      const onEnd = (e) => {
        if (e.target !== el || e.propertyName !== "max-height") return;
        el.removeEventListener("transitionend", onEnd);
        el.style.display = "none";
        el.style.removeProperty("max-height");
        el.style.removeProperty("overflow");
        setAnimating(false);
      };
      el.addEventListener("transitionend", onEnd);
    }
  }, [open, duration, easing]);

  return (
    <li className={`accordion__item${open ? " is-open" : ""}`}>
      <button
        id={btnId}
        className="accordion__button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (!animating) onToggle();
        }}
      >
        <span className="accordion__titleText">{title}</span>
        <span className="accordion__chev" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M4 8 L12 16 L20 8"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        className="accordion__panel"
        role="region"
        aria-labelledby={btnId}
        style={{ display: "none", opacity: 0 }}
      >
        <div className="accordion__inner">{children}</div>
      </div>
    </li>
  );
}
