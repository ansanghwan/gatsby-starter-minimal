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
              {/* <span>{data.site.siteMetadata.title}</span> */}
              <span>Sanghwan</span>
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
                  <Link
                    to="/project-blog"
                    getProps={({ location }) =>
                      location.pathname.startsWith("/project-blog")
                        ? { className: "active" }
                        : {}
                    }
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="sanghwan-portfolio-body">
        <div className="sanghwan-portfolio-body__inner">
          <h1 className="page-title">{pageTitle}</h1>
          {children}
        </div>
      </div>
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">Sang Hwan An</div>
          <ul className="footer-links">
            <li>
              <a
                href="https://github.com/ansanghwan"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17.9 5 18.9 5.3 18.9 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0012 .5z" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vooo10"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="size-6"
                  >
                    <path d="M20.5 2h-17A1.5 1.5.0 002 3.5v17A1.5 1.5.0 003.5 22h17a1.5 1.5.0 001.5-1.5v-17A1.5 1.5.0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75.0 118.3 6.5 1.78 1.78.0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74.0 0013 14.19a.66.66.0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11.0 012.7-1.4c1.55.0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:vooo845@gmail.com">
                <span className="footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 3.2V17h16V8.2l-8 5-8-5zm8 3.1l7.2-4.5H4.8L12 11.3z" />
                  </svg>
                </span>
              </a>
            </li>
            {/* <li>
              <a
                href="https://sanghwan-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v14h14V5H5zm3 3h8v2H8V8zm0 4h8v2H8v-2z" />
                  </svg>
                </span>
                Portfolio
              </a>
            </li> */}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
