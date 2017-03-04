import React from 'react';

// Stateless component, only presentational
const Card = ({onClick, children, side}) => {
  return (
    <div className={`card ${side}`} onClick={onClick}>
      {children}
    </div>
  );

  Card.propTypes = {
    onClick: React.PropTypes.func
  }
}

export default Card;
