import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ProjectGsap from "../../components/project/ProjectGsap";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout
      pageTitle={
        <>
          <p className="page-title__about-desc">{data.mdx.frontmatter.title}</p>
        </>
      }
      pageClassName="sanghwan-portfolio--mdx"
    >
      <div className="project-detail">
        <div className="project-detail__img">
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
        </div>
        <div className="project-detail__cont">
          {/* <p>{data.mdx.frontmatter.date}</p> */}
          {/* <p>
            Site Url:{" "}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p> */}
          {children}
        </div>
      </div>
      <ProjectGsap />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
export default BlogPost;
