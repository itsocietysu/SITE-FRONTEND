/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import Description from '../../components/Description/description';
import Services from '../../components/Services/services';
import Consultation from '../../components/Consultation/consultation';
import HowWeWork from '../../components/HowWeWork/howwework';
import Team from '../../components/Team/team';


export class HomePage extends React.PureComponent {
  render() {

    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A SITE application homepage" />
        </Helmet>

        <Description />
        <Services />
        <Consultation />
        <HowWeWork />
        <Team />
      </div>
    );
  }
}

export default HomePage;
