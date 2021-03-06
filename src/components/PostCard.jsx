import React from "react";
import { navigate } from "gatsby";

import "./PostCard.scss"

const PostCard = props => (
  <div className="post-card"
    onClick={() => { navigate(props.frontmatter.slug) }}
    onKeyDown={() => { navigate(props.frontmatter.slug) }}
    role="button"
    tabIndex="0"
  >
    <div className="post-card-image"></div>
    <div className="post-card-text">
      <div className="post-card-top-bar">
        <h4 className="post-card-title">
          {props.frontmatter.title}
        </h4>
        <h4 className="post-card-date">
          {props.frontmatter.date}
        </h4>
      </div>
      <p className="post-card-teaser">
        {props.frontmatter.teaser}
      </p>
    </div>
  </div>
);

export default PostCard;