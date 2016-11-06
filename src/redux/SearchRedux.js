import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  searchRequest: ['keyword'],
  searchSuccess: ['showSites'],
  searchFailure: null
});

export const SearchTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  showSites: null,
  fetching: null,
  error: null
});

export const request = (state, action) =>
  state.merge({ fetching: true });


export const success = (state, action) => {
  const { showSites } = action;
  return state.merge({ fetching: false, error: null, showSites });
};


export const failure = state =>
  state.merge({ fetching: false, error: true, showSites: null });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_REQUEST]: request,
  [Types.SEARCH_SUCCESS]: success,
  [Types.SEARCH_FAILURE]: failure
});
