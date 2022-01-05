import * as React from "react";
import { Link } from "gatsby";
import PostIndex from "../components/PostIndex";

import "./index.scss";

const IndexPage = () => (
  <div>
    <h3>Welcome!</h3>
    <p>If you're reading this you are probably a recruiter. If so, please look around, and see my links in the footer.</p>
    <p>
      <Link to="hello-world">Hello world!</Link>
    </p>
    <PostIndex />
  </div>
);

export default IndexPage;
