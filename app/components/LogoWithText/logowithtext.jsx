import React from 'react';
import NormalImg from "../Img";
import PropTypes from "prop-types";

import './logowithtext.css';

const LogoWithText = ({ url, text }) => (
  <div>
    <NormalImg className="logo-with-text__img" src={url} alt="logo" />
    <div className="logo-with-text__text logo-with-text__text_font">{text}</div>
  </div>
);

LogoWithText.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default LogoWithText
