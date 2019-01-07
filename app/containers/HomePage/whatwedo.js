import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import './whatwedo.css';
import ButtonWithDash from './buttonwithdash';

const ImgMain = styled.div`
  margin-top: -3vw;
  width: 100%;
  height: 48vw;
  background: url('/background.png') no-repeat;
  background-size: contain;
`;

const WhatWeDo = () => (
  <Container fluid>
    <Row noGutters>
      <Col>
        <div className="text-wrap">
          <span className="title">Мы делаем IT продукты</span>
          <div className="description">
            ITS — сообщество специалистов в IT-индустрии. Наша цель — это
            разработка продуктов и построение сообщества в среде информационных
            технологий.Мы даем возможность компаниям прийти к нам с идеей и
            реализовать ее. Наша команда проведет полный консалтинг и реализует
            проект с начала и до самого конца.
          </div>
          <div className="buttons">
            <ButtonWithDash
              text="Заполнить бриф"
              classLocation="margin-left-3vw"
            />
            <ButtonWithDash
              text="Просмотреть проекты"
              classLocation="margin-left-3vw"
            />
          </div>
        </div>
      </Col>

      <div className="col-6">
        <ImgMain />
      </div>
    </Row>
  </Container>
);

export default WhatWeDo;
