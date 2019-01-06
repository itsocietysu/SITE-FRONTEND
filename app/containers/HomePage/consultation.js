import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/jquery/dist/jquery.min';
import './consultation.css';
import ButtonWithDash from './buttonwithdash';

const Consultation = () => (
  <div>
    <div className="descriptionWrap">
      <div>
        ITS — сообщество специалистов в IT-индустрии. Наша цель — это разработка
        продуктов и построение сообщества в среде информационных технологий. Мы
        даем возможность компаниям прийти к нам с идеей и реализовать ее. Наша
        команда проведет полный консалтинг и реализует проект с начала и до
        самого конца.
      </div>
      <div style={{ margin: '4vw 0 0 0' }}>
        С вами свяжутся и проведут бесплатную консультацию
      </div>
    </div>
    <div className="buttonWrap">
      <ButtonWithDash text="Оставить заявку" />
      <ButtonWithDash
        text="Скачать презентацию"
        classLocation="margin-left-4vw"
      />
    </div>
  </div>
);

export default Consultation;
