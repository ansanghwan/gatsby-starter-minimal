import * as React from "react";
import Layout from "../components/layout";
import Accordion from "../components/Accordion";
import AboutGsap from "../components/about/AboutGsap";

const AboutPage = () => {
  const items = [
    {
      id: "benefit-cost",
      title: "퍼블리싱 외주 비용 절감",
      content: (
        <ul className="accordion__detail-list">
          <li>HTML/CSS/JS, React 퍼블리싱 직접 수행</li>
          <li>웹 접근성, 신규 페이지 제작, 퍼블리싱 가이드 제공</li>
        </ul>
      ),
    },
    {
      id: "benefit-stability",
      title: "프로젝트 안정성과 일정 관리",
      content: (
        <ul className="accordion__detail-list">
          <li>위기 상황·중간 투입 프로젝트 다수 완수</li>
          <li>일정 차질 없이 안정적으로 오픈까지 이끕니다.</li>
        </ul>
      ),
    },

    {
      id: "rwd",
      title: "반응형 웹 전문 경험",
      content: (
        <ul className="accordion__detail-list">
          <li>
            멀티 디바이스 이슈 대응(레이아웃 통합/분기, IE/레거시 브라우저 경험)
          </li>
          <li>
            <strong>사례:</strong> EBS 초등/포털/스킨, kixx 리뉴얼, 포스코 제품
            어드민/프론트
          </li>
        </ul>
      ),
    },
    {
      id: "guide",
      title: "퍼블리싱 가이드·협업 체계",
      content: (
        <ul className="accordion__detail-list">
          <li>프로젝트별 퍼블리싱 가이드를 다수 제작 및 정착</li>
          <li>
            중간 투입 시 문제를 빠르게 파악하고 퍼블리싱 선에서 해결 가능한
            이슈를 정리해 프로젝트 흐름을 매끄럽게 유지
          </li>
        </ul>
      ),
    },
    {
      id: "benefit-growth",
      title: "성장 잠재력이 큰 프론트엔드 인재",
      content: (
        <ul className="accordion__detail-list">
          <li>10년 퍼블리셔 경력 + React/GSAP 학습·적용 중</li>
          <li>Meta Front-End Developer 인증 과정 수강 예정</li>
        </ul>
      ),
    },
  ];

  return (
    <Layout
      pageTitle={
        <>
          <p className="page-title__about">
            Delivering Reliable, Accessible, and Modern Web Experiences
          </p>
        </>
      }
      pageClassName="sanghwan-portfolio--about"
    >
      <section className="about-sec about-sec--profile">
        <div className="about-sec__head">
          <div className="about-sec__title">
            <span className="accent-dot" aria-hidden="true"></span>
            <h3>Bringing stability to shaky projects.</h3>
          </div>
        </div>

        <div className="about-profile">
          <div className="about-profile__left">
            <div className="my-picture">
              <img src="/images/me_picture.jpg" alt="안상환 프로필사진" />
            </div>
          </div>
          <div className="about-profile__right">
            <div className="about-profile__desc">
              반응형 퍼블리싱을 기반으로 프론트엔드 역량을 확장해가며,
              프로젝트를 안정적으로 마무리하는 웹 퍼블리셔입니다.
            </div>
            <div className="about-profile__btns">
              <a
                className="btn-outline"
                href="https://www.linkedin.com/in/vooo10"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn-outline"
                href="https://github.com/ansanghwan"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn-outline"
                href="/ansanghwan_resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume (PDF)
              </a>
            </div>
            <p className="about-profile__note">
              KOSA experience certificate available upon request.
            </p>
            <div className="about-skill-badges" aria-label="Core skills">
              <span className="skill-badge">HTML5</span>
              <span className="skill-badge">CSS3 / SCSS</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Accessibility</span>
              <span className="skill-badge">Responsive UI</span>
              <span className="skill-badge">Git</span>
            </div>
          </div>
        </div>
        <div className="about-intro">
          <p>
            지난 10년간 금융·이커머스·교육·언론 등 다양한 도메인의 웹 프로젝트를
            진행해왔습니다.
          </p>
          <p>
            특히 기존 인력이 중단했거나 정리되지 않은 상태로 남아 있던 작업을
            인수해, 해결되지 않은 이슈는 리더와 공유하고 협의를 통해 정리하며
            최종 결과물까지 책임지고 완성하는 역할을 자주 맡아왔습니다.
          </p>
          <p>
            저를 채용하시면 10년간의 퍼블리싱 경험으로 다져진 빠르고 정확한
            마크업, HTML/CSS·웹접근성·반응형 설계 전문성을 즉시 활용하실 수
            있습니다.
          </p>
          <p>
            또한 다양한 디바이스와 환경을 고려한 반응형 퍼블리싱을 꾸준히
            진행해왔고, 퍼블리싱 리소스와 외주 비용을 줄이며 개발 사이클을
            단축하는 데 기여할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="about-sec about-sec--experience">
        <div className="about-sec__head">
          <div className="about-sec__title">
            <span className="accent-dot" aria-hidden="true"></span>
            <h3>Work Experience</h3>
          </div>
        </div>
        <ul className="experience-list">
          <li className="experience-item">
            <div className="experience-item__role">
              가족돌봄(어머니간병)으로 인한 휴식기
            </div>
            <div className="experience-item__meta">
              <span className="pill">Family Care</span>
              <span className="pill">2024.11 – Present</span>
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-item__role">
              Web Publisher / Project Lead (프리랜서)
            </div>
            <div className="experience-item__meta">
              <span className="pill">Freelance</span>
              <span className="pill">2014.10 – 2024.10</span>
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-item__role">
              대한민국 육군 부사관 (분대장,TOD조장, 소대장)
            </div>
            <div className="experience-item__meta">
              <span className="pill">Military</span>
              <span className="pill">2007.07 – 2011.11</span>
            </div>
          </li>
        </ul>
      </section>
      <section
        className="about-sec about-sec--pros"
        aria-labelledby="pros-heading"
      >
        <div className="about-sec__head">
          <div className="about-sec__title">
            <span className="accent-dot" aria-hidden="true"></span>
            <h3>Benefits</h3>
          </div>
        </div>
        <div className="accordion-wrap">
          <Accordion
            items={items}
            allowMultiple={false} // 하나만 열리게
            defaultOpenIds={[]} // 모두 닫힘 시작
            duration={500} // 속도
            easing="cubic-bezier(.2,.8,.2,1)" // 이징
          />
        </div>
      </section>
      <AboutGsap />
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
