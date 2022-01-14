import * as React from "react";

import "./Delim.scss";

class Delim extends React.Component {
  handleClick = () => {
    let options = {
      left: 0,
      top: this.props.to === "bottom" ? document.body.scrollHeight : 0,
      behavior: 'smooth',
    };
    window.scrollTo(options);
  }

  render() {
    return (
      <div className="delim-wrapper">
        <div className="delim"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex="0"
          title={this.props.to === "bottom" ? "To bottom" : "To top"}
        >
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Delim;