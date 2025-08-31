import * as React from "react";
import { useEffect } from "react";
import Layout from "../components/layout";
import Accordion from "../components/Accordion";
import AboutErase from "../components/about/AboutErase";

const AboutPage = () => {
  const items = [
    {
      id: "adapt",
      title: "프로젝트 긴급 투입 & 빠른 적응",
      content: (
        <ul className="accordion__detail-list">
          <li>철수/이동 공백 상황에서도 즉시 투입</li>
          <li>
            <strong>사례:</strong> 통신사 T로밍 접근성, 금융권 3차 오픈, 보험사
            안정화, 휴넷·한국일보 운영
          </li>
        </ul>
      ),
    },
    {
      id: "ops",
      title: "운영 및 유지보수 경험",
      content: (
        <ul className="accordion__detail-list">
          <li>이벤트/뉴스레터/어드민 가이드 등 운영 요청 신속·정확</li>
          <li>
            <strong>사례:</strong> 한국일보(주제판·창간특집·공모전), 휴넷 운영,
            보험사 안정화·신규
          </li>
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
      id: "skill",
      title: "퍼블리싱 가이드·협업 체계",
      content: (
        <ul className="accordion__detail-list">
          <li>HTML/CSS/JS 외 Pug, SCSS, Bootstrap 커스텀, GSAP 적용</li>
          <li>
            <strong>사례:</strong> LG 멀티샵 Pug 이슈 해결, 포스코 SCSS 커스텀,
            사이펄리 GSAP
          </li>
        </ul>
      ),
    },
    {
      id: "pfm",
      title: "성과 & 평가",
      content: (
        <ul className="accordion__detail-list">
          <li>우수사원 선정 → 괌 포상휴가</li>
          <li>빠른 적응, 문제 해결, 협업 개선 공로 인정</li>
        </ul>
      ),
    },
  ];

  return (
    <Layout
      pageTitle={
        <>
          <p className="page-title__about">
            <span className="stroke">Web Publishing Professional</span>
          </p>

          <p className="page-title__about-desc">
            Delivering Reliable, Accessible, and Modern Web Experiences
          </p>
        </>
      }
      pageClassName="sanghwan-portfolio--about"
    >
      <section className="about-sec about-sec--profile">
        {/* <span className="me-profile__img"></span> */}
        <div className="my-picture">
          <img src="/images/about_me.jpg" alt="안상환 프로필사진" />
        </div>
        <div className="my-profile">
          {/* <p className="my-profile__name">안상환</p> */}
          <h2 className="sec-tit">경력사항</h2>
          <ul className="career-list">
            <li>
              <p className="career-list__tit">
                가족돌봄(어머니간병)으로 인한 휴식기
              </p>
              <p className="career-list__date">
                <time dateTime="2024-11">2024년 11월</time> ~{" "}
                <time dateTime="present">현재</time>
              </p>
            </li>
            <li>
              <p className="career-list__tit">
                Web Publisher / Project Lead (프리랜서)
              </p>
              <p className="career-list__date">2014년 10월 - 2024년 10월</p>
            </li>

            <li>
              <p className="career-list__tit">
                대한민국 육군 부사관 (분대장,TOD조장, 소대장)
              </p>
              <p className="career-list__date">2007년 7월 - 2011년 11월</p>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="about-sec about-sec--pros"
        aria-labelledby="pros-heading"
      >
        <h2 className="sec-tit" id="pros-heading">
          업무 이점
        </h2>
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
      <section
        className="about-sec about-sec--hire"
        aria-labelledby="hire-heading"
      >
        <h2 className="sec-tit" id="hire-heading">
          저를 채용하면 얻을 수 있는 이점
        </h2>

        <div className="hire-benefits">
          <div className="hire-benefits__group">
            <h3 className="hire-benefits__tit">1. 퍼블리싱 외주 비용 절감</h3>
            <ul className="hire-benefits__list">
              <li>HTML/CSS/JS, React 퍼블리싱 직접 수행</li>
              <li>웹 접근성, 신규 페이지 제작, 퍼블리싱 가이드 제공</li>
            </ul>
          </div>

          <div className="hire-benefits__group">
            <h3 className="hire-benefits__tit">
              2. 프로젝트 안정성과 일정 관리
            </h3>
            <ul className="hire-benefits__list">
              <li>위기 상황·중간 투입 프로젝트 다수 완수</li>
              <li>일정 차질 없이 안정적으로 오픈까지 이끕니다.</li>
            </ul>
          </div>

          <div className="hire-benefits__group">
            <h3 className="hire-benefits__tit">
              3. 성장 잠재력이 큰 프론트엔드 인재
            </h3>
            <ul className="hire-benefits__list">
              <li>10년 퍼블리셔 경력 + React/GSAP 학습·적용 중</li>
              <li>
                Meta Front-End Developer <strong>인증 과정 수강 예정</strong> →
                프론트엔드 역량 확장 예정
              </li>
            </ul>
          </div>
        </div>
      </section>
      <AboutErase />
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
