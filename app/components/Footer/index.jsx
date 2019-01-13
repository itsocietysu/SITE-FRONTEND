import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NormalImg from '../../components/Img';
import LocaleToggle from '../../containers/LocaleToggle';

import './index.css';

const MyLink = ({ text }) => (
  <li className="footer__li">
    <span className="footer__a">{text}</span>
  </li>
);

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer__col">
          <NormalImg className="footer__img" src="/logo.svg" alt="SITE - Logo" />
        </Col>
        <Col className="footer__col">
          <ul className="list-unstyled">
            <li>
              <span className="footer__title">Карта сайта</span>
            </li>
            <MyLink text="Главная" />
            <MyLink text="Услуги" />
            <MyLink text="Блог" />
            <MyLink text="Карьера" />
            <MyLink text="О нас" />
            <MyLink text="Контакты" />
            <MyLink text="Согласие на обработку данных" />
          </ul>
        </Col>
        <Col className="footer__col">
          <ul className="list-unstyled">
            <li>
              <span className="footer__title">Контакты</span>
            </li>
            <MyLink text="Тел.:+7 (999) 777-77-77" />
            <MyLink text="Почта: info@its.society" />
          </ul>
        </Col>
        <Col className="footer__col">
          <LocaleToggle />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
