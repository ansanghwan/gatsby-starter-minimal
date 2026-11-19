import * as React from "react";
import PageReveal from "../animation/PageReveal";

export default function ProjectGsap({ animationKey }) {
  return (
    <PageReveal
      pageSelector=".sanghwan-portfolio--mdx"
      targetSelector=".page-title__about-desc, .project-detail__img, .project-detail__cont > *:not(.badge-wrap)"
      animationKey={animationKey}
    />
  );
}
