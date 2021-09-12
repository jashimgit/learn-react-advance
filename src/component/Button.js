import React from "react";

export default class Button extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button className="btn btn-info" onClick={() => handleClick()}>
        Change Clock
      </button>
    );
  }
}
