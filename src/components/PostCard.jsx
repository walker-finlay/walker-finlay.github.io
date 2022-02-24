import React from "react";
import { navigate } from "gatsby";

import "./PostCard.scss"

let classNames = require('classnames');

const PostCard = props => {
  var postCardClass = classNames({
    "post-card": true,
    "post-card-dimmed": props.frontmatter.wip
  });

  return (
    <div className={postCardClass}
      onClick={props.frontmatter.wip ? null : () => { navigate(props.frontmatter.slug) }}
      onKeyDown={props.frontmatter.wip ? null : () => { navigate(props.frontmatter.slug) }}
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
}

export default PostCard;