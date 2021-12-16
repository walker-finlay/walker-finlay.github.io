import * as React from "react"
import "./Header.scss"
import { Link } from "gatsby"

const Header = props => (
  <header class="header">
    <Link to="/"> 
      <h1>{props.siteTitle}</h1>
    </Link>
    <div>
      dark mode toggle button
    </div>
  </header>
);

export default Header