const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Navigations from '../navigations.jsx';

describe('components.navigations', () => {
  it('should contain a link to home', () => {
    const el = shallow(<Navigations />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('Home');
    expect(homeLink.prop('href')).to.be.equal('/');
  });

  it('should contain a link to create a new post', () => {
    const el = shallow(<Navigations />);
    const newPostLink = el.find('a').at(1);
    expect(newPostLink.text()).to.be.equal('New Post');
    expect(newPostLink.prop('href')).to.be.equal('/new-post');
  });
});
