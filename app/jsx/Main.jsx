import React, { Component } from 'react';
import Deck from './Deck.jsx';
import Card from './Card.jsx';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardIsChosen: false,
      cardIsRevealed: false
    }
  }

  getPickedCard = () => {
    return this.props.deck[this.state.cardIndex];
  }

  cardIsChosen = (e) => {
    this.setState({
      cardIsChosen: true,
      cardIndex: e.target.dataset.card
    });
  }

  cardIsRevealed = () => {
    this.setState({
      cardIsRevealed: true
    })
  }

  newRound = () => {
    this.setState({
      cardIsChosen: false,
      cardIsRevealed: false
    })
  }

  render() {
    return (
      <div>

        {!this.state.cardIsChosen ?
        <Deck deck={this.props.deck} chooseCard={this.cardIsChosen} /> :
        !this.state.cardIsRevealed ?
        <Card onClick={this.cardIsRevealed}>Chas</Card> :
        <Card onClick={this.newRound}>{this.getPickedCard()}</Card>}

      </div>
    );
  }
}

export default Main;
