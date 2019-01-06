/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { withRequest } from '../../utils/auth';
import {
  makeSelectContent,
  makeSelectData,
  makeSelectError,
  makeSelectHeader,
  makeSelectLoading,
} from './selectors';

import { contentChanged, loadData } from './actions';
import reducer from './reducer';
import saga from './saga';

import WhatWeDo from './whatwedo';
import WhatAndHow from './whatandhow';
import Consultation from './consultation';
import HowWeWork from './howwework';
import Team from './team';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /* constructor(props) {
    super(props);
    this.state = { header: React.createRef() };
  } */

  componentDidMount() {
    this.props.init();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.homeContent !== this.props.homeContent) this.props.init();
  }

  render() {
    // const { loading, error, data, homeContent, header } = this.props;

    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A SITE application homepage" />
        </Helmet>

        <WhatWeDo />
        <WhatAndHow />
        <Consultation />
        <HowWeWork />
        <Team />
      </div>
    );
  }
}

HomePage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // data: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // header: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  init: PropTypes.func,
  // change: PropTypes.func,
  homeContent: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    init: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadData());
    },
    change: content => {
      dispatch(contentChanged(content));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  header: makeSelectHeader(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  homeContent: makeSelectContent(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withRequest,
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
