import {describe, it} from 'mocha';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Post from '../index.jsx';

describe('components.post', () => {
  it('should display the post title', () => {
    const post = {title: "Nice One"};
    const el = shallow(<Post post={post} />);
    expect(el.find('h2').text()).to.be.match(/Nice One/);
  });

  it('should display the post content', () => {
    const post = {content: "Nice content"};
    const el = shallow(<Post post={post} />);
    expect(el.find('p').text()).to.be.match(/Nice content/);
  });
});