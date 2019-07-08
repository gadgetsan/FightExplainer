import React, { Component } from "react";
import Helpers from "./../Helpers/Helpers";

export default class CastBar extends Component {
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
      <>
        <div
          className="character"
          style={{
            background: this.props.color,
            width: pixelSize + "px",
            height: pixelSize + "px"
          }}
        >
          <div
            className="character-text"
            style={{
              width: pixelSize + "px",
              height: pixelSize + "px",
              fontSize: pixelSize / 2 + "px"
            }}
          >
            {this.props.tag}
          </div>
        </div>
      </>
    );
  }
}
