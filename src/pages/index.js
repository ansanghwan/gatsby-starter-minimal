import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import TitleFxErase from "../components/home/TitleFxErase";
import TitleNameFx from "../components/home/TitleNameFx";

import HomeBodyFxScroll from "../components/home/HomeBodyFxScroll";

const IndexPage = () => {
  return (
    <Layout
      pageTitle={
        <>
          <p className="page-title__role">
            <span className="stroke">Web UI Developer</span>{" "}
          </p>

          <p className="page-title__name">
            <span className="my-name">SANGHWAN AN</span>
          </p>
        </>
      }
      pageClassName="sanghwan-portfolio--home"
    >
      {/* <div className="home-me-wrap">
        <span></span>
      </div> */}
      <div className="home-cont">
        <div className="ash-greeting">
          <div className="ash-greeting__inner">
            <div className="ash-hello">
              <p>
                안녕하세요, <br />
                웹퍼블리셔 안상환 입니다.
              </p>
              <p>
                정돈과 구조에 강하며, 프로젝트를 안정적으로 이끄는 힘이
                있습니다.
              </p>
              <p>실용적인 감각과 꼼꼼함으로, 퍼블리싱의 완성도를 높입니다.</p>
              <p>누구보다 조용히, 그러나 확실하게 팀에 기여하는 사람입니다.</p>
              <p>
                한 번 맺은 인연은 오래 지키고, 한 번 맡은 일은 끝까지 책임지는
                성격입니다.
              </p>
              <p>
                정리와 구조를 좋아하지만, 그 안에 따뜻한 감정을 담고자 합니다.
              </p>
              <p>사람과 일, 어느 쪽이든 진심으로 대하고 싶습니다.</p>
            </div>
            <ul className="ahs-skill-list">
              <li>
                <span className="skill-highlight">HTML5 / CSS3 / SCSS</span>
              </li>
              <li>
                <span className="skill-highlight">
                  웹표준 마크업 / 재사용성 중심 마크업
                </span>
              </li>
              <li>
                <span className="skill-highlight">
                  JavaScript (UI 중심 스크립트 구현)
                </span>
              </li>
              <li>
                <span className="skill-highlight">
                  반응형 웹 / 크로스 브라우징 / 웹 접근성
                </span>
              </li>
              <li>
                <span className="skill-highlight">
                  Git을 통한 실무 협업이 가능합니다
                </span>
              </li>
              <li>
                <span className="skill-highlight">
                  React 환경에서 UI 마크업과 스타일링에 익숙합니다.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ash-character">
          <div className="ash-character__inner">
            <div className="ash-character__img-wrap">
              <span className="ash-character__img">
                <img src="/images/ansanghwan_character.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <TitleFxErase />
      <TitleNameFx />
      <HomeBodyFxScroll />
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
