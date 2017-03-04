import React from 'react';

// Stateless component, only presentational
const Card = ({onClick, side, children}) => {
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
