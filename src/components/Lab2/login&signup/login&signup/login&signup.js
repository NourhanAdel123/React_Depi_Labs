import { Component } from "react";
import Login from "../login/login";
import Signup from "../signup/signup";
import "../style/style.css";

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  viewLogin = () => {
    this.setState({ login: true });
  };

  viewSignup = () => {
    this.setState({ login: false });
  };

  render() {
    return (
      <div>
        {this.state.login ? <Login /> : <Signup />}
        <div className="button-container">
          <button onClick={this.viewLogin}>Login</button>
          <button onClick={this.viewSignup}>Signup</button>
        </div>
      </div>
    );
  }
}

export default LoginSignup;
