import React, { Component } from "react";
class ToggleButtn extends Component {
  constructor() {
    super();
    this.state = {
      isToggled: true,
      status: "ON",
    };
  }
  toggle = () => {
    if (this.state.isToggled) {
      this.setState({ isToggled: false, status: "OFF" });
    } else {
      this.setState({ isToggled: true, status: "ON" });
    }
  };
  render() {
    return (
      <>
        <h1>{this.state.status}</h1>
        <button onClick={this.toggle}>toggle</button>
      </>
    );
  }
}
export default ToggleButtn;
