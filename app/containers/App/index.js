/* eslint-disable react/prop-types,react/no-array-index-key */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import routes from '../../utils/routeConfig';
import CookieBanner from '../CookieBanner';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;

  flex-direction: column;
  background-color: white;
`;

export default function App() {
  return (
    <div>
      <CookieBanner />
      <AppWrapper>
        <Helmet titleTemplate="%s - SITE" defaultTitle="SITE">
          <meta name="description" content="A SITE application" />
        </Helmet>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </AppWrapper>
    </div>
  );
}
