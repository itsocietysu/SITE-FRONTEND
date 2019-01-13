import React from "react";
import {Col} from "reactstrap";
import PropTypes from "prop-types";

import './howwework.css';

class HowWeWorkCol extends React.Component {
  render() {
    const { text, imgClass } = this.props;
    const divClass = 'how-we-work__img '+imgClass ;
    return(
      <Col>
        <div className={divClass}>
          <span className="how-we-work__text how-we-work__text_font">{text}</span>
        </div>
      </Col>
    );
  }
}

HowWeWorkCol.propTypes = {
  text: PropTypes.string,
  imgClass: PropTypes.string,
};

export default HowWeWorkCol
