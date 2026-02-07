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
            Building solid UI,
            <br />
            growing into Frontend.
          </h2>
          <p className="home-hero__sub">
            탄탄한 UI를 만들며
            <br />
            프론트엔드로 성장하고 있습니다.
          </p>
          <div className="home-hero__copy">
            <p>
              안녕하세요. 프론트엔드 개발까지 확장을 목표로 하는 웹 퍼블리셔
              안상환입니다.
            </p>
            <p>
              이 포트폴리오에는 제가 프로젝트에서 수행한 내용과 업무 강점,
              그리고 제 소개를 담았습니다.
            </p>
            <p>
              업무 스타일과 강점을 살펴보시고 필요하시면 편하게 연락
              부탁드립니다.
            </p>
            <p>
              저 역시 저를 필요로 하는 곳에서 마음이 맞는 팀원들과 시너지를 내고
              싶습니다.
            </p>
            <p>감사합니다.</p>
          </div>
        </section>

        <section className="home-portfolio">
          <div className="home-portfolio__head">
            <div className="home-portfolio__title">
              <span className="accent-dot" aria-hidden="true"></span>
              <h3>Portfolio</h3>
            </div>
            <a className="btn-outline" href="/project-blog">
              More
            </a>
          </div>

          <div className="portfolio-list">
            <article className="portfolio-card">
              <span className="pill">2025</span>
              <h4>React Micro Projects Portfolio</h4>
              <p className="portfolio-card__desc">
                리액트 학습과 실습 결과물을 정리한 미니 프로젝트 모음입니다.
              </p>
              <div className="portfolio-card__row">
                <span className="portfolio-card__dt">Role</span>
                <span className="portfolio-card__dl">Personal Project</span>
              </div>
              <div className="portfolio-card__row">
                <span className="portfolio-card__dt">tatus</span>
                <span className="portfolio-card__dl">Ongoing</span>
              </div>
              <a
                className="link-arrow"
                href="https://sanghwan-mini-project.netlify.app/"
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
                신규 페이지 구축과 기존 페이지 개선 프로젝트입니다.
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
