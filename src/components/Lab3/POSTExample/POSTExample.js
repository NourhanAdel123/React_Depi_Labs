import React, { Component } from "react";
import axios from "axios";
import "./PostExample.css";
class PostExample extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      body: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/comments", this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) =>
        console.error("There was an error posting the data!", error)
      );
  };

  render() {
    return (
      <div className="form-wrapper">
        <h2>Submit Your Comment</h2>
        <form onSubmit={this.handleSubmit} className="comment-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-input"
            placeholder="Enter your name"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            className="form-input"
            placeholder="Enter your email"
          />
          <label>Comment</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            className="form-textarea"
            placeholder="Enter your comment"
          ></textarea>
          <button type="submit" className="submit-button">
            Submit Comment
          </button>
        </form>
      </div>
    );
  }
}

export default PostExample;
