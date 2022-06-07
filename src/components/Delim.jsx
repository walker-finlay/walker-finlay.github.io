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
    const toTop = this.props.to === "top";
    const imageSrc = toTop ? '/code-slash.svg' : '/code.svg';
    return (
      <div className="delim-wrapper">
        <div className="delim"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex="0"
          title={toTop ? "To top" : "To bottom"}
        >
          <img src={imageSrc} alt={imageSrc.substring(1)} />
        </div>
      </div>
    );
  }
}

export default Delim;