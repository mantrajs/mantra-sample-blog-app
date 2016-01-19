import React from 'react';

class CreateComment extends React.Component {
  render() {
    return (
      <div>
        <b>Create a new comment:</b>
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
    const {create} = this.props;
    create(text);
    this.refs.text.value = '';
  }
}

export default CreateComment;
