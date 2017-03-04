import React, { Component } from 'react';
import Deck from './Deck.jsx';
import Card from './Card.jsx';

//Main component that holds the state of the application
class Main extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    cardIsChosen: false,
    cardIsRevealed: false
  }

  getPickedCard = () => {
    return this.props.deck[this.state.cardIndex];
  }

  cardIsChosen = (e) => {
    this.setState({
      cardIsChosen: true,
      cardIndex: e.target.dataset.cardIndex
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
      <div className="main">

        {!this.state.cardIsChosen ?
          <Deck deck={this.props.deck} chooseCard={this.cardIsChosen} /> :

          !this.state.cardIsRevealed ?
            <Card side="back" onClick={this.cardIsRevealed}>
              <img src="./images/chas_a_logo_white.png" />
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
