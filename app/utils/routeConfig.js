import React from 'react';

import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import HomePage from '../containers/HomePage/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';

class Route {
  path: string;
  exact: boolean;
  component: any;
}

function Page(header, component, footer, headerProps, componentProps) {
  return (
    <PageLayout
      header={header}
      component={component}
      footer={footer}
      headerProps={headerProps}
      componentProps={componentProps}
    />
  );
}

const HomeRoute = (() => {
  const r = new Route();
  r.path = '/';
  r.exact = true;
  r.component = () => Page(Header, HomePage, Footer);
  return r;
})();

const NotFoundRoute = (() => {
  const r = new Route();
  r.path = '';
  r.exact = false;
  r.component = () => Page(Header, NotFoundPage, Footer);
  return r;
})();

const routes: Array<Route> = [HomeRoute, NotFoundRoute];

export default routes;
