import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './index.css';
import NormalImg from '../../components/Img';
import LocaleToggle from '../../containers/LocaleToggle';

const Img = styled(NormalImg)`
  width: 8em;
`;

const MyLink = ({ text }) => (
  <li className="footer-li">
    <span className="footer-a">{text}</span>
  </li>
);

MyLink.propTypes = {
  text: PropTypes.string,
};

function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col className="footer-col">
          <Img src="/logo.svg" alt="SITE - Logo" />
        </Col>
        <Col className="footer-col">
          <ul className="list-unstyled">
            <li>
              <span className="footer-title">Карта сайта</span>
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
        <Col className="footer-col">
          <ul className="list-unstyled">
            <li>
              <span className="footer-title">Контакты</span>
            </li>
            <MyLink text="Тел.:+7 (999) 777-77-77" />
            <MyLink text="Почта: info@its.society" />
          </ul>
        </Col>
        <Col className="footer-col">
          <LocaleToggle />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
