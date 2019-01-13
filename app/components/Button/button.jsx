import React from 'react';
import PropTypes from 'prop-types';

import './button.css'

const Button = ({ text, buttonLocation }) => (
  <div className={buttonLocation}>
    <span className="button__dash">—</span>
    <span className="button__text"> {text}</span>
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  buttonLocation: PropTypes.string,
};

export default Button;
