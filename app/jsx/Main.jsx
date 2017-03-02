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

  getDeck() {
    return ['1', '3', '5', '8', '13', '20', '40', '?'];
  }

  getPickedCard = () => {
    return this.getDeck()[this.cardIndex];
  }

  cardIsChosen = (args) => {
    console.log(args);
    this.setState({
      cardIsChosen: true
    });
    this.cardIndex = args;
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
        <Deck deck={this.getDeck()} pickCard={this.cardIsChosen} /> :
        !this.state.cardIsRevealed ?
        <Card onClick={this.cardIsRevealed}>Chas</Card> :
        <Card onClick={this.newRound}>{this.getPickedCard()}</Card>}

      </div>
    );
  }
}

export default Main;
