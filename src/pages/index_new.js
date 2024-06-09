import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
const IndexPage = () => {
  return (
    <Layout pageTitle="" pageClassName="sanghwan-portfolio--home">
      <div className="home-me-wrap">ddd</div>
      <div className="home-ment eng-text">
        <div className="home-ment__inner">
          <span>HTML5</span>
          <br />
          <span>CSS3/SCSS</span>
          <br />
          <span>JAVASCRIPT</span>
          <br />
          <span>JQUERY</span>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default IndexPage;
