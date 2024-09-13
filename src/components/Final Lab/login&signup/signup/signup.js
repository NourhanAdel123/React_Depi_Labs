import React, { Component } from "react";
import "../style/style.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      currentDate: new Date().toLocaleString(),
      showUserData: false,
    };
    this.nameRef = React.createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  showUserData = (event) => {
    event.preventDefault();
    this.setState({ showUserData: true });
  };

  render() {
    const { currentDate, showUserData, name, email } = this.state;

    return (
      <div>
        <h1>Sign Up Page</h1>
        <form>
          <label>UserName:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
            ref={this.nameRef}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <br />
          <div className="button-container">
            <button type="button" onClick={this.showUserData}>
              Show Data
            </button>
          </div>
        </form>

        {showUserData && (
          <div className="user-data-wrapper">
            <h2>Hi, New User</h2>
            <p>Your email is: {email}</p>
            <p>You signed up on: {currentDate}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Signup;
