import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <div>
            <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="" />
          </div>
          <h2>
            <Link to={`/project-blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>
            <strong>Posted:</strong> {node.frontmatter.date}
          </p>
          <p>
            <strong>skill:</strong> {node.frontmatter.skill}
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
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
