import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Card from '../app/jsx/Card.jsx';

describe('<Card />', () => {
  it('should do something please', () => {
    const wrapper = shallow(<Card />);
    console.log(wrapper);
    expect(wrapper.find('div').length).toEqual(2);
  });
})
