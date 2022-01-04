import React from "react";
import { MDXProvider } from "@mdx-js/react";

const MyA = props => (
  <a target="_blank" rel="noreferrer" {...props} />
);

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={{a: MyA}}>{element}</MDXProvider>
);