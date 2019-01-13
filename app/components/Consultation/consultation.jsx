import React from 'react';
import Button from '../Button/button';

import './consultation.css';

const Consultation = () => (
  <div>
    <div className="consultation__text consultation__text_font">
      <div>
        ITS — сообщество специалистов в IT-индустрии. Наша цель — это разработка
        продуктов и построение сообщества в среде информационных технологий. Мы
        даем возможность компаниям прийти к нам с идеей и реализовать ее. Наша
        команда проведет полный консалтинг и реализует проект с начала и до
        самого конца.
      </div>
      <div className="consultation__text_padding">
        С вами свяжутся и проведут бесплатную консультацию
      </div>
    </div>
    <div className="consultation__button">
      <Button
        text="Оставить заявку"
      />
      <Button
        text="Скачать презентацию"
        buttonLocation="consultation__button_margin"
      />
    </div>
  </div>
);

export default Consultation;
