import {
  call,
  put
} from 'redux-saga/effects';
import SearchActions from '../redux/SearchRedux';

export function* getSearch(api, action) {
  const {
    keyword
  } = action;

  const searchResults = yield call(api.getShowSites, keyword);
  yield put(SearchActions.searchSuccess(searchResults));
}
