import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "../style/sanghwanpf.scss";

const Layout = ({ pageTitle, children, pageClassName }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={`sanghwan-portfolio ${pageClassName}`}>
      <header className="sanghwan-portfolio-header">
        <div className="sanghwan-portfolio-header__inner">
          <div className="sanghwan-portfolio-header__left">
            <Link to="/" className="nav-link-text">
              {/* <i className="ico-home"></i>{" "} */}
              <span>{data.site.siteMetadata.title}</span>
            </Link>
          </div>
          <div className="sanghwan-portfolio-header__right">
            <nav className="sanghwan-portfolio-nav">
              <ul className="sanghwan-portfolio-nav__ul">
                <li>
                  <Link to="/about" activeClassName="active">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/project-blog" activeClassName="active">
                    Project-Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="sanghwan-portfolio-body">
        <div className="sanghwan-portfolio-body__inner">
          <h1 className="page-title">
            <span>{pageTitle}</span>
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
