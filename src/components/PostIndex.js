import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PostCard from "./PostCard";
import Delim from "./Delim";

import "./PostIndex.scss";

const PostIndex = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(
        sort: {fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              teaser
              slug
            }
          }
        }
      }
    }  
  `);
  return (
    <div className="post-index">
      <ul className="post-index-list">
        <li><Delim src={'/code.svg'} alt="code" /></li>
        {data.allMdx.edges.map((edge, i) => (
          <li key={i}>
            <PostCard frontmatter={edge.node.frontmatter} />
          </li>
        ))}
        <li><Delim src={'/code-slash.svg'} alt="code-slash" /></li>
      </ul>
    </div>
  );
}

export default PostIndex;