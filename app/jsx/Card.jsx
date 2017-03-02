import React from 'react';

// Stateless component, only presentational
const Card = ({onClick, children}) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );

  Card.propTypes = {
    point: React.PropTypes.string.isRequired
  }
}

export default Card;
