import {Posts} from '../../libs/collections';

//XXX: Move this into a module and call it from the main file
if (!Posts.findOne()) {
  for(let lc=1; lc<=5; lc++) {
    const title = `This is the post title: ${lc}`;
    const content = `Post ${lc}'s content is great!`;
    Posts.insert({title, content});
  }
}
