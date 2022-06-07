import * as React from "react";
import Delim from "./Delim";

import "./DelimitedContent.scss";

const DelimitedContent = ({ children }) => (
  <div className="delimited-content">
    <Delim to="bottom" />
    {children}
    <Delim to="top" />
  </div>
);

export default DelimitedContent;