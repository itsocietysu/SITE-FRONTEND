import React from 'react';
import PropTypes from "prop-types";

import './worker.css';

const Worker = ({ imageUrl, name, position, experience1, experience2 }) => (
  <div className="worker">
    <img src={imageUrl} alt="Avatar" className="worker__img" />
    <div className="worker__overlay">
      <div className="worker__info">
        <div className="worker__info_name">{name}</div>
        <div className="worker__info_position">{position}</div>
        <br />
        <div className="worker__info_experience">{experience1}</div>
        <div className="worker__info_experience">{experience2}</div>
      </div>
    </div>
  </div>
);

Worker.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  experience1: PropTypes.string,
  experience2: PropTypes.string,
};

export default Worker
