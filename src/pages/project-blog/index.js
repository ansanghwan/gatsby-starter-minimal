import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  const formatSkills = (skill) => {
    if (!skill) return "";
    return skill
      .replace(/#/g, "")
      .split(/\s*,\s*/)
      .filter(Boolean)
      .join(" · ");
  };

  return (
    <Layout
      pageTitle={
        <>
          <p className="page-title__about-desc">Project Posts</p>
        </>
      }
      pageClassName="sanghwan-portfolio--project"
    >
      <ul className="project-list">
        {data.allMdx.nodes.map((node) => (
          <li key={node.id} className="project-card">
            <Link
              to={`/project-blog/${node.frontmatter.slug}`}
              className="project-card__link"
            >
              <span className="project-card__media">
                <GatsbyImage
                  image={getImage(node.frontmatter.hero_image)}
                  alt=""
                />
              </span>
              <div className="project-card__overlay">
                <div className="project-card__content">
                  <h4 className="project-card__title">
                    {node.frontmatter.title}
                  </h4>
                  <div className="project-card__rows">
                    <div className="project-card__row">
                      <span>Period</span>
                      <span>
                        {node.frontmatter.date} – {node.frontmatter.enddate}
                      </span>
                    </div>
                    <div className="project-card__row">
                      <span>Skills</span>
                      <span>{formatSkills(node.frontmatter.skill)}</span>
                    </div>
                  </div>
                  <span className="project-card__cta">View details →</span>
                </div>
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
