import React, { Component } from "react";
import Helpers from "./../Helpers/Helpers";

export default class Circle extends Component {
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
    //we need to calculate the size from the stage informations
    var pixelSize = Helpers.getPixelSize(
      this.state.stageWidth,
      this.state.stageHeight,
      this.props.size
    );
    return (
      <div
        className="circle"
        style={{
          border: "1px solid " + this.props.color,
          width: pixelSize + "px",
          height: pixelSize + "px"
        }}
      />
    );
  }
}
