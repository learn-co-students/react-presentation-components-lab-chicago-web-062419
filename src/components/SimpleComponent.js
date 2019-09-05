// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { mood: "happy" };
  }

  //   handleClick = () => {
  //     this.state.mood === "happy" ? this.setState({ mood: "sad" }) : null;
  //     this.state.mood === "sad" ? this.setState({ mood: "happy" }) : null;
  //   };

  handleClick = () => {
    const newMood = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({ mood: newMood });
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
