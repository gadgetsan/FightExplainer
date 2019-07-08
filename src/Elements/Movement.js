import React, { Component } from "react";

import Helpers from "./../Helpers/Helpers";

export default class Movement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerHeight: window.innerHeight - 10,
      innerWidth: window.innerWidth - 10,
      movement: 0,
      tickSize: 100
    };
    window.addEventListener("resize", this.resize);
  }
  componentWillMount() {
    this.resize();
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    var self = this;
    setTimeout(function() {
      //console.log("tick");
      self.setState({
        movement:
          self.state.movement + self.state.tickSize / (self.props.time * 1000)
      });
      if (self.state.movement < 1.0) {
        self.tick();
      } else {
        self.setState({
          movement: 1.0
        });
      }
    }, self.state.tickSize);
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
    var deltaX = this.props.toX - this.props.fromX;
    var deltaY = this.props.toY - this.props.fromY;
    var processX = deltaX * this.state.movement;
    var processY = deltaY * this.state.movement;
    var top =
      ((100 - (parseInt(this.props.fromY) + processY)) / 100) *
        this.state.stageHeight -
      halfChildSize;
    var left =
      ((parseInt(this.props.fromX) + processX) / 100) * this.state.stageWidth -
      halfChildSize;
    //console.log(this.props.fromX);
    //console.log("top: " + top + ", left: " + left);
    return (
      <>
        <div
          className="location"
          style={{
            top: top + "px",
            left: left + "px"
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
