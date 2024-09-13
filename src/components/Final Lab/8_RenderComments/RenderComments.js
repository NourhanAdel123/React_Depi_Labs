import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RenderComments.css";

function RenderComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      {comments.map((comment) => (
        <div className="Card" key="comment.id">
          <h2>{comment.name}</h2>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default RenderComments;
