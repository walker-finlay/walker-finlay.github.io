import * as React from "react";
import "./index.scss";
import { Link } from "gatsby";

const IndexPage = () => (
  <div>
    <h3>Welcome!</h3>
    <p>If you're reading this you are a recruiter</p>
    <p>
      <Link to="hello-world">My first post</Link>
    </p>
  </div>
);

export default IndexPage;
