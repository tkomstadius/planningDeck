import React, { Component } from 'react';
import Deck from './Deck.jsx';
import Card from './Card.jsx';

//main component that holds the state of the application
class Main extends Component {
  //initially; no card is chosen and also therefore not revealed
  state = {
    cardIsNotChosen: true,
    cardIsNotRevealed: true
  }

  //get the card value based on the index stored in state
  getPickedCard = () => {
    return this.props.deck[this.state.cardIndex];
  }

  //callback when a card is chosen from the select phase, get card index from the event
  cardIsChosen = (e) => {
    this.setState({
      cardIsNotChosen: false,
      cardIndex: e.target.dataset.cardIndex
    });
  }

  //callback when card is clicked to be revealed from the waiting phase
  cardIsRevealed = () => {
    this.setState({
      cardIsNotRevealed: false
    });
  }

  //callback for end click in the reveal phase, start new round
  newRound = () => {
    this.setState({
      cardIsNotChosen: true,
      cardIsNotRevealed: true,
      cardIndex: -1
    });
  }

  //nested ternery expressions to handle the three phases:
  //card is not chosen -> select phases
  //card is chosen but not revealed -> waiting phase
  //card is revealed -> reveal phase
  render() {
    return (
      <div className="main">

        {this.state.cardIsNotChosen ?
          <Deck deck={this.props.deck} chooseCard={this.cardIsChosen} /> :

          this.state.cardIsNotRevealed ?
            <Card side="back" onClick={this.cardIsRevealed}>
              <img key="logo" src="./images/chas_a_logo_white.png" />
            </Card> :

            <Card side="front" onClick={this.newRound}>
              {this.getPickedCard()}
            </Card>
        }

      </div>
    );
  }
}

Main.propTypes = {
  deck: React.PropTypes.array.isRequired
}

export default Main;
