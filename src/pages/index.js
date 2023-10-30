import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
const IndexPage = () => {
  return (
    <Layout pageTitle="" pageClassName="sanghwan-portfolio--home">
      <div className="home-me-wrap">
        <div className="home-me-wrap__inner">
          <span className="home-me"></span>
        </div>
      </div>
      <div className="home-ment eng-text">
        <p>
          <span>Web Portfolio</span>
        </p>
        <p>
          <span>
            WEB <br /> PUBLISHER{" "}
          </span>
        </p>
        <p>
          <span>Sanghwan An</span>
        </p>
        {/* <p>
          React gatsby, gatsby cloud를 사용한 <br />웹 포트폴리오 입니다.
        </p> */}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default IndexPage;
