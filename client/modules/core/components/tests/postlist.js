const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PostList from '../postlist.jsx';

describe('components.postlist', () => {
  const posts = [
    {title: 't-one', _id: 'one'},
    {title: 't-two', _id: 'two'},
  ];

  it('should list given number of items', () => {
    const el = shallow(<PostList posts={posts}/>);
    expect(el.find('li').length).to.be.equal(posts.length);
  });

  it('should list post title for each item', () => {
    const el = shallow(<PostList posts={posts}/>);
    const lis = el.find('li');
    lis.forEach((li, index) => {
      const aText = li.find('a').first().text();
      expect(aText).to.be.equal(posts[index].title);
    });
  });

  it('shallow list post link for each items', () => {
    const el = shallow(<PostList posts={posts}/>);
    const lis = el.find('li');
    lis.forEach((li, index) => {
      const href = li.find('a').first().prop('href');
      expect(href).to.be.equal(`/post/${posts[index]._id}`);
    });
  });
});
