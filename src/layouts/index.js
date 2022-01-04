import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss"
import "./prism-tomorrow.css"
import "./prism-line-numbers.css"

require(`katex/dist/katex.min.css`);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="page-wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='container'>
          <main className='main-content'>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout