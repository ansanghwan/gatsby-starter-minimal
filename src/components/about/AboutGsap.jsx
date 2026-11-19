import * as React from "react";
import PageReveal from "../animation/PageReveal";

export default function AboutGsap() {
  return (
    <PageReveal
      pageSelector=".sanghwan-portfolio--about"
      targetSelector=".page-title__about, .section-header, .about-profile__left, .about-profile__desc, .about-profile__btns, .about-profile__note, .about-skill-badges, .about-intro p, .experience-item, .accordion__item"
    />
  );
}
