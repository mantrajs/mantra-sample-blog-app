import React from 'react';
import CreateComment from '../containers/create_comment.js';

const CommentList = ({comments}) => (
  <div className="comments">
    <div>
      <h4>Add a Comment</h4>
      <CreateComment />
    </div>
    <div>
      {comments.length === 0? <p>No Comments Yet!</p> : null}
      {comments.map(comment => (
        <div className="comment">
          <b>{comment.author}:</b> {comment.text}
        </div>
      ))}
    </div>
  </div>
);

export default CommentList;
