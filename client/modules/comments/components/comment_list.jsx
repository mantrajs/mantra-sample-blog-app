import React from 'react';

const CommentList = ({comments}) => (
  <div className="comments">
    {comments.length === 0? <p>No Comments Yet!</p> : null}
    {comments.map(comment => (
      <div className="comment">
        <b>{comment.author}:</b> {comment.text}
      </div>
    ))}
  </div>
);

export default CommentList;
