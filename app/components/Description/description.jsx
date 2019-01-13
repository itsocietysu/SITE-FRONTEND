import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '../Button/button';
import Title from '../Title/title';

import './description.css';

const Description = () => (
  <Container fluid={true}>
    <Row noGutters={true}>
      <Col>
        <div className="description__text_container">
          <Title>Мы делаем IT продукты</Title>
          <div className="description__text">
            ITS — сообщество специалистов в IT-индустрии. Наша цель — это
            разработка продуктов и построение сообщества в среде информационных
            технологий.Мы даем возможность компаниям прийти к нам с идеей и
            реализовать ее. Наша команда проведет полный консалтинг и реализует
            проект с начала и до самого конца.
          </div>
          <div className="description__button_container">
            <Button
              text="Заполнить бриф"
              buttonLocation="description__button_margin"
            />
            <Button
              text="Просмотреть проекты"
              buttonLocation="description__button_margin"
            />
          </div>
        </div>
      </Col>

      <Col>
        <div className="description__img" />
      </Col>
    </Row>
  </Container>
);

export default Description;
