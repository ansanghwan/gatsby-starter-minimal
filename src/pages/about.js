import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" pageClassName="sanghwan-portfolio--about">
      <section className="about-sec about-sec--top">
        <div className="me-profile">
          {/* <span className="me-profile__img"></span> */}
          <div className="me-profile__right">
            <p className="me-profile__name">
              {" "}
              <strong>안상환</strong>{" "}
            </p>
            <p>
              <strong>Blog</strong> :{" "}
              <a href="https://sh-sida.tistory.com/" target="_blank">
                https://sh-sida.tistory.com/
              </a>
            </p>
            <p className="me-profile__git">
              <strong>git</strong> :{" "}
              <a href="https://github.com/sanghwanAN" target="_blank">
                https://github.com/sanghwanAN
              </a>
            </p>
          </div>
        </div>
        <h3 className="about-sec__tit">산전 수전 공중전</h3>
        안녕하세요, <br />
        <em>현재는 프리랜서</em> 웹 퍼블리셔 <em>안상환</em> 입니다.
        <br /> 5년 간의 부사관(병 생활 포함) 복무 하고 전역 후에 직업 전문
        학교에서 웹 퍼블리셔 교육을 받고 지금 까지 개인 공부를 게을리 하지
        않으며 어려운 일, 남들이 가지 않는 프로젝트 등 가리지 않고, 책임감 있게
        프로젝트들을 수행 하며 여기까지 성장 해 왔습니다. <br /> <br />
        프리랜서를 하면서 구인이 되지 않거나 퍼블리셔가 자주 교체 되는 프로젝트
        중간에 투입 되어 문제 해결사 역할을 주로 해왔습니다. <br /> <br />
        덕분에 예상하지 못한 문제 들을 많이 접했고, 그 문제들을 해결 해 나가면서
        성장의 원동력이 되었습니다. <br /> <br />
        저는 반응형 웹의 자신이 있으며, Scss, Git, Reac.js에서 마크업, 웹
        접근성, 크로스 브라우징이 가능 합니다. <br /> <br />
        최근 react 프로젝트(carrot보험 구축, 웅진 스마트올 app)를 통해 react.js,
        javascript 도 가능합니다. <br /> <br />
        꼼꼼하고 ,정직하고, 책임감 있고 신속하게 화면 퍼블리싱을 할 수 있다고
        자신 있게 말씀드리고 싶습니다. <br /> <br />
        현재 까지 모든 프로젝트들을 asap 프로젝트만 진행 하였고 마무리까지 완료
        하였습니다. <br /> 어떤 프로젝트든 저에게 충분히 믿고 맞겨 주셔도
        됩니다. <br /> <br />
        감사합니다.
      </section>
      {/* <section className="about-sec">
        <h3 className="about-sec__tit">
          프리랜서에서 정규직으로 희망하는 이유
        </h3>
        <em>다양한 환경</em> 에서, <em>다양한 사람</em>들과 일을 해 왔습니다.
        <br />
        지금 까지의 경험을 토대로 <em>안정</em>적인 곳에서 고정적인{" "}
        <em>동료</em>들과 <em>프로젝트에 대해서 함께 고민하고 집중</em>할 수
        있으려면 회사에 <em>정규직 입사</em>를 해야 된다고 <em>판단</em>이 되어
        이렇게 정규직 입사를 희망 하고 있습니다.
      </section> */}

      <section className="about-sec">
        <h3 className="about-sec__tit">저는 아래의 업무 강점이 있습니다.</h3>
        <ul>
          <li>시멘틱 마크업 웹표준에 이해가 깊다고 할 수 있습니다.</li>
          <li>
            Html,Css/Scss를 꼬이지 않고 규칙적으로 마크업을 할 수 있습니다.
          </li>
          <li>
            javscript를 꾸준히 공부하고 있으며 기본적인 es6 문법을 이해하고
            있습니다.
          </li>
          <li>
            프론트 엔드 환경(react.js) 에서 퍼블리싱 경험이 있으며, react.js
            환경에서 퍼블리싱이 가능 합니다.
          </li>
          <li>
            git을 사용하여 프로젝트 경험이 있습니다. 기본적인 git 사용이 가능
            합니다.
            <br /> <small>(포트폴리오도 git을 활용 하였습니다.)</small>{" "}
          </li>
          <li>
            <em>
              코드 리뷰에 거부감이 없으며, 코딩컨벤션과 같이 팀원들과 약속된
              환경을 만들고 준수 하는 것을 좋아하며 그렇게 일을 하고 싶습니다.
            </em>
          </li>
          <li>
            저는{" "}
            <em>
              업무의 경계선을 긋지 않고 궁극적으로 프론트엔드까지 확장하는 것을
              목표
            </em>
            로 하고 있습니다.
          </li>
        </ul>

        <p className="closing-ment">- 끝까지 읽어 주셔서 감사합니다. -</p>
      </section>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
