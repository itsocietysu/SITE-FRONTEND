/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import Select from './Select';
// import ToggleOption from '../ToggleOption';
import styled from 'styled-components';

const MyButton = styled.button`
  border-bottom: ${props => (props.active ? '1px solid blue' : '')};
  cursor: pointer;
  padding: 0px;
  margin: 0px 0.3em;
`;

const FlexDiv = styled.div`
  display: flex;
  font-family: Montserrat;
  font-size: 15px;
  color: #77777a;
`;

function Toggle(props) {
  let content = <option>--</option>;

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value, index) => (
      <FlexDiv key={value}>
        <MyButton active={value === props.value}>{value}</MyButton>
        <span>{index === props.values.length - 1 ? '' : '/'}</span>
      </FlexDiv>
      // <ToggleOption key={value} value={value} message={props.messages[value]} />
    ));
  }

  return <div style={{ display: 'flex' }}>{content}</div>;
}

Toggle.propTypes = {
  // onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  // messages: PropTypes.object,
};

export default Toggle;
