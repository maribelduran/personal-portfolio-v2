import React, { Component } from "react";
import Scrollchor from "react-scrollchor";

export default class ScrollchorItem extends Component {
  constructor(props) {
    super(props);
  }

  _handleClick = event => {
    this._back.simulateClick(event);
  };

  render() {
    const { to, children, className } = this.props;
    return (
      <span onClick={this._handleClick} className={className}>
        <Scrollchor
          to={to}
          ref={ref => (this._back = ref)}
          animate={{ duration: 500 }}
        />
        {children}
      </span>
    );
  }
}
