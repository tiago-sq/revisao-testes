import { AnyAction } from 'redux';
import { AppReducerTypes } from '../../types';
import { REQUEST_ERROR, REQUEST_FINISHED, REQUEST_STARTED, REQUEST_SUCCESS } from '../actions';

const INITIAL_STATE: AppReducerTypes = {
  search: '51',
  cities: [],
  state: 'RS',
  isLoading: false,
  hasError: false,
};

const AppReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch(action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case REQUEST_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        search: action.payload.search,
        state: action.payload.state,
        cities: action.payload.cities,
      }
    default:
      return state;
  }
}

export default AppReducer;