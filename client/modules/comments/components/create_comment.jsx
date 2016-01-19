import React from 'react';

class CreateComment extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        <b>Create a new comment:</b>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <br />
        <textarea ref='text' placeholder='Enter your comment here.'>

        </textarea>
        <br />
        <button onClick={this._create.bind(this)}>Add Comment</button>
      </div>
    );
  }

  _create() {
    const text = this.refs.text.value;
    const {create, postId} = this.props;
    create(postId, text);
    this.refs.text.value = '';
  }
}

export default CreateComment;
