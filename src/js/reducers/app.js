import Immutable, { Map } from 'immutable';
import createReducer
  from './createReducer.js';
import {
  FETCH_DATA,
  SET_INPUT
} from '../action_types.js';

export const initialState = Immutable.fromJS({
});

export const fetchData = (state, {items}) => {
  return state.setIn(['items'], items);
};

export const setInput = (state, {path, value}) => {
  return state.setIn([path], value);
};

export default createReducer(
  initialState,
  {
    [FETCH_DATA] : fetchData,
    [SET_INPUT] : setInput
  }
);
