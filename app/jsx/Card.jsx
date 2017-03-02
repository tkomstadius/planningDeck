import React from 'react';

// Stateless component, only presentational
const Card = ({onClick, children}) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );

  Card.propTypes = {
    onClick: React.PropTypes.func
  }
}

export default Card;
