import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//component for the lone, chosen card
const Card = ({onClick, side, children}) => {
  //which side of the card to render is decided by the side prop; back or front
  //ReactCSSTransitionGroup is used to add animation on render
  return (
    <ReactCSSTransitionGroup
      transitionName="flip"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnterTimeout={1000}
      transitionLeave={false}>

      <div key={side} className={`card ${side}`} onClick={onClick}>
        {children}
      </div>

    </ReactCSSTransitionGroup>
  );

  Card.propTypes = {
    onClick: React.PropTypes.func,
    side: React.PropTypes.string
  }
}

export default Card;
