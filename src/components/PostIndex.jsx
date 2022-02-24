import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PostCard from "./PostCard";
import DelimitedContent from "./DelimitedContent";

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
              wip
            }
          }
        }
      }
    }  
  `);
  return (
    <div className="post-index">
      <DelimitedContent>
        <ul className="post-index-list">
          {data.allMdx.edges.map((edge, i) => (
            <li key={i}>
              <PostCard frontmatter={edge.node.frontmatter} />
            </li>
          ))}
        </ul>
      </DelimitedContent>
    </div>
  );
}

export default PostIndex;