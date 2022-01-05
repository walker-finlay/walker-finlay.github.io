import React from "react";
import { Link } from "gatsby";

import "./PostCard.scss"

const PostCard = (props) => (
  <div className="post-card-wrapper">
    <Link to={props.frontmatter.slug}>
      <div className="post-card">
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
    </Link>
  </div>
);

export default PostCard;