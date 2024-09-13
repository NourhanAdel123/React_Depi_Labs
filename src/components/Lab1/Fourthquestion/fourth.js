import React, { Component } from "react";
class Fourth extends Component {
  render() {
    return (
      <>
        {this.props.children}
        <h2> have studied the follwing courses : </h2>
        <h3>
          {this.props.course1}, {this.props.course2}, {this.props.course3},
          {this.props.course4}
        </h3>
      </>
    );
  }
}
export default Fourth;
