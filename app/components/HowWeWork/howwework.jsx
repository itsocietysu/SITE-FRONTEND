import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '../Button/button';
import Title from '../Title/title';
import HowWeWorkCol from './col';

import './howwework.css';


const HowWeWork = () => (
  <Container fluid={true} className="how-we-work__container">
    <Row noGutters={true} className="how-we-work__row">
      <Col >
        <Title className="how-we-work__title">Как мы работаем</Title>
        <Button text="Подробнее" buttonLocation="how-we-work__button_margin" />
      </Col>

      <HowWeWorkCol text='Точно и быстро' imgClass='how-we-work__img_sea'/>
      <HowWeWorkCol text='Внимательно ко всем' imgClass='how-we-work__img_train'/>
      <HowWeWorkCol text='Точно и быстро' imgClass='how-we-work__img_subway'/>

    </Row>
  </Container>
);

export default HowWeWork;
