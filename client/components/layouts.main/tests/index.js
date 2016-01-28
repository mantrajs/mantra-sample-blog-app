const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../index.jsx';
import Navigation from '../../navigation/index.jsx';

describe('components.layouts.main', () => {
  it('should contain navigation', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains(Navigation)).to.be.equal(true);
  });

  it('should render childrens', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <Navigation>
        <Comp />
      </Navigation>
    );

    expect(el.contains(Comp)).to.be.equal(true);
  });
});
