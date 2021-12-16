import * as React from "react";
import "./index.scss";
import { Link } from "gatsby";

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <p>
      <Link to="/blog/hello-world">My first post</Link>
    </p>
  </div>
);

export default IndexPage;
