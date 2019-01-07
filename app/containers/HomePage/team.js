import React from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import '../../../node_modules/react-id-swiper/node_modules/swiper/dist/js/swiper.min';
import '../../../node_modules/react-id-swiper/node_modules/swiper/dist/css/swiper.min.css';
import './team.css';
import ButtonWithDash from './buttonwithdash';

const Human = ({ imageUrl, name, position, experience1, experience2 }) => (
  <div className="my-container">
    <img src={imageUrl} alt="Avatar" className="image" />
    <div className="overlay">
      <div className="human-description">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
        <br />
        <div className="experience">{experience1}</div>
        <div className="experience">{experience2}</div>
      </div>
    </div>
  </div>
);

Human.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  experience1: PropTypes.string,
  experience2: PropTypes.string,
};

const WhatAndHow = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
  };

  return (
    <div className="background-color">
      <div className="title title-team">Команда</div>
      <Swiper {...params}>
        <div>
          <Human
            imageUrl="/photo-girl.png"
            name="Маша Иванова"
            position="JavaScript Developer"
            experience1="Работала в JetBrainsPlumbr"
            experience2="Организатор Joker Conf"
          />
        </div>
        <div>
          <Human
            imageUrl="/photo-man.svg"
            name="Даниил Савчук"
            position="CEO"
            experience1="Работает в EPAM"
          />
        </div>
        <div>
          <Human
            imageUrl="/photo-man.svg"
            name="Иван Барабанов"
            position="Business Analyst"
          />
        </div>
        <div>
          <Human
            imageUrl="/photo-man.svg"
            name="Антон Клочков"
            position="Principle Developer"
          />
        </div>
      </Swiper>
      <div className="button-wrap-team">
        <ButtonWithDash text="Подробнее о карьере в ITS" />
        <ButtonWithDash
          text="Подробнее о сообществе ITS"
          classLocation="margin-left-3vw"
        />
      </div>
    </div>
  );
};

export default WhatAndHow;
