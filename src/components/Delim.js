import * as React from "react";

import "./Delim.scss";

class Delim extends React.Component {
  handleClick = () => {
    let to = this.props.to;
    if (to === "bottom") {
      window.scrollTo(0, document.body.scrollHeight);
    }
    else {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div className="delim-wrapper">
        <div className="delim"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex="0"
        >
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Delim;