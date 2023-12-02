import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout
      pageTitle="I am a web publisher"
      pageClassName="sanghwan-portfolio--about"
    >
      <section className="about-sec about-sec--top">
        <div className="me-profile">
          {/* <span className="me-profile__img"></span> */}
          <div className="me-profile__me">
            <img src="/images/about_me.png" alt="" />
          </div>
        </div>
        <h3 className="about-sec__tit">About</h3>
        안녕하세요, <br />
        웹퍼블리셔 안상환 입니다. <br />
        프리랜서로 주로 문제가 발생하는 구축 프로젝트, 운영 프로젝트 위주로
        교체로 투입하여 프로젝트를 마무리까지 완료하는 전문 웹퍼블리셔입니다.
        <br /> <br />
        프리랜서로 참여한 모든 프로젝트들은 모두 기존 웹퍼블리셔들이 처리하지
        못한 업무들을 교체로 투입하여 업무들을 처리하였습니다.
        <br />
        프로젝트에서 처리했던 자세한 내용들은 저의 Project-Blog에서 확인
        부탁드립니다.
        <br /> <br />
        웹 표준, 웹 접근성, javascript, 그리고 react.js 환경에서도 퍼블리싱이
        가능합니다.
        <br />
        가이드 제작뿐만 아니라 타 부서와도 원활한 커뮤니티 또한 가능합니다.
      </section>

      <section className="about-sec">
        <h3 className="about-sec__tit">Strong Point</h3>
        <ul className="strong-point-list">
          <li>
            SI 및 SM 프로젝트를 골고루 진행 하였으며 구축 업무 및 운영 업무도 다
            소화가 가능 합니다. <em>(Project-Blog 참고)</em>
          </li>
          <li>
            반응형 퍼블리싱에 강점이 있습니다. 다수의 반응형 프로젝트에서
            단독으로 퍼블리싱 경험이 많습니다.(Project-Blog 참고)
          </li>
          <li>
            React.js에서 퍼블리싱이 가능 하며 다수의 React.js 프로젝트를 수행
            하였습니다.<em>(Project-Blog 참고)</em>
          </li>
          <li>
            프론트 엔드 환경(react.js) 에서 퍼블리싱 경험이 있으며, react.js
            환경에서 퍼블리싱이 가능 합니다.(styled-components, Storybook을
            사용하여 퍼블리싱 가능 합니다.)
          </li>
          <li>
            은행 및 보험사 등 다수의 금융권 구축 및 운영 프로젝트를 경험하였기
            때문에 금융권 프로젝트를 수행하는데 어려움이 없습니다.
            <em>(Project-Blog 참고)</em>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
