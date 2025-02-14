import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout
      pageTitle="Project Posts"
      pageClassName="sanghwan-portfolio--project"
    >
      <ul className="project-list">
        {data.allMdx.nodes.map((node) => (
          <li key={node.id} className="project-list__item">
            <Link
              to={`/project-blog/${node.frontmatter.slug}`}
              className="project-list__link"
            >
              <span className="project-list__thumbnail">
                <GatsbyImage
                  image={getImage(node.frontmatter.hero_image)}
                  alt=""
                />
              </span>
              <div className="project-list__conts">
                <p className="project-list__label">{node.frontmatter.title}</p>
                <p className="project-list__date">
                  {/* <span className="project-list__conts__tit">기간:</span>{" "} */}
                  {node.frontmatter.date} - {node.frontmatter.enddate}
                </p>
                <p className="project-list__skill">
                  <span className="project-list__conts__tit">SKILL:</span>{" "}
                  {node.frontmatter.skill}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          enddate(formatString: "YYYY.MM.DD")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          skill
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
