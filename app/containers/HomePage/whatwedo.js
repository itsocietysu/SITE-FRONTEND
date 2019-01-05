import React from 'react';
import styled from 'styled-components';
import './index.css';

const ImgMain = styled.div`
  margin-top: -35px;
  width: 50%;
  height: auto;
  background: url('/background.png') no-repeat;
  background-size: cover;
`;

const WhatWeDo = () => (
  <div className="wrap">
    <div className="text-wrap">
      <span className="title">Мы делаем IT продукты</span>
      <div className="description">
        <span>
          ITS — сообщество специалистов в IT-индустрии. Наша цель — это
          разработка продуктов и построение сообщества в среде информационных
          технологий.Мы даем возможность компаниям прийти к нам с идеей и
          реализовать ее. Наша команда проведет полный консалтинг и реализует
          проект с начала и до самого конца.
        </span>
      </div>
    </div>
    <ImgMain />
  </div>
);

export default WhatWeDo;
