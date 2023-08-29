import { Dispatch } from 'redux';
import { Cities } from '../../types';
import { getCitiesByDDD } from '../../services/brazilAPI';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_FINISHED = 'REQUEST_FINISHED';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestFinished = () => ({
  type: REQUEST_FINISHED,
});

const requestError = () => ({
  type: REQUEST_ERROR,
})

const requestSuccess = (data: Cities, search: string) => ({
  type: REQUEST_SUCCESS,
  payload: {
    state: data.state,
    cities: data.cities,
    search,
  },
});

export const searchCities = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestStarted());
    try {
      const cities = await getCitiesByDDD(term, 'ddd/v1');
      dispatch(requestSuccess(cities, term));
    } catch(error) {
      dispatch(requestError());
    } finally {
      dispatch(requestFinished());
    }
  }
}