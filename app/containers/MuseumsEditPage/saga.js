import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_MUSEUM } from './constants';
import { museumLoaded, museumLoadingError } from './actions';
import { makeSelectEid } from './selectors';

import requestAuth from '../../utils/requestAuth';
import { MUSEUM_CFG } from '../EditPage/configs';
import { getDataFromResp } from '../../utils/utils';

/**
 * Museum data load handler
 */
export function* loadMuseum() {
  const eid = yield select(makeSelectEid());
  const requestURL = `http://each.itsociety.su:4201/each/museum/${eid}`;
  try {
    const museum = yield call(requestAuth, requestURL);
    const data = getDataFromResp(museum, MUSEUM_CFG);
    if (data.length) yield put(museumLoaded(data[0]));
    else yield put(museumLoaded(false));
  } catch (err) {
    yield put(museumLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadMuseumData() {
  yield takeLatest(LOAD_MUSEUM, loadMuseum);
}
