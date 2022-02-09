import * as React from "react";
import Delim from "./Delim";

import "./DelimitedContent.scss";

const DelimitedContent = ({ children }) => (
  <div className="delimited-content">
    <Delim src={'/code.svg'} alt="code" to="bottom" />
    {children}
    <Delim src={'/code-slash.svg'} alt="code-slash" to="top" />
  </div>
);

export default DelimitedContent;