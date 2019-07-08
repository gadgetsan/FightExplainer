import React, { Component } from "react";

export default class CastBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 0
    };
  }
  start() {
    var self = this;
    return new Promise(resolve =>
      setTimeout(function() {
        self.setState({
          fill: self.fill + 10
        });
      }, 1000)
    );
  }
  componentDidMount() {
    this.state = {
      fill: 0
    };
    this.start();
  }

  render() {
    return (
      <>
        <div
          className="cast-bar"
          style={{
            position: "fixed",
            top: this.props.top,
            left: this.props.left,
            transform: "translate(" + this.props.alignment + ")"
          }}
        >
          <div
            className="cast-bar-filler"
            style={{
              width: this.state.fill + "%",
              transition: "width " + this.props.time + "s linear"
            }}
          >
            {this.props.name.toUpperCase()}
          </div>
        </div>
      </>
    );
  }
}
