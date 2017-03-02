import React, { Component } from 'react';

class Deck extends Component {
  constructor(props) {
    super(props);
  }

  renderDeck() {
    return this.props.deck.map((card, index) => {
        return <div key={index} data-card={index} onClick={this.callBack}>{card}</div>
    });
  }

  callBack = (w) => {
    console.log(w.target.dataset.card);
    this.props.pickCard(w.target.dataset.card);
  }

  render() {
    return (
      <div>
        {this.renderDeck()}
      </div>
    )
  }
}

export default Deck;
