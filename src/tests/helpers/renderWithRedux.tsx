import React from 'react';
import { Provider } from 'react-redux';
import { Store, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { render } from '@testing-library/react';
import rootReducer, { RootState } from '../../redux/reducers';
import thunk from 'redux-thunk';

const renderWithRedux = (
  component: React.ReactElement,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  }: { initialState?: RootState, store?: Store } = {},
) => ({
  ...render(
    <Provider store={ store }>
      {component}
    </Provider>,
  ),
  store,
});

export default renderWithRedux;
