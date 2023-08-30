import { combineReducers } from 'redux';
import AppReducer from './appReducer';

const rootReducer = combineReducers({ app: AppReducer })

export type RootState = ReturnType<typeof AppReducer>;

export default rootReducer;