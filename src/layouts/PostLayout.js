import * as React from "react";
import DelimitedContent from "../components/DelimitedContent";

const options = { year: 'numeric', month: 'long', day: 'numeric' }

const PostLayout = ({ children, pageContext }) => (
  <div>
    <h1>{pageContext.frontmatter.title}</h1>
    <h2>
      {
        new Date(Date.parse(pageContext.frontmatter.date))
          .toLocaleDateString(undefined, options)
      }
    </h2>
    <hr />
    <DelimitedContent>{children}</DelimitedContent>
  </div>
);

export default PostLayout;