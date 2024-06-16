import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
const IndexPage = () => {
  return (
    <Layout pageTitle="" pageClassName="sanghwan-portfolio--home">
      {/* <div className="home-me-wrap">
        <span></span>
      </div> */}
      <div className="home-intro-cont">
        <div className="ash-character">
          <div className="ash-character__inner">
            <span className="ash-character__shining"></span>
          </div>
        </div>
        <div className="home-intro eng-text">
          <div className="home-intro__inner">
            <span>HTML5</span>
            <br />
            <span>CSS3/SCSS</span>
            <br />
            <span>JAVASCRIPT</span>
            <br />
          </div>
        </div>
      </div>
      <span className="home-intro-bg"></span>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default IndexPage;
