import React, { Component } from "react";

import Helpers from "./../Helpers/Helpers";

export default class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      tickSize: 100
    };
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    var self = this;
    setTimeout(function() {
      //console.log("tick");
      self.setState({
        time: self.state.time + self.state.tickSize
      });
      self.tick();
    }, self.state.tickSize);
  }

  render() {
    //console.log(this.state.time);
    if (
      this.state.time > this.props.startAt * 1000 &&
      this.state.time <= this.props.endAt * 1000
    ) {
      return this.props.children;
    } else {
      return <></>;
    }
  }
}
