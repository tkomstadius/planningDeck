import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';

import Deck from '../jsx/Deck.jsx';

describe('<Deck />', () => {
  it('should render a deck', () => {
    let deck = ['1', '2', '3'];
    const wrapper = shallow(<Deck deck={deck} />);
    expect(wrapper.find('.deck').length).toBe(1);
    expect(wrapper.find('.deckCard').length).toBe(3);
  });

  it('should call onClick', () => {
    let deck = ["1"];
    let spy = createSpy();
    const wrapper = shallow(<Deck deck={deck} onClick={spy} />);
    wrapper.find('.deckCard').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should hold card index', () => {
    let deck = ['corgi'];
    const wrapper = shallow(<Deck deck={deck} />);
    let deckCard = wrapper.find(".deckCard");
    expect(deckCard.prop('data-card-index')).toBe(0);
  });
});
