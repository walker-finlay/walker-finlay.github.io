import React from "react";
import { Link, navigate } from "gatsby";

import "./PostCard.scss"

const CardTitle = (props) => (
  <h4 className="post-card-title">
    <Link to={props.slug}>
      {props.title}
    </Link>
  </h4>
);

const PostCard = props => (
  <div className="post-card"
    onClick={() => { navigate(props.frontmatter.slug) }}
  >
    <div className="post-card-top-bar">
      <CardTitle
        slug={props.frontmatter.slug}
        title={props.frontmatter.title}
      />
      <h4 className="post-card-date">
        {props.frontmatter.date}
      </h4>
    </div>
    <p className="post-card-teaser">
      {props.frontmatter.teaser}
    </p>
  </div>
);

export default PostCard;