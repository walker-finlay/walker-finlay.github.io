import "katex/dist/katex.min.css"
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import BlogLink from "./src/components/BlogLink";
import Layout from "./src/layouts/index"

import "./src/layouts/prism-tomorrow.css"
import "./src/layouts/prism-line-numbers.css"

export const wrapRootElement = ({ element }) => (
  <Layout>
    <MDXProvider components={{a: BlogLink}}>{element}</MDXProvider>
  </Layout>
);