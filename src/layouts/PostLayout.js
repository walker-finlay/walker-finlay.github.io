import * as React from "react";

const options = { year: 'numeric', month: 'long', day: 'numeric' }

const PostLayout = ({ children, pageContext }) => (
  <div>
    <h1>{pageContext.frontmatter.title}</h1>
    <h2>{new Date(Date.parse(pageContext.frontmatter.date)).toLocaleDateString(undefined, options)}</h2>
    <hr />
    <div>{children}</div>
  </div>
);

export default PostLayout;