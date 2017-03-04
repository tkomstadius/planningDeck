import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import Main from '../jsx/Main.jsx';

describe('<Main />', () => {
  it('should render main', () => {
    let deck = ['corgi'];
    const wrapper = shallow(<Main deck={deck} />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render back of card', () => {
    let deck = ['corgi'];
    const wrapper = shallow(<Main deck={deck} />);
    wrapper.setState({cardIsChosen: true});
    wrapper.update();
    expect(wrapper.find('img').length).toBe(1);
  })

  describe('Component methods', () => {
    let deck = ['corgi', 'huskey'];
    const wrapper = shallow(<Main deck={deck} />);

    it('should return card by index', () => {
      wrapper.setState({cardIndex: 0});
      expect(wrapper.instance().getPickedCard()).toBe('corgi');
    });

    it('should change state accordingly', () => {
      let fakeEvent = {target: {dataset: {}}};

      expect(wrapper.state().cardIsChosen).toBe(false);
      expect(wrapper.state().cardIsRevealed).toBe(false);

      wrapper.instance().cardIsChosen(fakeEvent);
      expect(wrapper.state().cardIsChosen).toBe(true);
      expect(wrapper.state().cardIndex).toNotExist();

      wrapper.instance().cardIsRevealed();
      expect(wrapper.state().cardIsRevealed).toBe(true);
      expect(wrapper.state().cardIsChosen).toBe(true);

      wrapper.instance().newRound();
      expect(wrapper.state().cardIsRevealed).toBe(false);
      expect(wrapper.state().cardIsChosen).toBe(false);
    });
  });
});
