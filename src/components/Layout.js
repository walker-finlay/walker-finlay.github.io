import React from "react";
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header"
import Footer from "./Footer";
import "./Layout.scss"

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
      <div>
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