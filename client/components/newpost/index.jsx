import {React} from 'meteor/react-runtime';

class NewPost extends React.Component {
  render() {
    const {saving, error} = this.props;
    return (
      <div className="new-post">
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        {saving ? <p>Saving....</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br/>
        <button onClick={this.create.bind(this)}>Add New</button>
      </div>
    );
  }

  create() {
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default NewPost;
