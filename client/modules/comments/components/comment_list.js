import React from 'react';
import CreateComment from '../containers/create_comment.js';

const CommentList = ({comments, postId}) => (
  <div className="comments">
    <div>
      <CreateComment postId={postId}/>
    </div>
    <div className="comment-list">
      {comments.length === 0 ? <p>No Comments Yet!</p> : null}
      {comments.map(comment => (
        <div key={comment._id} className="comment">
          <b>{comment.author}:</b> {comment.text}
          {comment.saving ? '...' : null}
        </div>
      ))}
    </div>
  </div>
);

export default CommentList;
