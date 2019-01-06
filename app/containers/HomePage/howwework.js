import React from 'react';
import styled from 'styled-components';
import ButtonWithDash from './buttonwithdash';

import './howwework.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/jquery/dist/jquery.min';

const Img = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ImgSea = styled(Img)`
  background: url('/sea.png') no-repeat;
  background-size: cover;
`;

const ImgTrain = styled(Img)`
  background: url('/train.svg') no-repeat;
  background-size: cover;
`;

const ImgSubway = styled(Img)`
  background: url('/metro.svg') no-repeat;
  background-size: cover;
`;

const HowWeWork = () => (
  <div className="container-fluid" style={{ padding: '100px 0 0 0' }}>
    <div className="row no-gutters how-we-work-row">
      <div className="col-3" style={{ display: 'inline-block' }}>
        <div className="title how-we-work-title">Как мы работаем</div>
        <ButtonWithDash text="Подробнее" classLocation="button-more" />
      </div>

      <div className="col-3">
        <ImgSea>
          <span className="how-we-work-description">Точно и быстро</span>
        </ImgSea>
      </div>

      <div className="col-3">
        <ImgTrain>
          <span className="how-we-work-description">Внимательно ко всем</span>
        </ImgTrain>
      </div>

      <div className="col-3">
        <ImgSubway>
          <span className="how-we-work-description">Точно и быстро</span>
        </ImgSubway>
      </div>
    </div>
  </div>
);

export default HowWeWork;
