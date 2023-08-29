import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type Cities = {
  state: string,
  cities: string[],
}

export type GlobalStateProps = {
  app: AppReducerTypes,
};

export type AppReducerTypes = {
  state: string,
  cities: string[],
  isLoading: boolean,
  search: string,
  hasError: false,
};

export type AppDispatch = ThunkDispatch<AppReducerTypes, unknown, AnyAction>;
