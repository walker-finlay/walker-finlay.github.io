import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import DelimitedContent from "../../components/DelimitedContent";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({
  data: {
    mdx: {
      frontmatter,
      body,
      featuredImg,
    }
  }
}) => (
  <div>
    <h1>{frontmatter.title}</h1>
    <h2>{frontmatter.date}</h2>
    {featuredImg ? <GatsbyImage image={getImage(featuredImg)} alt="featured image" /> : <hr />}
    <DelimitedContent>
      <MDXRenderer>{body}</MDXRenderer>
    </DelimitedContent>
  </div>
);

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
      featuredImg {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export default BlogPost;