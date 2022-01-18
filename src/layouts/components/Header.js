import * as React from "react";
import { Link } from "gatsby";
import SubtractiveColor from "./SubtractiveColor";

const Header = props => (
  <header className="header">
    <SubtractiveColor />
    <Link to="/" title="Go home">
      <h1>{props.siteTitle}</h1>
    </Link>
    <div className="options-container">
      dm
    </div>
  </header>
);

export default Header;