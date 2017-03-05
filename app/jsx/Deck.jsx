import React, { Component } from 'react';

//component that renders the deck of cards for the select phase
class Deck extends Component {
  //return a div for every value in the deck array, save the array index in html data
  renderDeck() {
    return this.props.deck.map((card, index) => {
        return <div className="deckCard" key={index} data-card-index={index} onClick={this.props.onClick}>{card}</div>
    });
  }

  render() {
    return (
      <div className="deck">
        {this.renderDeck()}
      </div>
    );
  }
}

Deck.propTypes = {
  deck: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func
}

export default Deck;
