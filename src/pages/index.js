import * as React from "react";
import "./index.scss";
import { Link } from "gatsby";

const IndexPage = () => (
  <div>
    <h3>Welcome!</h3>
    <p>If you're reading this you are probably a recruiter. If so, please look around, and see my links in the footer.</p>
    <p>
      <Link to="hello-world">Hello world!</Link>
    </p>
  </div>
);

export default IndexPage;
