import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import Card from '../jsx/Card.jsx';

describe('<Card />', () => {
  it('should render a card', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render className from prop', () => {
    const wrapper = shallow(<Card side="back" />);
    expect(wrapper.find('.back').length).toBe(1);
  });

  it('should call onClick', () => {
    let spy = createSpy();
    const wrapper = shallow(<Card onClick={spy} />);
    wrapper.find('div').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should render children', () => {
    const wrapper = shallow(
      <Card>
        <div className="corgiLover"></div>
      </Card>
    );
    expect(wrapper.contains(<div className="corgiLover"></div>)).toBe(true);
  });
});
