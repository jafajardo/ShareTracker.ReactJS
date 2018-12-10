import { combineReducers } from 'redux';

import HoldingsReducer from './HoldingsReducer';

export default combineReducers({
  holdings: HoldingsReducer
});