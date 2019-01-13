import React from 'react';
import Swiper from 'react-id-swiper';
import Button from '../Button/button';
import Worker from '../Worker/worker';
import Title from '../Title/title';

import '../../../node_modules/react-id-swiper/node_modules/swiper/dist/css/swiper.min.css';
import './team.css';

const WhatAndHow = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
  };

  return (
    <div className="team">
      <Title className="team__title">Команда</Title>
      <Swiper {...params}>
        <div>
          <Worker
            imageUrl="/photo-girl.png"
            name="Маша Иванова"
            position="JavaScript Developer"
            experience1="Работала в JetBrainsPlumbr"
            experience2="Организатор Joker Conf"
          />
        </div>
        <div>
          <Worker
            imageUrl="/photo-man.svg"
            name="Даниил Савчук"
            position="CEO"
            experience1="Работает в EPAM"
          />
        </div>
        <div>
          <Worker
            imageUrl="/photo-man.svg"
            name="Иван Барабанов"
            position="Business Analyst"
          />
        </div>
        <div>
          <Worker
            imageUrl="/photo-man.svg"
            name="Антон Клочков"
            position="Principle Developer"
          />
        </div>
      </Swiper>
      <div className="team__button">
        <Button text="Подробнее о карьере в ITS" />
        <Button
          text="Подробнее о сообществе ITS"
          buttonLocation="team__button_margin"
        />
      </div>
    </div>
  );
};

export default WhatAndHow;
