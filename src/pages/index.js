import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import HomeGsap from "../components/home/HomeGsap";

const IndexPage = () => {
  return (
    <Layout pageTitle={null} pageClassName="sanghwan-portfolio--home">
      <div className="home-wrap">
        <section className="home-hero">
          <div className="home-hero__profile">
            <span className="home-hero__avatar">
              <StaticImage
                src="../images/ash.png"
                alt="Sanghwan An"
                width={64}
                height={64}
                quality={90}
              />
            </span>
            <div>
              <p className="home-hero__name">Sang Hwan An</p>
              <p className="home-hero__status">
                <span className="status-dot" aria-hidden="true"></span>
                협업/채용 문의 환영
              </p>
            </div>
          </div>

          <h2 className="home-hero__headline">
            탄탄한 UI 구현부터 <br />
            프론트엔드 개발까지.
          </h2>
          <p className="home-hero__sub">
            10년 이상의 웹 UI 실무 경험을 바탕으로 반응형 웹, 웹 접근성, 공통 UI
            구축을 수행해왔습니다.
          </p>
          <p className="home-hero__sub">
            프로젝트 중간 투입 시 기존 코드와 업무 흐름을 빠르게 파악하고,
            지연되거나 중단된 작업을 해결해 프로젝트를 마무리하는 데 강점이
            있습니다.
          </p>
          <p className="home-hero__sub">
            최근에는 React·TypeScript 기반 프로젝트에서 공통 컴포넌트 구현, API
            연동 및 대시보드 개발까지 경험을 확장했습니다.
          </p>
          {/* <div className="home-hero__copy">
            <p>
              안녕하세요. 프론트엔드 개발까지 확장을 목표로 하는 웹 퍼블리셔
              안상환입니다.
            </p>
            <p>
              10년 이상의 웹 UI 실무 경험을 바탕으로 반응형 웹, 웹 접근성, 공통
              UI 구축 및 프론트엔드 개발 업무를 수행하
            </p>
            <p>
              다양한 프로젝트에 중간 투입되어 기존 작업의 문제를 파악하고,
              담당자 부재나 개발 이슈로 지연된 작업을 이어받아 해결해 왔습니다.
              새로운 환경에서도 기존 코드와 업무 흐름을 빠르게 이해하고, 필요한
              작업을 정리해 프로젝트를 마무리하는 데 강점이 있습니다.
            </p>
            <p>
              최근에는 React·TypeScript 기반 프로젝트에서 공통 컴포넌트 구현,
              API 연동 및 대시보드 개발까지 경험을 확장했습니다.
            </p>
            <p>
              기존 시스템의 문제 해결부터 새로운 UI 구현까지, 프로젝트에 필요한
              역할을 책임감 있게 수행하겠습니다.
            </p>
            <p>감사합니다.</p>
          </div> */}
        </section>

        <section className="home-portfolio">
          <div className="home-portfolio__head">
            <div className="section-title">
              <span className="accent-dot" aria-hidden="true"></span>
              <h3>Portfolio</h3>
            </div>
            <a className="btn-outline" href="/project-blog">
              More
            </a>
          </div>

          <div className="portfolio-list">
            <article className="portfolio-card">
              <span className="pill">2026</span>
              <h4>할 일 관리 웹 서비스 구축</h4>
              <p className="portfolio-card__desc">
                Next.js·TypeScript 기반 할 일 관리 서비스로, 공통 UI와 반응형
                레이아웃 구축 및 대시보드 API 연동을 담당했습니다
              </p>
              <div className="portfolio-card__row">
                <span className="portfolio-card__dt">Role</span>
                <span className="portfolio-card__dl">
                  Frontend / UI · Team Project
                </span>
              </div>
              <div className="portfolio-card__row">
                <span className="portfolio-card__dt">Period</span>
                <span className="portfolio-card__dl">2026.08 – 2026.10</span>
              </div>
              <a
                className="link-arrow"
                href="/project-blog/task-management/"
                target="_blank"
                rel="noreferrer"
              >
                View details →
              </a>
            </article>
            <article className="portfolio-card">
              <span className="pill">2024</span>
              <h4>현대백화점 Honey / 인천 스마트 면세 구축</h4>
              <p className="portfolio-card__desc">
                웹 퍼블리싱 PL로서 공통 UI 가이드 구축과 팀 일정 관리를
                담당하고, 운영 소스 충돌 문제를 사전에 조율해 프로젝트를
                완료했습니다.
              </p>
              <div className="portfolio-card__row">
                <span className="portfolio-card__dt">Role</span>
                <span className="portfolio-card__dl">Web Publishing PL</span>
              </div>
              <div className="portfolio-card__row">
                <span className="portfolio-card__dt">Period</span>
                <span className="portfolio-card__dl">2024.05 – 2024.11</span>
              </div>
              <a
                className="link-arrow"
                href="/project-blog/hddfs-honey-post/"
                target="_blank"
                rel="noreferrer"
              >
                View details →
              </a>
            </article>
          </div>
        </section>
      </div>
      <HomeGsap />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="홈"
    description="Sanghwan's Web Portfolio"
    image="https://sanghwan-portfolio.netlify.app/images/ansanghwan_character.png"
    url="https://sanghwan-portfolio.netlify.app/"
  />
);
export default IndexPage;
