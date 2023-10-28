import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <span className="home-me"></span>
      <div className="home-ment">
        <p>
          안녕하세요, <br />
          웹퍼블리셔 안상환 입니다.
        </p>
        <p>
          React gatsby, gatsby cloud를 사용한 <br />웹 포트폴리오 입니다.
        </p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default IndexPage;
