import * as React from "react"
import "./index.scss"
import TitleBar from "../components/TitleBar"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <div>
      <TitleBar title="walker-finlay" />
      <Link to="/blog/hello-world">Hello world</Link>
    </div>
  )
}

export default IndexPage
