import React, { Component } from "react";
import axios from "axios";
import "./GETExample.css";

class GetExample extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.setState({ comments: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        {comments.map((comment) => (
          <div className="comment-container" key={comment.id}>
            <p className="comment-name">Name: {comment.name}</p>
            <p className="comment-email">Email: {comment.email}</p>
            <p className="comment-body">Comment: {comment.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GetExample;
