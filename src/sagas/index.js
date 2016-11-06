import { takeLatest } from 'redux-saga';
import API from '../api/Api';
import { SearchTypes } from '../redux/SearchRedux';
import { getSearch } from './SearchSagas';

export default function * root () {
  yield [
    takeLatest(SearchTypes.SEARCH_REQUEST, getSearch, API)
  ];
}
