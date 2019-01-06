import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonText = styled.span`
  font-family: Arial, sans-serif;
  font-size: 18px;
`;

const BlueDash = styled.span`
  font-size: 20px;
  color: #add8e6;
`;

const ButtonWithDash = ({ text, classLocation }) => (
  <div className={classLocation}>
    <BlueDash>—</BlueDash>
    <ButtonText> {text}</ButtonText>
  </div>
);

ButtonWithDash.propTypes = {
  text: PropTypes.string,
  classLocation: PropTypes.string,
};

export default ButtonWithDash;
