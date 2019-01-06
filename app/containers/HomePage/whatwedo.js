import React from 'react';
import styled from 'styled-components';
import './whatwedo.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/jquery/dist/jquery.min';
import ButtonWithDash from './buttonwithdash';

const ImgMain = styled.div`
  margin-top: -3vw;
  width: 100%;
  height: 48vw;
  background: url('/background.png') no-repeat;
  background-size: contain;
`;

const WhatWeDo = () => (
  <div className="container-fluid">
    <div className="row no-gutters">
      <div className="col-6">
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
      </div>

      <div className="col-6">
        <ImgMain />
      </div>
    </div>
  </div>
);

export default WhatWeDo;
