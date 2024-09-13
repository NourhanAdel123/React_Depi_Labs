import React, { useState } from "react";
import axios from "axios";

function SearchCommentsById() {
  const [comments, setComments] = useState([]);
  const [Id, setId] = useState("");

  const handleSearch = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${Id}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Search Comments by Post ID</h1>
      <input
        type="number"
        placeholder="Enter Post ID"
        value={Id}
        onChange={(event) => setId(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="container">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="Card" key={comment.id}>
              <h2>{comment.name}</h2>
              <p>
                <strong>Email:</strong> {comment.email}
              </p>
              <p>{comment.body}</p>
            </div>
          ))
        ) : (
          <p>No comments found for this Post ID.</p>
        )}
      </div>
    </div>
  );
}

export default SearchCommentsById;
