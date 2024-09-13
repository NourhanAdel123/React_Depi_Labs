import React, { Component } from "react";
import "../style/style.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      currentDate: new Date().toLocaleString(),
      showUserData: false,
    };
    this.emailRef = React.createRef();
  }

  componentDidMount() {
    if (this.emailRef.current) {
      this.emailRef.current.focus();
    }
  }

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
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
            ref={this.emailRef}
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
        {this.state.showUserData && (
          <div className="user-data-wrapper">
            <h2>Hi, User</h2>
            <p>Your email is: {this.state.email}</p>
            <p>You signed up on: {this.state.currentDate}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
