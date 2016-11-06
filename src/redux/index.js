import {
  combineReducers
} from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas/';

export default () => {
  const rootReducer = combineReducers({
    sites: require('./SearchRedux').reducer
  });
  return configureStore(rootReducer, rootSaga);
};
