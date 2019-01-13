import React from 'react';
import Swiper from 'react-id-swiper';
import Title from '../Title/title';
import LogoWithText from '../LogoWithText/logowithtext';

import '../../../node_modules/react-id-swiper/node_modules/swiper/dist/css/swiper.min.css';
import './services.css';

const Slide =({imgUrl, text})=>(

    <div className="services__slide">
      <LogoWithText url={imgUrl} text={text} />
    </div>
);

const Services = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
  };

  return (
    <div className="services__swiper">
      <Swiper {...params}>
        <div>
          <div className="services__slide">
            <Title>Что и как мы делаем</Title>
          </div>
        </div>
        <div>
          <Slide imgUrl='/mouse.svg' text='Создание ПО'/>
        </div>
        <div>
          <Slide imgUrl='/puzzle.svg' text='Ведение проекта'/>
        </div>
        <div>
          <Slide imgUrl='/hammer.svg' text='И еще что-то'/>
        </div>
      </Swiper>
    </div>
  );

};

export default Services;
