import React from "react";
import { MDXProvider } from "@mdx-js/react";
import BlogLink from "./src/components/BlogLink";

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={{a: BlogLink}}>{element}</MDXProvider>
);