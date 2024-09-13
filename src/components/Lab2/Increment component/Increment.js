import React, { Component } from "react";
import "./style.css";

class Increment extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
  }

  decrement = () => {
    this.state.value > 1 && this.setState({ value: this.state.value - 1 });
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="container">
        <button className="minus" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.value}</span>
        <button className="plus" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Increment;
