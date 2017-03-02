import React, { Component } from 'react';

class Deck extends Component {
  constructor(props) {
    super(props);
  }

  renderDeck() {
    return this.props.deck.map((card, index) => {
        return <div key={index} data-card={index} onClick={this.props.chooseCard}>{card}</div>
    });
  }

  render() {
    return (
      <div>
        {this.renderDeck()}
      </div>
    );
  }
}

Deck.propTypes = {
  deck: React.PropTypes.array,
  chooseCard: React.PropTypes.func
}

export default Deck;
