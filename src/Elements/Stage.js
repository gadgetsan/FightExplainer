import React, { Component } from "react";
import Helpers from "./../Helpers/Helpers";

export default class Stage extends Component {
  constructor(props) {
    super(props);
    window.addEventListener("resize", this.resize);
  }

  componentDidMount() {
    this.resize();
  }

  componentWillMount() {
    this.resize();
  }

  resize = () => {
    var windowWidth = window.innerWidth - 10;
    var windowHeight = window.innerHeight - 10;

    var ratio = this.props.aspect.split(":");
    var realRatio = ratio[0] / ratio[1];
    var width = 10;
    var height = 10;
    if (windowHeight * realRatio > windowWidth) {
      width = windowWidth;
      height = windowWidth / realRatio;
    } else {
      width = windowHeight * realRatio;
      height = windowHeight;
    }
    Helpers.setHeight(height);
    Helpers.setWidth(width);
    this.setState({
      height: height,
      width: width
    });
  };

  render() {
    return (
      <>
        <div
          className="stage"
          style={{
            width: this.state.width + "px",
            height: this.state.height + "px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
