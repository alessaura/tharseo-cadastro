import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, text, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

// Validação de PropTypes
Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Card;
