import * as React from "react";
import Layout from "../components/layout";
import Accordion from "../components/Accordion";
import AboutGsap from "../components/about/AboutGsap";
import Seo from "../components/seo";

const AboutPage = () => {
  const items = [
    {
      id: "frontend-development",
      title: "React·TypeScript 기반 UI 및 데이터 연동",
      content: (
        <ul className="accordion__detail-list">
          <li>
            React 기반 상용 프로젝트에서 JSX 마크업, styled-components 등
            컴포넌트 UI 구현
          </li>
          <li>
            Next.js·TypeScript 팀 프로젝트에서 대시보드 타입 정의, API 요청 함수
            작성 및 데이터 연동
          </li>
          <li>TanStack Query 기반 서버 데이터 조회 및 상태 관리 경험</li>
        </ul>
      ),
    },
    {
      id: "component-architecture",
      title: "공통 컴포넌트 및 UI 구조 설계",
      content: (
        <ul className="accordion__detail-list">
          <li>공통 Layout·Button 컴포넌트 구현 및 반응형 UI 구조 설계</li>
          <li>Font·Color Token을 활용한 스타일 기준 정리</li>
          <li>
            다수의 실무 프로젝트에서 퍼블리싱 가이드 제작 및 공통 UI 구현 기준
            수립
          </li>
        </ul>
      ),
    },
    {
      id: "responsive-accessibility",
      title: "반응형 UI 및 웹 접근성",
      content: (
        <ul className="accordion__detail-list">
          <li>
            PC·태블릿·모바일 환경에 대응하는 반응형 UI 구현 및 크로스 브라우징
            대응
          </li>
          <li>웹 표준과 접근성을 고려한 마크업 및 UI 개선</li>
          <li>EBS, GS Kixx, SKT 웹 접근성 개선 등 다양한 실무 프로젝트 경험</li>
        </ul>
      ),
    },
    {
      id: "problem-solving",
      title: "프로젝트 문제 해결 및 완수",
      content: (
        <ul className="accordion__detail-list">
          <li>
            프로젝트 중간 투입 시 기존 코드와 업무 흐름을 파악하고 지연·중단된
            작업 해결
          </li>
          <li>
            운영 소스와 신규 개발 소스의 충돌 위험을 사전에 파악하고 협업을 통해
            대응
          </li>
          <li>신규 UI 구축부터 서비스 오픈 및 운영팀 인수인계까지 수행</li>
        </ul>
      ),
    },

    {
      id: "collaboration",
      title: "Git 협업 및 프로젝트 리딩",
      content: (
        <ul className="accordion__detail-list">
          <li>
            현대면세점 프로젝트에서 퍼블리싱 PL로 초기 작업 환경과 공통 가이드를
            구축하고, 3인 팀의 업무 분담·일정 산정 및 진행 관리
          </li>
          <li>
            운영팀 소스와 신규 개발 소스의 통합 과정에서 기획·개발팀과 협의하여
            병합 방안을 수립하고, 서비스 오픈 및 운영팀 인수인계까지 수행
          </li>
          <li>
            React 기반 프로젝트에서 Git 협업 환경을 구축하고 팀원의 작업 환경
            설정 및 업무 지원
          </li>
          <li>
            최근 Next.js·TypeScript 팀 프로젝트에서 GitHub PR 리뷰와 Jira 기반
            이슈·작업 관리에 참여
          </li>
        </ul>
      ),
    },
    {
      id: "ai-development",
      title: "AI 도구를 활용한 개발 업무",
      content: (
        <ul className="accordion__detail-list">
          <li>AI 코딩 도구를 활용한 코드 탐색·분석 및 구현 방향 검토</li>
          <li>
            생성된 코드와 UI 결과물을 직접 확인하고 수정·보완하는 방식으로 개발
            보조에 활용
          </li>
        </ul>
      ),
    },
  ];

  const certifications = [
    {
      title: "프론트엔드 단기 심화 과정 16기",
      issuer: "코드잇",
      date: "2026.10",
      // href: "https://www.codeit.kr/kdc/certificates/Lis4F-HJUs5-7Jyl5-XyWfs",
    },
    {
      title: "피그마(Figma)와 AI로 쉽게 배우는 UI 디자인",
      issuer: "코드잇",
      date: "2026.04",
      href: "https://www.codeit.kr/kdc/certificates/Lis4F-HJUs5-7Jyl5-XyWfs",
    },
    {
      title: "Meta Front-End Developer Professional Certificate (v.1)",
      issuer: "Coursera",
      date: "2025.10",
      href: "https://www.credly.com/badges/e3479220-231f-4c9a-aea0-4b80466d5337/linked_in_profile",
    },
  ];

  return (
    <Layout
      pageTitle={
        <>
          <p className="page-title__about">
            문제를 파악하고, 해결하며, <br />
            프로젝트를 끝까지 완수합니다.
          </p>
        </>
      }
      pageClassName="sanghwan-portfolio--about"
    >
      <section className="about-sec about-sec--profile">
        <div className="section-header">
          <div className="section-title">
            <span className="accent-dot" aria-hidden="true"></span>
            <h3>실무 경험과 강점</h3>
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
              기존 코드와 업무 흐름을 빠르게 파악하고, 지연되거나 중단된 작업을
              해결해 프로젝트를 마무리해 왔습니다. <br /> 신규 UI 구축부터 기존
              서비스 개선까지, 상황에 맞는 해결 방법을 찾고 협업을 통해 결과물을
              완성하는 데 강점이 있습니다.
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
              요청 시 KOSA 경력 증빙을 제출해 드릴 수 있습니다.
            </p>
            <div className="about-skill-badges" aria-label="Core skills">
              <span className="skill-badge">HTML5</span>
              <span className="skill-badge">CSS3 / SCSS</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">TanStack Query</span>
              <span className="skill-badge">Tailwind CSS</span>
              <span className="skill-badge">Web Accessibility</span>
              <span className="skill-badge">Responsive UI</span>
              <span className="skill-badge">Git / GitHub</span>
            </div>
          </div>
        </div>
        <div className="about-intro">
          <p>
            금융·커머스·교육·공공 등 다양한 도메인에서 10년 이상 웹 UI 구축과
            운영 프로젝트를 수행하며, 반응형 웹과 웹 접근성, 공통 UI 구현 경험을
            쌓아왔습니다.
          </p>
          <p>
            현대면세점 프로젝트에서는 웹 퍼블리싱 PL로서 공통 가이드 구축과 팀
            일정 관리를 담당했습니다. 운영 소스와 신규 개발 소스의 충돌 위험을
            사전에 파악하고 기획·개발팀과 대응 방안을 조율해, 최종 병합까지
            문제없이 완료했습니다.
          </p>
          <p>
            최근에는 React·TypeScript 기반 팀 프로젝트에서 공통 컴포넌트와
            반응형 레이아웃을 구현하고, API 연동 및 대시보드 개발을 수행하며
            프론트엔드 개발 역량을 확장했습니다.
          </p>
          <p>
            다양한 디바이스와 브라우저 환경에 대응하는 반응형 UI 구축 경험을
            바탕으로, 신규 화면 구현부터 기존 UI 개선, 웹 접근성 및 퍼블리싱
            이슈 대응까지 폭넓게 수행해왔습니다. 이를 통해 별도의 퍼블리싱 지원
            인력에 대한 의존도를 낮추고, 추가 외주 비용과 협업 부담을 줄이는 데
            기여할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="about-sec about-sec--experience">
        <div className="section-header">
          <div className="section-title">
            <span className="accent-dot" aria-hidden="true"></span>
            <h3>경력 및 주요 활동</h3>
          </div>
        </div>
        <ul className="experience-list">
          <li className="experience-item">
            <div className="experience-item__role">
              <p>Web Publisher / UI Publishing Lead</p>
              <span>웹 UI 개발 · 프리랜서</span>
            </div>
            <div className="experience-item__meta">
              <span className="pill">2013.08 – 2024.10</span>
            </div>
            <div className="experience-item__desc">
              금융·커머스·교육·공공 등 다양한 웹 프로젝트에서 반응형 UI, 웹
              접근성, 공통 UI 구축을 수행했습니다. <br /> 현대면세점
              프로젝트에서는 PL로서 3인 팀의 업무와 일정을 조율하고 서비스
              오픈까지 담당했습니다.
            </div>
          </li>

          <li className="experience-item">
            <div className="experience-item__role">
              <p> Frontend Development / Professional Training</p>
              <span>React · TypeScript · Next.js</span>
            </div>
            <div className="experience-item__meta">
              <span className="pill">2025 – 2026</span>
            </div>
            <div className="experience-item__desc">
              글쓰기 Meta Front-End Developer 과정과 Codeit의 Figma·AI UI 디자인
              및 프론트엔드 심화 과정을 이수하고, 4인 팀 프로젝트에서
              React·Next.js 기반 할 일 관리 웹 서비스 구축에 참여했습니다.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-item__role">
              <p>경력 전환 준비 및 가족돌봄</p>
              <span>가족돌봄으로 인한 정규 프로젝트 활동 휴식기</span>
            </div>
            <div className="experience-item__meta">
              <span className="pill">2024.11 – Present</span>
            </div>
            <div className="experience-item__desc">
              가족돌봄을 병행하면서 프론트엔드 기술 학습과 개인·팀 프로젝트를
              지속했습니다.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-item__role">
              <p>Republic of Korea Army — Non-Commissioned Officer</p>
              <span>분대장 &#183; TOD 조장 &#183; 소대장</span>
            </div>
            <div className="experience-item__meta">
              <span className="pill">2007.07 – 2011.11</span>
            </div>
            <div className="experience-item__desc">
              군 복무 중 인원 관리와 임무 수행 경험을 쌓았으며, 이후 프로젝트
              리딩과 협업 업무에서도 책임감과 상황 판단 능력을 활용해왔습니다.
            </div>
          </li>
        </ul>
      </section>

      <section className="about-sec">
        <div className="section-header">
          <div className="section-title">
            <span className="accent-dot" aria-hidden="true"></span>
            <h3>교육 및 수료 내역</h3>
          </div>
        </div>
        <ul className="experience-list">
          {certifications.map((item) => (
            <li key={item.id} className="experience-item">
              <div className="experience-item__role">
                <p>{item.title}</p>
                <div className="experience-item__submeta">
                  <p className="experience-item__org">{item.issuer}</p>
                  <span className="experience-item__date">{item.date}</span>
                </div>
              </div>
              {item.href?.trim() && (
                <div className="experience-item__meta">
                  <a
                    className="btn-outline"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    정보 보기
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section
        className="about-sec about-sec--pros"
        aria-labelledby="pros-heading"
      >
        <div className="section-header">
          <div className="section-title">
            <span className="accent-dot" aria-hidden="true"></span>
            <h3>업무 역량</h3>
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

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
