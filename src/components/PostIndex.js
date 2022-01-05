import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PostIndex = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              teaser
            }
          }
        }
      }
    }  
  `);
  console.log(data.allMdx.edges)
  return (
    <div className="post-index">
      <ul>
        {data.allMdx.edges.map((edge, i) => (
          <li key={i}>
            {edge.node.frontmatter.title}
            <ul><li>{edge.node.frontmatter.date}</li></ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostIndex;