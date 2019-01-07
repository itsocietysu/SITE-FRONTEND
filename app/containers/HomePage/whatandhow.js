import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import '../../../node_modules/react-id-swiper/node_modules/swiper/dist/js/swiper.min';
import '../../../node_modules/react-id-swiper/node_modules/swiper/dist/css/swiper.min.css';
import NormalImg from '../../components/Img';
import './whatandhow.css';

const Img = styled(NormalImg)`
  width: 10vw;
`;

const LogoWithText = ({ url, text }) => (
  <div>
    <Img src={url} alt="logo" />
    <div className="textUnderLogo">{text}</div>
  </div>
);

LogoWithText.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

const WhatAndHow = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
  };

  return (
    <div className="swiper-wrap-what">
      <Swiper {...params}>
        <div>
          <div className="swiper-slide-what">
            <span className="title">Что и как мы делаем</span>
          </div>
        </div>
        <div>
          <div className="swiper-slide-what">
            <LogoWithText url="/mouse.svg" text="Создание ПО" />
          </div>
        </div>
        <div>
          <div className="swiper-slide-what">
            <LogoWithText url="/puzzle.svg" text="Ведение проекта" />
          </div>
        </div>
        <div>
          <div className="swiper-slide-what">
            <LogoWithText url="/hammer.svg" text="И еще что-то" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default WhatAndHow;
