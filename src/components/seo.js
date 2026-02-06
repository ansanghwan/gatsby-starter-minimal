import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, image, url }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const metaTitle = title
    ? `${title} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title;

  const metaDescription = description || data.site.siteMetadata.description;
  const metaImage =
    image ||
    `${data.site.siteMetadata.siteUrl}/images/ansanghwan_character.png`;
  const metaUrl = url || data.site.siteMetadata.siteUrl;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Disable auto-detection */}
      <meta name="format-detection" content="telephone=no,address=no,email=no" />

      {/* Favicon */}
      <link rel="icon" href="/images/favicon.ico" />
    </Helmet>
  );
};

export default Seo;
