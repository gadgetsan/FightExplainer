import React, { Component } from "react";

import Helpers from "./../Helpers/Helpers";

export default class Location extends Component {
  constructor(props) {
    super(props);
    window.addEventListener("resize", this.resize);
  }
  componentWillMount() {
    this.resize();
  }

  resize = () => {
    this.setState({
      stageHeight: Helpers.getHeight(),
      stageWidth: Helpers.getWidth()
    });
  };

  render() {
    var halfChildSize =
      Helpers.getPixelSize(
        this.state.stageWidth,
        this.state.stageHeight,
        this.props.children.props.size
      ) / 2;
    return (
      <>
        <div
          className="location"
          style={{
            top:
              ((100 - this.props.y) / 100) * this.state.stageHeight -
              halfChildSize +
              "px",
            left:
              (this.props.x / 100) * this.state.stageWidth -
              halfChildSize +
              "px"
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
