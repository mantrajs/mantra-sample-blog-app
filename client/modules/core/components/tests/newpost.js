const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewPost from '../newpost.jsx';

describe('components.newpost', () => {
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<NewPost error={error} />);
    expect(el.html()).to.match(/TheError/);
  });

  it('should display the create post form', () => {
    const el = shallow(<NewPost />);
    const title = el.find('input').first();
    const content = el.find('textarea').first();
    const button = el.find('button').first();

    expect(title.node.ref).to.be.equal('titleRef');
    expect(content.node.ref).to.be.equal('contentRef');
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should create a new post when click on the button', done => {
    const title = 'the-title';
    const content = 'the-content';

    const onCreate = (t, c) => {
      expect(t).to.be.equal(title);
      expect(c).to.be.equal(content);
      done();
    };

    const el = shallow(<NewPost create={onCreate} />);
    const instance = el.instance();

    instance.refs = {
      titleRef: {value: title},
      contentRef: {value: content}
    };

    el.find('button').simulate('click');
  });
});
