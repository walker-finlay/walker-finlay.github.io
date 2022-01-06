import * as React from "react";

import "./Delim.scss";

const Delim = props => (
  <div className="delim-wrapper">
    <div className="delim">
      <img src={props.src} alt={props.alt} />
    </div>
  </div>
);

export default Delim;