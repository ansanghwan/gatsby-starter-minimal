import * as React from "react";
import PageReveal from "../animation/PageReveal";

export default function ProjectListGsap() {
  return (
    <PageReveal
      pageSelector=".sanghwan-portfolio--project"
      targetSelector=".page-title__about-desc, .project-card"
    />
  );
}
