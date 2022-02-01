import * as React from "react";
import PostIndex from "../components/PostIndex";

import "./index.scss";

const IndexPage = () => (
  <div>
    <h3>Welcome!</h3>
    <p>If you're reading this you are probably a recruiter. If so, please look around, and see my links in the footer.</p>
    <hr />
    <PostIndex />
    <h3>Upcoming posts</h3>
    <ul>
      <li>Convolution Reverb</li>
      <li>Robotics Discussion</li>
      <li>Walker's Stochastic Dimensionality Reduction</li>
      <li>Public Microservices Discussion</li>
    </ul>
  </div>
);

export default IndexPage;
