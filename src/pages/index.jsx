import * as React from "react";
import PostIndex from "../components/PostIndex";

import "./index.scss";

const IndexPage = () => (
  <div>
    <h3>Welcome!</h3>
    <p>
      TODO:
    </p>
    <hr />
    <PostIndex />
    <h3>Upcoming posts</h3>
    <ul>
      <li>Robotics Discussion</li>
      <li>Public Microservices Discussion</li>
      <li>Unnamed Tile Game</li>
    </ul>
  </div>
);

export default IndexPage;
