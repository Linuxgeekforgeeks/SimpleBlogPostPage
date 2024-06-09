import React from 'react';
import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p><strong>{comment.author}</strong> says:</p>
      <p>{comment.text}</p>
      <p className="timestamp">{new Date(comment.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
