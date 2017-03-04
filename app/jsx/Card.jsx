import React from 'react';

//component for the lone, chosen card
const Card = ({onClick, side, children}) => {
  //which side of the card to render is decided by the side prop; back or front
  return (
    <div className={`card ${side}`} onClick={onClick}>
      {children}
    </div>
  );

  Card.propTypes = {
    onClick: React.PropTypes.func,
    side: React.PropTypes.string
  }
}

export default Card;
